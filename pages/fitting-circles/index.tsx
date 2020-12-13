import '../../samples/documentation/problems/circleFit'

export default function() {
    return null
}
/*
import { useEffect, useState, useRef } from 'react'
import { circlesIntersection, circleRectangleOutsideBoundaries } from '@ascentcore/dataspot/math/geometry'
import Scatter from '@ascentcore/dataspot/visualizations/d3/scatter'
import LinePlot from '@ascentcore/dataspot/visualizations/d3/lineplot'
import SVGMultipleVisualization from '@ascentcore/dataspot/visualizations/d3/svgmultiple'
import GA, { GAConfig } from '@ascentcore/dataspot/metaheuristics/ga'
import Axis from '@ascentcore/dataspot/visualizations/d3/axis'


export default function FittingCircles() {
    const containerRef = useRef(null)
    const fitnessContainerRef = useRef(null)
    const [globalBest, setBest] = useState(0)

    useEffect(() => {
        let done = false
        let iteration = 0
        if (containerRef) {
            let fitnesses = []

            const ff = (...inputs: number[]) => {
                const circles = []
                for (let i = 0; i < inputs.length; i += 3) {
                    circles.push({ x: inputs[i], y: inputs[i + 1], r: inputs[i + 2] })
                }
                const rightTop = { x: 1, y: 1 }
                const leftBottom = { x: 0, y: 0 }
                const rectangleArea = (rightTop.x - leftBottom.x) * (rightTop.y - leftBottom.y)
                const circleAreas = circles.reduce((sum, circle) => sum + Math.PI * circle.r ** 2, 0)
                let overlappingArea = 0
                let rminConstraint = 0
                for (let i = 0; i < circles.length; i++) {
                    if (circles[i].r < 0.05) {
                        rminConstraint += 1
                    }
                    for (let j = i + 1; j < circles.length; j++) {
                        overlappingArea += circlesIntersection(circles[i], circles[j])
                    }
                }
                let outsideBoundariesArea = 0
                circles.forEach((circle) => {
                    outsideBoundariesArea += circleRectangleOutsideBoundaries(circle, leftBottom, rightTop)
                })
                return rectangleArea - circleAreas + 10 * overlappingArea + 100 * outsideBoundariesArea + rminConstraint
            }
            ;(async () => {
                const axisElemClass = 'axis-elem'
                const lineElemClass = 'line-elem'
                const functionElemClass = 'function-elem'

                const axis = new Axis({ autoscaleX: true, autoscaleY: true }, axisElemClass)
                const line = new LinePlot({ autoscaleX: true, autoscaleY: true }, lineElemClass)
                const functionPlot = new SVGMultipleVisualization({ width: 300, height: 200 }, functionElemClass, [
                    axis,
                    line
                ])
                functionPlot.setContainer(fitnessContainerRef.current)
                functionPlot.setup()

                const scatter = new Scatter({}, 'scatter-elem')
                const rightLine = new LinePlot({}, 'right-line-elem')
                const bottomLine = new LinePlot({}, 'bottom-line-elem')
                const leftLine = new LinePlot({}, 'left-line-elem')
                const topLine = new LinePlot({}, 'top-line-elem')

                const multipleViz = new SVGMultipleVisualization(
                    {
                        domainX: { min: 0, max: 1 },
                        domainY: { min: 0, max: 1 },
                        width: 400,
                        height: 400,
                        margin: { left: 100, top: 100, right: 100, bottom: 100 }
                    },
                    'ga-elem',
                    [rightLine, bottomLine, leftLine, topLine, scatter]
                )
                multipleViz.setContainer(containerRef.current)
                multipleViz.setup()

                multipleViz.dataUpdate([{ x: 1, y: 0 }, { x: 1, y: 1 }], 'right-line-elem')
                multipleViz.dataUpdate([{ x: 0, y: 0 }, { x: 1, y: 0 }], 'bottom-line-elem')
                multipleViz.dataUpdate([{ x: 0, y: 0 }, { x: 0, y: 1 }], 'left-line-elem')
                multipleViz.dataUpdate([{ x: 0, y: 1 }, { x: 1, y: 1 }], 'top-line-elem')

                const ga = new GA({
                    populationSize: 2000,
                    iterations: 10000,
                    numOffsprings: 2000,
                    mutationType: 'all',
                    mutationProbability: 0.05
                } as GAConfig)
                const domains = []
                const circles = 10
                for (let i = 0; i < circles; i++) {
                    domains.push({ min: 0, max: 1 }, { min: 0, max: 1 }, { min: 0, max: 0.5 })
                }
                const iterator = ga.fitAsync(ff, domains)

                const doStep = () => {
                    if (done) {
                        return
                    }
                    const result = iterator.next()
                    done = !!result.done
                    const best = ga.getBest()
                    const bestVal = ff(...best)
                    fitnesses.push({ x: iteration, y: bestVal })
                    fitnesses = fitnesses.slice(-100)
                    setBest(bestVal)
                    const updatedData = []
                    for (let i = 0; i < circles; i++) {
                        updatedData.push({
                            x: best[3 * i],
                            y: best[3 * i + 1],
                            r: best[3 * i + 2],
                            color: 'rgba(0,0,0,.4)'
                        })
                    }
                    multipleViz.dataUpdate(updatedData, 'scatter-elem')
                    window.requestAnimationFrame(() => doStep())
                    functionPlot.dataUpdate(fitnesses, axisElemClass)
                    functionPlot.dataUpdate(fitnesses, lineElemClass)
                    iteration++
                }

                doStep()
            })()
        }

        return () => {
            done = true
        }
    }, [containerRef])
    return (
        <div>
            <h3>Fitting Circles</h3>
            <div>{globalBest}</div>
            <div ref={containerRef}></div>
            <div ref={fitnessContainerRef}></div>
        </div>
    )
}
*/
