/* eslint-disable no-await-in-loop */
import { JSDOM } from 'jsdom'
import Sharp from 'sharp'
import OSUtils from '@ascentcore/dataspot/utils/osUtils'
import { getInstance } from '../../registry/registry'
import Lab from '../../lab'
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

    async setup(initialData: { data: any; elemClass: string }[] = []): Promise<void> {
        const dom = new JSDOM(`<!DOCTYPE html><div id="wrapper"/>`)
        this.root = dom.window.document.querySelector('#wrapper')
        this.visualization.setContainer(<HTMLElement>this.root)
        if (this.visualization instanceof SVGMultipleVisualization) {
            this.visualization.setup(initialData)
        } else {
            this.visualization.setup(
                (initialData.find((elem) => elem.elemClass === this.visualization.elemClass) || {}).data
            )
        }

        if (this.lab) {
            await this.lab.store(`${this.name}-setup`, {
                type: 'd3',
                config: this.visualization.config,
                node: this.visualization.getDependency('rootContainer').node().outerHTML
            })
        }
    }

    async dataUpdate(
        data: TwoDPointScatter[] | TwoDPointLine[] | ThreeDPointScatter[],
        elemClass: string
    ): Promise<void> {
        if (this.lab) {
            await this.lab.store(`${this.name}-data`, {
                data,
                elemClass,
                dataUpdateExpr: serializeFunction(this.visualization.getDataUpdateFn(elemClass), 'updateFn')
            })
        } else {
            // eslint-disable-next-line prettier/prettier
            this.visualization.dataUpdate(data, elemClass)
            const svgContent = this.visualization.getDependency('rootContainer').node().outerHTML
            const buf = Buffer.from(svgContent)
            try {
                Sharp(buf)
                    // .resize(width, height)
                    .flatten({ background: { r: 255, g: 255, b: 255 } })
                    .png()
                    .toFile(`${OSUtils.getReportFolder()}/${this.name}-output.png`)
            } catch (err) {
                console.log(err)
            }
        }
    }
}
