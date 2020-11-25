/* eslint-disable no-param-reassign */
import * as THREE from 'three'
import ThreeBaseVisualization from './threebase'
import { ThreeDPointScatter } from '../../models/types'

export default class Sphere extends ThreeBaseVisualization {
    setup() {}

    dataUpdate(data: ThreeDPointScatter[]) {
        const { scene } = this.dependencies
        let { spheres } = this.dependencies
        if (!spheres) {
            spheres = []
            data.forEach((point: ThreeDPointScatter) => {
                const geometry = new THREE.SphereGeometry(point.r || 1, 16, 16)
                const material = new THREE.MeshLambertMaterial({ color: 0x000000 })
                const mesh = new THREE.Mesh(geometry, material)
                mesh.position.set(point.x, point.y, point.z)
                spheres.push(mesh)
                scene.add(mesh)
            })
            Object.assign(this.dependencies, { spheres })
        } else {
            spheres.forEach((mesh: THREE.Mesh, index: number) => {
                mesh.position.x = data[index].x
                mesh.position.y = data[index].y
                mesh.position.z = data[index].z
            })
        }
        return null
    }

    destroy() {
        const { scene, spheres } = this.dependencies
        spheres.forEach((mesh: any) => {
            mesh.material.dispose()
            mesh.geometry.dispose()
            scene.remove(mesh)
        })
    }
}
