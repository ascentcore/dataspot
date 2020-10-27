export function distance(v1: number[], v2: number[]): number {
    let sum = 0
    for (let i = 0; i < v1.length; i++) {
        sum += (v1[i] - v2[i]) ** 2
    }
    return sum
}

export function minimum(v: number[]): number {
    let min = v[0]
    let minIndex = 0
    v.forEach((item: number, index: number) => {
        if (item < min) {
            min = item
            minIndex = index
        }
    })
    return minIndex
}

export function sumVectors(v1: number[], v2: number[]): number[] {
    return v1.map((item, index) => {
        return item + v2[index]
    })
}

export function averageVector(arr: number[][]): number[] {
    const zeroVector = Array(arr[0].length).fill(0)
    const vectorSum = arr.reduce((v1: number[], v2: number[]) => {
        return sumVectors(v1, v2)
    }, zeroVector)
    return vectorSum.map((val) => {
        return val / arr.length
    })
}

export function random(min: number, max: number): number {
    return Math.random() * (max - min) + min
}

export function randomInt(min: number, max: number): number {
    const intMin = Math.ceil(min)
    const intMax = Math.floor(max)
    return Math.floor(Math.random() * (intMax - intMin)) + intMin
}
