import { JSDOM } from 'jsdom'
// import Sharp from 'sharp'
import { getInstance } from '../../registry/registry'
import Lab from '../../lab'
// import getReportFolder from '../../osutils'
import ThreeBaseVisualization from './threebase'

export default class ThreeVisualizationWrapper extends ThreeBaseVisualization {
    private container!: Element | null

    constructor(
        private visualization: ThreeBaseVisualization,
        private name: string,
        initialData?: {
            zFunc: (x: number, y: number) => number
            xMin: number
            xMax: number
            yMin: number
            yMax: number
        }
    ) {
        super(visualization.config)
        this.setup(initialData)
    }

    get lab(): Lab {
        return getInstance(Lab)
    }

    setup(initialData?: any): void {
        const dom = new JSDOM(`<!DOCTYPE html><div id="wrapper"/>`)
        this.container = dom.window.document.querySelector('#wrapper')
        global.document = dom.window.document
        // TODO setup globals needed by three js
        // global.window = dom.window
        // global.THREE = THREE
        // global.self = global
        // global.URL = require('url')
        // global.Blob = require('cross-blob')

        // URL.createObjectURL = (blob) => {
        //     return new Promise((resolve) => {
        //         blob.arrayBuffer().then((buffer) => {
        //             const base64 = new Buffer.from(buffer).toString('base64')
        //             const completedURI = `data:image/jpeg;base64,` + base64
        //             resolve(completedURI)
        //         })
        //     })
        // }

        this.visualization.setContainer(<HTMLElement>this.container)
        this.visualization.setup()

        if (initialData) {
            this.dataUpdate(initialData)
        }

        if (this.lab) {
            this.lab.store(`${this.name}-setup`, {
                config: this.visualization.config,
                node: this.visualization.getDependency('renderer').domElement,
                prepareDependenciesExpr: this.visualization.setup.toString(),
                dataUpdateExpr: this.visualization.dataUpdate.toString()
            })
        }
    }

    dataUpdate(data: {
        zFunc: (x: number, y: number) => number
        xMin: number
        xMax: number
        yMin: number
        yMax: number
    }): void {
        this.visualization.dataUpdate(data)
        if (this.lab) {
            this.lab.store(`${this.name}-data`, { data: { ...data, zFunc: data.zFunc.toString() } })
        } else {
            // TODO replace with three js dom element to svg
            // const svgContent = this.visualization.getDependency('svg').node().outerHTML
            // const buf = Buffer.from(svgContent)
            // try {
            //     Sharp(buf)
            //         // .resize(width, height)
            //         .flatten({ background: { r: 255, g: 255, b: 255 } })
            //         .png()
            //         .toFile(`${getReportFolder()}/${this.name}-output.png`)
            // } catch (err) {
            //     console.log(err)
            // }
        }
    }
}
