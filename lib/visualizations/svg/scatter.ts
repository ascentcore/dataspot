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
            Object.assign(this.dependencies, { y })
        }

        rootContainer
            .select(`#${svgElemId}`)
            .selectAll('circle')
            .data(data)
            .attr('data-id', (d: TwoDPointScatter) => d.id || '')
            .attr('cx', (d: TwoDPointScatter) => x(d.x) || 0)
            .attr('cy', (d: TwoDPointScatter) => y(d.y) || 0)
            .attr('fill', (d: TwoDPointScatter) =>
                d.color !== undefined && d.color !== null ? palette(d.color) : 'black'
            )
            .attr('r', (d: TwoDPointScatter) => d.r || 1)
            .enter()
            .append('circle')
            .attr('data-id', (d: TwoDPointScatter) => d.id || '')
            .attr('cx', (d: TwoDPointScatter) => x(d.x) || 0)
            .attr('cy', (d: TwoDPointScatter) => y(d.y) || 0)
            .attr('fill', (d: TwoDPointScatter) =>
                d.color !== undefined && d.color !== null ? palette(d.color) : 'black'
            )
            .attr('r', (d: TwoDPointScatter) => d.r || 1)
    }

    dataUpdate(data: TwoDPointScatter[], svgElemId = this.svgElemId) {
        this.updateFn(data, svgElemId)
        return this.updateFn
    }
}
