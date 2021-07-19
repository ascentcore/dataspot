import ClusteringDataset from '@ascentcore/dataspot/datasets/clustering'
import KMeans, { KMeansConfig } from '@ascentcore/dataspot/clustering/kMeans'
import Random from '@ascentcore/dataspot/math/random'
import Container from '@ascentcore/dataspot/ui/container'
import StepAlgorithmWrapper from '@ascentcore/dataspot/wrappers/stepAlgorithmWrapper'
import ScatterPlot from '@ascentcore/dataspot/ui/visualization/scatterPlot'
import { FieldsDefinition } from '@ascentcore/dataspot/ui/common/fieldDefinition'
import { schemePastel2 } from 'd3'

export default (async () => {
    Random.seed('Datasets')

    // DOM Reference to be used for injecting the code
    const ref = Container.getRootContainer('[data-ref="documentation/kMeans"]', 'kmeans')
    const container = document.createElement('div')
    const plotConfig = { width: 400, height: 300, domainX: { min: 0, max: 1 }, domainY: { min: 0, max: 1 } }
    const plot = new ScatterPlot(container, plotConfig, [])

    const config: KMeansConfig = new KMeansConfig()
    config.clusters = 3

    // Setup configuration ui definitions
    const uiDefinitions: FieldsDefinition = {
        dataset: {
            label: 'Selection Dataset',
            options: ClusteringDataset.list,
            default: 'blob'
        },
        clusters: { label: 'Clusters', min: 2 }
    }

    let generator: Generator
    let ds: number[][]

    const colors = schemePastel2
    console.log(colors)

    const kmeans = new KMeans(config)

    const wrapper = new StepAlgorithmWrapper(ref as HTMLElement, kmeans, uiDefinitions, () => {
        if (kmeans.hadConverged()) {
            return true
        }
        if (kmeans.getIteration() === 0) {
            const dataset: string = (kmeans.config.dataset as string) || 'blob'
            ds = ClusteringDataset[dataset]()
            generator = kmeans.fitAsync(ds)
        }

        const result = generator.next()
        const { value } = result

        const plotData = ds
            .map((arr, index) => ({
                x: arr[0],
                y: arr[1],
                fixedRadius: 2,
                stroke: false,
                color: colors[value[index]]
            }))
            .concat(
                kmeans.config.centroids.map((arr) => ({
                    x: arr[0],
                    y: arr[1],
                    fixedRadius: 8,
                    stroke: true,
                    color: '#ff8000'
                }))
            )
        plot.dataUpdate(plotData)

        return result.done
    })

    wrapper.mainView.appendChild(container)
})()
