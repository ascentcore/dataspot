import { JSDOM } from 'jsdom'
import Sharp from 'sharp'
import BaseVisualization from './svgbase'
import { getInstance } from '../../registry/registry'
import Lab from '../../lab'
import getReportFolder from '../../osutils'

export default class SVGVisualizationWrapper extends BaseVisualization {
    private container!: Element | null

    prepareDependencies(): void {
        const dom = new JSDOM(`<!DOCTYPE html><div id="wrapper"/>`)
        this.container = dom.window.document.querySelector('#wrapper')
    }

    get lab(): Lab {
        return getInstance(Lab)
    }

    constructor(
        private visualization: BaseVisualization,
        config: any,
        private name: string,
        width = 800,
        height = 600
    ) {
        super()
        this.config = { ...config, width, height }
        this.prepareDependencies()
        this.setup()
    }

    setup(): void {
        const { dependencies, config } = this
        Object.assign(this.visualization, { dependencies, config })

        if (this.container !== null) {
            this.visualization.initialize(<HTMLElement>this.container)
            this.visualization.prepareDependencies()
            this.visualization.setup()
        }

        if (this.lab) {
            this.lab.store(`${this.name}-setup`, {
                config: this.visualization.config,
                node: this.visualization.getKey('svg').node().outerHTML,
                prepareDependenciesExpr: this.visualization.prepareDependencies.toString(),
                dataUpdateExpr: this.visualization.dataUpdate.toString()
            })
        }
    }

    dataUpdate(data: any): void {
        this.visualization.dataUpdate(data)
        if (this.lab) {
            this.lab.store(`${this.name}-data`, { data })
        } else {
            const svgContent = this.visualization.getKey('svg').node().outerHTML
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
