import * as d3 from 'd3'
import { useState, useEffect, useRef } from 'react'
import HierarchyPlot from '../../lib/visualizations/svg/hierarchy'
import { euclideanDistance } from '../../lib/math/distances'
import hierarchy, { hValueCut, singleLinkage } from '../../lib/hierarchy/agglomerative'
import blobDataset from '../../lib/dataset/blobDataset'
import Scatter from '../../lib/visualizations/svg/scatter'

const width = 500
const height = 400

const blobData = blobDataset(20)
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

    useEffect(() => {
        // const clusters = hCut(result, value)
        const clusters = hValueCut(result, result.distances[0] - value)
        for (let i = 0; i < clusters.length; i++) {
            clusters[i].forEach((st) => {
                d3.selectAll(`[data-id="${st}"]`).attr('fill', palette(`${i}`))
                d3.selectAll(`[data-id="${st}"] circle, [data-id="${st}"] text`).attr('fill', palette(i))
            })
        }
    }, [value])

    useEffect(() => {
        const plot = new Scatter({ width, height })
        plot.setContainer(containerRef.current)
        plot.setup()
        plot.dataUpdate(blobData.map((row, i) => ({ id: i, x: row[0], y: row[1], r: 5 })))
        setValue(0)
    }, [containerRef])

    useEffect(() => {
        const plot = new HierarchyPlot({ width: 500, height: 1500, layout: 'horizontal', tree: 'cluster' })
        plot.setContainer(containerRef2.current)
        plot.setup()
        plot.dataUpdate(result.index)
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
