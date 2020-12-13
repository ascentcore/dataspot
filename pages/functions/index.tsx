import '../../samples/documentation/functions/activation'

export default function() {
    return null
}
// import React, { useEffect, useRef, useState } from 'react'

// import { relu, identity, sigmoid } from '@ascentcore/dataspot/functions/activations'
// import LinePlot from '@ascentcore/dataspot/visualizations/d3/lineplot'
// import Axis from '@ascentcore/dataspot/visualizations/d3/axis'
// import SVGMultipleVisualization from '@ascentcore/dataspot/visualizations/d3/svgmultiple'

// function Representation({
//     data,
//     name,
//     width,
//     height
// }: {
//     data: number[][]
//     name: string
//     width: number
//     height: number
// }) {
//     const svgRef = useRef<HTMLDivElement | null>(null)
//     const [plotRef, setPlotRef] = useState(null)

//     useEffect(() => {
//         if (plotRef) {
//             plotRef.destroy()
//         }
//         if (svgRef.current) {
//             const axisElemClass = 'axis-elem'
//             const lineElemClass = 'line-elem'
//             const functionElemClass = 'function-elem'

//             const axis = new Axis({}, axisElemClass)
//             const line = new LinePlot({}, lineElemClass)
//             const functionPlot = new SVGMultipleVisualization({ width, height }, functionElemClass, [axis, line])
//             functionPlot.setContainer(svgRef.current)
//             functionPlot.setup()
//             const mappedData = data.map((d: number[]) => {
//                 return { x: d[0], y: d[1] }
//             })
//             functionPlot.dataUpdate(mappedData, axisElemClass)
//             functionPlot.dataUpdate(mappedData, lineElemClass)
//             setPlotRef(functionPlot)
//         }
//     }, [svgRef])

//     return (
//         <div>
//             <h4>{name}</h4>
//             <div ref={svgRef}></div>
//         </div>
//     )
// }

// function getData(activationFn: (x: number) => number, min = -1, max = 1, step = 0.01) {
//     const data = []
//     for (let i = min; i < max; i += step) {
//         data.push([i, activationFn(i), 2])
//     }

//     return data
// }

// const reps = [
//     { name: 'Relu', data: getData(relu) },
//     { name: 'Identity', data: getData(identity) },
//     { name: 'Sigmoid', data: getData(sigmoid, -10, 10) }
// ]

// export default function Activations() {
//     // const reluData = getData(relu)

//     const [vis] = useState(reps)
//     return (
//         <div>
//             <h3>Activation Functions</h3>
//             {vis.map((val) => (
//                 <Representation key={val.name} data={val.data} name={val.name} width={300} height={200} />
//             ))}
//         </div>
//     )
// }
