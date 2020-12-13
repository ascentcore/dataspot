/* eslint-disable prefer-spread */
/* eslint-disable no-bitwise */
export default class MathUtils {
    private static rand = MathUtils.mulberry32(MathUtils.xmur3('apples')())

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

    static roundToPrecision(input: number, precision: number): number {
        const prec = 10 ** precision
        return Math.round(input * prec) / prec
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
