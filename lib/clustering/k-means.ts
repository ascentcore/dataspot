import Point from '../models/point'
import { distance, minimum, averageVector, randomInt } from '../common/utils'

class KMeansPoint extends Point {
    updateLabel(centroids: KMeansCentroid[]) {
        const distancesSquared = centroids.map((centroid: KMeansCentroid) => {
            return distance(this.Location, centroid.Location)
        })
        this.label = minimum(distancesSquared)
    }
}

class KMeansCentroid extends Point {
    updateLocation(points: Point[]) {
        const pointsWithThisCentroid = points.filter((point) => {
            return point.Label === this.Label
        })
        if (pointsWithThisCentroid.length > 0) {
            this.location = averageVector(pointsWithThisCentroid.map((point) => point.Location))
        }
    }
}

export default class KMeans {
    constructor(private nClusters: number, private maxIter = 300) {}

    fit(data: number[][]): { points: KMeansPoint[]; centroids: KMeansCentroid[] } {
        const nClusters =
            this.nClusters && this.nClusters <= data.length ? this.nClusters : Math.round(Math.sqrt(data.length / 2))
        const points = data.map((vector) => new KMeansPoint(vector, null))
        const centroids: KMeansCentroid[] = []
        for (let i = 0; i < nClusters; i++) {
            centroids.push(new KMeansCentroid(points[randomInt(0, points.length)].Location, i))
        }

        for (let iter = 0; iter < this.maxIter; iter++) {
            points.forEach((point: KMeansPoint) => point.updateLabel(centroids))
            centroids.forEach((centroid: KMeansCentroid) => centroid.updateLocation(points))
        }

        return {
            points,
            centroids
        }
    }
}
