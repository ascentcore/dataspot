import { JSDOM } from 'jsdom'
import Sharp from 'sharp'
import { getInstance } from '../../registry/registry'
import Lab from '../../lab'
import getReportFolder from '../../utils/osutils'
import SVGBaseVisualization from './svgbase'
import LinePlot from './lineplot'
import Scatter from './scatter'

export default class SVGVisualizationWrapper extends SVGBaseVisualization {
    private container!: Element | null

    constructor(
        private visualization: SVGBaseVisualization,
        private name: string,
        initialData?: { x: number; y: number; r?: number; color?: number }[] | { x: number; y: number }[]
    ) {
        super(visualization.config, 'wrapper-elem')
        this.setup(initialData)
    }

    get lab(): Lab {
        return getInstance(Lab)
    }

    setup(initialData?: any): void {
        const dom = new JSDOM(`<!DOCTYPE html><div id="wrapper"/>`)
        this.container = dom.window.document.querySelector('#wrapper')
        this.visualization.setContainer(<HTMLElement>this.container)
        this.visualization.setup()

        if (initialData) {
            this.dataUpdate(initialData)
        }

        if (this.lab) {
            this.lab.store(`${this.name}-setup`, {
                config: this.visualization.config,
                node: this.visualization.getDependency('svg').node().outerHTML,
                prepareDependenciesExpr: this.visualization.setup.toString(),
                dataUpdateExpr: this.visualization.dataUpdate.toString(),
                linePlotDataUpdateExpr: LinePlot.prototype.dataUpdate.toString(),
                scatterPlotDataUpdateExpr: Scatter.prototype.dataUpdate.toString()
            })
        }
    }

    dataUpdate(
        data: { x: number; y: number; r?: number; color?: number }[] | { x: number; y: number }[],
        svgElemId = this.visualization.svgElemId
    ): void {
        this.visualization.dataUpdate(data, svgElemId)
        if (this.lab) {
            this.lab.store(`${this.name}-data`, { data, svgElemId })
        } else {
            const svgContent = this.visualization.getDependency('svg').node().outerHTML
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
