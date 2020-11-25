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

    setup() {
        Object.values(this.visualizations).forEach((viz: ThreeBaseVisualization) => viz.setup())
    }

    public setContainer(containerRef: HTMLElement) {
        super.setContainer(containerRef)
        Object.values(this.visualizations).forEach((viz: ThreeBaseVisualization) =>
            viz.setContainer(this as ThreeBaseVisualization)
        )
    }

    dataUpdate(data: ThreeDPointScatter[] | FunctioDefinitionMesh, elemClass: string) {
        if (this.visualizations[elemClass]) {
            const updateFn = this.visualizations[elemClass].dataUpdate
            return updateFn.call(this.visualizations[elemClass], data, elemClass)
        }
        return null
    }

    destroy() {
        Object.values(this.visualizations).forEach((viz: ThreeBaseVisualization) => viz.destroy())
        super.destroy()
    }
}
