import { useEffect, useRef } from 'react'
import { circlesIntersection, circleRectangleOutsideBoundaries } from '../../lib/math/geometry'
import Scatter from '../../lib/visualizations/d3/scatter'
import LinePlot from '../../lib/visualizations/d3/lineplot'
import SVGMultipleVisualization from '../../lib/visualizations/d3/svgmultiple'
import GA, { GAConfig } from '../../lib/metaheuristics/ga'

export default function FittingCircles() {
    const containerRef = useRef(null)

    useEffect(() => {
        if (containerRef) {
            const snooze = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

            const ff = (...inputs: number[]) => {
                const circles = []
                for (let i = 0; i < inputs.length; i += 3) {
                    circles.push({ x: inputs[0], y: inputs[1], r: inputs[2] })
                }
                const rightTop = { x: 1, y: 1 }
                const leftBottom = { x: 0, y: 0 }
                const rectangleArea = (rightTop.x - leftBottom.x) * (rightTop.y - leftBottom.y)
                const circleAreas = circles.reduce((sum, circle) => sum + Math.PI * circle.r ** 2, 0)
                let overlappingArea = 0
                for (let i = 0; i < circles.length; i++) {
                    for (let j = i + 1; j < circles.length; j++) {
                        overlappingArea += circlesIntersection(circles[i], circles[j])
                    }
                }
                let outsideBoundariesArea = 0
                circles.forEach((circle) => {
                    outsideBoundariesArea += circleRectangleOutsideBoundaries(circle, leftBottom, rightTop)
                })

                return rectangleArea - circleAreas + 1000 * overlappingArea + 1000 * outsideBoundariesArea
            }
            ;(async () => {
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

                const ga = new GA({ populationSize: 100, iterations: 10000 } as GAConfig)
                const domains = []
                const circles = 2
                for (let i = 0; i < circles; i++) {
                    domains.push({ min: 0, max: 1 }, { min: 0, max: 1 }, { min: 0, max: 0.5 })
                }
                const iterator = ga.fitAsync(ff, domains)
                let done = false
                while (!done) {
                    const result = iterator.next()
                    done = !!result.done
                    const best = ga.getBest()
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
                    // eslint-disable-next-line no-await-in-loop
                    await snooze(100)
                }
            })()
        }
    }, [containerRef])
    return (
        <div>
            <h3>Fitting Circles</h3>
            <div ref={containerRef}></div>
        </div>
    )
}
