import * as d3 from 'd3'
import BaseVisualization from '../baseviz'

const DEFAULT_CONFIG = {
    width: 400,
    height: 300,
    margin: { top: 20, right: 30, bottom: 30, left: 40 }
}

export default abstract class SVGBaseVisualization extends BaseVisualization {
    constructor(config: any) {
        super({
            ...DEFAULT_CONFIG,
            ...config
        })

        Object.assign(this.dependencies, { d3 })
    }

    public setContainer(svgRef: HTMLElement) {
        const { width, height } = this.config
        const svg = d3
            .select(svgRef)
            .append('svg')
            .attr('width', width)
            .attr('height', height)

        Object.assign(this.dependencies, { svg })
    }
}
