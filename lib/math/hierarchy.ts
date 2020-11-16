import { DistanceMeasurement } from './distances'
import { getPairsFromDistanceMatrix } from './utils'

export type Linkage = (v1: number[][], v2: number[][], distanceFn: DistanceMeasurement) => number
export type HierarchyPoints = {
    index: any
    points: number[][]
    distances?: any[]
}

type HierarchyPointsReduceType = {
    [key: number]: HierarchyPoints
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

export default function hierarchy(hPoints: HierarchyPoints[], linkage: Linkage, distanceFn: DistanceMeasurement): any {
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
    const clusterArr: HierarchyPointsReduceType = {}

    for (let i = 0; i < clusters.length; i++) {
        const cluster = clusters[i]
        if (distances[i] === 0) {
            clusterArr[cluster] = hPoints[i]
        } else {
            clusterArr[cluster] =
                clusterArr[cluster] ||
                <HierarchyPoints>{
                    index: [],
                    distances: [distances[i]],
                    points: []
                }
            const { index: localIndex, points, distances: localDistances } = hPoints[i]
            clusterArr[cluster].index.push(localIndex)
            clusterArr[cluster].points.push(...points)
            if (localDistances) {
                // eslint-disable-next-line prettier/prettier
                clusterArr[cluster].distances?.push(localDistances)
            }
        }
    }

    const values: any[] = Object.values(clusterArr)

    if (values.length > 1) {
        return hierarchy(values, linkage, distanceFn)
    } else {
        return values[0]
    }
}
