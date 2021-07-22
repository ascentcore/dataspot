/* eslint-disable no-await-in-loop */
import BoxedCircles from '@ascentcore/dataspot/datasets/problems/boxedCircles'
import GA, { GAConfig } from '../../lib/metaheuristics/ga'
import SVGVisualizationWrapper from '../../lib/visualizations/d3/svgvisualizationwrapper'
import Scatter from '../../lib/visualizations/d3/scatter'
import Lab from '../../lib/lab'
import LinePlot from '../../lib/visualizations/d3/lineplot'
import SVGMultipleVisualization from '../../lib/visualizations/d3/svgmultiple'

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
        {
            data: [
                { x: 1, y: 0 },
                { x: 1, y: 1 }
            ],
            elemClass: 'right-line-elem'
        },
        {
            data: [
                { x: 0, y: 0 },
                { x: 1, y: 0 }
            ],
            elemClass: 'bottom-line-elem'
        },
        {
            data: [
                { x: 0, y: 0 },
                { x: 0, y: 1 }
            ],
            elemClass: 'left-line-elem'
        },
        {
            data: [
                { x: 0, y: 1 },
                { x: 1, y: 1 }
            ],
            elemClass: 'top-line-elem'
        }
    ])

    const circles = 10
    const boxedCircles = new BoxedCircles(circles)

    const ga = new GA({
        populationSize: 200,
        iterations: 10000,
        numOffsprings: 190,
        mutationType: 'all',
        mutationProbability: 0.05
    } as GAConfig)
    let done = false
    const domains = []

    for (let i = 0; i < circles; i++) {
        domains.push({ min: 0, max: 1 }, { min: 0, max: 1 }, { min: 0, max: 0.5 })
    }
    const iterator = ga.fitAsync(boxedCircles.calculate, domains)

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
