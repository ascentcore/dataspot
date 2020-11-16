import SVGBaseVisualization from './svgbase'

export default class Scatter extends SVGBaseVisualization {
    constructor(config: any, svgElemId = 'scatter-elem') {
        super(config, svgElemId)
    }

    setup() {
        const { d3, svg } = this.dependencies

        const palette = d3.scaleOrdinal(d3.schemeAccent)
        Object.assign(this.dependencies, { palette })

        if (svg.select(`#${this.svgElemId}`).empty()) {
            svg.append('g')
                .attr('id', this.svgElemId)
                .attr('data-type', 'scatter-plot')
        }
    }

    dataUpdate(data: { x: number; y: number; r?: number; color?: number }[], svgElemId = this.svgElemId): void {
        const { margin, width, height, domainX, domainY } = this.config
        const { d3, svg, palette } = this.dependencies

        let { x, y } = this.dependencies
        if (!x) {
            x = d3
                .scaleLinear()
                .domain([
                    domainX && domainX.min !== undefined
                        ? domainX.min
                        : d3.min(data, (d: { x: number; y: number; r?: number; color?: number }) => d.x),
                    domainX && domainX.max !== undefined
                        ? domainX.max
                        : d3.max(data, (d: { x: number; y: number; r?: number; color?: number }) => d.x)
                ])
                .nice()
                .range([margin.left, width - margin.right])
            svg.append('g')
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
                    domainY && domainY.min !== undefined
                        ? domainY.min
                        : d3.min(data, (d: { x: number; y: number; r?: number; color?: number }) => d.y),
                    domainY && domainY.max !== undefined
                        ? domainY.max
                        : d3.max(data, (d: { x: number; y: number; r?: number; color?: number }) => d.y)
                ])
                .nice()
                .range([height - margin.bottom, margin.top])
            svg.append('g')
                .attr('transform', `translate(${margin.left},0)`)
                .call(d3.axisLeft(y))
        }
        Object.assign(this.dependencies, { y })

        svg.select(`#${svgElemId}`)
            .selectAll('circle')
            .data(data)
            .attr('cx', (d: { x: number; y: number; r?: number; color?: number }) => x(d.x) || 0)
            .attr('cy', (d: { x: number; y: number; r?: number; color?: number }) => y(d.y) || 0)
            .style('fill', (d: { x: number; y: number; r?: number; color?: number }) =>
                d.color !== undefined && d.color !== null ? palette(d.color) : 'black'
            )
            .attr('r', (d: { x: number; y: number; r?: number; color?: number }) => d.r || 1)
            .enter()
            .append('circle')
            .attr('cx', (d: { x: number; y: number; r?: number; color?: number }) => x(d.x) || 0)
            .attr('cy', (d: { x: number; y: number; r?: number; color?: number }) => y(d.y) || 0)
            .style('fill', (d: { x: number; y: number; r?: number; color?: number }) =>
                d.color !== undefined && d.color !== null ? palette(d.color) : 'black'
            )
            .attr('r', (d: { x: number; y: number; r?: number; color?: number }) => d.r || 1)
    }
}
