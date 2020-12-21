/* eslint-disable no-param-reassign */
import KMeans, { KMeansConfig } from '@ascentcore/dataspot/clustering/kMeans'
import ClusteringDataset from '@ascentcore/dataspot/datasets/clustering'
import Axis from '@ascentcore/dataspot/visualizations/d3/axis'
import Scatter from '@ascentcore/dataspot/visualizations/d3/scatter'
import SVGMultipleVisualization from '@ascentcore/dataspot/visualizations/d3/svgmultiple'

const initialArcDataset = ClusteringDataset.arc()

const mappedDataKMeans = initialArcDataset.map((data) => {
    return { x: data[0], y: data[1] }
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
