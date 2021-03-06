import * as d3 from 'd3'
import BaseVisualization from '../basevisualization'

const DEFAULT_CONFIG = {
    width: 400,
    height: 300,
    margin: { top: 20, right: 30, bottom: 30, left: 40 }
}

export default abstract class SVGBaseVisualization extends BaseVisualization {
    constructor(config: any, elemClass: string) {
        super(
            {
                ...DEFAULT_CONFIG,
                ...config
            },
            elemClass
        )

        const palette = d3.scaleOrdinal(d3.schemeAccent)
        Object.assign(this.dependencies, { d3, palette })
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
            Object.assign(this.dependencies, { isRoot: true })
        } else {
            parentContainer = containerRef.getDependency('container')
            rootContainer = containerRef.getDependency('rootContainer')
            Object.assign(this.dependencies, { isRoot: false })
        }

        const container = parentContainer.append('g').attr('class', this.elemClass)

        Object.assign(this.dependencies, { container, rootContainer })
    }

    destroy() {
        const { isRoot, rootContainer } = this.dependencies
        if (isRoot) {
            rootContainer.remove()
        }
    }
}
