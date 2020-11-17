import { JSDOM } from 'jsdom'
import Sharp from 'sharp'
import { getInstance } from '../../registry/registry'
import Lab from '../../lab'
import getReportFolder from '../../utils/osutils'
import SVGBaseVisualization from './svgbase'

import { TwoDPointLine, TwoDPointScatter } from '../../models/types'

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
            this.lab.store(`${this.name}-setup`, {
                config: this.visualization.config,
                node: this.visualization.getDependency('rootContainer').node().outerHTML,
                prepareDependenciesExpr: this.visualization.setup
                    .toString()
                    .replace(/\/\/.*/g, '')
                    .replace(/  +/g, '')
                    .replace(/\n/g, ' ')
                    .replace(/setup\([^)]*\) *{/g, '')
                    .replace(/}$/g, '')
            })
        }
    }

    dataUpdate(data: TwoDPointScatter[] | TwoDPointLine[], svgElemId = this.visualization.svgElemId) {
        // eslint-disable-next-line prettier/prettier
        const dataUpdateExpr = this.visualization.dataUpdate(data, svgElemId)

        if (this.lab) {
            this.lab.store(`${this.name}-data`, {
                data,
                svgElemId,
                dataUpdateExpr: dataUpdateExpr
                    ? dataUpdateExpr
                          .toString()
                          .replace(/\/\/.*/g, '')
                          .replace(/  +/g, '')
                          .replace(/\n/g, ' ')
                          .replace(/updateFn\([^)]*\) *{/g, '')
                          .replace(/}$/g, '')
                    : null
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
        return dataUpdateExpr
    }
}
