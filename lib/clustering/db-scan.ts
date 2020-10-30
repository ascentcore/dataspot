import { VectorUtils } from '../math-utils'
import Point from '../models/point'

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
        epsilon = 0.1,
        minNeighbours = 5,
        distance = VectorUtils.euclideanDistance
    ): Generator<DBScanPoint[]> {
        const points = data.map((vector) => new DBScanPoint(vector))

        let currentCluster = -1

        for (let i = 0; i < data.length; i++) {
            if (points[i].Label !== undefined) {
                continue
            }

            const neighbourIndexes = points[i].getNeighbourIndexes(points, epsilon, distance)

            if (neighbourIndexes.length >= minNeighbours) {
                currentCluster++
                while (neighbourIndexes.length) {
                    const val: number | undefined = neighbourIndexes.pop()
                    if (val) {
                        if (points[val].Label === null || points[val].Label === undefined) {
                            points[val].setLabel(currentCluster)
                        } else {
                            continue
                        }

                        const localClusters = points[val].getNeighbourIndexes(points, epsilon, distance)
                        neighbourIndexes.push(...localClusters)
                    }
                }
            } else {
                points[i].setLabel(null)
            }

            yield points
        }

        return { clusters: currentCluster + 1, points }
    }
}
