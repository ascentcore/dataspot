import SVGBaseVisualization from './svgbase'

export default class LinePlot extends SVGBaseVisualization {
    setup() {}

    dataUpdate(data: { x: number; y: number }[]): void {
        const { margin, width, height } = this.config
        const { d3, svg } = this.dependencies

        svg.selectAll('*').remove()

        const x = d3
            .scaleLinear()
            .domain([
                d3.min(data, (d: { x: number; y: number }) => d.x),
                d3.max(data, (d: { x: number; y: number }) => d.x)
            ])
            .nice()
            .range([margin.left, width - margin.right])

        const y = d3
            .scaleLinear()
            .domain([
                d3.min(data, (d: { x: number; y: number }) => d.y),
                d3.max(data, (d: { x: number; y: number }) => d.y)
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

        const line = d3
            .line()
            .x((d: { x: number; y: number }) => x(d.x))
            .y((d: { x: number; y: number }) => y(d.y))

        svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('class', 'plot-path')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 1.5)
            .attr('stroke-linejoin', 'round')
            .attr('stroke-linecap', 'round')
            .attr('d', line)
    }
}
