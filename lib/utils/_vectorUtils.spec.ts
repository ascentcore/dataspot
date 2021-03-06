import VectorUtils from './vectorUtils'

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

    it('standard deviation', () => {
        expect(VectorUtils.standardDeviation([0, 0.5, 0.9, 1.2, 1.8, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toBe(
            3.5332327029695247
        )
    })

    it('normalize', () => {
        expect(VectorUtils.normalize([0, 0.5, 0.9, 1.2, 1.8, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toEqual([
            -1.3189054873412323,
            -1.177392023034233,
            -1.0641812515886337,
            -0.9792731730044342,
            -0.8094570158360352,
            -0.6113381658062365,
            -0.4698247014992373,
            -0.18679777288523894,
            0.09622915572875938,
            0.3792560843427577,
            0.6622830129567561,
            0.9453099415707543,
            1.2283368701847526,
            1.511363798798751,
            1.7943907274127493
        ])
    })
})
