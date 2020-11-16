import SVGBaseVisualization from './svgbase'

export default class LinePlot extends SVGBaseVisualization {
    setup() {
        const { d3, svg } = this.dependencies
        const { margin, width, height, domainX, domainY } = this.config

        let { x, y } = this.dependencies

        if (domainX && domainX.min !== undefined && domainX.max !== undefined) {
            x = d3
                .scaleLinear()
                .domain([domainX.min, domainX.max])
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
        } else {
            x = null
        }

        if (domainY && domainY.min !== undefined && domainY.max !== undefined) {
            y = d3
                .scaleLinear()
                .domain([domainY.min, domainY.max])
                .nice()
                .range([height - margin.bottom, margin.top])

            svg.append('g')
                .attr('transform', `translate(${margin.left},0)`)
                .call(d3.axisLeft(y))
        } else {
            y = null
        }

        Object.assign(this.dependencies, { x, y })

        if (svg.select('#line-group').empty()) {
            svg.append('g').attr('id', 'line-group')
        }
    }

    dataUpdate(data: { x: number; y: number }[]): void {
        const { margin, width, height, domainX, domainY } = this.config
        const { d3, svg } = this.dependencies

        let { x, y } = this.dependencies
        if (!x) {
            x = d3
                .scaleLinear()
                .domain([
                    domainX && domainX.min !== undefined
                        ? domainX.min
                        : d3.min(data, (d: { x: number; y: number }) => d.x),
                    domainX && domainX.max !== undefined
                        ? domainX.max
                        : d3.max(data, (d: { x: number; y: number }) => d.x)
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
                        : d3.min(data, (d: { x: number; y: number }) => d.y),
                    domainY && domainY.max !== undefined
                        ? domainY.max
                        : d3.max(data, (d: { x: number; y: number }) => d.y)
                ])
                .nice()
                .range([height - margin.bottom, margin.top])

            svg.append('g')
                .attr('transform', `translate(${margin.left},0)`)
                .call(d3.axisLeft(y))

            Object.assign(this.dependencies, { y })
        }

        const line = d3
            .line()
            .x((d: { x: number; y: number }) => x(d.x))
            .y((d: { x: number; y: number }) => y(d.y))

        svg.selectAll('#line-group path').remove()
        svg.select('#line-group')
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
}
