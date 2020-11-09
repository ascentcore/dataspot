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
    let doneKmeans = false
    let doneDBScan = false
    let resultKmeans = { points: [], centroids: [] }
    let resultDBScan = { points: [], centroids: 0 }
    let visKMeans,
        vizDBScan,
        kmeans,
        dbscan,
        iterations = 0

    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    container.appendChild(card)

    const header = document.createElement('div')
    header.setAttribute('class', 'card-header')
    header.innerHTML = `<div class='card-title h3'>Dataset: ${datasetName}</div>`
    card.appendChild(header)

    const plots = document.createElement('div')
    plots.setAttribute('class', 'plots')
    plots.setAttribute('style', 'display: flex;justify-content: space-evenly;padding: 100px 0;')
    card.appendChild(plots)

    const footer = document.createElement('div')
    footer.setAttribute('class', 'card-footer')
    card.appendChild(footer)

    const iterationsContainer = document.createElement('div')
    iterationsContainer.innerHTML = `Iterations: ${iterations} `
    iterationsContainer.setAttribute('style', 'width: 100px; display: inline-block;')
    footer.appendChild(iterationsContainer)

    const playBtn = document.createElement('button')
    playBtn.setAttribute('class', 'btn btn-primary')
    playBtn.setAttribute('style', 'margin-right: 20px;')
    playBtn.innerHTML = 'Play'
    footer.appendChild(playBtn)

    const nextBtn = document.createElement('button')
    nextBtn.setAttribute('class', 'btn btn-secondary')
    nextBtn.setAttribute('style', 'margin-right: 20px;')
    nextBtn.innerHTML = 'Next'
    footer.appendChild(nextBtn)

    const resetBtn = document.createElement('button')
    resetBtn.setAttribute('class', 'btn btn-secondary')
    resetBtn.setAttribute('style', 'margin-right: 20px;')
    resetBtn.innerHTML = 'Reset'
    footer.appendChild(resetBtn)

    visKMeans = new Scatter({})
    visKMeans.setContainer(plots)
    vizDBScan = new Scatter({})
    vizDBScan.setContainer(plots)

    const initialize = () => {
        playBtn.disabled = false
        nextBtn.disabled = false
        iterations = 0
        kmeans = KMeans.fit(initialDataset)
        dbscan = DBScan.fit(initialDataset, {
            epsilon: 0.05,
            minNeighbours: 8,
            distance: VectorUtils.manhattanDistance
        })
        doneKmeans = false
        doneDBScan = false
        resultKmeans = { points: [], centroids: [] }
        resultDBScan = { points: [], centroids: 0 }
        visKMeans.setup()
        visKMeans.dataUpdate(
            initialDataset.map((data) => {
                return { x: data[0], y: data[1], r: 1, color: -1 }
            })
        )

        vizDBScan.setup()
        vizDBScan.dataUpdate(
            initialDataset.map((data) => {
                return { x: data[0], y: data[1], r: 1, color: -1 }
            })
        )
    }

    const step = () => {
        if (!doneKmeans || !doneDBScan) {
            iterations++
            iterationsContainer.innerHTML = `Iterations: ${iterations} `
        } else {
            nextBtn.disabled = true
        }
        if (!doneKmeans) {
            const kmeansValue = kmeans.next()
            doneKmeans = kmeansValue.done || false
            if (!doneKmeans) {
                resultKmeans = kmeansValue.value
                visKMeans.dataUpdate([
                    ...resultKmeans.points.map((point: Point) => {
                        return { x: point.Location[0], y: point.Location[1], r: 1, color: point.Label || 0 }
                    }),
                    ...resultKmeans.centroids.map((centroid: Point) => {
                        return { x: centroid.Location[0], y: centroid.Location[1], r: 5, color: centroid.Label || 0 }
                    })
                ])
            } else {
                resultKmeans = kmeansValue.value
                visKMeans.dataUpdate([
                    ...resultKmeans.points.map((point: Point) => {
                        return { x: point.Location[0], y: point.Location[1], r: 1, color: point.Label || 0 }
                    }),
                    ...resultKmeans.centroids.map((centroid: Point) => {
                        return { x: centroid.Location[0], y: centroid.Location[1], r: 5, color: centroid.Label || 0 }
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
                        return { x: point.Location[0], y: point.Location[1], r: 1, color: point.Label || 0 }
                    })
                ])
            } else {
                resultDBScan = dbscanValue.value
                vizDBScan.dataUpdate([
                    ...resultDBScan.points.map((point: Point) => {
                        return { x: point.Location[0], y: point.Location[1], r: 1, color: point.Label || 0 }
                    })
                ])
            }
        }
    }

    const play = async () => {
        playBtn.disabled = true
        nextBtn.disabled = true
        resetBtn.disabled = true
        while (!doneKmeans || !doneDBScan) {
            step()
            // eslint-disable-next-line no-await-in-loop
            await snooze(100)
        }
        playBtn.disabled = false
        nextBtn.disabled = false
        resetBtn.disabled = false
    }

    initialize()
    nextBtn.onclick = step
    playBtn.onclick = play
    resetBtn.onclick = initialize
}

export default function plot(container: HTMLElement): void {
    const initialArcDataset = arcDataset()
    const initialBlobDataset = blobDataset()
    const initialConcentricRingsDataset = concentricRingsDataset()
    const initialFillSpaceDataset = fillSpaceDataset()
    const initialNoisyWithBlobDataset = noisyWithBlobDataset()
    const initialPotatoDataset = potatoDataset()

    const title = document.createElement('h1')
    title.setAttribute('style', 'text-align: center; margin-bottom: 50px;')
    title.innerHTML = 'Clustering. KMeans vs DBScan'
    container.appendChild(title)

    plotClustering(container, initialArcDataset, 'arc')
    plotClustering(container, initialBlobDataset, 'blob')
    plotClustering(container, initialConcentricRingsDataset, 'concentric-ring')
    plotClustering(container, initialFillSpaceDataset, 'fill-space')
    plotClustering(container, initialNoisyWithBlobDataset, 'noisy-with-blob')
    plotClustering(container, initialPotatoDataset, 'potato')
}
