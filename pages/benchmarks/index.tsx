import React, { useEffect, useRef, useState } from 'react'

import Ackley from '../../lib/datasets/benchmark/ackley'
import Easom from '../../lib/datasets/benchmark/easom'
import Griewank from '../../lib/datasets/benchmark/griewank'
import Rastrigin from '../../lib/datasets/benchmark/rastrigin'
import Rosenbrock from '../../lib/datasets/benchmark/rosenbrock'
import Schwefel from '../../lib/datasets/benchmark/schwefel'
import Sphere from '../../lib/datasets/benchmark/sphere'

import MeshPlot from '../../lib/visualizations/three/mesh'

function Representation({
    zFunc,
    xMin,
    xMax,
    yMin,
    yMax,
    name,
    width,
    height
}: {
    zFunc: (x: number, y: number) => number
    xMin: number
    xMax: number
    yMin: number
    yMax: number
    name: string
    width: number
    height: number
}) {
    const svgRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const newPlot = new MeshPlot({ width, height })
        newPlot.setContainer(svgRef.current)
        newPlot.dataUpdate({
            zFunc,
            xMin,
            xMax,
            yMin,
            yMax
        })
        return () => {
            newPlot.destroy()
        }
    }, [])

    return (
        <div>
            <h4>{name}</h4>
            <div ref={svgRef}></div>
        </div>
    )
}

const reps = [
    {
        name: 'Ackley',
        zFunc: Ackley.calculate,
        xMin: Ackley.DOMAIN[0],
        xMax: Ackley.DOMAIN[1],
        yMin: Ackley.DOMAIN[0],
        yMax: Ackley.DOMAIN[1]
    },
    {
        name: 'Easom',
        zFunc: Easom.calculate,
        xMin: Easom.DOMAIN[0],
        xMax: Easom.DOMAIN[1],
        yMin: Easom.DOMAIN[0],
        yMax: Easom.DOMAIN[1]
    },
    {
        name: 'Griewank',
        zFunc: Griewank.calculate,
        xMin: Griewank.DOMAIN[0],
        xMax: Griewank.DOMAIN[1],
        yMin: Griewank.DOMAIN[0],
        yMax: Griewank.DOMAIN[1]
    },
    {
        name: 'Rastrigin',
        zFunc: Rastrigin.calculate,
        xMin: Rastrigin.DOMAIN[0],
        xMax: Rastrigin.DOMAIN[1],
        yMin: Rastrigin.DOMAIN[0],
        yMax: Rastrigin.DOMAIN[1]
    },
    {
        name: 'Rosenbrock',
        zFunc: Rosenbrock.calculate,
        xMin: Rosenbrock.DOMAIN[0],
        xMax: Rosenbrock.DOMAIN[1],
        yMin: Rosenbrock.DOMAIN[0],
        yMax: Rosenbrock.DOMAIN[1]
    },
    {
        name: 'Schwefel',
        zFunc: Schwefel.calculate,
        xMin: Schwefel.DOMAIN[0],
        xMax: Schwefel.DOMAIN[1],
        yMin: Schwefel.DOMAIN[0],
        yMax: Schwefel.DOMAIN[1]
    },
    {
        name: 'Sphere',
        zFunc: Sphere.calculate,
        xMin: Sphere.DOMAIN[0],
        xMax: Sphere.DOMAIN[1],
        yMin: Sphere.DOMAIN[0],
        yMax: Sphere.DOMAIN[1]
    }
]

export default function Benchmarks() {
    const [vis] = useState(reps)

    return (
        <div>
            <h3>Benchmark Functions</h3>
            {vis.map((val) => (
                <Representation
                    key={val.name}
                    zFunc={val.zFunc}
                    xMin={val.xMin}
                    xMax={val.xMax}
                    yMin={val.yMin}
                    yMax={val.yMax}
                    name={val.name}
                    width={500}
                    height={500}
                />
            ))}
        </div>
    )
}
