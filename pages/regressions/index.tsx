import React, { useEffect, useRef, useState } from 'react'
import { mseCostFunction } from '../../lib/functions/optimizers'
import LinearRegression from '../../lib/regressions/linearRegression'
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
            const scatterPlot = new Scatter({
                width,
                height,
                domainX: { min: 0, max: 9 },
                domainY: { min: 0, max: 65 }
            })
            scatterPlot.setContainer(svgRef.current)
            scatterPlot.setup()
            const mappedData = []
            for (let i = 0; i < data[0].length; i++) {
                mappedData.push({ x: data[0][i], y: data[1][i], r: 3 })
            }
            scatterPlot.dataUpdate(mappedData)

            const linePlot = new LinePlot({ width, height, domainX: { min: 0, max: 9 }, domainY: { min: 0, max: 65 } })
            linePlot.setContainer(svgRef.current)
            linePlot.setup()

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

                linePlot.dataUpdate(
                    // eslint-disable-next-line no-loop-func
                    input.map((i: number) => {
                        return { x: i, y: i * regressionValue.updatedWeight + regressionValue.updatedBias }
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
