import { JSDOM } from 'jsdom'
import BaseVisualization from './basevis'
import { getInstance } from '../registry/registry'
import Lab from '../lab'

export default class VisualizationWrapper extends BaseVisualization {
    
    setupGlobals(): void {}

    private pLab: Lab | undefined

    get lab() {
        if (!this.pLab) {
            this.pLab = getInstance(Lab)
        }

        return this.pLab
    }

    constructor(private visualization: BaseVisualization, width = 800, height = 600) {
        super()
        const dom = new JSDOM(`<!DOCTYPE html><div id="wrapper"/>`)
        const container = dom.window.document.querySelector('#wrapper')
        if (container !== null) {
            visualization.initialize(<HTMLElement>container, width, height)
            visualization.setupGlobals()
        }
    }

    setup(config: any): void {
        this.visualization.setup(config)
        Object.assign(this.visualization.config, config)

        if (this.lab) {
            this.lab.store(`vis-dataupdate`, {
                config: this.visualization.config,
                node: this.visualization.getKey('svg').node().outerHTML,
                globals: this.visualization.setupGlobals.toString(),
                expression: this.visualization.dataUpdate.toString()
            })
        }
    }

    dataUpdate(data: any): void {
        this.visualization.dataUpdate(data)
        if (this.lab) {
            this.lab.store(`vis-data`, data)
        }
    }
}
