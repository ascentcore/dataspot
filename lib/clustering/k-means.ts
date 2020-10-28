import Point from '../models/point'
import { VectorUtils, MathUtils } from '../math-utils'

export class KMeansPoint extends Point {
    updateLabel(centroids: KMeansCentroid[], distance: (v1: number[], v2: number[]) => number) {
        const distancesSquared = centroids.map((centroid: KMeansCentroid) => {
            return distance(this.Location, centroid.Location)
        })
        this.label = VectorUtils.indexOfSmallest(distancesSquared)
    }
}

export class KMeansCentroid extends Point {
    updateLocation(points: Point[]) {
        const pointsWithThisCentroid = points.filter((point) => {
            return point.Label === this.Label
        })
        if (pointsWithThisCentroid.length > 0) {
            this.location = VectorUtils.average(pointsWithThisCentroid.map((point) => point.Location))
        }
    }
}

export default class KMeans {
    static *fit(
        data: number[][],
        options: {
            nClusters?: number
            distance?: (v1: number[], v2: number[]) => number
        } = {}
    ): Generator<KMeansCentroid[]> {
        const nClusters =
            options.nClusters && options.nClusters <= data.length
                ? options.nClusters
                : Math.round(Math.sqrt(data.length / 2))
        const distance = options.distance || VectorUtils.euclideanDistance

        const points = data.map((vector) => new KMeansPoint(vector, null))
        const centroids: KMeansCentroid[] = []
        for (let i = 0; i < nClusters; i++) {
            centroids.push(new KMeansCentroid(points[MathUtils.randomInt(0, points.length)].Location, i))
        }

        // eslint-disable-next-line no-constant-condition
        while (true) {
            let updated = false

            points.forEach((point: KMeansPoint) => point.updateLabel(centroids, distance))
            centroids.forEach((centroid: KMeansCentroid) => {
                const oldCentroidLocation = [...centroid.Location]
                centroid.updateLocation(points)
                if (
                    centroid.Location.filter((item: number, index: number) => item !== oldCentroidLocation[index])
                        .length
                ) {
                    updated = true
                }
            })

            if (!updated) {
                break
            }

            yield centroids
        }

        return {
            points,
            centroids
        }
    }
}
