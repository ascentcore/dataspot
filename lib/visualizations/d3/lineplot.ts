import SVGBaseVisualization from './svgbase'
import { TwoDPointLine } from '../../models/types'

export default class LinePlot extends SVGBaseVisualization {
    constructor(config: any, elemClass = 'line-elem') {
        super(config, elemClass)
    }

    private updateFn(data: TwoDPointLine[], elemClass: string): void {
        const { margin, width, height, domainX, domainY } = this.config
        const { d3, rootContainer } = this.dependencies
        let { x, y } = this.dependencies
        if (!x || this.config.autoscaleX) {
            const [xMin, xMax] = d3.extent(data, (d: TwoDPointLine) => d.x)
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

        if (!y || this.config.autoscaleY) {
            const [yMin, yMax] = d3.extent(data, (d: TwoDPointLine) => d.y)
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

        const line = d3
            .line()
            .x((d: TwoDPointLine) => x(d.x))
            .y((d: TwoDPointLine) => y(d.y))
        rootContainer.selectAll(`.${elemClass} path`).remove()

        rootContainer
            .select(`.${elemClass}`)
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

    public setup(initialData?: TwoDPointLine[]) {
        if (initialData) {
            this.updateFn(initialData, this.elemClass)
        }
    }

    public getDataUpdateFn() {
        return this.updateFn
    }

    public dataUpdate(data: TwoDPointLine[]) {
        this.updateFn(data, this.elemClass)
    }
}
