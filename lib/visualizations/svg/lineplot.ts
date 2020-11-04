import SVGBaseVisualization from './svgbase'

export default class LinePlot extends SVGBaseVisualization {
    setup() {}

    dataUpdate(data: any): void {
        const { margin, width, height, colorFn } = this.config
        const { d3, svg } = this.dependencies

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

        const line = d3
            .line()
            .x((d: any) => x(d[0]))
            .y((d: any) => y(d[1]))

        svg.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('class', 'plot-path')
            .attr('stroke', colorFn ? colorFn(data) : 'steelblue')
            .attr('stroke-width', 1.5)
            .attr('stroke-linejoin', 'round')
            .attr('stroke-linecap', 'round')
            .attr('d', line)
    }
}
