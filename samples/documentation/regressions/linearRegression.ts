/* eslint-disable no-new */
import Random from '@ascentcore/dataspot/math/random'
import { LinearRegressionConfig, LinearRegression } from '@ascentcore/dataspot/regressions/linearRegression'
import Axis from '@ascentcore/dataspot/visualizations/d3/axis'
import LinePlot from '@ascentcore/dataspot/visualizations/d3/lineplot'
import Scatter from '@ascentcore/dataspot/visualizations/d3/scatter'
import SVGMultipleVisualization from '@ascentcore/dataspot/visualizations/d3/svgmultiple'
import Title from '@ascentcore/dataspot/visualizations/d3/title'
import LineGraph from '@ascentcore/dataspot/ui/visualization/lineGraph'

export default (async () => {
    Random.seed('regressionsample')

    let ref: HTMLElement = document.querySelector(`[data-ref="documentation/linearRegression"]`)
    if (!ref) {
        ref = document.createElement('div')
        document.body.appendChild(ref)
    }
    const scatter = new Scatter({}, 'scatter-elem')
    const axis = new Axis({}, 'axis-elem')
    const title = new Title({ text: `Linear Regression` })
    const lineRegressionPlot = new LinePlot({}, 'line-elem')

    const regressionVis = new SVGMultipleVisualization(
        {
            domainX: { min: 0, max: 1 },
            domainY: { min: 0, max: 1 },
            margin: { top: 30, left: 15, right: 15, bottom: 20 },
            width: 200,
            height: 200
        },
        'plotElement',
        [scatter, title, axis, lineRegressionPlot]
    )
    regressionVis.setContainer(ref)
    regressionVis.setup()

    const input = new Array(100).fill(1).map((val, index) => (index > 0.3 && index < 0.6 ? index : Math.random()))
    const output = input.map((i) => Math.max(i, 0.2) - 0.2 + Math.random() * 0.4)

    const ds: any = input.reduce((memo, v, i) => {
        memo.push({ x: v, y: output[i], fixedRadius: 2 })
        return memo
    }, [])

    regressionVis.dataUpdate(ds, 'scatter-elem')
    regressionVis.dataUpdate(ds, 'axis-elem')

    const config = new LinearRegressionConfig()
    config.learningRate = 0.5
    config.convergenceHistorySize = 5
    config.iterations = 10000
    const linReg = new LinearRegression(config)
    const gen = linReg.fitAsync(input, output)
    const functionGraph = new LineGraph(ref, 400, 200)
    function step() {
        const res = gen.next()
        const lineData = linReg.predict([0, 1])
        regressionVis.dataUpdate(
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
