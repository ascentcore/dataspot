/* eslint-disable no-new */
import Random from '@ascentcore/dataspot/math/random'
import { LinearRegressionConfig, LinearRegression } from '@ascentcore/dataspot/regressions/linearRegression'
import LinePlot from '@ascentcore/dataspot/visualizations/d3/lineplot'
import LineGraph from '@ascentcore/dataspot/ui/visualization/lineGraph'
import ScatterPlot from '@ascentcore/dataspot/ui/visualization/scatterPlot'
import Container from '@ascentcore/dataspot/ui/container'

export default (async () => {
    Random.seed('regressionsample')

    const ref: HTMLElement = Container.getRootContainer('[data-ref="documentation/linearRegression"]')
    const plotConfig = { width: 300, height: 300, domainX: { min: 0, max: 1 }, domainY: { min: 0, max: 1 } }
    const lineRegressionPlot = new LinePlot(plotConfig, 'line-elem')
    const plot = new ScatterPlot(ref, plotConfig, [lineRegressionPlot])

    const input = new Array(100).fill(1).map((val, index) => (index > 0.3 && index < 0.6 ? index : Math.random()))
    const output = input.map((i) => Math.max(i, 0.2) - 0.2 + Math.random() * 0.4)

    const ds: any = input.reduce((memo: any[], v, i) => {
        memo.push({ x: v, y: output[i], fixedRadius: 2 })
        return memo
    }, [])

    plot.dataUpdate(ds)

    const config = new LinearRegressionConfig()
    config.learningRate = 0.5
    config.convergenceHistorySize = 5
    config.iterations = 10000
    const linReg = new LinearRegression(config)
    const gen = linReg.fitAsync(input, output)
    const functionGraph = new LineGraph(ref, 400, 300, 'Loss')
    function step() {
        const res = gen.next()
        const lineData = linReg.predict([0, 1])
        lineRegressionPlot.dataUpdate(
            [
                { x: 0, y: lineData[0] },
                { x: 1, y: lineData[1] }
            ],
            'line-elem'
        )

        functionGraph.dataUpdate(
            linReg.config.lossHistory.slice(-100).map((val, index) => ({
                x: index,
                y: val
            }))
        )

        if (!res.done) {
            setTimeout(() => step(), 50)
        }
    }

    step()
})()
