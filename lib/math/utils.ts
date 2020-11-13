import { sum } from './distances'

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

export function indexOfSmallest(v: number[]): number {
    if (!v || !v.length) {
        throw new Error(`Missing ponts data ${v}`)
    }
    return v.reduce((lowest, next, index) => {
        return next < v[lowest] ? index : lowest
    }, 0)
}
