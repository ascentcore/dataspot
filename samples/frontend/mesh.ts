import MeshPlot from '../../lib/visualizations/three/mesh'
import * as schwefel from '../../lib/dataset/benchmark/schwefel'

export default function plot(container: HTMLElement): void {
    const mesh = new MeshPlot({ height: 1200, width: 2000 })
    mesh.setContainer(container)
    mesh.dataUpdate({
        zFunc: schwefel.default,
        xMin: schwefel.DOMAIN[0],
        xMax: schwefel.DOMAIN[1],
        yMin: schwefel.DOMAIN[0],
        yMax: schwefel.DOMAIN[1]
    })
}
