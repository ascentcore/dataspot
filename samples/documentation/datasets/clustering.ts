import Axis from '../../../lib/visualizations/d3/axis'
import Scatter from '../../../lib/visualizations/d3/scatter'
import ClusteringDataset from '../../../lib/dataset/clusteringDataset'
import SVGMultipleVisualization from '../../../lib/visualizations/d3/svgmultiple'

export default (async () => {
    const functions = Object.values(ClusteringDataset)
    console.log('Executed!')

    const root = document.createElement('div')
    const ref = document.querySelector(`[data-ref="documentation/clusteringDataset"]`) || document.body
    ref.appendChild(root)

    functions.forEach((fn: Function) => {
        const blobDataset = fn().map((data: any[]) => {
            return { x: data[0], y: data[1], r: 1.2 }
        })

        console.log('EXEC!!!!', fn)

        const scatter = new Scatter({})
        const axis = new Axis({})
        const visKMeans = new SVGMultipleVisualization({}, 'kmeans-plot-elem', [scatter, axis])
        visKMeans.setContainer(root)

        visKMeans.dataUpdate(blobDataset, 'scatter-elem')
        visKMeans.dataUpdate(blobDataset, 'axis-elem')
    })
})()
