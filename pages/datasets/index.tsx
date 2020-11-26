import { useEffect, useRef, useState } from 'react'

import generateArcDataset from '../../lib/dataset/arcDataset'
import generateBlobDataset from '../../lib/dataset/blobDataset'
import generateConcentricRingsDataset from '../../lib/dataset/concentricRingsDataset'

import Scatter from '../../lib/visualizations/d3/scatter'
import Axis from '../../lib/visualizations/d3/axis'
import SVGMultipleVisualization from '../../lib/visualizations/d3/svgmultiple'

function Representation({ data, name, width, height }) {
    const svgRef = useRef(null)

    useEffect(() => {
        const axisElemClass = 'axis-elem'
        const scatterElemClass = 'scatter-elem'
        const datasetElemClass = 'dataset-elem'

        const axis = new Axis({}, axisElemClass)
        const scatter = new Scatter({}, scatterElemClass)

        const plot = new SVGMultipleVisualization({ width, height }, datasetElemClass, [axis, scatter])
        plot.setContainer(svgRef.current)
        plot.setup()
        const mappedData = data.map((d) => {
            return { x: d[0], y: d[1] }
        })
        plot.dataUpdate(mappedData, axisElemClass)
        plot.dataUpdate(mappedData, scatterElemClass)
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
