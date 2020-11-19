import SVGBaseVisualization from './svgbase'

export type ScatterType = {
    id?: number
    x?: number
    y?: number
    r?: number
    color?: number
}

export default class Scatter extends SVGBaseVisualization {
    setup() {
        const { d3 } = this.dependencies
        const palette = d3.scaleOrdinal(d3.schemeAccent)
        Object.assign(this.dependencies, { palette })
    }

    dataUpdate(data: ScatterType[]): void {
        const { margin, width, height } = this.config
        const { d3, svg, palette } = this.dependencies

        let { x, y } = this.dependencies
        if (!x && !y) {
            svg.selectAll('*').remove()
            x = d3
                .scaleLinear()
                .domain([d3.min(data, (d: ScatterType) => d.x), d3.max(data, (d: ScatterType) => d.x)])
                .nice()
                .range([margin.left, width - margin.right])
            y = d3
                .scaleLinear()
                .domain([d3.min(data, (d: ScatterType) => d.y), d3.max(data, (d: ScatterType) => d.y)])
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
                .attr('data-id', (d: ScatterType) => d.id || '')
                .attr('cx', (d: ScatterType) => x(d.x) || 0)
                .attr('cy', (d: ScatterType) => y(d.y) || 0)
                .attr('fill', (d: ScatterType) => (d.color ? palette(d.color) : 'steelblue'))
                .attr('r', (d: ScatterType) => d.r || 1)
        } else {
            svg.select('#point-group')
                .selectAll('circle')
                .data(data)
                .attr('cx', (d: ScatterType) => x(d.x) || 0)
                .attr('cy', (d: ScatterType) => y(d.y) || 0)
                .attr('fill', (d: ScatterType) => (d.color ? palette(d.color) : 'steelblue'))
                .attr('r', (d: ScatterType) => d.r || 1)
                .attr('data-id', (d: ScatterType) => d.id || '')
                .enter()
                .append('circle')
                .attr('cx', (d: ScatterType) => x(d.x) || 0)
                .attr('cy', (d: ScatterType) => y(d.y) || 0)
                .attr('fill', (d: ScatterType) => (d.color ? palette(d.color) : 'steelblue'))
                .attr('data-id', (d: ScatterType) => d.id || '')
                .attr('r', (d: ScatterType) => d.r || 1)
        }
    }
}
