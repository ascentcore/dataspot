import { JSDOM } from 'jsdom'
import Sharp from 'sharp'
import OSUtils from '@ascentcore/dataspot/utils/osUtils'
import { getInstance } from '../../registry/registry'
import Lab from '../../lab'
import SVGBaseVisualization from './svgbase'

import serializeFunction from '../../utils/serialization-utils'

import { TwoDPointLine, TwoDPointScatter, ThreeDPointScatter } from '../../models/types'
import SVGMultipleVisualization from './svgmultiple'

export default class SVGVisualizationWrapper extends SVGBaseVisualization {
    private root!: Element | null

    constructor(
        private visualization: SVGBaseVisualization,
        private name: string,
        initialData?: TwoDPointScatter[] | TwoDPointLine[]
    ) {
        super(visualization.config, 'wrapper-elem')
        this.setup(initialData)
    }

    get lab(): Lab {
        return getInstance(Lab)
    }

    setup(initialData?: any): void {
        const dom = new JSDOM(`<!DOCTYPE html><div id="wrapper"/>`)
        this.root = dom.window.document.querySelector('#wrapper')
        this.visualization.setContainer(<HTMLElement>this.root)
        this.visualization.setup()

        if (initialData) {
            this.dataUpdate(initialData)
        }

        if (this.lab) {
            const isMultipleViz = this.visualization instanceof SVGMultipleVisualization
            this.lab.store(`${this.name}-setup`, {
                type: 'd3',
                config: this.visualization.config,
                node: this.visualization.getDependency('rootContainer').node().outerHTML,
                prepareDependenciesExpr: isMultipleViz ? '' : serializeFunction(this.visualization.setup, 'setup')
            })
        }
    }

    dataUpdate(
        data: TwoDPointScatter[] | TwoDPointLine[] | ThreeDPointScatter[],
        elemClass = this.visualization.elemClass
    ) {
        // eslint-disable-next-line prettier/prettier
        const dataUpdateExpr = this.visualization.dataUpdate(data, elemClass)

        if (this.lab) {
            this.lab.store(`${this.name}-data`, {
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
                    .toFile(`${OSUtils.getReportFolder()}/${this.name}-output.png`)
            } catch (err) {
                console.log(err)
            }
        }
        return dataUpdateExpr
    }
}
