import SVGBaseVisualization from './svgbase'
import { TwoDPointLine, TwoDPointScatter } from '../../models/types'

export default class Axis extends SVGBaseVisualization {
    constructor(config: any, svgElemId = 'axis-elem') {
        super(config, svgElemId)
    }

    public setup() {
        const { margin, width, height, domainX, domainY } = this.config
        const { d3, rootContainer } = this.dependencies
        if (domainX && domainX.min !== undefined && domainX.max !== undefined) {
            const x = d3
                .scaleLinear()
                .domain([domainX.min, domainX.max])
                .nice()
                .range([margin.left, width - margin.right])

            rootContainer
                .select(`#${this.svgElemId}`)
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

        if (domainY && domainY.min !== undefined && domainY.max !== undefined) {
            const y = d3
                .scaleLinear()
                .domain([domainY.min, domainY.max])
                .nice()
                .range([height - margin.bottom, margin.top])

            rootContainer
                .select(`#${this.svgElemId}`)
                .append('g')
                .attr('transform', `translate(${margin.left},0)`)
                .call(d3.axisLeft(y))

            Object.assign(this.dependencies, { y })
        }
    }

    private updateFn(data: TwoDPointLine[] | TwoDPointScatter[], svgElemId: string): void {
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

            rootContainer
                .select(`#${svgElemId}`)
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

            rootContainer
                .select(`#${svgElemId}`)
                .append('g')
                .attr('transform', `translate(${margin.left},0)`)
                .call(d3.axisLeft(y))

            Object.assign(this.dependencies, { y })
        }
    }

    public dataUpdate(data: TwoDPointLine[], svgElemId = this.svgElemId) {
        this.updateFn(data, svgElemId)
        return this.updateFn
    }
}
