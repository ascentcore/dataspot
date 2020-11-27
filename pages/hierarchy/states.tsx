import * as d3 from 'd3'
import { useState, useEffect, useRef } from 'react'
import data from '../../lib/dataset/samples/usarrests'
// import data from '../../lib/dataset/samples/iris'
import HierarchyPlot from '../../lib/visualizations/d3/hierarchy'
import { euclideanDistance } from '../../lib/math/distances'
import hierarchy, { hValueCut, singleLinkage } from '../../lib/hierarchy/agglomerative'

const width = 1500
const height = 300

const palette = d3.scaleOrdinal(d3.schemeTableau10)
const result = hierarchy(
    data.map((row: any[]) => ({ index: row[0], points: [row.slice(1)] })),
    singleLinkage,
    euclideanDistance
)
export default function States() {
    const containerRef = useRef(null)
    const [value, setValue] = useState(null)
    const [hierarchyPlotRef, setHierarchyPlotRef] = useState(null)

    useEffect(() => {
        const clusters = hValueCut(result, result.distances[0] - value)

        for (let i = 0; i < clusters.length; i++) {
            clusters[i].forEach((st) => {
                d3.select(containerRef.current)
                    .select(`[data-id="${st}"]`)
                    .selectAll('text,circle')
                    .attr('fill', palette(`${i}`))
            })
        }
    }, [value])

    useEffect(() => {
        // const result = hierarchy(
        //     data.map((row: any[]) => ({ index: row.slice(-1), points: [row.slice(0, 4)] })),
        //     singleLinkage,
        //     euclideanDistance
        // )
        if (hierarchyPlotRef) {
            hierarchyPlotRef.destroy()
        }

        const hierarchyPlot = new HierarchyPlot({ width, height, layout: 'vertical', tree: 'cluster' })
        hierarchyPlot.setContainer(containerRef.current)
        hierarchyPlot.setup()
        setHierarchyPlotRef(hierarchyPlot)
        hierarchyPlot.dataUpdate(result.index)
        setValue(0)
    }, [containerRef])

    const handleChange = (v) => {
        setValue(parseFloat(v.target.value))
    }

    return (
        <div>
            <input type='range' value={value} min={0} max={result.distances[0]} onChange={handleChange} step={0.001} />

            <div ref={containerRef}></div>
        </div>
    )
}
