const KMeans = require('../dist/clustering/k-means').default
const DBScan = require('../dist/clustering/db-scan').default
const Lab = require('../dist/lab').default
const SVGVisualizationWrapper = require('../dist/visualizations/svg/svgvisualizationwrapper').default
const Scatter = require('../dist/visualizations/svg/scatter').default
const concentricRingsDataset = require('../dist/dataset/concentricRingsDataset').default
const VectorUtils = require('../dist/math-utils').VectorUtils

const snooze = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
;(async () => {
    const lab = new Lab('clustering')
    try {
        await lab.connected
    } catch (err) {
        console.log('Unable to connect to lab...')
    }

    const initialConcentricRingsDataset = concentricRingsDataset()
    const kmeans = KMeans.fit(initialConcentricRingsDataset, { nClusters: 3 })
    const dbscan = DBScan.fit(initialConcentricRingsDataset, {
        epsilon: 0.05,
        minNeighbours: 8,
        distance: VectorUtils.manhattanDistance
    })

    const visKMeans = new SVGVisualizationWrapper(
        new Scatter({}),
        'k-means',
        initialConcentricRingsDataset.map((data) => {
            return { x: data[0], y: data[1], r: 1, color: -1 }
        })
    )
    const vizDBScan = new SVGVisualizationWrapper(
        new Scatter({}),
        'dbscan',
        initialConcentricRingsDataset.map((data) => {
            return { x: data[0], y: data[1], r: 1, color: -1 }
        })
    )

    let doneKmeans = false
    let doneDBScan = false
    let resultKmeans = { points: [], centroids: [] }
    let resultDBScan = { points: [], centroids: 0 }
    while (!doneKmeans || !doneDBScan) {
        if (!doneKmeans) {
            const kmeansValue = kmeans.next()
            doneKmeans = kmeansValue.done
            if (!doneKmeans) {
                resultKmeans = kmeansValue.value
                visKMeans.dataUpdate([
                    ...resultKmeans.points.map((point) => {
                        return { x: point.Location[0], y: point.Location[1], r: 1, color: point.Label }
                    }),
                    ...resultKmeans.centroids.map((centroid) => {
                        return { x: centroid.Location[0], y: centroid.Location[1], r: 4, color: centroid.Label }
                    })
                ])
            } else {
                resultKmeans = kmeansValue.value
                visKMeans.dataUpdate([
                    ...resultKmeans.points.map((point) => {
                        return { x: point.Location[0], y: point.Location[1], r: 1, color: point.Label }
                    }),
                    ...resultKmeans.centroids.map((centroid) => {
                        return { x: centroid.Location[0], y: centroid.Location[1], r: 4, color: centroid.Label }
                    })
                ])
            }
        }

        if (!doneDBScan) {
            const dbscanValue = dbscan.next()
            doneDBScan = dbscanValue.done
            if (!doneDBScan) {
                vizDBScan.dataUpdate([
                    ...dbscanValue.value.map((point) => {
                        return { x: point.Location[0], y: point.Location[1], r: 1, color: point.Label }
                    })
                ])
            } else {
                resultDBScan = dbscanValue.value
                vizDBScan.dataUpdate([
                    ...resultDBScan.points.map((point) => {
                        return { x: point.Location[0], y: point.Location[1], r: 1, color: point.Label }
                    })
                ])
            }
        }

        // eslint-disable-next-line no-await-in-loop
        await snooze(500)
    }
})()
