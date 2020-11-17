import SVGBaseVisualization from './svgbase'
import { TwoDPointScatter } from '../../models/types'

export default class Scatter extends SVGBaseVisualization {
    constructor(config: any, svgElemId = 'scatter-elem') {
        super(config, svgElemId)
    }

    public setup() {
        const { d3 } = this.dependencies

        const palette = d3.scaleOrdinal(d3.schemeAccent)
        Object.assign(this.dependencies, { palette })
    }

    private updateFn(data: TwoDPointScatter[], svgElemId: string): void {
        const { margin, width, height, domainX, domainY } = this.config
        const { d3, rootContainer, palette } = this.dependencies

        let { x, y } = this.dependencies
        if (!x) {
            x = d3
                .scaleLinear()
                .domain([
                    domainX && domainX.min !== undefined ? domainX.min : d3.min(data, (d: TwoDPointScatter) => d.x),
                    domainX && domainX.max !== undefined ? domainX.max : d3.max(data, (d: TwoDPointScatter) => d.x)
                ])
                .nice()
                .range([margin.left, width - margin.right])
            rootContainer
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
                    domainY && domainY.min !== undefined ? domainY.min : d3.min(data, (d: TwoDPointScatter) => d.y),
                    domainY && domainY.max !== undefined ? domainY.max : d3.max(data, (d: TwoDPointScatter) => d.y)
                ])
                .nice()
                .range([height - margin.bottom, margin.top])
            rootContainer
                .append('g')
                .attr('transform', `translate(${margin.left},0)`)
                .call(d3.axisLeft(y))
        }
        Object.assign(this.dependencies, { y })

        rootContainer
            .select(`#${svgElemId}`)
            .selectAll('circle')
            .data(data)
            .attr('cx', (d: TwoDPointScatter) => x(d.x) || 0)
            .attr('cy', (d: TwoDPointScatter) => y(d.y) || 0)
            .style('fill', (d: TwoDPointScatter) =>
                d.color !== undefined && d.color !== null ? palette(d.color) : 'black'
            )
            .attr('r', (d: TwoDPointScatter) => d.r || 1)
            .enter()
            .append('circle')
            .attr('cx', (d: TwoDPointScatter) => x(d.x) || 0)
            .attr('cy', (d: TwoDPointScatter) => y(d.y) || 0)
            .style('fill', (d: TwoDPointScatter) =>
                d.color !== undefined && d.color !== null ? palette(d.color) : 'black'
            )
            .attr('r', (d: TwoDPointScatter) => d.r || 1)
    }

    dataUpdate(data: TwoDPointScatter[], svgElemId = this.svgElemId) {
        this.updateFn(data, svgElemId)
        return this.updateFn
    }
}
