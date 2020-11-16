/* eslint-disable no-param-reassign */
import { VectorUtils } from '../utils/math-utils'
import Point from './point'

export class DBScanPoint extends Point {
    getNeighbourIndexes(
        points: DBScanPoint[],
        epsilon: number,
        distance: (v1: number[], v2: number[]) => number
    ): number[] {
        const neighbours = points.filter((point: DBScanPoint) => distance(this.Location, point.Location) < epsilon)
        return neighbours.map((item) => points.indexOf(item))
    }

    setLabel(label: number | null) {
        this.label = label
    }
}

export default class DBScan {
    static *fit(
        data: number[][],
        options: {
            epsilon?: number
            minNeighbours?: number
            distance?: (v1: number[], v2: number[]) => number
        } = {}
    ): Generator<{ points: DBScanPoint[]; clusters: number }> {
        if (!options.epsilon) {
            options.epsilon = 0.1
        }
        if (!options.minNeighbours) {
            options.minNeighbours = 5
        }
        if (!options.distance) {
            options.distance = VectorUtils.euclideanDistance
        }
        const points = data.map((vector) => new DBScanPoint(vector))

        let currentCluster = -1

        for (let i = 0; i < data.length; i++) {
            if (points[i].Label !== undefined) {
                continue
            }

            const neighbourIndexes = points[i].getNeighbourIndexes(points, options.epsilon, options.distance)

            if (neighbourIndexes.length >= options.minNeighbours) {
                currentCluster++
                while (neighbourIndexes.length) {
                    const val: number | undefined = neighbourIndexes.pop()
                    if (val) {
                        if (points[val].Label === null || points[val].Label === undefined) {
                            points[val].setLabel(currentCluster)
                        } else {
                            continue
                        }

                        const localClusters = points[val].getNeighbourIndexes(points, options.epsilon, options.distance)
                        neighbourIndexes.push(...localClusters)
                    }
                }
            } else {
                points[i].setLabel(null)
            }

            yield { points, clusters: currentCluster + 1 }
        }

        return { clusters: currentCluster + 1, points }
    }
}
