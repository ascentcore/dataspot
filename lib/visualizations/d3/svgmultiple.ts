import SVGBaseVisualization from './svgbase'
import { TwoDPointLine, TwoDPointScatter } from '../../models/types'

export default class SVGMultipleVisualization extends SVGBaseVisualization {
    private visualizations: { [name: string]: SVGBaseVisualization } = {}

    constructor(config: any, elemId: string, visualizations: SVGBaseVisualization[]) {
        super(config, elemId)
        const domainConfig = [...visualizations, this].reduce((acc, curr) => {
            return Object.assign(acc, {
                domainX: {
                    min: curr.config.domainX ? curr.config.domainX.min : undefined,
                    max: curr.config.domainX ? curr.config.domainX.max : undefined
                },
                domainY: {
                    min: curr.config.domainY ? curr.config.domainY.min : undefined,
                    max: curr.config.domainY ? curr.config.domainY.max : undefined
                }
            })
        }, {})

        visualizations.forEach((viz) => {
            this.visualizations[viz.elemId] = viz
            Object.assign(viz.config, config, domainConfig)
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
        Object.values(this.visualizations).forEach((viz: SVGBaseVisualization) =>
            viz.setContainer(this as SVGBaseVisualization)
        )
    }

    dataUpdate(data: TwoDPointScatter[] | TwoDPointLine[], elemId: string) {
        if (this.visualizations[elemId]) {
            const updateFn = this.visualizations[elemId].dataUpdate
            return updateFn.call(this.visualizations[elemId], data, elemId)
        }
        return null
    }
}
