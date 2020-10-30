import { MathUtils, VectorUtils } from './math-utils'

describe('MathUtils', () => {
    it('rounds to precision', () => {
        const number = 1.23456787654
        expect(MathUtils.roundToPrecision(number, 3)).toEqual(1.235)
    })

    it('random in interval', () => {
        const random = MathUtils.random(0, 3)
        expect(random).toBeLessThan(3)
        expect(random).toBeGreaterThanOrEqual(0)
    })

    it('random integer in interval', () => {
        const random = MathUtils.randomInt(0, 3)
        expect(random).toBeLessThan(3)
        expect(random).toBeGreaterThanOrEqual(0)
        expect(`${random}`).toMatch(/\d{1,}/)
    })

    it('seeded random in interval', () => {
        const random = MathUtils.seededRandom(0, 3)
        expect(random).toEqual(0.3084481351543218)
    })

    it('seeded random integer in interval', () => {
        const random = MathUtils.seededRandomInt(0, 100)
        expect(random).toEqual(31)
    })
})

describe('VectorUtils', () => {
    it('Euclidean distance', () => {
        expect(VectorUtils.euclideanDistance([1, 2, 3], [4, 5, 6])).toEqual(5.196152422706632)
    })

    it('Manhattan distance', () => {
        expect(VectorUtils.manhattanDistance([1, 2, 3], [4, 5, 6])).toEqual(9)
    })

    it('sum', () => {
        expect(VectorUtils.sum([1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9])
    })

    it('average', () => {
        expect(
            VectorUtils.average([
                [1, 2, 3], //
                [4, 5, 6]
            ])
        ).toEqual([2.5, 3.5, 4.5])
    })

    it('index of smallest', () => {
        expect(VectorUtils.indexOfSmallest([3, 1, 4])).toEqual(1)
    })
})
