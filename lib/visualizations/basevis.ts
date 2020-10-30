import * as d3 from 'd3'

export type DOMLikeRef = {
    textContent: string
}

export default abstract class BaseVisualization {
    protected globals: any = {}

    public config: any = {}

    public initialize(svgRef: HTMLElement, width: number, height: number) {
        const margin = { top: 10, right: 30, bottom: 30, left: 60 }

        const svg = d3
            .select(svgRef)
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .attr('transform', `translate(${margin.left},${margin.top})`)

        Object.assign(this.globals, {
            d3,
            svg
        })

        Object.assign(this.config, { width, height })
    }

    public getKey(key: string): any {
        return this.globals[key]
    }

    abstract setupGlobals(): void

    abstract setup(config: any): void

    abstract dataUpdate(data: any): void
}
