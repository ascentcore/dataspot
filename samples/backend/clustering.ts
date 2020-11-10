import KMeans from '../../lib/clustering/k-means'
import DBScan from '../../lib/clustering/db-scan'
import Lab from '../../lib/lab'
import SVGVisualizationWrapper from '../../lib/visualizations/svg/svgvisualizationwrapper'
import Scatter from '../../lib/visualizations/svg/scatter'
const VectorUtils = require('../../lib/math-utils').VectorUtils

import arcDataset from '../../lib/dataset/arcDataset'
import blobDataset from '../../lib/dataset/blobDataset'
import concentricRingsDataset from '../../lib/dataset/concentricRingsDataset'
import fillSpaceDataset from '../../lib/dataset/fillSpaceDataset'
import noisyWithBlobDataset from '../../lib/dataset/noisyWithBlobDataset'
import potatoDataset from '../../lib/dataset/potatoDataset'

const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const plotClustering = async (initialDataset, datasetName) => {
    const kmeans = KMeans.fit(initialDataset)
    const dbscan = DBScan.fit(initialDataset, {
        epsilon: 0.05,
        minNeighbours: 8,
        distance: VectorUtils.manhattanDistance
    })

    const visKMeans = new SVGVisualizationWrapper(
        new Scatter({}),
        `kmeans-${datasetName}`,
        initialDataset.map((data) => {
            return { x: data[0], y: data[1], r: 1, color: -1 }
        })
    )
    const vizDBScan = new SVGVisualizationWrapper(
        new Scatter({}),
        `dbscan-${datasetName}`,
        initialDataset.map((data) => {
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
}

;(async () => {
    const lab = new Lab('clustering')
    try {
        await lab.connected
    } catch (err) {
        console.log('Unable to connect to lab...')
    }

    const initialArcDataset = arcDataset()
    const initialBlobDataset = blobDataset()
    const initialConcentricRingsDataset = concentricRingsDataset()
    const initialFillSpaceDataset = fillSpaceDataset()
    const initialNoisyWithBlobDataset = noisyWithBlobDataset()
    const initialPotatoDataset = potatoDataset()
    plotClustering(initialArcDataset, 'arc')
    plotClustering(initialBlobDataset, 'blob')
    plotClustering(initialConcentricRingsDataset, 'concentric-ring')
    plotClustering(initialFillSpaceDataset, 'fill-space')
    plotClustering(initialNoisyWithBlobDataset, 'noisy-with-blob')
    plotClustering(initialPotatoDataset, 'potato')
})()
