/* eslint-disable no-new */
import Random from '@ascentcore/dataspot/math/random'
import { LinearRegressionConfig, LinearRegression } from '@ascentcore/dataspot/regressions/linearRegression'
import Axis from '@ascentcore/dataspot/visualizations/d3/axis'
import LinePlot from '@ascentcore/dataspot/visualizations/d3/lineplot'
import Scatter from '@ascentcore/dataspot/visualizations/d3/scatter'
import SVGMultipleVisualization from '@ascentcore/dataspot/visualizations/d3/svgmultiple'
import Title from '@ascentcore/dataspot/visualizations/d3/title'

export default (async () => {
    Random.seed('regressionsample')

    const input = new Array(100).fill(1).map((val, index) => (index > 0.3 && index < 0.6 ? index : Math.random()))
    const output = input.map((i) => i - 0.2 + Math.random() * 0.4)

    const config = new LinearRegressionConfig()
    config.learningRate = 0.1
    config.convergenceHistorySize = 5
    config.iterations = 10000
    const linReg = new LinearRegression(config)
    linReg.fit(input, output)
    console.log(linReg.getIteration())

    const ref: HTMLElement = document.querySelector(`[data-ref="documentation/linearRegression"]`) || document.body
    const scatter = new Scatter({}, 'scatter-elem')
    const axis = new Axis({}, 'axis-elem')
    const title = new Title({ text: `Linear Regression` })
    const lineRegressionPlot = new LinePlot({}, 'line-elem')

    const visKMeans = new SVGMultipleVisualization(
        { margin: { top: 30, left: 15, right: 15, bottom: 20 }, width: 200, height: 200 },
        'plotElement',
        [scatter, title, axis, lineRegressionPlot]
    )
    visKMeans.setContainer(ref)
    visKMeans.setup()

    const ds: any = input.reduce((memo, v, i) => {
        memo.push({ x: v, y: output[i], fixedRadius: 2 })
        return memo
    }, [])

    const lineData = linReg.predict([1, 9])

    visKMeans.dataUpdate(ds, 'scatter-elem')
    visKMeans.dataUpdate(ds, 'axis-elem')
    visKMeans.dataUpdate(
        [
            { x: 1, y: lineData[0] },
            { x: 9, y: lineData[1] }
        ],
        'line-elem'
    )
})()
