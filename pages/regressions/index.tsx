import React, { useEffect, useRef, useState } from 'react'
import { crossEntropyCostFunction, mseCostFunction } from '../../lib/functions/optimizers'
import LinearRegression from '../../lib/regressions/linearRegression'
import LinePlot from '../../lib/visualizations/d3/lineplot'
import Scatter from '../../lib/visualizations/d3/scatter'
import SVGMultipleVisualization from '../../lib/visualizations/d3/svgmultiple'
import Axis from '../../lib/visualizations/d3/axis'
import { VectorUtils } from '../../lib/utils/math-utils'
import PolynomialRegression from '../../lib/regressions/polynomialRegression'
import predictionSinglevariable, {
    decisionBoundary,
    predictMultivariable,
    transformToPolynomialInput,
    transposeAndNormalize
} from '../../lib/regressions/utilities'
import LogisticRegression from '../../lib/regressions/logisticRegression'
import { sigmoid } from '../../lib/functions/activations'

function Representation({
    data,
    name,
    width,
    height
}: {
    data: number[][]
    name: string
    width: number
    height: number
}) {
    const regressionRef = useRef<HTMLDivElement | null>(null)
    const costRef = useRef<HTMLDivElement | null>(null)

    const [regressionPlotRef] = useState(null)
    const [costPlotRef] = useState(null)

    const plot = async () => {
        if (regressionPlotRef) {
            regressionPlotRef.destroy()
        }
        if (costPlotRef) {
            costPlotRef.destroy()
        }
        if (regressionRef.current) {
            if (name === 'Logistic Regression') {
                const axisElemClass = 'axis-elem'
                const scatterElemClass = 'scatter-elem'

                const axis = new Axis({}, axisElemClass)
                const scatter = new Scatter({}, scatterElemClass)

                const multiplePlot = new SVGMultipleVisualization(
                    {
                        width,
                        height,
                        domainX: { min: 0, max: 6 },
                        domainY: { min: 0, max: 6 }
                    },
                    'regression-elem',
                    [axis, scatter]
                )
                multiplePlot.setContainer(regressionRef.current)
                multiplePlot.setup()
                const mappedData = data[0].map((d) => {
                    return { x: d[0], y: d[1], r: 3 }
                })
                multiplePlot.dataUpdate(mappedData, axisElemClass)
                multiplePlot.dataUpdate(mappedData, scatterElemClass)

                const regression = LogisticRegression.fit(data[0], data[1], 0.1, 10, crossEntropyCostFunction)
                let doneRegression = false
                let regressionValue = { biasAndWeights: [], costHistory: [] }

                const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

                const transformedInput: number[][] = transposeAndNormalize(data[0])

                while (!doneRegression) {
                    const regressionResult = regression.next()
                    regressionValue = regressionResult.value

                    doneRegression = regressionResult.done || false
                    const updatedPrediction = decisionBoundary(
                        predictMultivariable(transformedInput, regressionValue.biasAndWeights).map((pred) =>
                            sigmoid(pred)
                        )
                    )
                    const iterator = Array.from(Array(data[0].length).keys())
                    multiplePlot.dataUpdate(
                        // eslint-disable-next-line no-loop-func
                        iterator.map((i: number) => {
                            return {
                                x: data[0][i][0],
                                y: data[0][i][1],
                                r: 3,
                                color: updatedPrediction[i] === 0 ? 1 : 2
                            }
                        }),
                        scatterElemClass
                    )

                    // eslint-disable-next-line no-await-in-loop
                    await snooze(500)
                }
            } else {
                const scatterElemClass = 'scatter-elem'
                const lineElemClass = 'line-elem'
                const axisElemClass = 'axis-elem'

                const scatterRegressionPlot = new Scatter({}, scatterElemClass)
                const lineRegressionPlot = new LinePlot({}, lineElemClass)
                const axisRegression = new Axis({}, axisElemClass)

                const multiplePlot = new SVGMultipleVisualization(
                    {
                        width,
                        height,
                        domainX: { min: 0, max: VectorUtils.max(data[0]) },
                        domainY: { min: 0, max: VectorUtils.max(data[1]) }
                    },
                    'regression-elem',
                    [axisRegression, scatterRegressionPlot, lineRegressionPlot]
                )
                multiplePlot.setContainer(regressionRef.current)
                multiplePlot.setup()

                const mappedData = []
                for (let i = 0; i < data[0].length; i++) {
                    mappedData.push({ x: data[0][i], y: data[1][i], r: 3 })
                }
                multiplePlot.dataUpdate(mappedData, scatterElemClass)

                const regression =
                    name === 'Linear Regression'
                        ? LinearRegression.fit(data[0], data[1], 0.1, 2, mseCostFunction)
                        : PolynomialRegression.fit(data[0], data[1], 2, 0.1, 2, mseCostFunction)
                let doneRegression = false
                let regressionValue = { biasAndWeights: [], costHistory: [] }

                const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

                const transformedInput: number[] | number[][] =
                    name === 'Linear Regression'
                        ? VectorUtils.normalize(data[0])
                        : transposeAndNormalize(transformToPolynomialInput(data[0], 2))

                while (!doneRegression) {
                    const regressionResult = regression.next()
                    regressionValue = regressionResult.value

                    doneRegression = regressionResult.done || false
                    const updatedPrediction = Array.isArray(transformedInput[0])
                        ? predictMultivariable(transformedInput, regressionValue.biasAndWeights)
                        : predictionSinglevariable(transformedInput, regressionValue.biasAndWeights)
                    const iterator = Array.from(Array(data[0].length).keys())
                    multiplePlot.dataUpdate(
                        // eslint-disable-next-line no-loop-func
                        iterator.map((i: number) => {
                            return {
                                x: data[0][i],
                                y: updatedPrediction[i]
                            }
                        }),
                        lineElemClass
                    )

                    // eslint-disable-next-line no-await-in-loop
                    await snooze(500)
                }

                let iter = 0
                const axisCost = new Axis({}, axisElemClass)
                const lineCost = new LinePlot({}, lineElemClass)
                const costPlot = new SVGMultipleVisualization({ width, height }, 'const-elem', [axisCost, lineCost])
                costPlot.setContainer(costRef.current)
                costPlot.setup()
                const mappedCostData = regressionValue.costHistory.map((cost: number) => {
                    return { x: iter++, y: cost }
                })
                costPlot.dataUpdate(mappedCostData, axisElemClass)
                costPlot.dataUpdate(mappedCostData, lineElemClass)
            }
        }
    }

    useEffect(() => {
        plot()
    }, [regressionRef])

    return (
        <div>
            <h4>{name}</h4>
            <div ref={regressionRef}></div>
            <div ref={costRef}></div>
        </div>
    )
}

const reps = [
    { name: 'Linear Regression', data: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15]] },
    {
        name: 'Polynomial Regression',
        data: [[1, 1.5, 2, 2.5, 3, 4, 5, 5.9, 7, 8, 8.5, 9, 9.5], [2, 1.25, 0.75, 0.25, 0, 0, 0.5, 1, 2, 3, 4, 5, 6]]
    },
    {
        name: 'Logistic Regression',
        data: [
            [[1, 1], [1.5, 1], [3, 1], [4, 2], [6, 2], [1.5, 3], [3, 3], [2, 4], [3.5, 4], [4.5, 4], [4.5, 5], [5, 6]],
            [0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1]
        ]
    }
]

export default function Regressions() {
    const [vis] = useState(reps)

    return (
        <div>
            <h3>Regressions</h3>
            {vis.map((val) => (
                <Representation key={val.name} data={val.data} name={val.name} width={300} height={200} />
            ))}
        </div>
    )
}
