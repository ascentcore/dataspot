import { DistanceMeasurement, sum } from './distances'

export function average(arr: number[][]): number[] {
    if (!arr || !arr.length) {
        throw new Error(`Missing ponts data ${arr}`)
    }
    const size = arr[0].length
    const zeroVector = Array(size).fill(0)
    const sumRes = arr.reduce((v1: number[], v2: number[]) => {
        return sum(v1, v2)
    }, zeroVector)
    return sumRes.map((val) => {
        return val / arr.length
    })
}

export function roundToPrecision(input: number, precision: number): number {
    const prec = 10 ** precision
    return Math.round(input * prec) / prec
}

export function indexOfSmallest(v: number[]): number {
    if (!v || !v.length) {
        throw new Error(`Missing ponts data ${v}`)
    }
    return v.reduce((lowest, next, index) => {
        return next < v[lowest] ? index : lowest
    }, 0)
}

export function gaussianKernel(distance: number, bandwidth: number): number {
    return (1 / (bandwidth * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * (distance / bandwidth) ** 2)
}

export function distanceMatrix(
    points: number[][],
    distanceFunction: DistanceMeasurement,
    equality: number = Infinity
): number[][] {
    const { length: pointsCount } = points
    const distMat: number[][] = []
    for (let i = 0; i < pointsCount; i++) {
        distMat.push(new Array(pointsCount).fill(equality))
        for (let j = 0; j < i; j++) {
            const val = <number>distanceFunction(points[i], points[j])
            distMat[i][j] = val
            distMat[j][i] = val
        }
    }

    return distMat
}

export function getPairsFromDistanceMatrix(distMat: number[][]): number[][] {
    const { length } = distMat
    const clusters = new Array(length).fill(0).map(() => Infinity)
    const distances = new Array(length).fill(0).map(() => Infinity)
    let paired = length
    let cluster = 0

    while (paired > 1) {
        let min = Infinity
        let x = -1
        let y = -1
        let localMin = Infinity
        for (let i = 0; i < length; i++) {
            for (let j = i + 1; j < length; j++) {
                if (distMat[i][j] < min) {
                    localMin = distMat[i][j]
                }
                if (clusters[i] === Infinity && clusters[j] === Infinity && distMat[i][j] < min) {
                    min = distMat[i][j]
                    x = i
                    y = j
                }
            }
        }

        if (localMin === min) {
            clusters[x] = cluster
            clusters[y] = cluster
            distances[x] = min
            distances[y] = min
            cluster++
            paired -= 2
        } else {
            clusters[x] = cluster
            distances[x] = 0
            cluster++
            paired -= 1
        }
    }

    for (let i = 0; i < length; i++) {
        if (clusters[i] === Infinity) {
            clusters[i] = cluster
            distances[i] = 0
        }
    }

    return [clusters, distances]
}
