import Lab from './lib/lab'
import ThreeVisualizationWrapper from './lib/visualizations/three/threevisualizationwrapper'
import MeshPlot from './lib/visualizations/three/mesh'

// const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
;(async () => {
    const lab = new Lab('research')
    try {
        await lab.connected
    } catch (err) {
        console.log('Unable to connect to lab...')
    }

    const vis1 = new ThreeVisualizationWrapper(new MeshPlot({}), 'schwefel-mesh-plot')
    vis1.dataUpdate({
        zFunc: (x: number, y: number) =>
            (20 + x * x + y * y - 10 * (Math.cos(2 * Math.PI * x) + Math.cos(2 * Math.PI * y))) / 20,
        xMin: -5,
        xMax: 5,
        yMin: -5,
        yMax: 5
    })
})()

// import { DOMAIN } from './lib/dataset/benchmark/ackley'
// import Lab from './lib/lab'
// import SVGVisualizationWrapper from './lib/visualizations/svg/svgvisualizationwrapper'
// import Scatter from './lib/visualizations/svg/scatter'

// const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
// ;(async () => {
//     const lab = new Lab('research')
//     try {
//         await lab.connected
//     } catch (err) {
//         console.log('Unable to connect to lab...')
//     }

//     const [min, max] = DOMAIN
//     const vis1 = new SVGVisualizationWrapper(new Scatter({}), 'scatter-plot')
//     for (let it = 0; it < 100; it++) {
//         const data = []
//         for (let i = min; i < max; i += 6) {
//             for (let j = min; j < max; j += 6) {
//                 data.push({ x: i + Math.round(Math.random() * 3), y: j + Math.round(Math.random() * 3), r: 2 })
//             }
//         }

//         vis1.dataUpdate(data)

//         // eslint-disable-next-line no-await-in-loop
//         await snooze(5000)
//     }
// })()
