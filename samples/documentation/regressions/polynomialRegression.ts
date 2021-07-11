/* eslint-disable no-new */
import Random from '@ascentcore/dataspot/math/random'
import LinePlot from '@ascentcore/dataspot/visualizations/d3/lineplot'
import ScatterPlot from '@ascentcore/dataspot/ui/visualization/scatterPlot'
import LineGraph from '@ascentcore/dataspot/ui/visualization/lineGraph'
import Container from '@ascentcore/dataspot/ui/container'
import { PolynomialRegressionConfig, PolynomialRegression } from '@ascentcore/dataspot/regressions/polynomialRegression'

import StepAlgorithmWrapper from '@ascentcore/dataspot/wrappers/stepAlgorithmWrapper'

function getDataset(type: string): any {
    let input: number[][] = new Array(100).fill(1)
    let output: number[]

    switch (type) {
        default:
            input = input.map((val, index) => [index / 100])
            output = input.map((i: any) => Math.cos(i * Math.PI * 1.5) * 0.5 + 0.4 + Math.random() * 0.1)
            break
    }

    const ds = input.reduce((memo: any[], v, i) => {
        memo.push({ x: v, y: output[i], fixedRadius: 2 })
        return memo
    }, [])

    return [input, output, ds]
}

export default (async () => {
    Random.seed('polynomialRegression')

    const ref: HTMLElement = Container.getRootContainer(`[data-ref="documentation/polynomialRegression"]`)

    // Create visualizations
    const container = document.createElement('div')
    const plotConfig = { width: 400, height: 300, domainX: { min: 0, max: 1 }, domainY: { min: 0, max: 1 } }
    const lineRegressionPlot = new LinePlot(plotConfig, 'line-elem')
    const plot = new ScatterPlot(container, plotConfig, [lineRegressionPlot])
    const functionGraph = new LineGraph(container, 400, 300, 'Loss')

    // Initialize regression
    const config = new PolynomialRegressionConfig()
    config.degree = 10
    config.learningRate = 0.5
    config.convergenceHistorySize = 5
    config.convergenceRoundingPrecision = 8
    config.iterations = 10000

    // Setup configuration ui definitions
    Object.assign(config.constructor, {
        definitions: {
            dataset: {
                label: 'Selection Dataset',
                options: ['increasing', 'decreasing', 'globular'],
                default: 'increasing'
            },
            learningRate: { label: 'Learning Rate', min: 0, max: 1 },
            degree: { label: 'Degree', min: 0, max: 1000 }
        }
    })

    // Initialize the linear regression
    const regression = new PolynomialRegression(config)
    let generator: Generator

    // Initialize the experiment runner wrapper
    const wrapper = new StepAlgorithmWrapper(ref as HTMLElement, regression, () => {
        if (regression.getIteration() === 0) {
            const [input, output, ds] = getDataset(regression.config.dataset as string)
            plot.dataUpdate(ds)
            generator = regression.fitAsync(input, output)
        }

        const result = generator.next()
        const predictInput = new Array(100).fill(0).map((_, i) => i / 100)
        const lineData = regression.predict(predictInput)
        lineRegressionPlot.dataUpdate(
            predictInput.map((v, i) => ({
                x: v,
                y: lineData[i]
            }))
        )

        functionGraph.dataUpdate(
            regression.config.lossHistory.slice(-100).map((val, index) => ({
                x: index,
                y: val
            }))
        )

        return result.done
    })

    // Append visuals to main view of the container
    wrapper.mainView.appendChild(container)
    /**

    const plotConfig = { width: 300, height: 300, domainX: { min: 0, max: 1 }, domainY: { min: 0, max: 1 } }
    const lineRegressionPlot = new LinePlot(plotConfig, 'line-elem')
    const plot = new ScatterPlot(ref, plotConfig, [lineRegressionPlot])

    const input = new Array(100).fill(1).map((val, index) => [index / 100])
    const output = input.map((i: any) => Math.cos(i * Math.PI * 1.5) * 0.4 + 0.4 + Math.random() * 0.1)

    const ds: any = input.reduce((memo: any, v, i) => {
        memo.push({ x: v[0], y: output[i], fixedRadius: 2 })
        return memo
    }, [])

    plot.dataUpdate(ds)

    const config = new PolynomialRegressionConfig()
    config.degree = 10
    config.learningRate = 0.5
    config.convergenceHistorySize = 5
    config.convergenceRoundingPrecision = 8
    config.iterations = 10000
    const polyReg = new PolynomialRegression(config)
    const gen = polyReg.fitAsync(input, output)

    const functionGraph = new LineGraph(ref, 400, 300, 'Loss')
    function step() {
        const res = gen.next()
        const predictInput = new Array(100).fill(0).map((_, i) => i / 100)

        const lineData = polyReg.predict(predictInput)

        lineRegressionPlot.dataUpdate(
            predictInput.map((v, i) => ({
                x: v,
                y: lineData[i]
            }))
        )

        functionGraph.dataUpdate(
            polyReg.config.lossHistory.slice(-100).map((val, index) => ({
                x: index,
                y: val
            }))
        )

        if (!res.done) {
            window.requestAnimationFrame(() => {
                step()
            })
        }
    }

    step()
    */
})()
