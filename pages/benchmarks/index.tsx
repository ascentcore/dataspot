import React, { useEffect, useRef, useState } from 'react'

import * as ackley from '../../lib/dataset/benchmark/ackley'
import * as easom from '../../lib/dataset/benchmark/easom'
import * as griewank from '../../lib/dataset/benchmark/griewank'
import * as rastrigin from '../../lib/dataset/benchmark/rastrigin'
import * as rosenbrock from '../../lib/dataset/benchmark/rosenbrock'
import * as schwefel from '../../lib/dataset/benchmark/schwefel'
import * as sphere from '../../lib/dataset/benchmark/sphere'

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
        zFunc: ackley.default,
        xMin: ackley.DOMAIN[0],
        xMax: ackley.DOMAIN[1],
        yMin: ackley.DOMAIN[0],
        yMax: ackley.DOMAIN[1]
    },
    {
        name: 'Easom',
        zFunc: easom.default,
        xMin: easom.DOMAIN[0],
        xMax: easom.DOMAIN[1],
        yMin: easom.DOMAIN[0],
        yMax: easom.DOMAIN[1]
    },
    {
        name: 'Griewank',
        zFunc: griewank.default,
        xMin: griewank.DOMAIN[0],
        xMax: griewank.DOMAIN[1],
        yMin: griewank.DOMAIN[0],
        yMax: griewank.DOMAIN[1]
    },
    {
        name: 'Rastrigin',
        zFunc: rastrigin.default,
        xMin: rastrigin.DOMAIN[0],
        xMax: rastrigin.DOMAIN[1],
        yMin: rastrigin.DOMAIN[0],
        yMax: rastrigin.DOMAIN[1]
    },
    // {
    //     name: 'Rosenbrock',
    //     zFunc: rosenbrock.default,
    //     xMin: rosenbrock.DOMAIN[0],
    //     xMax: rosenbrock.DOMAIN[1],
    //     yMin: rosenbrock.DOMAIN[0],
    //     yMax: rosenbrock.DOMAIN[1]
    // },
    {
        name: 'Schwefel',
        zFunc: schwefel.default,
        xMin: schwefel.DOMAIN[0],
        xMax: schwefel.DOMAIN[1],
        yMin: schwefel.DOMAIN[0],
        yMax: schwefel.DOMAIN[1]
    },
    {
        name: 'Sphere',
        zFunc: sphere.default,
        xMin: sphere.DOMAIN[0],
        xMax: sphere.DOMAIN[1],
        yMin: sphere.DOMAIN[0],
        yMax: sphere.DOMAIN[1]
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
