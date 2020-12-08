/* eslint-disable no-await-in-loop */
import GA, { GAConfig } from '../../lib/metaheuristics/ga'
import { circlesIntersection, circleRectangleOutsideBoundaries } from '../../lib/math/geometry'
import SVGVisualizationWrapper from '../../lib/visualizations/d3/svgvisualizationwrapper'
import Scatter from '../../lib/visualizations/d3/scatter'
import Lab from '../../lib/lab'
import LinePlot from '../../lib/visualizations/d3/lineplot'
import SVGMultipleVisualization from '../../lib/visualizations/d3/svgmultiple'

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
    const lab = new Lab('metaheuristics')
    try {
        await lab.connected
    } catch (err) {
        console.log('Unable to connect to lab...')
    }

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

    const viz = new SVGVisualizationWrapper(multipleViz, `circles-ga`)
    await viz.setup([
        { data: [{ x: 1, y: 0 }, { x: 1, y: 1 }], elemClass: 'right-line-elem' },
        { data: [{ x: 0, y: 0 }, { x: 1, y: 0 }], elemClass: 'bottom-line-elem' },
        { data: [{ x: 0, y: 0 }, { x: 0, y: 1 }], elemClass: 'left-line-elem' },
        { data: [{ x: 0, y: 1 }, { x: 1, y: 1 }], elemClass: 'top-line-elem' }
    ])

    const ga = new GA({
        populationSize: 200,
        iterations: 10000,
        numOffsprings: 200,
        mutationType: 'all',
        mutationProbability: 0.05
    } as GAConfig)
    let done = false
    const domains = []
    const circles = 10
    for (let i = 0; i < circles; i++) {
        domains.push({ min: 0, max: 1 }, { min: 0, max: 1 }, { min: 0, max: 0.5 })
    }
    const iterator = ga.fitAsync(ff, domains)

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
        await viz.dataUpdate(updatedData, 'scatter-elem')
    }
})()
