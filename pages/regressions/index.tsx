import React, { useEffect, useRef, useState } from 'react'
import { mseCostFunction } from '../../lib/functions/optimizers'
import LinearRegression from '../../lib/regressions/linearRegression'
import LinePlot from '../../lib/visualizations/d3/lineplot'
import Scatter from '../../lib/visualizations/d3/scatter'
import SVGMultipleVisualization from '../../lib/visualizations/d3/svgmultiple'
import Axis from '../../lib/visualizations/d3/axis'

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

    const plot = async () => {
        if (regressionRef.current) {
            const scatterElemId = 'scatter-elem'
            const lineElemId = 'line-elem'
            const axisElemId = 'axis-elem'

            const scatterRegressionPlot = new Scatter({}, scatterElemId)
            const lineRegressionPlot = new LinePlot({}, lineElemId)
            const axisRegression = new Axis({}, axisElemId)

            const multiplePlot = new SVGMultipleVisualization(
                {
                    width,
                    height,
                    domainX: { min: 0, max: 9 },
                    domainY: { min: 0, max: 65 }
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
            multiplePlot.dataUpdate(mappedData, scatterElemId)

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

            const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

            while (!doneRegression) {
                const regressionResult = linearRegression.next()
                regressionValue = regressionResult.value

                doneRegression = regressionResult.done || false

                multiplePlot.dataUpdate(
                    // eslint-disable-next-line no-loop-func
                    input.map((i: number) => {
                        return { x: i, y: i * regressionValue.updatedWeight + regressionValue.updatedBias }
                    }),
                    lineElemId
                )

                // eslint-disable-next-line no-await-in-loop
                await snooze(500)
            }

            let iter = 0
            const axisCost = new Axis({}, axisElemId)
            const lineCost = new LinePlot({}, lineElemId)
            const costPlot = new SVGMultipleVisualization({ width, height }, 'const-elem', [axisCost, lineCost])
            costPlot.setContainer(costRef.current)
            costPlot.setup()
            const mappedCostData = regressionValue.costHistory.map((cost: number) => {
                return { x: iter++, y: cost }
            })
            costPlot.dataUpdate(mappedCostData, axisElemId)
            costPlot.dataUpdate(mappedCostData, lineElemId)
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

const reps = [{ name: 'Linear Regression', data: [[1, 2, 3, 4, 5, 6, 7, 8], [1, 4, 9, 16, 25, 36, 49, 64]] }]

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
