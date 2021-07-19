/* eslint-disable no-nested-ternary */
import SVGBaseVisualization from './svgbase'
import { TwoDPointScatter } from '../../models/types'

export default class Scatter extends SVGBaseVisualization {
    constructor(config: any, elemClass = 'scatter-elem') {
        super(config, elemClass)
    }

    private updateFn(data: TwoDPointScatter[], elemClass: string): void {
        const { margin, width, height, domainX, domainY, stroke } = this.config
        const { d3, rootContainer, palette } = this.dependencies

        let { x, y, rx } = this.dependencies
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
        if (!rx) {
            const [xMin, xMax] = d3.extent(data, (d: TwoDPointScatter) => d.x)
            rx = d3
                .scaleLinear()
                .domain([
                    0,
                    (domainX && domainX.max !== undefined ? domainX.max : xMax) -
                        (domainX && domainX.min !== undefined ? domainX.min : xMin)
                ])
                .nice()
                .range([0, width - margin.left - margin.right])
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
            .join('circle')
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
            .attr('stroke', (d: TwoDPointScatter) => (!d.stroke ? 'undefined' : '#000'))
            .attr('r', (d: TwoDPointScatter) => d.fixedRadius || rx(d.r) || 1)
        // .enter()
        // .append('circle')
        // .attr('data-id', (d: TwoDPointScatter) => (d.id !== undefined ? d.id : ''))
        // .attr('cx', (d: TwoDPointScatter) => x(d.x) || 0)
        // .attr('cy', (d: TwoDPointScatter) => y(d.y) || 0)
        // .attr('fill', (d: TwoDPointScatter) =>
        //     d.color !== undefined && d.color !== null
        //         ? typeof d.color === 'string'
        //             ? d.color
        //             : palette(d.color)
        //         : 'black'
        // )
        // .attr('stroke', (d: TwoDPointScatter) => d.stroke || '#000')
        // .attr('r', (d: TwoDPointScatter) => d.fixedRadius || rx(d.r) || 1)
    }

    public setup(initialData?: TwoDPointScatter[]) {
        if (initialData) {
            this.updateFn(initialData, this.elemClass)
        }
    }

    public getDataUpdateFn() {
        return this.updateFn
    }

    dataUpdate(data: TwoDPointScatter[]) {
        this.updateFn(data, this.elemClass)
    }
}
