import SVGBaseVisualization from './svgbase'
import { TwoDPointLine } from '../../models/types'

export default class LinePlot extends SVGBaseVisualization {
    constructor(config: any, elemId = 'line-elem') {
        super(config, elemId)
    }

    public setup() {}

    private updateFn(data: TwoDPointLine[], elemId: string): void {
        const { margin, width, height, domainX, domainY } = this.config
        const { d3, rootContainer } = this.dependencies

        let { x, y } = this.dependencies
        if (!x) {
            x = d3
                .scaleLinear()
                .domain([
                    domainX && domainX.min !== undefined ? domainX.min : d3.min(data, (d: TwoDPointLine) => d.x),
                    domainX && domainX.max !== undefined ? domainX.max : d3.max(data, (d: TwoDPointLine) => d.x)
                ])
                .nice()
                .range([margin.left, width - margin.right])

            Object.assign(this.dependencies, { x })
        }

        if (!y) {
            y = d3
                .scaleLinear()
                .domain([
                    domainY && domainY.min !== undefined ? domainY.min : d3.min(data, (d: TwoDPointLine) => d.y),
                    domainY && domainY.max !== undefined ? domainY.max : d3.max(data, (d: TwoDPointLine) => d.y)
                ])
                .nice()
                .range([height - margin.bottom, margin.top])

            Object.assign(this.dependencies, { y })
        }

        const line = d3
            .line()
            .x((d: TwoDPointLine) => x(d.x))
            .y((d: TwoDPointLine) => y(d.y))

        rootContainer.selectAll(`#${elemId} path`).remove()

        rootContainer
            .select(`#${elemId}`)
            .append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('class', 'plot-path')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 1.5)
            .attr('stroke-linejoin', 'round')
            .attr('stroke-linecap', 'round')
            .attr('d', line)
    }

    public dataUpdate(data: TwoDPointLine[], elemId = this.elemId) {
        this.updateFn(data, elemId)
        return this.updateFn
    }
}
