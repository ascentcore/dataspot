import * as d3 from 'd3'
import BaseVisualization from '../basevisualization'

const DEFAULT_CONFIG = {
    width: 400,
    height: 300,
    margin: { top: 20, right: 30, bottom: 30, left: 40 }
}

export default abstract class SVGBaseVisualization extends BaseVisualization {
    constructor(config: any, elemId: string) {
        super(
            {
                ...DEFAULT_CONFIG,
                ...config
            },
            elemId
        )

        Object.assign(this.dependencies, { d3 })
    }

    public setContainer(containerRef: HTMLElement | SVGBaseVisualization) {
        const { width, height } = this.config

        let parentContainer: any
        let rootContainer: any

        if (!(containerRef instanceof SVGBaseVisualization)) {
            parentContainer = d3
                .select(containerRef)
                .append('svg')
                .attr('width', width)
                .attr('height', height)
            rootContainer = parentContainer
        } else {
            parentContainer = containerRef.getDependency('container')
            rootContainer = containerRef.getDependency('rootContainer')
        }

        const container = parentContainer.append('g').attr('id', this.elemId)

        Object.assign(this.dependencies, { container, rootContainer })
    }
}
