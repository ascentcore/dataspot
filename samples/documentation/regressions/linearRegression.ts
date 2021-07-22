import Random from '@ascentcore/dataspot/math/random'
import { LinearRegression, LinearRegressionConfig } from '@ascentcore/dataspot/regressions/linearRegression'
import Container from '@ascentcore/dataspot/ui/container'
import LineGraph from '@ascentcore/dataspot/ui/visualization/lineGraph'
import ScatterPlot from '@ascentcore/dataspot/ui/visualization/scatterPlot'
import LinePlot from '@ascentcore/dataspot/visualizations/d3/lineplot'
import StepAlgorithmWrapper from '@ascentcore/dataspot/wrappers/stepAlgorithmWrapper'

function getDataset(type: string): any {
    let input: number[] = new Array(100).fill(1)
    let output: number[]

    switch (type) {
        case 'decreasing':
            input = input.map((val, index) => (index > 0.3 && index < 0.6 ? index : Math.random()))
            output = input.map((i) => 1 - Math.max(i, 0.2) - 0.2 + Math.random() * 0.4)
            break
        case 'globular':
            input = input.map((val, index) => (index < 50 ? Random.random(0.2, 0.4) : Random.random(0.6, 0.8)))
            output = input.map((i, index) => (index < 50 ? Random.random(0.6, 0.8) : Random.random(0.2, 0.4)))
            break
        case 'increasingLin1':
            input = input.map((val, index) => index / 100)
            output = input.map((i) => i * 0.3 - 0.1 + Math.random() * 0.2)
            break
        case 'increasingLin1OutliersInc':
            input = input.map((_, index) => index / 100)
            output = input.map((_, index) =>
                index % 17 === 0 ? 0.2 + (index / 100) * 0.8 : (index / 100) * 0.3 - 0.05 + Math.random() * 0.1
            )
            break
        case 'increasingLin1OutliersDec':
            input = input.map((_, index) => index / 100)
            output = input.map((_, index) =>
                index % 17 === 0 ? 0.8 - (index / 100) * 0.8 : (index / 100) * 0.3 - 0.05 + Math.random() * 0.1
            )
            break
        default:
            input = input.map((val, index) => (index > 0.3 && index < 0.6 ? index : Math.random()))
            output = input.map((i) => Math.max(i, 0.2) - 0.2 + Math.random() * 0.4)
    }

    const ds = input.reduce((memo: any[], v, i) => {
        memo.push({ x: v, y: output[i], fixedRadius: 2 })
        return memo
    }, [])

    return [input, output, ds]
}

export default (async () => {
    Random.seed('regressionsample')

    // DOM Reference to be used for injecting the code
    const ref = Container.getRootContainer('[data-ref="documentation/linearRegression"]')

    // Create visualizations
    const container = document.createElement('div')
    const plotConfig = { width: 400, height: 300, domainX: { min: 0, max: 1 }, domainY: { min: 0, max: 1 } }
    const lineRegressionPlot = new LinePlot(plotConfig, 'line-elem')
    const plot = new ScatterPlot(container, plotConfig, [lineRegressionPlot])
    const functionGraph = new LineGraph(container, 400, 300, 'Loss')

    // Initialize regression
    const config = new LinearRegressionConfig()
    config.learningRate = 0.2
    config.convergenceHistorySize = 5
    config.iterations = 10000

    // Setup configuration ui definitions
    Object.assign(config.constructor, {
        definitions: {
            dataset: {
                label: 'Selection Dataset',
                options: [
                    'increasing',
                    'decreasing',
                    'globular',
                    'increasingLin1',
                    'increasingLin1OutliersInc',
                    'increasingLin1OutliersDec'
                ],
                default: 'increasing'
            },
            learningRate: { label: 'Learning Rate', min: 0, max: 1 }
        }
    })

    // Initialize the linear regression
    const regression = new LinearRegression(config)
    let generator: Generator

    // Initialize the experiment runner wrapper
    const wrapper = new StepAlgorithmWrapper(ref as HTMLElement, regression, undefined, () => {
        if (regression.getIteration() === 0) {
            const [input, output, ds] = getDataset(regression.config.dataset as string)
            plot.dataUpdate(ds)
            generator = regression.fitAsync(input, output)
        }

        const result = generator.next()

        const lineData = regression.predict([0, 1])
        lineRegressionPlot.dataUpdate([
            { x: 0, y: lineData[0] },
            { x: 1, y: lineData[1] }
        ])

        functionGraph.dataUpdate(
            regression.config.lossHistory.slice(-400).map((val, index) => ({
                x: index,
                y: val
            }))
        )

        return result.done
    })

    // Append visuals to main view of the container
    wrapper.mainView.appendChild(container)
})()
