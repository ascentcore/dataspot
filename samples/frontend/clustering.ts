import KMeans, { KMeansConfig } from '../../lib/clustering/kMeans'
import DBScan, { DBScanConfig } from '../../lib/clustering/dbScan'

import Scatter from '../../lib/visualizations/d3/scatter'

import Axis from '../../lib/visualizations/d3/axis'
import SVGMultipleVisualization from '../../lib/visualizations/d3/svgmultiple'
import ClusteringDataset from '../../lib/datasets/clustering'

const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const plotClustering = async (container: HTMLElement, initialDataset: number[][], datasetName: string) => {
    let doneKmeans = false
    let doneDBScan = false
    let resultKmeans: number[] = []
    let resultDBScan: number[] = []
    let kmeans: any
    let dbscan: any
    let iterations = 0

    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    card.setAttribute('style', 'margin-bottom: 100px; padding: 50px 25px;')
    container.appendChild(card)

    const header = document.createElement('div')
    header.setAttribute('class', 'card-header')
    header.innerHTML = `<div class='card-title h3'>Dataset: ${datasetName}</div>`
    card.appendChild(header)

    const plots = document.createElement('div')
    plots.setAttribute('class', 'plots card-body')
    plots.setAttribute('style', 'display: flex; justify-content: space-evenly; padding: 100px 0; flex-wrap: wrap;')
    card.appendChild(plots)

    const plotKmeans = document.createElement('div')
    const plotDBScan = document.createElement('div')

    plots.appendChild(plotKmeans)
    plots.appendChild(plotDBScan)

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

    const scatterKMeans = new Scatter({}, 'scatter-elem')
    const axisKMeans = new Axis({}, 'axis-elem')

    const visKMeans = new SVGMultipleVisualization({}, 'kmeans-plot-elem', [scatterKMeans, axisKMeans])
    visKMeans.setContainer(plotKmeans)

    const scatterDBScan = new Scatter({}, 'scatter-elem')
    const axisDBScan = new Axis({}, 'axis-elem')

    const vizDBScan = new SVGMultipleVisualization({}, 'dbscan-plot-elem', [scatterDBScan, axisDBScan])
    vizDBScan.setContainer(plotDBScan)

    const initialize = () => {
        playBtn.disabled = false
        nextBtn.disabled = false
        iterations = 0
        iterationsContainer.innerHTML = `Iterations: ${iterations} `
        kmeans = new KMeans(<KMeansConfig>{ clusters: 3 }).fitAsync(initialDataset)
        dbscan = new DBScan(<DBScanConfig>{
            epsilon: 0.05,
            minNeighbours: 8,
            distanceFn: 'manhattanDistance'
        }).fitAsync(initialDataset)
        doneKmeans = false
        doneDBScan = false
        resultKmeans = []
        resultDBScan = []
        visKMeans.setup()
        const mappedDataKMeans = initialDataset.map((data) => {
            return { x: data[0], y: data[1], r: 1.2 }
        })
        visKMeans.dataUpdate(mappedDataKMeans, 'scatter-elem')
        visKMeans.dataUpdate(mappedDataKMeans, 'axis-elem')

        vizDBScan.setup()
        const mappedDataDBScan = initialDataset.map((data) => {
            return { x: data[0], y: data[1], r: 1.2 }
        })
        vizDBScan.dataUpdate(mappedDataDBScan, 'scatter-elem')
        vizDBScan.dataUpdate(mappedDataDBScan, 'axis-elem')
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
            resultKmeans = kmeansValue.value
            visKMeans.dataUpdate(
                resultKmeans.map((label, index) => {
                    return {
                        x: initialDataset[index][0],
                        y: initialDataset[index][1],
                        r: 1.2,
                        color: label
                    }
                }),
                'scatter-elem'
            )
        }

        if (!doneDBScan) {
            const dbscanValue = dbscan.next()
            doneDBScan = dbscanValue.done || false
            resultDBScan = dbscanValue.value
            vizDBScan.dataUpdate(
                resultDBScan.map((label, index) => {
                    return {
                        x: initialDataset[index][0],
                        y: initialDataset[index][1],
                        r: 1.2,
                        color: label
                    }
                }),
                'scatter-elem'
            )
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
        resetBtn.disabled = false
    }

    initialize()
    nextBtn.onclick = step
    playBtn.onclick = play
    resetBtn.onclick = initialize
}

export default function plot(container: HTMLElement): void {
    const initialArcDataset = ClusteringDataset.arc()
    const initialBlobDataset = ClusteringDataset.blob()
    const initialConcentricRingsDataset = ClusteringDataset.concentricRings()
    const initialFillSpaceDataset = ClusteringDataset.fillSpace()
    const initialNoisyWithBlobDataset = ClusteringDataset.noisyWithBlob()
    const initialPotatoDataset = ClusteringDataset.potato()

    const title = document.createElement('h1')
    title.setAttribute('style', 'text-align: center; margin-bottom: 50px;')
    title.innerHTML = 'Clustering - KMeans vs DBScan'
    container.appendChild(title)

    plotClustering(container, initialArcDataset, 'arc')
    plotClustering(container, initialBlobDataset, 'blob')
    plotClustering(container, initialConcentricRingsDataset, 'concentric-ring')
    plotClustering(container, initialFillSpaceDataset, 'fill-space')
    plotClustering(container, initialNoisyWithBlobDataset, 'noisy-with-blob')
    plotClustering(container, initialPotatoDataset, 'potato')
}
