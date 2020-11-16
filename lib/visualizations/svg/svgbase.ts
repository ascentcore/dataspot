import * as d3 from 'd3'
import BaseVisualization from '../basevisualization'

const DEFAULT_CONFIG = {
    width: 400,
    height: 300,
    margin: { top: 20, right: 30, bottom: 30, left: 40 }
}

export default abstract class SVGBaseVisualization extends BaseVisualization {
    constructor(config: any, svgElemId: string) {
        super(
            {
                ...DEFAULT_CONFIG,
                ...config
            },
            svgElemId
        )

        Object.assign(this.dependencies, { d3 })
    }

    public setContainer(containerRef: HTMLElement) {
        const { width, height } = this.config

        if (
            d3
                .select(containerRef)
                .select('svg')
                .empty()
        ) {
            d3.select(containerRef).append('svg')
        }

        const svg = d3
            .select(containerRef)
            .select('svg')
            .attr('width', width)
            .attr('height', height)

        Object.assign(this.dependencies, { svg })
    }
}
