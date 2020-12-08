/* eslint-disable no-await-in-loop */
import { JSDOM } from 'jsdom'
import Sharp from 'sharp'
import { getInstance } from '../../registry/registry'
import Lab from '../../lab'
import getReportFolder from '../../utils/osutils'
import SVGBaseVisualization from './svgbase'

import serializeFunction from '../../utils/serialization-utils'

import { TwoDPointLine, TwoDPointScatter, ThreeDPointScatter } from '../../models/types'
import SVGMultipleVisualization from './svgmultiple'

export default class SVGVisualizationWrapper {
    private root!: Element | null

    constructor(private visualization: SVGBaseVisualization, private name: string) {}

    get lab(): Lab {
        return getInstance(Lab)
    }

    async setup(initialData?: { data: any; elemClass: string }[]): Promise<void> {
        const dom = new JSDOM(`<!DOCTYPE html><div id="wrapper"/>`)
        this.root = dom.window.document.querySelector('#wrapper')
        this.visualization.setContainer(<HTMLElement>this.root)
        this.visualization.setup()

        if (initialData) {
            // eslint-disable-next-line no-restricted-syntax
            for (const elem of initialData) {
                await this.dataUpdate(elem.data, elem.elemClass)
            }
        }

        if (this.lab) {
            const isMultipleViz = this.visualization instanceof SVGMultipleVisualization

            await this.lab.store(`${this.name}-setup`, {
                type: 'd3',
                config: this.visualization.config,
                node: this.visualization.getDependency('rootContainer').node().outerHTML,
                prepareDependenciesExpr: isMultipleViz ? '' : serializeFunction(this.visualization.setup, 'setup')
            })
        }
    }

    async dataUpdate(
        data: TwoDPointScatter[] | TwoDPointLine[] | ThreeDPointScatter[],
        elemClass = this.visualization.elemClass
    ): Promise<void> {
        // eslint-disable-next-line prettier/prettier
        const dataUpdateExpr = this.visualization.dataUpdate(data, elemClass)

        if (this.lab) {
            await this.lab.store(`${this.name}-data`, {
                data,
                elemClass,
                dataUpdateExpr: dataUpdateExpr ? serializeFunction(dataUpdateExpr, 'updateFn') : null
            })
        } else {
            const svgContent = this.visualization.getDependency('rootContainer').node().outerHTML
            const buf = Buffer.from(svgContent)
            try {
                Sharp(buf)
                    // .resize(width, height)
                    .flatten({ background: { r: 255, g: 255, b: 255 } })
                    .png()
                    .toFile(`${getReportFolder()}/${this.name}-output.png`)
            } catch (err) {
                console.log(err)
            }
        }
    }
}
