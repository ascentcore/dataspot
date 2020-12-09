import Axis from '@ascentcore/dataspot/visualizations/d3/axis'
import Scatter from '@ascentcore/dataspot/visualizations/d3/scatter'
import Title from '@ascentcore/dataspot/visualizations/d3/title'
import ClusteringDataset from '@ascentcore/dataspot/datasets/clustering'
import SVGMultipleVisualization from '@ascentcore/dataspot/visualizations/d3/svgmultiple'

export default (async () => {
    const keys = ['Arc', 'Blob', 'Concentric Rings', 'Fill Space', 'Noisy With Blob', 'Potato']
    const functions = [
        ClusteringDataset.arc,
        ClusteringDataset.blob,
        ClusteringDataset.concentricRings,
        ClusteringDataset.fillSpace,
        ClusteringDataset.noisyWithBlob,
        ClusteringDataset.potato
    ]

    const root = document.createElement('div')
    const ref = document.querySelector(`[data-ref="documentation/clusteringDataset"]`) || document.body
    ref.appendChild(root)

    functions.forEach((fn: Function, index: number) => {
        const blobDataset = fn().map((data: any[]) => {
            return { x: data[0], y: data[1] }
        })

        const scatter = new Scatter({})
        const axis = new Axis({})
        const title = new Title({ text: `${keys[index]}` })

        const visKMeans = new SVGMultipleVisualization({ width: 280, height: 220 }, 'kmeans-plot-elem', [
            scatter,
            axis,
            title
        ])
        visKMeans.setContainer(root)
        visKMeans.setup()

        visKMeans.dataUpdate(blobDataset, 'scatter-elem')
        visKMeans.dataUpdate(blobDataset, 'axis-elem')
    })
})()
