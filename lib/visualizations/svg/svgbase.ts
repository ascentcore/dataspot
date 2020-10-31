import * as d3 from 'd3'

export default abstract class BaseVisualization {
    protected dependencies: any = {}

    public config: any = {}

    public initialize(svgRef: HTMLElement) {
        const { width, height } = this.config
        const svg = d3
            .select(svgRef)
            .append('svg')
            .attr('width', width)
            .attr('height', height)

        Object.assign(this.dependencies, {
            d3,
            svg
        })
    }

    public getKey(key: string): any {
        return this.dependencies[key]
    }

    abstract prepareDependencies(): void

    abstract setup(): void

    abstract dataUpdate(data: any): void
}
