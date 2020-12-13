import { circleRectangleOutsideBoundaries, circlesIntersection } from '@ascentcore/dataspot/math/geometry'
import Scatter from '@ascentcore/dataspot/visualizations/d3/scatter'
import SVGMultipleVisualization from '@ascentcore/dataspot/visualizations/d3/svgmultiple'

export type DomainDefinition = {
    min: number
    max: number
}

export interface MetaheuristicProblem {
    getDimensionsDomain(): DomainDefinition[]
    calculate(input: number[]): number
    initializeVisualization(container: HTMLElement): void
    updateVisualization(bestIndividual: number[], bestValue: number): void
}

export default class BoxedCircles implements MetaheuristicProblem {
    private multipleViz: SVGMultipleVisualization

    constructor(private numberOfCircles: number = 8) {
        const scatter = new Scatter({}, 'scatter-elem')
        this.multipleViz = new SVGMultipleVisualization(
            {
                domainX: { min: 0, max: 1 },
                domainY: { min: 0, max: 1 },
                width: 200,
                height: 200,
                margin: { left: 0, top: 0, right: 0, bottom: 0 }
            },
            'ga-elem',
            [scatter]
        )
    }

    initializeVisualization(container: HTMLElement): void {
        this.multipleViz.setContainer(container)
        this.multipleViz.setup()
    }

    updateVisualization(bestIndividual: number[]): void {
        const updatedData = []
        for (let i = 0; i < this.numberOfCircles; i++) {
            updatedData.push({
                x: bestIndividual[3 * i],
                y: bestIndividual[3 * i + 1],
                r: bestIndividual[3 * i + 2],
                color: 'rgba(125,125,255,.4)'
            })
        }
        this.multipleViz.dataUpdate(updatedData, 'scatter-elem')
    }

    getDimensionsDomain(): DomainDefinition[] {
        const domains: DomainDefinition[] = []
        for (let i = 0; i < this.numberOfCircles; i++) {
            domains.push({ min: 0, max: 1 }) // x position
            domains.push({ min: 0, max: 1 }) // y position
            domains.push({ min: 0, max: 0.5 }) // circle radius
        }
        return domains
    }

    calculate(input: number[]): number {
        const circles = []
        for (let i = 0; i < input.length; i += 3) {
            circles.push({ x: input[i], y: input[i + 1], r: input[i + 2] })
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
}
