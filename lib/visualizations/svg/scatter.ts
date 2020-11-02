import BaseVisualization from './svgbase'
/*
export default class Scatter extends BaseVisualization {
    setup() {
        const { d3 } = this.dependencies
        const { min, max, width, height } = this.config

        const x = d3
            .scaleLinear()
            .domain([min, max])
            .range([20, width])

        // Add Y axis
        const y = d3
            .scaleLinear()
            .domain([min, max])
            .range([height - 20, 0])

        Object.assign(this.dependencies, { x, y })
    }

    setup(): void {
        const { d3, svg, x, y } = this.dependencies
        const { height } = this.config

        svg.append('g')
            .attr('transform', `translate(0,${height - 20})`)
            .call(d3.axisBottom(x))

        svg.append('g')
            .attr('transform', `translate(20,0)`)
            .call(d3.axisLeft(y))
    }

    dataUpdate(data: any): void {
        const { svg, x, y } = this.dependencies
        svg.selectAll('circle').remove()

        svg.append('g')
            .selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', (d: any[]) => {
                return x(d[0]) || 0
            })
            .attr('cy', (d: any[]) => y(d[1]) || 0)
            .style('fill', `rgb(0, 0, 0)`)
            // .transition()
            // .duration(1200)
            .attr('r', (d: any[]) => d[2])
    }
}
*/