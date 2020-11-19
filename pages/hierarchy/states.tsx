import * as d3 from 'd3'
import { useState, useEffect, useRef } from 'react'
import data from '../../lib/dataset/samples/usarrests'
// import data from '../../lib/dataset/samples/iris'
import HierarchyPlot from '../../lib/visualizations/svg/hierarchy'
import { euclideanDistance } from '../../lib/math/distances'
import hierarchy, { hCut, singleLinkage } from '../../lib/hierarchy/agglomerative'

const width = 1200
const height = 500

const palette = d3.scaleOrdinal(d3.schemeTableau10)
const result = hierarchy(
    data.map((row: any[]) => ({ index: row[0], points: [row.slice(1)] })),
    singleLinkage,
    euclideanDistance
)
export default function States() {
    const containerRef = useRef(null)
    const [value, setValue] = useState(null)

    useEffect(() => {
        const clusters = hCut(result, value)

        for (let i = 0; i < clusters.length; i++) {
            clusters[i].forEach((st) => {
                d3.select(containerRef.current)
                    .select(`[data-id="${st}"]`)
                    .selectAll('text,circle')
                    .attr('fill', palette(i))
            })
        }
    }, [value])

    useEffect(() => {
        // const result = hierarchy(
        //     data.map((row: any[]) => ({ index: row.slice(-1), points: [row.slice(0, 4)] })),
        //     singleLinkage,
        //     euclideanDistance
        // )

        const plot = new HierarchyPlot({ width, height, layout: 'vertical', tree: 'cluster' })
        plot.setContainer(containerRef.current)
        plot.setup()
        plot.dataUpdate(result.index)
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
