import calculate, { DOMAIN } from './dataset/benchmark/ackley'
import Lab from './lab'
import VisualizationWrapper from './visualizations/runtime'
import Scatter from './visualizations/scatter'

const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
;(async () => {
    // eslint-disable-next-line no-new
    new Lab('research')
    const vis1 = new VisualizationWrapper(new Scatter(), 500, 400)
    const [min, max] = DOMAIN
    vis1.setup({ min, max })

    for (let i = 0; i < 100; i++) {
        const data = []
        for (let i = min; i < max; i += 6) {
            for (let j = min; j < max; j += 6) {
                data.push([i + Math.random() * 3, j + Math.random() * 3, Math.abs(Math.random() * 10), calculate(i, j)])
            }
        }

        vis1.dataUpdate(data)

        // eslint-disable-next-line no-await-in-loop
        await snooze(1000)
    }
})()
