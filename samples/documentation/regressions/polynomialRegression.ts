/* eslint-disable no-new */
import Random from '@ascentcore/dataspot/math/random'
import LinePlot from '@ascentcore/dataspot/visualizations/d3/lineplot'
import ScatterPlot from '@ascentcore/dataspot/ui/visualization/scatterPlot'
import LineGraph from '@ascentcore/dataspot/ui/visualization/lineGraph'

import { PolynomialRegressionConfig, PolynomialRegression } from '@ascentcore/dataspot/regressions/polynomialRegression'

export default (async () => {
    Random.seed('polynomialRegression')

    let ref: HTMLElement = document.querySelector(`[data-ref="documentation/linearRegression"]`)
    if (!ref) {
        ref = document.createElement('div')
        document.body.appendChild(ref)
    }

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
            })),
            'line-elem'
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
})()
