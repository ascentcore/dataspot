import { DistanceMeasurement } from './distances'
import { distanceMatrix, getPairsFromDistanceMatrix } from './utils'

export type Linkage = (v1: number[][], v2: number[][], distanceFn: DistanceMeasurement) => number
export type HierarchyPoints = {
    index: string | number | string[] | number[]
    points: number[][]
    distances?: number[]
}
export function singleLinkage(v1: number[][], v2: number[][], distanceFn: DistanceMeasurement): number {
    let result: number = Infinity
    for (let i = 0; i < v1.length; i++) {
        for (let j = 0; j < v2.length; j++) {
            const dist = <number>distanceFn(v1[i], v2[j])
            if (!result || result > dist) {
                result = dist
            }
        }
    }

    return result
}

type Hierarchy = {
    points: number[][]
    centroid: number[]
}

export default function hierarchy(hPoints: HierarchyPoints[], linkage: Linkage, distanceFn: DistanceMeasurement) {
    const { length } = hPoints
    const dendogram = []

    const { length: pointsCount } = hPoints
    const distMat: number[][] = []
    for (let i = 0; i < pointsCount; i++) {
        distMat.push(new Array(pointsCount).fill(Infinity))
        for (let j = 0; j < i; j++) {
            const val = <number>linkage(hPoints[i].points, hPoints[j].points, distanceFn)
            distMat[i][j] = val
            distMat[j][i] = val
        }
    }

    const [clusters, distances] = getPairsFromDistanceMatrix(distMat)
    const clusterArr: any = clusters.reduce((memo: any, cluster: number, index: number) => {
        memo[cluster] = memo[cluster] || {
            index: [],
            distances: [distances[index]],
            points: []
        }

        const { index: localIndex, points, distances: localDistances } = hPoints[index]

        memo[cluster].index.push(localIndex)
        memo[cluster].points.push(...points)
        if (localDistances) {
            memo[cluster].distances.push(localDistances)
        }

        return memo
    }, {})

    const values: any[] = Object.values(clusterArr)

    if (values.length > 1) {
        return hierarchy(values, linkage, distanceFn)
    } else {
        return values
    }
}
