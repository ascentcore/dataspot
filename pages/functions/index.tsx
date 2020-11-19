import React, { useEffect, useRef, useState } from 'react'

import { relu, identity, sigmoid } from '../../lib/functions/activations'
import LinePlot from '../../lib/visualizations/svg/lineplot'
import Axis from '../../lib/visualizations/svg/axis'
import SVGMultipleVisualization from '../../lib/visualizations/svg/svgmultiple'

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

    useEffect(() => {
        if (svgRef.current) {
            const axisElemId = 'axis-elem'
            const lineElemId = 'line-elem'
            const functionElemId = 'function-elem'

            const axis = new Axis({}, axisElemId)
            const line = new LinePlot({}, lineElemId)
            const plot = new SVGMultipleVisualization({ width, height }, functionElemId, [axis, line])
            plot.setContainer(svgRef.current)
            plot.setup()
            const mappedData = data.map((d: number[]) => {
                return { x: d[0], y: d[1] }
            })
            plot.dataUpdate(mappedData, axisElemId)
            plot.dataUpdate(mappedData, lineElemId)
        }
    }, [svgRef])

    return (
        <div>
            <h4>{name}</h4>
            <div ref={svgRef}></div>
        </div>
    )
}

function getData(activationFn: (x: number) => number, min = -1, max = 1, step = 0.01) {
    const data = []
    for (let i = min; i < max; i += step) {
        data.push([i, activationFn(i), 2])
    }

    return data
}

const reps = [
    { name: 'Relu', data: getData(relu) },
    { name: 'Identity', data: getData(identity) },
    { name: 'Sigmoid', data: getData(sigmoid, -10, 10) }
]

export default function Activations() {
    // const reluData = getData(relu)

    const [vis] = useState(reps)

    return (
        <div>
            <h3>Activation Functions</h3>
            {vis.map((val) => (
                <Representation key={val.name} data={val.data} name={val.name} width={300} height={200} />
            ))}
        </div>
    )
}
