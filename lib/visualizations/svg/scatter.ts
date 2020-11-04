import SVGBaseVisualization from './svgbase'

export default class Scatter extends SVGBaseVisualization {
    setup() {
        const { d3 } = this.dependencies
        const palette = d3.scaleOrdinal(d3.schemeAccent)
        Object.assign(this.dependencies, { palette })
    }

    dataUpdate(data: any): void {
        const { margin, width, height } = this.config
        const { d3, svg, palette } = this.dependencies

        svg.selectAll('*').remove()

        const x = d3
            .scaleLinear()
            .domain([d3.min(data, (d: any) => d[0]), d3.max(data, (d: any) => d[0])])
            .nice()
            .range([margin.left, width - margin.right])

        const y = d3
            .scaleLinear()
            .domain([d3.min(data, (d: any) => d[1]), d3.max(data, (d: any) => d[1])])
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

        svg.append('g')
            .selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', (d: any[]) => x(d[0]) || 0)
            .attr('cy', (d: any[]) => y(d[1]) || 0)
            .style('fill', (d: any[]) => (d[3] ? palette(d[3]) : `#d76aa3`))
            // .transition()
            // .duration(1200)
            .attr('r', (d: any[]) => d[2] || 1)
    }
}
