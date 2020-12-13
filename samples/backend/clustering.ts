import KMeans, { KMeansConfig } from '@ascentcore/dataspot/clustering/kMeans'
import DBScan, { DBScanConfig } from '@ascentcore/dataspot/clustering/dbScan'
import Lab from '@ascentcore/dataspot/lab'
import SVGVisualizationWrapper from '@ascentcore/dataspot/visualizations/d3/svgvisualizationwrapper'
import Scatter from '@ascentcore/dataspot/visualizations/d3/scatter'
import ClusteringDataset from '@ascentcore/dataspot/datasets/clustering'

const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const plotClustering = async (initialDataset: any[], datasetName: string) => {
    const kmeans = new KMeans(<KMeansConfig>{ clusters: 3 }).fitAsync(initialDataset)
    const dbscan = new DBScan(<DBScanConfig>{
        epsilon: 0.05,
        minNeighbours: 8,
        distanceFn: 'manhattanDistance'
    }).fitAsync(initialDataset)

    const visKMeans = new SVGVisualizationWrapper(
        new Scatter({}),
        `kmeans-${datasetName}`,
        initialDataset.map((data: any[]) => {
            return { x: data[0], y: data[1] }
        })
    )
    const vizDBScan = new SVGVisualizationWrapper(
        new Scatter({}),
        `dbscan-${datasetName}`,
        initialDataset.map((data: any[]) => {
            return { x: data[0], y: data[1] }
        })
    )

    let doneKmeans = false
    let doneDBScan = false
    let resultKmeans: number[] = []
    let resultDBScan: number[] = []
    while (!doneKmeans || !doneDBScan) {
        if (!doneKmeans) {
            const kmeansValue = kmeans.next()
            doneKmeans = kmeansValue.done === true
            resultKmeans = kmeansValue.value
            visKMeans.dataUpdate([
                ...resultKmeans.map((label, index) => {
                    return { x: initialDataset[index][0], y: initialDataset[index][1], color: label }
                })
            ])
        }

        if (!doneDBScan) {
            const dbscanValue = dbscan.next()
            doneDBScan = dbscanValue.done === true
            resultDBScan = dbscanValue.value
            vizDBScan.dataUpdate([
                ...resultDBScan.map((label, index) => {
                    return { x: initialDataset[index][0], y: initialDataset[index][1], color: label }
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

    const initialArcDataset = ClusteringDataset.arc()
    const initialBlobDataset = ClusteringDataset.blob()
    const initialConcentricRingsDataset = ClusteringDataset.concentricRings()
    const initialFillSpaceDataset = ClusteringDataset.fillSpace()
    const initialNoisyWithBlobDataset = ClusteringDataset.noisyWithBlob()
    const initialPotatoDataset = ClusteringDataset.potato()
    plotClustering(initialArcDataset, 'arc')
    plotClustering(initialBlobDataset, 'blob')
    plotClustering(initialConcentricRingsDataset, 'concentric-ring')
    plotClustering(initialFillSpaceDataset, 'fill-space')
    plotClustering(initialNoisyWithBlobDataset, 'noisy-with-blob')
    plotClustering(initialPotatoDataset, 'potato')
})()
