/* eslint-disable no-bitwise */
export class MathUtils {
    private static rand = MathUtils.mulberry32(MathUtils.xmur3('apples')())

    static roundToPrecision(input: number, precision: number): number {
        const prec = 10 ** precision
        return Math.round(input * prec) / prec
    }

    private static xmur3(str: string): () => number {
        let h = 1779033703 ^ str.length
        for (let i = 0; i < str.length; i++) {
            h = Math.imul(h ^ str.charCodeAt(i), 3432918353)
            h = (h << 13) | (h >>> 19)
        }
        return () => {
            h = Math.imul(h ^ (h >>> 16), 2246822507)
            h = Math.imul(h ^ (h >>> 13), 3266489909)
            // eslint-disable-next-line no-return-assign
            return (h ^= h >>> 16) >>> 0
        }
    }

    private static mulberry32(a: number) {
        return () => {
            // eslint-disable-next-line no-multi-assign, no-param-reassign
            let t = (a += 0x6d2b79f5)
            t = Math.imul(t ^ (t >>> 15), t | 1)
            t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296
        }
    }

    static random(min: number, max: number): number {
        return Math.random() * (max - min) + min
    }

    static randomInt(min: number, max: number): number {
        const intMin = Math.ceil(min)
        const intMax = Math.floor(max)
        return Math.floor(Math.random() * (intMax - intMin)) + intMin
    }

    static seededRandom(min: number, max: number): number {
        return MathUtils.rand() * (max - min) + min
    }

    static seededRandomInt(min: number, max: number): number {
        const intMin = Math.ceil(min)
        const intMax = Math.floor(max)
        return Math.floor(MathUtils.rand() * (intMax - intMin)) + intMin
    }
}

export class VectorUtils {
    static euclideanDistance(v1: number[], v2: number[]): number {
        if (!v1 || !v2 || v1.length !== v2.length) {
            throw new Error(`Missing ponts data ${v1}, ${v2}`)
        }
        let sum = 0
        for (let i = 0; i < v1.length; i++) {
            sum += (v1[i] - v2[i]) ** 2
        }
        return Math.sqrt(sum)
    }

    static manhattanDistance(v1: number[], v2: number[]): number {
        if (!v1 || !v2 || v1.length !== v2.length) {
            throw new Error(`Missing ponts data ${v1}, ${v2}`)
        }
        let sum = 0
        for (let i = 0; i < v1.length; i++) {
            sum += Math.abs(v1[i] - v2[i])
        }
        return sum
    }

    static sum(v1: number[], v2: number[]): number[] {
        if (!v1 || !v2 || v1.length !== v2.length) {
            throw new Error(`Missing ponts data ${v1}, ${v2}`)
        }
        return v1.map((item, index) => {
            return item + v2[index]
        })
    }

    static average(arr: number[][]): number[] {
        if (!arr || !arr.length) {
            throw new Error(`Missing ponts data ${arr}`)
        }
        const size = arr[0].length
        const zeroVector = Array(size).fill(0)
        const sum = arr.reduce((v1: number[], v2: number[]) => {
            return VectorUtils.sum(v1, v2)
        }, zeroVector)
        return sum.map((val) => {
            return val / arr.length
        })
    }

    static indexOfSmallest(v: number[]): number {
        if (!v || !v.length) {
            throw new Error(`Missing ponts data ${v}`)
        }
        return v.reduce((lowest, next, index) => {
            return next < v[lowest] ? index : lowest
        }, 0)
    }
}
