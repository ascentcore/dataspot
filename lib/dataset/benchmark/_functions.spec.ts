import { MathUtils } from '../../math-utils'
import rastrigin from './rastrigin'
import schwefel from './schwefel'
import ackley from './ackley'
import griewank from './griewank'
import rosenbrock from './rosenbrock'

describe('Optimization Functions', () => {
    it('Rastrigin tests', async () => {
        expect(rastrigin(0, 0)).toBe(0)
        expect(rastrigin(1, 1)).toBe(2)
        expect(rastrigin(-1, 1)).toBe(2)
        expect(rastrigin(1, -1)).toBe(2)
        expect(rastrigin(-1, -1)).toBe(2)
        expect(rastrigin(-5.12, -5.12)).toBe(57.84942745157179)
        expect(rastrigin(-5.12, 5.12)).toBe(57.84942745157179)
        expect(rastrigin(5.12, 5.12)).toBe(57.84942745157179)
    })

    it('Weierstrass tests', async () => {
        expect(Math.abs(MathUtils.roundToPrecision(schwefel(420.9687, 420.9687), 4))).toBe(0)
    })

    it('Ackley tests', async () => {
        expect(Math.abs(MathUtils.roundToPrecision(ackley(0, 0), 4))).toBe(0)
    })

    it('Griewank tests', async () => {
        expect(Math.abs(MathUtils.roundToPrecision(griewank(0, 0), 4))).toBe(0)
    })

    it('Rosenbrock tests', async () => {
        expect(Math.abs(MathUtils.roundToPrecision(rosenbrock(1, 1), 4))).toBe(0)
    })
})
