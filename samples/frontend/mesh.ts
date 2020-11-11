import MeshPlot from '../../lib/visualizations/three/mesh'

export default function plot(container: HTMLElement): void {
    const mesh = new MeshPlot({ height: 1000, width: 1000 })
    mesh.setContainer(container)
    mesh.dataUpdate({
        zFunc: (x: number, y: number) =>
            (20 + x * x + y * y - 10 * (Math.cos(2 * Math.PI * x) + Math.cos(2 * Math.PI * y))) / 20,
        xMin: -5,
        xMax: 5,
        yMin: -5,
        yMax: 5
    })
}
