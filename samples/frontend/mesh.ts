import Schwefel from '../../lib/datasets/benchmark/schwefel'
import MeshPlot from '../../lib/visualizations/three/mesh'

export default function plot(container: HTMLElement): void {
    const mesh = new MeshPlot({ height: 1200, width: 2000 })
    mesh.setContainer(container)
    mesh.dataUpdate({
        zFunc: Schwefel.calculate,
        xMin: Schwefel.DOMAIN[0],
        xMax: Schwefel.DOMAIN[1],
        yMin: Schwefel.DOMAIN[0],
        yMax: Schwefel.DOMAIN[1]
    })
}
