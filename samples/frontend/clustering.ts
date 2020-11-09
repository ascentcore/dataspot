import KMeans from '../../lib/clustering/k-means'
import DBScan from '../../lib/clustering/db-scan'

import Scatter from '../../lib/visualizations/svg/scatter'
import Point from '../../dist/clustering/point'

import { VectorUtils } from '../../lib/math-utils'

import arcDataset from '../../lib/dataset/arcDataset'
import blobDataset from '../../lib/dataset/blobDataset'
import concentricRingsDataset from '../../lib/dataset/concentricRingsDataset'
import fillSpaceDataset from '../../lib/dataset/fillSpaceDataset'
import noisyWithBlobDataset from '../../lib/dataset/noisyWithBlobDataset'
import potatoDataset from '../../lib/dataset/potatoDataset'

const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const plotClustering = async (container: HTMLElement, initialDataset: number[][], datasetName: string) => {
    const kmeans = KMeans.fit(initialDataset)
    const dbscan = DBScan.fit(initialDataset, {
        epsilon: 0.05,
        minNeighbours: 8,
        distance: VectorUtils.manhattanDistance
    })

    const title = document.createElement('h1')
    title.innerHTML = datasetName
    container.appendChild(title)

    const cardKMeans = document.createElement('div')
    cardKMeans.setAttribute('class', 'card')
    container.appendChild(cardKMeans)
    
    const visKMeans = new Scatter({ width: 600, height: 600 })
    visKMeans.setContainer(cardKMeans)
    visKMeans.setup()
    visKMeans.dataUpdate(
        initialDataset.map((data) => {
            return { x: data[0], y: data[1], r: 1.5, color: -1 }
        })
    )

    const cardDBScan = document.createElement('div')
    cardDBScan.setAttribute('class', 'card')
    container.appendChild(cardDBScan)

    const vizDBScan = new Scatter({ width: 600, height: 600 })
    vizDBScan.setContainer(cardDBScan)
    vizDBScan.setup()
    vizDBScan.dataUpdate(
        initialDataset.map((data) => {
            return { x: data[0], y: data[1], r: 1.5, color: -1 }
        })
    )

    let doneKmeans = false
    let doneDBScan = false
    let resultKmeans = { points: [], centroids: [] }
    let resultDBScan = { points: [], centroids: 0 }
    while (!doneKmeans || !doneDBScan) {
        if (!doneKmeans) {
            const kmeansValue = kmeans.next()
            doneKmeans = kmeansValue.done || false
            if (!doneKmeans) {
                resultKmeans = kmeansValue.value
                visKMeans.dataUpdate([
                    ...resultKmeans.points.map((point: Point) => {
                        return { x: point.Location[0], y: point.Location[1], r: 1.5, color: point.Label }
                    }),
                    ...resultKmeans.centroids.map((centroid: Point) => {
                        return { x: centroid.Location[0], y: centroid.Location[1], r: 5, color: centroid.Label }
                    })
                ])
            } else {
                resultKmeans = kmeansValue.value
                visKMeans.dataUpdate([
                    ...resultKmeans.points.map((point: Point) => {
                        return { x: point.Location[0], y: point.Location[1], r: 1.5, color: point.Label }
                    }),
                    ...resultKmeans.centroids.map((centroid: Point) => {
                        return { x: centroid.Location[0], y: centroid.Location[1], r: 5, color: centroid.Label }
                    })
                ])
            }
        }

        if (!doneDBScan) {
            const dbscanValue = dbscan.next()
            doneDBScan = dbscanValue.done || false
            if (!doneDBScan) {
                vizDBScan.dataUpdate([
                    ...dbscanValue.value.map((point: Point) => {
                        return { x: point.Location[0], y: point.Location[1], r: 1.5, color: point.Label }
                    })
                ])
            } else {
                resultDBScan = dbscanValue.value
                vizDBScan.dataUpdate([
                    ...resultDBScan.points.map((point: Point) => {
                        return { x: point.Location[0], y: point.Location[1], r: 1.5, color: point.Label }
                    })
                ])
            }
        }

        // eslint-disable-next-line no-await-in-loop
        await snooze(500)
    }
}

export default function plot(container: HTMLElement): void {
    const initialArcDataset = arcDataset()
    const initialBlobDataset = blobDataset()
    const initialConcentricRingsDataset = concentricRingsDataset()
    const initialFillSpaceDataset = fillSpaceDataset()
    const initialNoisyWithBlobDataset = noisyWithBlobDataset()
    const initialPotatoDataset = potatoDataset()
    plotClustering(container, initialArcDataset, 'arc')
    plotClustering(container, initialBlobDataset, 'blob')
    plotClustering(container, initialConcentricRingsDataset, 'concentric-ring')
    plotClustering(container, initialFillSpaceDataset, 'fill-space')
    plotClustering(container, initialNoisyWithBlobDataset, 'noisy-with-blob')
    plotClustering(container, initialPotatoDataset, 'potato')
}
