import * as d3 from 'd3'
import { useState, useEffect, useRef } from 'react'
import HierarchyPlot from '../../lib/visualizations/svg/hierarchy'
import { euclideanDistance } from '../../lib/math/distances'
import hierarchy, { hCut, singleLinkage } from '../../lib/math/hierarchy'
import blobDataset from '../../lib/dataset/blobDataset'
import Scatter from '../../lib/visualizations/svg/scatter'

const width = 500
const height = 400

const blobData = blobDataset(3)
const result = hierarchy(
    blobData.map((row: any[], i) => ({ index: i, points: [row] })),
    singleLinkage,
    euclideanDistance
)
const palette = d3.scaleOrdinal(d3.schemeTableau10)

export default function Blob() {
    const containerRef = useRef(null)
    const [value, setValue] = useState(null)

    console.log(result)

    useEffect(() => {
        const clusters = hCut(result, value)

        for (let i = 0; i < clusters.length; i++) {
            clusters[i].forEach((st) => {
                d3.select(containerRef.current)
                    .select(`[data-id="${st}"]`)
                    .attr('fill', palette(i))
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

    const handleChange = (v) => {
        setValue(parseInt(v.target.value))
    }

    return (
        <div>
            <input type='range' value={value} min={0} max={3} onChange={handleChange} step={1} />
            <div ref={containerRef}></div>
        </div>
    )
}
