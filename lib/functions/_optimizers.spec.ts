import { mseCostFunction, gradientDescent } from './optimizers'

describe('Optimizers', () => {
    it('Gradient Descent', async () => {
        expect(mseCostFunction(3, 9, 3.7)).toEqual([-5.3, -15.899999999999999])
        expect(mseCostFunction([1, 2], 3, 1.5)).toEqual([-1.5, -3])
        expect(mseCostFunction([1, 2], 3, 3.5)).toEqual([0.5, 1])
        expect(mseCostFunction([2, 3], 5, 5)).toEqual([-0, -0])

        expect(gradientDescent([5, 6], [25, 36], [0.9, 1], 0.001, mseCostFunction)).toEqual([
            0.9241,
            1.1350500000000001
        ])
        expect(gradientDescent([1.5, 2.5], [3, 5], [1.2, 1.1], 0.001, mseCostFunction)).toEqual([1.2006, 1.101425])
        expect(gradientDescent([1.5, 2.5], [3, 5], [1.2, 1.1], 0.0001, mseCostFunction)).toEqual([1.20006, 1.1001425])

        expect(
            gradientDescent(
                [
                    [1, 1, 2],
                    [1, 2, 3]
                ],
                [3, 5],
                [1, 0.5, 1],
                0.001,
                mseCostFunction
            )
        ).toEqual([0.99975, 0.49975, 0.9995])
        expect(
            gradientDescent(
                [
                    [1, 1, 2],
                    [1, 2, 3]
                ],
                [3, 5],
                [0.9995, 0.4995, 0.999],
                0.001,
                mseCostFunction
            )
        ).toEqual([0.99925375, 0.499256, 0.99850975])
    })
})
