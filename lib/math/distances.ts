export function euclideanDistance(v1: number[], v2: number[]): number {
    if (!v1 || !v2 || v1.length !== v2.length) {
        throw new Error(`Missing ponts data ${v1}, ${v2}`)
    }
    let valSum = 0
    for (let i = 0; i < v1.length; i++) {
        valSum += (v1[i] - v2[i]) ** 2
    }
    return Math.sqrt(valSum)
}

export function manhattanDistance(v1: number[], v2: number[]): number {
    if (!v1 || !v2 || v1.length !== v2.length) {
        throw new Error(`Missing ponts data ${v1}, ${v2}`)
    }
    let valSum = 0
    for (let i = 0; i < v1.length; i++) {
        valSum += Math.abs(v1[i] - v2[i])
    }
    return valSum
}

export function sum(v1: number[], v2: number[]): number[] {
    if (!v1 || !v2 || v1.length !== v2.length) {
        throw new Error(`Missing ponts data ${v1}, ${v2}`)
    }
    return v1.map((item, index) => {
        return item + v2[index]
    })
}

export type DistanceMeasurement = (v1: number[], v2: number[]) => number | number[]

const distances: { [key: string]: DistanceMeasurement } = {
    euclideanDistance,
    manhattanDistance,
    sum
}

export default distances
