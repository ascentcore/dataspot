import React, { useEffect, useRef, useState } from 'react'

import Ackley from '../../lib/datasets/benchmark/ackley'
import Schwefel from '../../lib/datasets/benchmark/schwefel'
import LinePlot from '../../lib/visualizations/d3/lineplot'
import Axis from '../../lib/visualizations/d3/axis'
import Scatter from '../../lib/visualizations/d3/scatter'
import SVGMultipleVisualization from '../../lib/visualizations/d3/svgmultiple'
import MeshPlot from '../../lib/visualizations/three/mesh'
import Sphere from '../../lib/visualizations/three/sphere'
import ThreeMultipleVisualization from '../../lib/visualizations/three/threemultiple'

import PSO, { PSOConfig } from '../../lib/metaheuristics/pso'
import FitnessFunction from '../../lib/metaheuristics/fitnessFunction'

function getData(ff: (x: number) => number, min = -1, max = 1, step = 0.01) {
    const data = []
    for (let i = min; i < max; i += step) {
        data.push([i, ff(i), 2])
    }

    return data
}

function Representation({
    ff,
    name,
    type,
    width,
    height,
    domain,
    globalM,
    radius,
    resultMin,
    resultMax
}: {
    ff: (...input: number[]) => number
    type: string
    name: string
    width: number
    height: number
    domain: number[]
    globalM: number[]
    radius: number
    resultMin: number
    resultMax: number
}) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [plot, setPlot] = useState(null)

    const twoDParticleEvolution = async (twoDPlot: SVGMultipleVisualization, scatterElemClass: string) => {
        let doneMetaheuristic = false
        let metaheuristicValue = []

        const pso = new PSO({ populationSize: 3 } as PSOConfig)
        const psoGenerator = pso.fitAsync(
            Object.assign(new FitnessFunction(), {
                calculate: ff,
                dimensions: [{ min: domain[0], max: domain[1] }]
            })
        )

        const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

        while (!doneMetaheuristic) {
            const regressionResult = psoGenerator.next()
            metaheuristicValue = regressionResult.value
            doneMetaheuristic = regressionResult.done || false
            twoDPlot.dataUpdate(
                // eslint-disable-next-line no-loop-func
                metaheuristicValue.map((position) => {
                    return { x: position[0], y: ff(position[0]), r: radius }
                }),
                scatterElemClass
            )

            // eslint-disable-next-line no-await-in-loop
            await snooze(100)
        }
    }

    const twoDFunctionRepresentation = () => {
        const axisElemClass = 'axis-elem'
        const lineElemClass = 'line-elem'
        const scatterElemClass = 'scatter-elem'
        const metaheuristicElemClass = 'metaheuristic-elem'
        const functionAprox = getData(ff, domain[0], domain[1])

        const axis = new Axis({}, axisElemClass)
        const line = new LinePlot({}, lineElemClass)
        const scatter = new Scatter({}, scatterElemClass)
        const twoDPlot = new SVGMultipleVisualization(
            {
                width,
                height,
                domainX: { min: domain[0], max: domain[1] },
                domainY: { min: resultMin, max: resultMax }
            },
            metaheuristicElemClass,
            [axis, line, scatter]
        )
        twoDPlot.setContainer(containerRef.current)
        twoDPlot.setup()
        const mappedData = functionAprox.map((d: number[]) => {
            return { x: d[0], y: d[1] }
        })
        twoDPlot.dataUpdate(mappedData, lineElemClass)

        twoDParticleEvolution(twoDPlot, scatterElemClass)
        setPlot(twoDPlot)
    }

    const threeDParticleEvolution = async (threeDPlot: ThreeMultipleVisualization, spheresElemClass: string) => {
        let doneMetaheuristic = false
        let metaheuristicValue = []

        const pso = new PSO({ populationSize: 50 } as PSOConfig)
        const psoGenerator = pso.fitAsync(
            Object.assign(new FitnessFunction(), {
                calculate: ff,
                dimensions: [
                    { min: domain[0], max: domain[1] },
                    { min: domain[0], max: domain[1] }
                ]
            })
        )

        const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

        while (!doneMetaheuristic) {
            const regressionResult = psoGenerator.next()
            metaheuristicValue = regressionResult.value

            doneMetaheuristic = regressionResult.done || false
            threeDPlot.dataUpdate(
                // eslint-disable-next-line no-loop-func
                metaheuristicValue.map((position) => {
                    return { x: position[0], y: position[1], z: ff(position[0], position[1]), r: radius }
                }),
                spheresElemClass
            )

            // eslint-disable-next-line no-await-in-loop
            await snooze(100)
        }
    }

    const threeDFunctionRepresentation = () => {
        const meshElemClass = 'mesh-elem'
        const spheresElemClass = 'sphere-elem'
        const metaheuristicElemClass = 'metaheuristic-elem'

        const mesh = new MeshPlot({}, meshElemClass)
        const spheres = new Sphere({}, spheresElemClass)
        const threeDPlot = new ThreeMultipleVisualization(
            {
                width,
                height
            },
            metaheuristicElemClass,
            [mesh, spheres]
        )
        threeDPlot.setContainer(containerRef.current)
        threeDPlot.setup()
        threeDPlot.dataUpdate(
            {
                zFunc: (x: number, y: number) => ff(x, y),
                xMin: domain[0],
                xMax: domain[1],
                yMin: domain[0],
                yMax: domain[1]
            },
            meshElemClass
        )
        threeDParticleEvolution(threeDPlot, spheresElemClass)
        setPlot(threeDPlot)
    }

    useEffect(() => {
        if (containerRef.current && plot) {
            plot.destroy()
        }
        if (containerRef.current && type === '2D') {
            twoDFunctionRepresentation()
        } else {
            threeDFunctionRepresentation()
        }
    }, [containerRef])

    return (
        <div>
            <h4>{name}</h4>
            <h5>Global minimum: {globalM}</h5>
            <div ref={containerRef}></div>
        </div>
    )
}

const reps = [
    {
        name: 'Particle Swarm Optimisation - Ackley 2D',
        type: '2D',
        ff: Ackley.calculate,
        domain: Ackley.DOMAIN,
        globalM: Ackley.GLOBAL_M,
        radius: 3,
        resultMin: 0,
        resultMax: 25
    },
    {
        name: 'Particle Swarm Optimisation - Ackley 3D',
        type: '3D',
        ff: Ackley.calculate,
        domain: Ackley.DOMAIN,
        globalM: Ackley.GLOBAL_M,
        radius: 1
    },
    {
        name: 'Particle Swarm Optimisation - Schwefel 2D',
        type: '2D',
        ff: Schwefel.calculate,
        domain: Schwefel.DOMAIN,
        globalM: Schwefel.GLOBAL_M,
        radius: 3,
        resultMin: 0,
        resultMax: 420
    },
    {
        name: 'Particle Swarm Optimisation - Schwefel 3D',
        type: '3D',
        ff: Schwefel.calculate,
        domain: Schwefel.DOMAIN,
        globalM: Schwefel.GLOBAL_M,
        radius: 15
    }
]

export default function Metaheuristics() {
    // const reluData = getData(relu)

    const [vis] = useState(reps)

    return (
        <div>
            <h3>Metaheuristics</h3>
            {vis.map((val) => (
                <Representation
                    key={val.name}
                    ff={val.ff}
                    type={val.type}
                    domain={val.domain}
                    radius={val.radius}
                    globalM={val.globalM}
                    name={val.name}
                    width={700}
                    height={350}
                    resultMin={val.resultMin}
                    resultMax={val.resultMax}
                />
            ))}
        </div>
    )
}
