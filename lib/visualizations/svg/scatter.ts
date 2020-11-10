import SVGBaseVisualization from './svgbase'

export default class Scatter extends SVGBaseVisualization {
    setup() {
        const { d3 } = this.dependencies
        const palette = d3.scaleOrdinal(d3.schemeAccent)
        Object.assign(this.dependencies, { palette })
        if (this.dependencies.x) {
            this.dependencies.x = null
        }
        if (this.dependencies.y) {
            this.dependencies.y = null
        }
    }

    dataUpdate(data: { x: number; y: number; r?: number; color?: number }[]): void {
        const { margin, width, height } = this.config
        const { d3, svg, palette } = this.dependencies

        let { x, y } = this.dependencies

        if (!x && !y) {
            svg.selectAll('*').remove()
            x = d3
                .scaleLinear()
                .domain([
                    d3.min(data, (d: { x: number; y: number; r?: number; color?: number }) => d.x),
                    d3.max(data, (d: { x: number; y: number; r?: number; color?: number }) => d.x)
                ])
                .nice()
                .range([margin.left, width - margin.right])
            y = d3
                .scaleLinear()
                .domain([
                    d3.min(data, (d: { x: number; y: number; r?: number; color?: number }) => d.y),
                    d3.max(data, (d: { x: number; y: number; r?: number; color?: number }) => d.y)
                ])
                .nice()
                .range([height - margin.bottom, margin.top])
            svg.append('g')
                .attr('transform', `translate(${margin.left},0)`)
                .call(d3.axisLeft(y))
            svg.append('g')
                .attr('transform', `translate(0,${height - margin.bottom})`)
                .call(
                    d3
                        .axisBottom(x)
                        .ticks(width / 80)
                        .tickSizeOuter(0)
                )
            Object.assign(this.dependencies, { x, y })

            svg.append('g')
                .attr('id', 'point-group')
                .selectAll('circle')
                .data(data)
                .enter()
                .append('circle')
                .attr('cx', (d: { x: number; y: number; r?: number; color?: number }) => x(d.x) || 0)
                .attr('cy', (d: { x: number; y: number; r?: number; color?: number }) => y(d.y) || 0)
                .style('fill', 'black')
                .attr('r', (d: { x: number; y: number; r?: number; color?: number }) => d.r || 1)
        } else {
            svg.select('#point-group')
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
}
