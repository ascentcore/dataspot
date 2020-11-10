import { gradientDescent, mseDerivatesCostFunction } from './optimizers'

describe('Optimizers', () => {
    it('Gradient Descent', async () => {
        expect(gradientDescent([5, 6], [25, 36], 0.9, 1, 0.001, mseDerivatesCostFunction)).toStrictEqual([
            1.1751,
            1.0491
        ])
        expect(gradientDescent([1.5, 2.5], [3, 5], 1.2, 1.1, 0.001, mseDerivatesCostFunction)).toStrictEqual([
            1.2024,
            1.101
        ])
        expect(gradientDescent([1.5, 2.5], [3, 5], 1.2, 1.1, 0.0001, mseDerivatesCostFunction)).toStrictEqual([
            1.20024,
            1.1001
        ])
    })
})
