import SVGBaseVisualization from './svgbase'
import { TwoDPointLine, TwoDPointScatter } from '../../models/types'

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
        Object.values(this.visualizations).forEach((viz: SVGBaseVisualization) => viz.setContainer(this))
    }

    dataUpdate(data: TwoDPointScatter[] | TwoDPointLine[], svgElemId: string) {
        if (this.visualizations[svgElemId]) {
            const updateFn = this.visualizations[svgElemId].dataUpdate
            return updateFn.call(this.visualizations[svgElemId], data, svgElemId)
        }
        return null
    }
}
