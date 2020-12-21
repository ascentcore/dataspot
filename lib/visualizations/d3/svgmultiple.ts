import SVGBaseVisualization from './svgbase'
import { TwoDPointLine, TwoDPointScatter } from '../../models/types'

export default class SVGMultipleVisualization extends SVGBaseVisualization {
    private visualizations: { [name: string]: SVGBaseVisualization } = {}

    constructor(config: any, elemClass: string, visualizations: SVGBaseVisualization[]) {
        super(config, elemClass)
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
            this.visualizations[viz.elemClass] = viz
            Object.assign(viz.config, config, domainConfig)
        })
    }

    private updateFn() {}

    public setContainer(containerRef: HTMLElement) {
        super.setContainer(containerRef)
        Object.values(this.visualizations).forEach((viz: SVGBaseVisualization) =>
            viz.setContainer(this as SVGBaseVisualization)
        )
        this.setup()
    }

    public setup(initialData: { data: any; elemClass: string }[] = []) {
        Object.values(this.visualizations).forEach((viz: SVGBaseVisualization) => {
            viz.setup((initialData.find((elem) => elem.elemClass === viz.elemClass) || {}).data)
        })
    }

    public getDataUpdateFn(elemClass: string) {
        if (this.visualizations[elemClass]) {
            return this.visualizations[elemClass].getDataUpdateFn()
        }
        return this.updateFn
    }

    public dataUpdate(data: TwoDPointScatter[] | TwoDPointLine[], elemClass: string) {
        if (this.visualizations[elemClass]) {
            const updateFn = this.visualizations[elemClass].dataUpdate
            updateFn.call(this.visualizations[elemClass], data, elemClass)
        }
    }

    public destroy() {
        Object.values(this.visualizations).forEach((viz: SVGBaseVisualization) => viz.destroy())
        super.destroy()
    }
}
