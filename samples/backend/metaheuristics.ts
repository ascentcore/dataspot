import GA, { GAConfig } from '../../lib/metaheuristics/ga'
import { circlesIntersection, circleRectangleOutsideBoundaries } from '../../lib/math/geometry'
import SVGVisualizationWrapper from '../../lib/visualizations/d3/svgvisualizationwrapper'
import Scatter from '../../lib/visualizations/d3/scatter'
// import Lab from '../../lib/lab'
import LinePlot from '../../lib/visualizations/d3/lineplot'
import SVGMultipleVisualization from '../../lib/visualizations/d3/svgmultiple'

const ff = (x1: number, y1: number, r1: number, x2: number, y2: number, r2: number) => {
    const circles = [{ x: x1, y: y1, r: r1 }, { x: x2, y: y2, r: r2 }]
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
    // const lab = new Lab('metaheuristics')
    // try {
    //     await lab.connected
    // } catch (err) {
    //     console.log('Unable to connect to lab...')
    // }

    const scatter = new Scatter({}, 'scatter-elem')
    const rightLine = new LinePlot({}, 'right-line-elem')
    const bottomLine = new LinePlot({}, 'bottom-line-elem')
    const leftLine = new LinePlot({}, 'left-line-elem')
    const topLine = new LinePlot({}, 'top-line-elem')

    const multipleViz = new SVGMultipleVisualization(
        { domainX: { min: 0, max: 1 }, domainY: { min: 0, max: 1 } },
        'ga-elem',
        [rightLine, bottomLine, leftLine, topLine, scatter]
    )

    const viz = new SVGVisualizationWrapper(multipleViz, `circles-ga`)
    viz.dataUpdate([{ x: 1, y: 0 }, { x: 1, y: 1 }], 'right-line-elem')
    viz.dataUpdate([{ x: 0, y: 0 }, { x: 1, y: 0 }], 'bottom-line-elem')
    viz.dataUpdate([{ x: 0, y: 0 }, { x: 0, y: 1 }], 'left-line-elem')
    viz.dataUpdate([{ x: 0, y: 1 }, { x: 1, y: 1 }], 'top-line-elem')

    const ga = new GA({ populationSize: 10 } as GAConfig)
    ga.fit(ff, [
        { min: 0, max: 1 },
        { min: 0, max: 1 },
        { min: 0, max: 0.5 },
        { min: 0, max: 1 },
        { min: 0, max: 1 },
        { min: 0, max: 0.5 }
    ])
    const best = ga.getBest()
    // console.log(ff(best[0], best[1], best[2], best[3], best[4], best[5]))
    viz.dataUpdate(
        [
            { x: best[0], y: best[1], r: best[2], color: 'rgba(0,0,0,.4)' },
            { x: best[3], y: best[4], r: best[5], color: 'rgba(0,0,0,.4)' }
        ],
        'scatter-elem'
    )
})()
