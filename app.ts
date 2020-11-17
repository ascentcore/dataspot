import Lab from './lib/lab'
import SVGVisualizationWrapper from './lib/visualizations/svg/svgvisualizationwrapper'
import Scatter from './lib/visualizations/svg/scatter'
import SVGMultipleVisualization from './lib/visualizations/svg/svgmultiple'
import LinePlot from './lib/visualizations/svg/lineplot'
import Axis from './lib/visualizations/svg/axis'
import LinearRegression from './lib/regressions/linearRegression'
import { mseCostFunction } from './lib/functions/optimizers'

const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
;(async () => {
    const lab = new Lab('research')
    try {
        await lab.connected
    } catch (err) {
        console.log('Unable to connect to lab...')
    }

    const data = [[1, 2, 3, 4, 5, 6, 7, 8], [1, 4, 9, 16, 25, 36, 49, 64]]
    const scatterElemSVGId = 'scatter-elem'
    const lineElemSVGId = 'line-elem'
    const axisId = 'axis-elem'
    const scatterPlot = new Scatter({}, scatterElemSVGId)
    const linePlot = new LinePlot({}, lineElemSVGId)
    const axis = new Axis({}, axisId)

    const multiplePlot = new SVGMultipleVisualization(
        {
            domainX: { min: 0, max: 9 },
            domainY: { min: 0, max: 65 }
        },
        '',
        [axis, scatterPlot, linePlot]
    )

    const vis1 = new SVGVisualizationWrapper(multiplePlot, 'regression-plot')

    const mappedData = []
    for (let i = 0; i < data[0].length; i++) {
        mappedData.push({ x: data[0][i], y: data[1][i], r: 3 })
    }
    vis1.dataUpdate(mappedData, scatterElemSVGId)

    const input = [1, 2, 3, 4, 5, 6, 7, 8]
    const linearRegression = LinearRegression.fit(
        input,
        [1, 4, 9, 16, 25, 36, 49, 64],
        2,
        1,
        0.001,
        10,
        mseCostFunction
    )
    let doneRegression = false
    let regressionValue = { updatedWeight: 0, updatedBias: 0, costHistory: [] }

    while (!doneRegression) {
        const regressionResult = linearRegression.next()
        regressionValue = regressionResult.value

        doneRegression = regressionResult.done || false

        vis1.dataUpdate(
            // eslint-disable-next-line no-loop-func
            input.map((i: number) => {
                return { x: i, y: i * regressionValue.updatedWeight + regressionValue.updatedBias }
            }),
            lineElemSVGId
        )

        // eslint-disable-next-line no-await-in-loop
        await snooze(500)
    }
})()
