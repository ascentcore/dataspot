import SVGBaseVisualization from './svgbase'
import { TwoDPointLine, TwoDPointScatter } from '../../models/types'

export default class Axis extends SVGBaseVisualization {
    constructor(config: any, elemClass = 'axis-elem') {
        super(config, elemClass)
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
                .select(`.${this.elemClass}`)
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
                .select(`.${this.elemClass}`)
                .append('g')
                .attr('transform', `translate(${margin.left},0)`)
                .call(d3.axisLeft(y))

            Object.assign(this.dependencies, { y })
        }
    }

    private updateFn(data: TwoDPointLine[] | TwoDPointScatter[], elemClass: string): void {
        const { margin, width, height, domainX, domainY } = this.config
        const { d3, rootContainer } = this.dependencies

        let { x, y } = this.dependencies
        if (!x) {
            const [xMin, xMax] = d3.extent(data, (d: TwoDPointLine) => d.x)
            x = d3
                .scaleLinear()
                .domain([
                    domainX && domainX.min !== undefined ? domainX.min : xMin,
                    domainX && domainX.max !== undefined ? domainX.max : xMax
                ])
                .nice()
                .range([margin.left, width - margin.right])

            rootContainer
                .select(`.${elemClass}`)
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
            const [yMin, yMax] = d3.extent(data, (d: TwoDPointLine) => d.y)
            y = d3
                .scaleLinear()
                .domain([
                    domainY && domainY.min !== undefined ? domainY.min : yMin,
                    domainY && domainY.max !== undefined ? domainY.max : yMax
                ])
                .nice()
                .range([height - margin.bottom, margin.top])

            rootContainer
                .select(`.${elemClass}`)
                .append('g')
                .attr('transform', `translate(${margin.left},0)`)
                .call(d3.axisLeft(y))

            Object.assign(this.dependencies, { y })
        }
    }

    public dataUpdate(data: TwoDPointLine[], elemClass = this.elemClass) {
        this.updateFn(data, elemClass)
        return this.updateFn
    }
}
