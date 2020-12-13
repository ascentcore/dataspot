import MathUtils from '../utils/mathUtils'
import Losses from './losses'

describe('Loss Functions', () => {
    it('Cross-Entropy', async () => {
        expect(MathUtils.roundToPrecision(Losses.crossEntropy([0.6, 0.3, 0.1], [1, 0, 0]), 4)).toBe(0.3243)
        expect(MathUtils.roundToPrecision(Losses.crossEntropy([0.9, 0.4, 0.1], [1, 1, 0]), 4)).toBe(0.3757)
    })

    it('Hinge', async () => {
        expect(Losses.hinge([0.6, 0.4], [1, 0])).toBe(0.4)
        expect(Losses.hinge([0.9, 0.1], [0, 1])).toBe(0.9)
    })

    it('Mean Squared Error', async () => {
        expect(MathUtils.roundToPrecision(Losses.meanSquaredError([1.2, 2.3, 3.5], [1, 2, 3]), 4)).toBe(0.0633)
        expect(Losses.meanSquaredError([1, 2, 3], [1, 2, 3])).toBe(0)
    })

    it('L2', async () => {
        expect(MathUtils.roundToPrecision(Losses.l2([1.2, 2.3, 3.5], [1, 2, 3]), 4)).toBe(0.38)
        expect(Losses.l2([1, 2, 3], [1, 2, 3])).toBe(0)
    })

    it('Mean Absolute Error', async () => {
        expect(MathUtils.roundToPrecision(Losses.meanAbsoluteError([1.2, 2.3, 3.5], [1, 2, 3]), 4)).toBe(0.3333)
        expect(Losses.meanAbsoluteError([1, 2, 3], [1, 2, 3])).toBe(0)
    })

    it('Support Vector Machine', async () => {
        expect(MathUtils.roundToPrecision(Losses.supportVectorMachine([3.2, 5.1, -1.7], [1, 0, 0]), 2)).toBe(2.9)
        expect(Losses.supportVectorMachine([1.3, 4.9, 2.0], [0, 1, 0])).toBe(0)
        expect(MathUtils.roundToPrecision(Losses.supportVectorMachine([2.2, 2.5, -3.1], [0, 0, 1]), 2)).toBe(12.9)
    })
})
