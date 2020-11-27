import { useEffect, useRef, useState } from 'react'

import generateArcDataset from '../../lib/dataset/clustering/arcDataset'
import generateBlobDataset from '../../lib/dataset/clustering/blobDataset'
import generateConcentricRingsDataset from '../../lib/dataset/clustering/concentricRingsDataset'

import Scatter from '../../lib/visualizations/d3/scatter'
import Axis from '../../lib/visualizations/d3/axis'
import SVGMultipleVisualization from '../../lib/visualizations/d3/svgmultiple'
import '../../samples/documentation/datasets/clustering'

function Representation({ data, name, width, height }) {
    const svgRef = useRef(null)
    const [plotRef, setPlotRef] = useState(null)

    useEffect(() => {
        if (plotRef) {
            plotRef.destroy()
        }
        const axisElemClass = 'axis-elem'
        const scatterElemClass = 'scatter-elem'
        const datasetElemClass = 'dataset-elem'

        const axis = new Axis({}, axisElemClass)
        const scatter = new Scatter({}, scatterElemClass)

        const datasetPlot = new SVGMultipleVisualization({ width, height }, datasetElemClass, [axis, scatter])
        datasetPlot.setContainer(svgRef.current)
        datasetPlot.setup()
        const mappedData = data.map((d) => {
            return { x: d[0], y: d[1] }
        })
        datasetPlot.dataUpdate(mappedData, axisElemClass)
        datasetPlot.dataUpdate(mappedData, scatterElemClass)
        setPlotRef(datasetPlot)
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
