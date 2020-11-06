import { relu } from '../../lib/functions/activations'
import LinePlot from '../../lib/visualizations/svg/lineplot'

function getData(activationFn: (x: number) => number, min = -1, max = 1, step = 0.01) {
    const data = []
    for (let i = min; i < max; i += step) {
        data.push([i, activationFn(i), 2])
    }

    return data
}

export default function plot(container: HTMLElement): void {
    const plot = new LinePlot({ width: 600, height: 600 })
    plot.setContainer(container)
    plot.setup()
    plot.dataUpdate(
        getData(relu).map((d: number[]) => {
            return { x: d[0], y: d[1] }
        })
    )
}
