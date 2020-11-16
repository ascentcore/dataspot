import { mseCostFunction, updateWeightAndBias, updateWeightsAndBias } from './optimizers'

describe('Optimizers', () => {
    it('Gradient Descent', async () => {
        expect(mseCostFunction(3, 9, 3.7)).toEqual([-31.799999999999997, -10.6])
        expect(mseCostFunction([1, 2], 3, 1.5)).toEqual([[-3, -6], -3])
        expect(mseCostFunction([1, 2], 3, 3.5)).toEqual([[1, 2], 1])
        expect(mseCostFunction([2, 3], 5, 5)).toEqual([[-0, -0], -0])

        expect(updateWeightAndBias([5, 6], [25, 36], 0.9, 1, 0.001, mseCostFunction)).toEqual([1.1751, 1.0491])
        expect(updateWeightAndBias([1.5, 2.5], [3, 5], 1.2, 1.1, 0.001, mseCostFunction)).toEqual([1.2024, 1.101])
        expect(updateWeightAndBias([1.5, 2.5], [3, 5], 1.2, 1.1, 0.0001, mseCostFunction)).toEqual([1.20024, 1.1001])

        expect(updateWeightsAndBias([[1, 2], [2, 3]], [3, 5], [0.5, 1], 1, 0.001, mseCostFunction)).toEqual([
            [0.4995, 0.999],
            0.9995
        ])
    })
})
