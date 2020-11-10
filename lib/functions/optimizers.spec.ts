// import { MathUtils } from '../math-utils'
import { gradientDescent, mseDerivatesCostFunction } from './optimizers'

describe('Optimizers', () => {
    it('Gradient Descent', async () => {
        expect(gradientDescent([37.8, 45.9], [22.1, 18.3], 0.03, 0.0014, 0.001, mseDerivatesCostFunction)).toBe([1, 2])
    })
})
