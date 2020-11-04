import KMeans from './lib/clustering/k-means'
// import DBScan from './lib/clustering/db-scan'
import Point from './lib/clustering/point'
import Lab from './lib/lab'
import SVGVisualizationWrapper from './lib/visualizations/svg/svgvisualizationwrapper'
import Scatter from './lib/visualizations/svg/scatter'
import potatoDataset from './lib/dataset/concentricRingsDataset'
// import { VectorUtils } from './lib/math-utils'

const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
;(async () => {
    const lab = new Lab('clustering')
    try {
        await lab.connected
    } catch (err) {
        console.log('Unable to connect to lab...')
    }

    const data1 = potatoDataset()
    const kmeans = KMeans.fit(data1, { nClusters: 3 })

    const vis1 = new SVGVisualizationWrapper(new Scatter({}), 'k-means', data1.map((data) => [...data, 1, -1]))

    let done: boolean | undefined = false
    let result: { points: Point[]; centroids: Point[] } = { points: [], centroids: [] }
    while (!done) {
        const kmeansValue = kmeans.next()
        done = kmeansValue.done
        if (!done) {
            result = <{ points: Point[]; centroids: Point[] }>kmeansValue.value
            vis1.dataUpdate([
                ...result.points.map((point: Point) => [...point.Location, 1, point.Label]),
                ...result.centroids.map((centroid: Point) => [...centroid.Location, 4, centroid.Label])
            ])
        } else {
            result = <{ points: Point[]; centroids: Point[] }>kmeansValue.value
            vis1.dataUpdate([
                ...result.points.map((point: Point) => [...point.Location, 1, point.Label]),
                ...result.centroids.map((centroid: Point) => [...centroid.Location, 4, centroid.Label])
            ])
        }
        // eslint-disable-next-line no-await-in-loop
        await snooze(500)
    }
})()

// const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
// ;(async () => {
//     const lab = new Lab('clustering')
//     try {
//         await lab.connected
//     } catch (err) {
//         console.log('Unable to connect to lab...')
//     }

//     const data1 = potatoDataset()
//     const dbscan = DBScan.fit(data1, { epsilon: 0.05, minNeighbours: 8, distance: VectorUtils.manhattanDistance })

//     const vis1 = new SVGVisualizationWrapper(new Scatter({}), 'dbscan', data1.map((data) => [...data, 1, -1]))

//     let done: boolean | undefined = false
//     let result: { points: Point[]; centroids: number } = { points: [], centroids: 0 }
//     while (!done) {
//         const dbscanValue = dbscan.next()
//         done = dbscanValue.done
//         if (!done) {
//             vis1.dataUpdate([...dbscanValue.value.map((point: Point) => [...point.Location, 1, point.Label])])
//         } else {
//             result = <{ points: Point[]; centroids: number }>dbscanValue.value
//             vis1.dataUpdate([...result.points.map((point: Point) => [...point.Location, 1, point.Label])])
//         }
//         // eslint-disable-next-line no-await-in-loop
//         await snooze(500)
//     }
// })()

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
//                 data.push([i + Math.round(Math.random() * 3), j + Math.round(Math.random() * 3), 2])
//             }
//         }

//         vis1.dataUpdate(data)

//         // eslint-disable-next-line no-await-in-loop
//         await snooze(5000)
//     }
// })()

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
