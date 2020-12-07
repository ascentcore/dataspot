import Scatter from '@ascentcore/dataspot/visualizations/d3/scatter'
import Title from '@ascentcore/dataspot/visualizations/d3/title'
import ClusteringDataset from '@ascentcore/dataspot/datasets/clustering'
import SVGMultipleVisualization from '@ascentcore/dataspot/visualizations/d3/svgmultiple'
import ClusteringAlgorithm from '@ascentcore/dataspot/clustering/clusteringBase'
import KMeans, { KMeansConfig } from '@ascentcore/dataspot/clustering/kMeans'
import MeanShift, { MeanShiftConfig } from '@ascentcore/dataspot/clustering/meanShift'
import DBScan from '@ascentcore/dataspot/clustering/dbScan'
import Random from '@ascentcore/dataspot/math/random'

export default (async () => {
    Random.seed('Datasets')
    const keys = ['Arc', 'Blob', 'Concentric Rings']
    const functions = [ClusteringDataset.arc, ClusteringDataset.blob, ClusteringDataset.concentricRings]

    const root = document.createElement('div')
    const ref = document.querySelector(`[data-ref="documentation/clusteringComparison"]`) || document.body
    ref.appendChild(root)

    const algorithms: ClusteringAlgorithm<any>[] = []
    const algorithmList = ['Kmeans', 'MeanShift', 'DBScan']
    algorithms.push(new KMeans(<KMeansConfig>{ clusters: 3 }))
    algorithms.push(new MeanShift(<MeanShiftConfig>{ bandwidth: 0.15 }))
    algorithms.push(new DBScan())

    const datasets: any[] = []
    for (let i = 0; i < algorithms.length; i++) {
        datasets.push([])
    }

    functions.forEach((fn: Function) => {
        const ds = fn()

        algorithms.forEach((algorithm: ClusteringAlgorithm<any>, algIdx: number) => {
            const labels = algorithm.fit(ds)
            const currentSet: any[] = []
            ds.forEach((data: number[], i: number) => {
                currentSet.push({ x: data[0], y: data[1], r: 2, color: labels[i] })
            })

            datasets[algIdx].push(currentSet)
        })
    })

    algorithms.forEach((_: any, index: number) => {
        const dSet = datasets[index]
        dSet.forEach((ds: any[], dsIndex: number) => {
            const scatter = new Scatter({})
            const title = new Title({ text: `${algorithmList[dsIndex]} - ${keys[dsIndex]}` })

            const visKMeans = new SVGMultipleVisualization(
                { margin: { top: 30, left: 15, right: 15, bottom: 0 }, width: 200, height: 200 },
                'plotElement',
                [scatter, title]
            )
            visKMeans.setContainer(root)
            visKMeans.setup()

            visKMeans.dataUpdate(ds, 'scatter-elem')
            visKMeans.dataUpdate(ds, 'axis-elem')
        })
        const br = document.createElement('br')
        root.appendChild(br)
    })
})()
