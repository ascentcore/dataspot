import ThreeBaseVisualization from './threebase'
import { ThreeDPointScatter, FunctioDefinitionMesh } from '../../models/types'

export default class ThreeMultipleVisualization extends ThreeBaseVisualization {
    private visualizations: { [name: string]: ThreeBaseVisualization } = {}

    constructor(config: any, elemClass: string, visualizations: ThreeBaseVisualization[]) {
        super(config, elemClass)

        visualizations.forEach((viz) => {
            this.visualizations[viz.elemClass] = viz
            Object.assign(viz.config, config)
        })
    }

    private updateFn() {}

    public setContainer(containerRef: HTMLElement) {
        super.setContainer(containerRef)
        Object.values(this.visualizations).forEach((viz: ThreeBaseVisualization) =>
            viz.setContainer(this as ThreeBaseVisualization)
        )
    }

    public setup(initialData: { data: any; elemClass: string }[] = []) {
        Object.values(this.visualizations).forEach((viz: ThreeBaseVisualization) => {
            viz.setup((initialData.find((elem) => elem.elemClass === viz.elemClass) || {}).data)
        })
    }

    public getDataUpdateFn(elemClass: string) {
        if (this.visualizations[elemClass]) {
            return this.visualizations[elemClass].getDataUpdateFn()
        }
        return this.updateFn
    }

    public dataUpdate(data: ThreeDPointScatter[] | FunctioDefinitionMesh, elemClass: string) {
        if (this.visualizations[elemClass]) {
            const updateFn = this.visualizations[elemClass].dataUpdate
            updateFn.call(this.visualizations[elemClass], data, elemClass)
        }
    }

    public destroy() {
        Object.values(this.visualizations).forEach((viz: ThreeBaseVisualization) => viz.destroy())
        super.destroy()
    }
}
