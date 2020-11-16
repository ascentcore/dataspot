import { useEffect, useRef } from 'react'
import data from '../../lib/dataset/samples/usarrests'
import HierarchyPlot from '../../lib/visualizations/svg/hierarchy'
import { euclideanDistance } from '../../lib/math/distances'
import hierarchy, { singleLinkage } from '../../lib/math/hierarchy'
import blobDataset from '../../lib/dataset/blobDataset'

const width = 1200
const height = 900

const blobData = blobDataset(5)
console.log(blobData)

export default function Hierarchy() {
    const containerRef = useRef(null)

    useEffect(() => {
        const result = hierarchy(
            data.map((row: any[]) => ({ index: row[0], points: [row.slice(1)] })),
            singleLinkage,
            euclideanDistance
        )
        // const result = hierarchy(
        //     blobData.map((row: any[], i) => ({ index: row.join(','), points: [row] })),
        //     singleLinkage,
        //     euclideanDistance
        // )

        const plot = new HierarchyPlot({ width, height, layout: 'vertical', tree: 'cluster' })
        plot.setContainer(containerRef.current)
        plot.setup()
        plot.dataUpdate(result.index)

        console.log(result)
    }, [containerRef])
    return (
        <div>
            <h3>Segmentation</h3>
            <div ref={containerRef} width={width} height={height}></div>
        </div>
    )
}
