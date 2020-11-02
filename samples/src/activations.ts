import { relu, tanh, sigmoid } from '../../dist/functions/activations'
import SVGVisualizationWrapper from '../../dist/visualizations/svg/svgvisualization'
import Scatter from '../../dist/visualizations/svg/scatter'

function getData(activationFn: Function, min = -1, max = 1, step = 0.01): Array<Array<number>> {
    const data: Array<Array<number>> = []
    for (let i = min; i < max; i += step) {
        data.push([i, activationFn(i), 2])
    }

    return data
}

const [min, max, step] = [-10, 10, 0.1]
const vis1 = new SVGVisualizationWrapper(new Scatter(), { min, max }, 'scatter-plot', 300, 300)
const data = getData(sigmoid, min, max, step)
vis1.dataUpdate(data)
