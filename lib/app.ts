// import { sigmoid, relu } from './functions/activations'
// import Lab from './lab'
// import LinePlot from './visualizations/svg/lineplot'
// import SVGVisualizationWrapper from './visualizations/svg/svgvisualizationwrapper'

// function getData(activationFn: Function, min = -1, max = 1, step = 0.01): Array<Array<number>> {
//     const data: Array<Array<number>> = []
//     for (let i = min; i < max; i += step) {
//         data.push([i, activationFn(i), 2])
//     }

//     return data
// }

// const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
// ;(async () => {
//     const lab: Lab = new Lab('research')
//     await lab.connected
//     const [min, max, step] = [-15, 10, 0.1]
//     const data1 = getData(sigmoid, min, max, step)
//     const vis1 = new SVGVisualizationWrapper(new LinePlot({ min, max }), 'sigmoid-plot', data1)
//     const data2 = getData(relu, -1, 1, 0.1)
//     await snooze(1000)
//     vis1.dataUpdate(data2)
//     await snooze(400)
// })()

import { DOMAIN } from './dataset/benchmark/ackley'
import Lab from './lab'
import SVGVisualizationWrapper from './visualizations/svg/svgvisualizationwrapper'
import Scatter from './visualizations/svg/scatter'

const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
;(async () => {
    const lab = new Lab('research')
    try {
        await lab.connected
    } catch (err) {
        console.log('Unable to connect to lab...')
    }

    const [min, max] = DOMAIN
    const vis1 = new SVGVisualizationWrapper(new Scatter({}), 'scatter-plot')
    for (let it = 0; it < 100; it++) {
        const data = []
        for (let i = min; i < max; i += 6) {
            for (let j = min; j < max; j += 6) {
                data.push([i + Math.round(Math.random() * 3), j + Math.round(Math.random() * 3), 2])
            }
        }

        vis1.dataUpdate(data)

        // eslint-disable-next-line no-await-in-loop
        await snooze(5000)
    }
})()
