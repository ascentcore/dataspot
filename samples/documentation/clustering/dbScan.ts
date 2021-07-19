import ClusteringDataset from '@ascentcore/dataspot/datasets/clustering'
import KMeans, { KMeansConfig } from '@ascentcore/dataspot/clustering/kMeans'
import Random from '@ascentcore/dataspot/math/random'
import Container from '@ascentcore/dataspot/ui/container'
import StepAlgorithmWrapper from '@ascentcore/dataspot/wrappers/stepAlgorithmWrapper'
import ScatterPlot from '@ascentcore/dataspot/ui/visualization/scatterPlot'
import { FieldsDefinition } from '@ascentcore/dataspot/ui/common/fieldDefinition'
import { schemePastel2 } from 'd3'
import DBScan, { DBScanConfig } from '@ascentcore/dataspot/clustering/dbScan'

export default (async () => {
    Random.seed('Datasets')

    // DOM Reference to be used for injecting the code
    const ref = Container.getRootContainer('[data-ref="documentation/dbScan"]', 'dbscan')
    const container = document.createElement('div')
    const plotConfig = { width: 400, height: 300, domainX: { min: 0, max: 1 }, domainY: { min: 0, max: 1 } }
    const plot = new ScatterPlot(container, plotConfig, [])

    const config: DBScanConfig = new DBScanConfig()

    // Setup configuration ui definitions
    const uiDefinitions: FieldsDefinition = {
        dataset: {
            label: 'Selection Dataset',
            options: ClusteringDataset.list,
            default: 'blob'
        },
        epsilon: { label: 'Epsilon', min: 0.1 },
        minNeighbors: { label: 'Minimum Neighbors', min: 1 }
    }

    let generator: Generator
    let ds: number[][]

    const colors = schemePastel2
    console.log(colors)

    const dbScan = new DBScan(config)

    const wrapper = new StepAlgorithmWrapper(ref as HTMLElement, dbScan, uiDefinitions, () => {
        // if (dbScan.hadConverged()) {
        //     return true
        // }
        if (dbScan.getIteration() === 0) {
            const dataset: string = (dbScan.config.dataset as string) || 'blob'
            ds = ClusteringDataset[dataset]()
            generator = dbScan.fitAsync(ds)
        }

        const result = generator.next()
        const { value } = result

        console.log(result)

        const plotData = ds.map((arr, index) => ({
            x: arr[0],
            y: arr[1],
            fixedRadius: 2,
            stroke: false,
            color: value[index] > -1 ? colors[value[index]] : '#000'
        }))

        plot.dataUpdate(plotData)

        return result.done
    })

    wrapper.mainView.appendChild(container)
})()
