import React, { useEffect, useRef, useState } from 'react'
import { mseCostFunction } from '../../lib/functions/optimizers'
import PolynomialRegression from '../../lib/regressions/polynomialRegression'
import { predictMultivariable, transformToPolynomialInput } from '../../lib/regressions/utilities'
import LinePlot from '../../lib/visualizations/svg/lineplot'
import Scatter from '../../lib/visualizations/svg/scatter'

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
    const svgRef = useRef<HTMLDivElement | null>(null)

    const plot = async () => {
        if (svgRef.current) {
            const scatterPlot = new Scatter({ width, height })
            scatterPlot.setContainer(svgRef.current)
            scatterPlot.setup()
            const mappedData = []
            for (let i = 0; i < data[0].length; i++) {
                mappedData.push({ x: data[0][i], y: data[1][i], r: 3 })
            }
            scatterPlot.dataUpdate(mappedData)

            const linePlot = new LinePlot({ width, height })
            linePlot.setContainer(svgRef.current)
            linePlot.setup()

            // const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            // const input = [1, 1.5, 2, 2.5, 3, 4, 5, 5.9, 7, 8, 8.5, 9, 9.5]
            // const input = [1, 1.2, 1.4, 1.6, 1.8, 2, 3, 4, 4.2, 4.4, 4.6, 4.8, 5]
            const input = [0, 0.5, 0.9, 1.2, 1.8, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            const regression = PolynomialRegression.fit(
                input,
                // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                // [2, 1.25, 0.75, 0.25, 0, 0, 0.5, 1, 2, 3, 4, 5, 6],
                // [6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6],
                [0, 0.5, 1, 1.3, 1.75, 2.2, 2.5, 2.8, 3, 3, 3, 3.25, 3.5, 4, 4.75],
                3,
                0.1,
                5000,
                mseCostFunction
            )
            let doneRegression = false
            let regressionValue = { weights: [], costHistory: [] }

            const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

            const transformedInput = transformToPolynomialInput(input, 3)

            while (!doneRegression) {
                const regressionResult = regression.next()
                regressionValue = regressionResult.value

                doneRegression = regressionResult.done || false
                console.log(regressionValue)
                const updatedPrediction = predictMultivariable(transformedInput, regressionValue.weights)
                const iterator = Array.from(Array(input.length).keys())

                linePlot.dataUpdate(
                    // eslint-disable-next-line no-loop-func
                    iterator.map((i: number) => {
                        return {
                            x: input[i],
                            y: updatedPrediction[i]
                        }
                    })
                )

                // eslint-disable-next-line no-await-in-loop
                await snooze(500)
            }

            let iter = 0
            const costPlot = new LinePlot({ width, height })
            costPlot.setContainer(svgRef.current)
            costPlot.setup()
            costPlot.dataUpdate(
                regressionValue.costHistory.map((cost: number) => {
                    return { x: iter++, y: cost }
                })
            )
        }
    }

    useEffect(() => {
        plot()
    }, [svgRef])

    return (
        <div>
            <h4>{name}</h4>
            <div ref={svgRef}></div>
        </div>
    )
}

const reps = [
    { name: 'Linear Regression', data: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]] },
    {
        name: 'Polynomial Regression',
        data: [[1, 1.5, 2, 2.5, 3, 4, 5, 5.9, 7, 8, 8.5, 9, 9.5], [2, 1.25, 0.75, 0.25, 0, 0, 0.5, 1, 2, 3, 4, 5, 6]]
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
