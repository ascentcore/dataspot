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

    it('sum vector', () => {
        expect(VectorUtils.sumElements([1, 2, 3])).toBe(6)
    })

    it('addition', () => {
        expect(VectorUtils.addition([1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9])
    })

    it('subtraction', () => {
        expect(VectorUtils.subtraction([4, 5, 6], [1, 2, 3])).toEqual([3, 3, 3])
    })

    it('multiplication', () => {
        expect(VectorUtils.multiplication([1, 2, 3], [4, 5, 6])).toEqual([4, 10, 18])
    })

    it('division', () => {
        expect(VectorUtils.division([4, 10, 18], [1, 2, 3])).toEqual([4, 5, 6])
    })

    it('scalar addition', () => {
        expect(VectorUtils.scalarAddition([1, 2, 3], 2)).toEqual([3, 4, 5])
    })

    it('scalar subtraction', () => {
        expect(VectorUtils.scalarSubtraction([1, 2, 3], 1)).toEqual([0, 1, 2])
    })

    it('scalar multiplication', () => {
        expect(VectorUtils.scalarMultiplication([1, 2, 3], 2)).toEqual([2, 4, 6])
    })

    it('scalar division', () => {
        expect(VectorUtils.scalarDivision([4, 6, 8], 2)).toEqual([2, 3, 4])
    })

    it('average vector', () => {
        expect(VectorUtils.averageElements([1, 2, 3])).toBe(2)
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

    it('normalize', () => {
        expect(VectorUtils.normalize([230.1, 44.5, 17.2, 151.5])).toEqual([
            0.560239549084077,
            -0.3115312353217473,
            -0.439760450915923,
            0.1910521371535932
        ])
        expect(VectorUtils.normalize([1, 2, 3, 4])).toEqual([-0.5, -0.16666666666666666, 0.16666666666666666, 0.5])
    })
})
