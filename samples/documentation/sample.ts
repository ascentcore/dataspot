import KMeans, { KMeansConfig } from '../../lib/clustering/kMeans'
import arcDataset from '../../lib/dataset/arcDataset'
import Axis from '../../lib/visualizations/d3/axis'
import Scatter from '../../lib/visualizations/d3/scatter'
import SVGMultipleVisualization from '../../lib/visualizations/d3/svgmultiple'

const initialArcDataset = arcDataset()

const mappedDataKMeans = initialArcDataset.map((data) => {
    return { x: data[0], y: data[1], r: 1.2 }
})

const plotKmeans = document.createElement('div')
const ref = document.querySelector(`[data-ref="documentation/sample"]`) || document.body
ref.appendChild(plotKmeans)

const scatter = new Scatter({})
const axis = new Axis({})
const visKMeans = new SVGMultipleVisualization({}, 'kmeans-plot-elem', [scatter, axis])
visKMeans.setContainer(plotKmeans)

visKMeans.dataUpdate(mappedDataKMeans, 'scatter-elem')
visKMeans.dataUpdate(mappedDataKMeans, 'axis-elem')

const kMeans = new KMeans(<KMeansConfig>{ clusters: 3 })
const fitPredictions = kMeans.fit(initialArcDataset)

mappedDataKMeans.forEach((point: any, index: number) => {
    point.color = fitPredictions[index]
})

visKMeans.dataUpdate(mappedDataKMeans, 'scatter-elem')
