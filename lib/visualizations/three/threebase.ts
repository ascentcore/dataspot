import * as THREE from 'three'
import BaseVisualization from '../basevisualization'

const DEFAULT_CONFIG = {
    width: 400,
    height: 300,
    margin: { top: 20, right: 30, bottom: 30, left: 40 },
    segments: 80
}

export default abstract class ThreeBaseVisualization extends BaseVisualization {
    constructor(config: any, elemClass = 'mesh-elem') {
        super(
            {
                ...DEFAULT_CONFIG,
                ...config
            },
            elemClass
        )

        Object.assign(this.dependencies, { three: THREE })
    }

    public setContainer(containerRef: HTMLElement | ThreeBaseVisualization) {
        const { width, height } = this.config
        const { three } = this.dependencies

        if (containerRef instanceof HTMLElement) {
            const renderer = new THREE.WebGLRenderer({ antialias: true })
            renderer.setSize(width, height)
            containerRef.appendChild(renderer.domElement)
            const scene = new three.Scene()
            Object.assign(this.dependencies, { renderer, containerRef, scene })
        } else {
            Object.assign(this.dependencies, {
                renderer: containerRef.getDependency('renderer'),
                containerRef: containerRef.getDependency('containerRef'),
                scene: containerRef.getDependency('scene')
            })
        }
    }
}
