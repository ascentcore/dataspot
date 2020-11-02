import { useEffect, useRef, useState } from 'react'
import { relu, identity, sigmoid } from '../../../dist/functions/activations'
import LinePlot from '../../../dist/visualizations/svg/lineplot'

function Representation({ data, name, width, height }) {
    const svgRef = useRef(null)

    useEffect(() => {
        const plot = new LinePlot({width, height})
        plot.setContainer(svgRef.current)
        plot.setup()
        plot.dataUpdate(data)
    }, [svgRef])

    return (
        <div>
            <h4>{name}</h4>
            <div ref={svgRef} width={width} height={height}></div>
        </div>
    )
}

function getData(activationFn, min = -1, max = 1, step = 0.01) {
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
