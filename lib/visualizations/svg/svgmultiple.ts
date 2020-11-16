import SVGBaseVisualization from './svgbase'

export default class SVGMultipleVisualization extends SVGBaseVisualization {
    private visualizations: { [name: string]: SVGBaseVisualization } = {}

    constructor(config: any, svgElemId: string, visualizations: SVGBaseVisualization[]) {
        super(config, svgElemId)
        visualizations.forEach((viz) => {
            this.visualizations[viz.svgElemId] = viz
            Object.assign(this.visualizations[viz.svgElemId].config, config, {
                domainX: { min: config.domainX.min || 0, max: config.domainX.max || 10 },
                domainY: { min: config.domainY.min || 0, max: config.domainY.max || 10 }
            })
        })
    }

    setup() {
        Object.values(this.visualizations).forEach((viz: SVGBaseVisualization) => viz.setup())
    }

    public setContainer(containerRef: HTMLElement) {
        super.setContainer(containerRef)
        Object.values(this.visualizations).forEach((viz: SVGBaseVisualization) => viz.setContainer(containerRef))
    }

    dataUpdate(
        data:
            | { x: number; y: number; r?: number; color?: number }[]
            | { x: number; y: number }[]
            | { zFunc: (x: number, y: number) => number; xMin: number; xMax: number; yMin: number; yMax: number },
        svgElemId: string
    ): void {
        if (this.visualizations[svgElemId]) {
            this.visualizations[svgElemId].dataUpdate(data, svgElemId)
        }
    }
}
