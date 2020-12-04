/* eslint-disable no-nested-ternary */
import SVGBaseVisualization from './svgbase'
import { TwoDPointScatter } from '../../models/types'

export default class Scatter extends SVGBaseVisualization {
    constructor(config: any, elemClass = 'scatter-elem') {
        super(config, elemClass)
    }

    public setup() {}

    private updateFn(data: TwoDPointScatter[], elemClass: string): void {
        const { margin, width, height, domainX, domainY } = this.config
        const { d3, rootContainer, palette } = this.dependencies

        let { x, y } = this.dependencies
        if (!x) {
            const [xMin, xMax] = d3.extent(data, (d: TwoDPointScatter) => d.x)
            x = d3
                .scaleLinear()
                .domain([
                    domainX && domainX.min !== undefined ? domainX.min : xMin,
                    domainX && domainX.max !== undefined ? domainX.max : xMax
                ])
                .nice()
                .range([margin.left, width - margin.right])
            Object.assign(this.dependencies, { x })
        }
        if (!y) {
            const [yMin, yMax] = d3.extent(data, (d: TwoDPointScatter) => d.y)
            y = d3
                .scaleLinear()
                .domain([
                    domainY && domainY.min !== undefined ? domainY.min : yMin,
                    domainY && domainY.max !== undefined ? domainY.max : yMax
                ])
                .nice()
                .range([height - margin.bottom, margin.top])
            Object.assign(this.dependencies, { y })
        }

        rootContainer
            .select(`.${elemClass}`)
            .selectAll('circle')
            .data(data)
            .attr('data-id', (d: TwoDPointScatter) => (d.id !== undefined ? d.id : ''))
            .attr('cx', (d: TwoDPointScatter) => x(d.x) || 0)
            .attr('cy', (d: TwoDPointScatter) => y(d.y) || 0)
            .attr('fill', (d: TwoDPointScatter) =>
                d.color !== undefined && d.color !== null
                    ? typeof d.color === 'string'
                        ? d.color
                        : palette(d.color)
                    : 'black'
            )
            .attr('stroke', '#000')
            .attr('r', (d: TwoDPointScatter) => x(d.r) || 2)
            .enter()
            .append('circle')
            .attr('data-id', (d: TwoDPointScatter) => (d.id !== undefined ? d.id : ''))
            .attr('cx', (d: TwoDPointScatter) => x(d.x) || 0)
            .attr('cy', (d: TwoDPointScatter) => y(d.y) || 0)
            .attr('fill', (d: TwoDPointScatter) =>
                d.color !== undefined && d.color !== null
                    ? typeof d.color === 'string'
                        ? d.color
                        : palette(d.color)
                    : 'black'
            )
            .attr('stroke', '#000')
            .attr('r', (d: TwoDPointScatter) => x(d.r) || 2)
    }

    dataUpdate(data: TwoDPointScatter[], elemClass = this.elemClass) {
        this.updateFn(data, elemClass)
        return this.updateFn
    }
}
