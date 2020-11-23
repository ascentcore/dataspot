import KMeans, { KMeansConfig } from '../../lib/clustering/kMeans'
import DBScan, { DBScanConfig } from '../../lib/clustering/DBScan'
import Lab from '../../lib/lab'
import SVGVisualizationWrapper from '../../lib/visualizations/d3/svgvisualizationwrapper'
import Scatter from '../../lib/visualizations/d3/scatter'

import arcDataset from '../../lib/dataset/arcDataset'
import blobDataset from '../../lib/dataset/blobDataset'
import concentricRingsDataset from '../../lib/dataset/concentricRingsDataset'
import fillSpaceDataset from '../../lib/dataset/fillSpaceDataset'
import noisyWithBlobDataset from '../../lib/dataset/noisyWithBlobDataset'
import potatoDataset from '../../lib/dataset/potatoDataset'

const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const plotClustering = async (initialDataset, datasetName) => {
    const kmeans = new KMeans(<KMeansConfig>{ clusters: 3 }).fitAsync(initialDataset)
    const dbscan = new DBScan(<DBScanConfig>{
        epsilon: 0.05,
        minNeighbours: 8,
        distanceFn: 'manhattanDistance'
    }).fitAsync(initialDataset)

    const visKMeans = new SVGVisualizationWrapper(
        new Scatter({}),
        `kmeans-${datasetName}`,
        initialDataset.map((data) => {
            return { x: data[0], y: data[1], r: 1 }
        })
    )
    const vizDBScan = new SVGVisualizationWrapper(
        new Scatter({}),
        `dbscan-${datasetName}`,
        initialDataset.map((data) => {
            return { x: data[0], y: data[1], r: 1 }
        })
    )

    let doneKmeans = false
    let doneDBScan = false
    let resultKmeans: number[] = []
    let resultDBScan: number[] = []
    while (!doneKmeans || !doneDBScan) {
        if (!doneKmeans) {
            const kmeansValue = kmeans.next()
            doneKmeans = kmeansValue.done
            resultKmeans = kmeansValue.value
            visKMeans.dataUpdate([
                ...resultKmeans.map((label, index) => {
                    return { x: initialDataset[index][0], y: initialDataset[index][1], r: 1, color: label }
                })
            ])
        }

        if (!doneDBScan) {
            const dbscanValue = dbscan.next()
            doneDBScan = dbscanValue.done
            resultDBScan = dbscanValue.value
            vizDBScan.dataUpdate([
                ...resultDBScan.map((label, index) => {
                    return { x: initialDataset[index][0], y: initialDataset[index][1], r: 1, color: label }
                })
            ])
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
