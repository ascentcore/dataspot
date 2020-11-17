import * as THREE from 'three'
import BaseVisualization from '../basevisualization'

const DEFAULT_CONFIG = {
    width: 400,
    height: 300,
    margin: { top: 20, right: 30, bottom: 30, left: 40 },
    segments: 80
}

export default abstract class ThreeBaseVisualization extends BaseVisualization {
    constructor(config: any, svgElemId = 'mesh-elem') {
        super(
            {
                ...DEFAULT_CONFIG,
                ...config
            },
            svgElemId
        )

        Object.assign(this.dependencies, { three: THREE })
    }

    public setContainer(containerRef: HTMLElement) {
        const { width, height } = this.config

        const renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setSize(width, height)
        containerRef.appendChild(renderer.domElement)
        Object.assign(this.dependencies, { renderer, containerRef })
    }
}
