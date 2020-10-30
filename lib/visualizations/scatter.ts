import BaseVisualization from './basevis'

export default class Scatter extends BaseVisualization {
    setupGlobals() {
        const { d3 } = this.globals
        const { min, max, width, height } = this.config

        const x = d3
            .scaleLinear()
            .domain([min, max])
            .range([0, width])

        // Add Y axis
        const y = d3
            .scaleLinear()
            .domain([min, max])
            .range([height - 20, 0])

        Object.assign(this.globals, { x, y })
    }

    setup(): void {
        const { d3, svg, x, y } = this.globals
        const { height } = this.config

        svg.append('g')
            .attr('transform', `translate(20,${height - 20})`)
            .call(d3.axisBottom(x))

        svg.append('g')
            .attr('transform', `translate(20,0)`)
            .call(d3.axisLeft(y))

        Object.assign(this.globals, { x, y })
    }

    dataUpdate(data: any): void {
        const { svg, x, y } = this.globals
        svg.selectAll('circle')
            .transition()
            .duration(300)
            .attr('r', '0')

        svg.append('g')
            .selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', (d: any[]) => x(d[0]) || 0)
            .attr('cy', (d: any[]) => y(d[1]) || 0)
            .style('fill', '#69b3a2')
            .transition()
            .duration(300)
            .attr('r', (d: any[]) => d[2])
    }
}
