import ThreeBaseVisualization from './threebase'

export default class MeshPlot extends ThreeBaseVisualization {
    setup() {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dataUpdate(data: {
        zFunc: (x: number, y: number) => number
        xMin: number
        xMax: number
        yMin: number
        yMax: number
    }): void {
        const { THREE, renderer } = this.dependencies
        const { segments, width, height } = this.config

        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0xffffff)

        const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100000)
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

        const graphGeometry = new THREE.ParametricGeometry(meshFunction, segments, segments)
        graphGeometry.computeBoundingBox()

        const zMin = graphGeometry.boundingBox!.min.z
        const zMax = graphGeometry.boundingBox!.max.z
        const zRange = zMax - zMin

        // eslint-disable-next-line one-var
        let color, point, face: any, numberOfSides, vertexIndex
        const faceIndices = ['a', 'b', 'c', 'd']

        for (let i = 0; i < graphGeometry.vertices.length; i++) {
            point = graphGeometry.vertices[i]
            color = new THREE.Color(0x0000ff)
            color.setHSL((0.7 * (zMax - point.z)) / zRange, 1, 0.5)
            graphGeometry.colors[i] = color
        }

        for (let i = 0; i < graphGeometry.faces.length; i++) {
            face = graphGeometry.faces[i]
            numberOfSides = face instanceof THREE.Face3 ? 3 : 4
            for (let j = 0; j < numberOfSides; j++) {
                vertexIndex = face[faceIndices[j]]
                face.vertexColors[j] = graphGeometry.colors[vertexIndex]
            }
        }

        new THREE.TextureLoader().load('texture.png', (wireTexture: any) => {
            // eslint-disable-next-line no-multi-assign, no-param-reassign
            wireTexture.wrapS = wireTexture.wrapT = THREE.RepeatWrapping
            wireTexture.repeat.set(40, 40)

            const material = new THREE.MeshBasicMaterial({
                map: wireTexture,
                vertexColors: true,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.4,
                color: 0xffffff
            })
            material.map.repeat.set(segments, segments)

            const graphMesh = new THREE.Mesh(graphGeometry, material)
            scene.add(graphMesh)

            const size = new THREE.Vector3()
            graphGeometry.boundingBox!.getSize(size)
            const maxDim = Math.max(size.x, size.y, size.z)

            const fov = camera.fov * (Math.PI / 180)
            let cameraZ = Math.abs((maxDim / 4) * Math.tan(fov * 2))
            cameraZ *= 1.3

            // eslint-disable-next-line no-param-reassign
            camera.position.z = cameraZ

            // add axes
            const axesHelper = new THREE.AxesHelper(maxDim)

            const colors = (axesHelper as any).geometry.attributes.color
            colors.setXYZ(0, 0, 0, 0)
            colors.setXYZ(1, 0, 0, 0)
            colors.setXYZ(2, 0, 0, 0)
            colors.setXYZ(3, 0, 0, 0)
            colors.setXYZ(4, 0, 0, 0)
            colors.setXYZ(5, 0, 0, 0)

            scene.add(axesHelper)

            renderer.render(scene, camera)
        })
    }
}
