import * as THREE from 'three'
import ThreeBaseVisualization from './threebase'
import { FunctioDefinitionMesh } from '../../models/types'

const OrbitControls = require('three-orbit-controls')(THREE)

export default class MeshPlot extends ThreeBaseVisualization {
    setup() {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dataUpdate(data: FunctioDefinitionMesh) {
        const { three, renderer, scene } = this.dependencies
        const { segments, width, height } = this.config

        let frameId: number
        scene.background = new three.Color(0xffffff)

        const camera = new three.PerspectiveCamera(50, width / height, 0.1, 100000)
        camera.position.set(0, 0, 750)
        scene.add(camera)

        const meshFunction = (x: number, y: number, target: THREE.Vector3) => {
            // eslint-disable-next-line no-param-reassign
            x = (data.xMax - data.xMin) * x + data.xMin
            // eslint-disable-next-line no-param-reassign
            y = (data.yMax - data.yMin) * y + data.yMin
            const z = data.zFunc(x, y)
            target.set(x, y, z)
        }

        const controls = new OrbitControls(camera, renderer.domElement)

        const graphGeometry = new three.ParametricGeometry(meshFunction, segments, segments)
        graphGeometry.computeBoundingBox()

        const zMin = graphGeometry.boundingBox!.min.z
        const zMax = graphGeometry.boundingBox!.max.z
        const zRange = zMax - zMin

        // eslint-disable-next-line one-var
        let color, point, face: any, numberOfSides, vertexIndex
        const faceIndices = ['a', 'b', 'c', 'd']

        for (let i = 0; i < graphGeometry.vertices.length; i++) {
            point = graphGeometry.vertices[i]
            color = new three.Color(0x0000ff)
            color.setHSL((0.7 * (zMax - point.z)) / zRange, 1, 0.5)
            graphGeometry.colors[i] = color
        }

        for (let i = 0; i < graphGeometry.faces.length; i++) {
            face = graphGeometry.faces[i]
            numberOfSides = face instanceof three.Face3 ? 3 : 4
            for (let j = 0; j < numberOfSides; j++) {
                vertexIndex = face[faceIndices[j]]
                face.vertexColors[j] = graphGeometry.colors[vertexIndex]
            }
        }

        new three.TextureLoader().load('texture.png', (wireTexture: any) => {
            // eslint-disable-next-line no-multi-assign, no-param-reassign
            wireTexture.wrapS = wireTexture.wrapT = three.RepeatWrapping
            wireTexture.repeat.set(40, 40)

            const material = new three.MeshBasicMaterial({
                map: wireTexture,
                vertexColors: true,
                side: three.DoubleSide,
                transparent: true,
                opacity: 0.4,
                color: 0xffffff
            })
            material.map.repeat.set(segments, segments)

            const graphMesh = new three.Mesh(graphGeometry, material)
            scene.add(graphMesh)

            const size = new three.Vector3()
            graphGeometry.boundingBox!.getSize(size)
            const maxDim = Math.max(size.x, size.y, size.z)

            const fov = camera.fov * (Math.PI / 180)
            let cameraZ = Math.abs((maxDim / 4) * Math.tan(fov * 2))
            cameraZ *= 1.3

            // eslint-disable-next-line no-param-reassign
            camera.position.z = cameraZ

            // add axes
            const axesHelper = new three.AxesHelper(maxDim)

            const colors = (axesHelper as any).geometry.attributes.color
            colors.setXYZ(0, 0, 0, 0)
            colors.setXYZ(1, 0, 0, 0)
            colors.setXYZ(2, 0, 0, 0)
            colors.setXYZ(3, 0, 0, 0)
            colors.setXYZ(4, 0, 0, 0)
            colors.setXYZ(5, 0, 0, 0)

            scene.add(axesHelper)

            const animate = () => {
                renderer.render(scene, camera)

                frameId = window.requestAnimationFrame(animate)
            }

            const start = () => {
                if (!frameId) {
                    frameId = requestAnimationFrame(animate)
                }
            }

            start()
            controls.update()
            Object.assign(this.dependencies, { graphMesh, scene, camera, axesHelper })
        })

        return null
    }

    destroy() {
        const { graphMesh, scene, renderer, camera, axesHelper, containerRef } = this.dependencies
        graphMesh.material.dispose()
        graphMesh.geometry.dispose()
        scene.remove(graphMesh)
        scene.remove(camera)
        scene.remove(axesHelper)
        renderer.renderLists.dispose()
        containerRef.removeChild(renderer.domElement)
    }
}
