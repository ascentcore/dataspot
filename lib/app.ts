import { DOMAIN } from './dataset/benchmark/ackley'
import Lab from './lab'
import SVGVisualizationWrapper from './visualizations/svg/svgvisualization'
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
    const vis1 = new SVGVisualizationWrapper(new Scatter(), { min, max }, 'scatter-plot', 300, 300)
    for (let it = 0; it < 100; it++) {
        const data = []
        for (let i = min; i < max; i += 6) {
            for (let j = min; j < max; j += 6) {
                data.push([i + Math.round(Math.random() * 3), j + Math.round(Math.random() * 3), 2])
            }
        }

        vis1.dataUpdate(data)

        // eslint-disable-next-line no-await-in-loop
        await snooze(100)
    }
})()
