import SVGBaseVisualization from './svgbase'
import { TwoDPointLine } from '../../models/types'

export default class LinePlot extends SVGBaseVisualization {
    constructor(config: any, svgElemId = 'line-elem') {
        super(config, svgElemId)
    }

    setup() {
        const { container } = this.dependencies

        if (container.select(`#${this.svgElemId}`).empty()) {
            container
                .append('g')
                .attr('id', this.svgElemId)
                .attr('data-type', 'line-plot')
        }
    }

    dataUpdate(data: TwoDPointLine[], svgElemId = this.svgElemId): void {
        const { margin, width, height, domainX, domainY } = this.config
        const { d3, container } = this.dependencies

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

            container
                .append('g')
                .attr('transform', `translate(0,${height - margin.bottom})`)
                .call(
                    d3
                        .axisBottom(x)
                        .ticks(width / 80)
                        .tickSizeOuter(0)
                )
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

            container
                .append('g')
                .attr('transform', `translate(${margin.left},0)`)
                .call(d3.axisLeft(y))

            Object.assign(this.dependencies, { y })
        }

        const line = d3
            .line()
            .x((d: TwoDPointLine) => x(d.x))
            .y((d: TwoDPointLine) => y(d.y))

        container.selectAll(`#${svgElemId} path`).remove()

        container
            .select(`#${svgElemId}`)
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
}
