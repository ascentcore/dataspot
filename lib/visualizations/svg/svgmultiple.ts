import SVGBaseVisualization from './svgbase'
import { TwoDPointLine, TwoDPointScatter, FunctioDefinitionMesh } from '../../models/types'

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
        const { d3 } = this.dependencies

        const palette = d3.scaleOrdinal(d3.schemeAccent)
        Object.assign(this.dependencies, { palette })

        if (this.visualizations) {
            Object.values(this.visualizations).forEach((viz: SVGBaseVisualization) => viz.setup())
        }
    }

    public setContainer(containerRef: HTMLElement) {
        super.setContainer(containerRef)
        Object.values(this.visualizations).forEach((viz: SVGBaseVisualization) => viz.setContainer(containerRef))
    }

    private getDataUpdateFunction(svgElemId: string): (data: any, svgElemId: string) => void | null {
        if (this.visualizations[svgElemId]) {
            return this.visualizations[svgElemId].dataUpdate.bind(this.visualizations[svgElemId])
        }
        return null
    }

    dataUpdate(data: TwoDPointScatter[] | TwoDPointLine[] | FunctioDefinitionMesh, svgElemId: string): void {
        const updateFn = this.getDataUpdateFunction(svgElemId)
        if (updateFn) {
            updateFn(data, svgElemId)
        }
    }
}
