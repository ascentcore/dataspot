import * as d3 from 'd3'
import { useState, useEffect, useRef } from 'react'
import ClusteringDatasets from '@ascentcore/dataspot/datasets/clustering'
import HierarchyPlot from '@ascentcore/dataspot/visualizations/d3/hierarchy'
import { euclideanDistance } from '@ascentcore/dataspot/math/distances'
import hierarchy, { hValueCut, singleLinkage } from '@ascentcore/dataspot/hierarchy/agglomerative'
import Scatter from '@ascentcore/dataspot/visualizations/d3/scatter'
import { TwoDPointScatter } from '@ascentcore/dataspot/models/types'

const width = 500
const height = 400

const blobData = ClusteringDatasets.blob(20)
const result = hierarchy(
    // blobData.map((row: any[], i) => ({ index: row.map((i) => roundToPrecision(i, 2)).join(','), points: [row] })),
    blobData.map((row: any[], i) => ({ index: `${i}`, points: [row] })),
    singleLinkage,
    euclideanDistance
)

const palette = d3.scaleOrdinal(d3.schemeTableau10)

export default function Blob() {
    const containerRef = useRef(null)
    const containerRef2 = useRef(null)
    const [value, setValue] = useState(null)
    const [scatterPlotRef, setScatterPlotRef] = useState(null)
    const [hierarchyPlotRef, setHierarchyPlotRef] = useState(null)

    useEffect(() => {
        // const clusters = hCut(result, value)
        const clusters = hValueCut(result, result.distances[0] - value)
        for (let i = 0; i < clusters.length; i++) {
            clusters[i].forEach((st) => {
                d3.selectAll(`[data-id="${st}"]`).attr('fill', palette(`${i}`))
                d3.selectAll(`[data-id="${st}"] circle, [data-id="${st}"] text`).attr('fill', palette(`${i}`))
            })
        }
    }, [value])

    useEffect(() => {
        if (scatterPlotRef) {
            scatterPlotRef.destroy()
        }
        const scatterPlot = new Scatter({ width, height })
        scatterPlot.setContainer(containerRef.current)
        scatterPlot.setup()
        setScatterPlotRef(scatterPlot)
        scatterPlot.dataUpdate(
            blobData.map((row, i) => ({ id: i, x: row[0], y: row[1], r: 0.005 } as TwoDPointScatter))
        )
        setValue(0)
    }, [containerRef])

    useEffect(() => {
        if (hierarchyPlotRef) {
            hierarchyPlotRef.destroy()
        }
        const hierarchyPlot = new HierarchyPlot({ width: 500, height: 1500, layout: 'horizontal', tree: 'cluster' })
        hierarchyPlot.setContainer(containerRef2.current)
        hierarchyPlot.setup()
        setHierarchyPlotRef(hierarchyPlot)
        hierarchyPlot.dataUpdate(result.index)
        setValue(0)
    }, [containerRef2])

    const handleChange = (v) => {
        setValue(parseFloat(v.target.value))
    }

    return (
        <div>
            <input type='range' value={value} min={0} max={result.distances[0]} onChange={handleChange} step={0.001} />

            <div>Cutting tree at: {result.distances[0] - value}</div>
            <div ref={containerRef}></div>
            <div ref={containerRef2}></div>
        </div>
    )
}
