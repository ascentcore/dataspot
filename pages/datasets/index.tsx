import { useEffect, useRef, useState } from 'react'

import generateArcDataset from '../../lib/dataset/arcDataset'
import generateBlobDataset from '../../lib/dataset/blobDataset'
import generateConcentricRingsDataset from '../../lib/dataset/concentricRingsDataset'

import Scatter from '../../lib/visualizations/svg/scatter'

function Representation({ data, name, width, height }) {
    const svgRef = useRef(null)

    useEffect(() => {
        const plot = new Scatter({ width, height })
        plot.setContainer(svgRef.current)
        plot.setup()
        plot.dataUpdate(
            data.map((d) => {
                return { x: d[0], y: d[1] }
            })
        )
    }, [svgRef])

    return (
        <div>
            <h4>{name}</h4>
            <div ref={svgRef} width={width} height={height}></div>
        </div>
    )
}

const reps = [
    { name: 'arc', data: generateArcDataset() },
    { name: 'blob', data: generateBlobDataset() },
    { name: 'concentric', data: generateConcentricRingsDataset() }
]

export default function Activations() {
    // const reluData = getData(relu)

    const [vis] = useState(reps)

    return (
        <div>
            <h3>Clustering Datasets</h3>
            {vis.map((val) => (
                <Representation key={val.name} data={val.data} name={val.name} width={300} height={200} />
            ))}
        </div>
    )
}
