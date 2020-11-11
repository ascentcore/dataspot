import LinearRegression from './linearRegression'
import { mseCostFunction } from '../functions/optimizers'

describe('Regressions', () => {
    it('Linear Regression', async () => {
        const linearRegression = LinearRegression.fit([3, 4, 5], [9, 16, 25], 2, 1, 0.001, 2, mseCostFunction)
        let done: boolean | undefined = false
        let result: { updatedWeight: number; updatedBias: number; costHistory: number[] } = {
            updatedWeight: 0,
            updatedBias: 0,
            costHistory: []
        }
        while (!done) {
            const linearRegressionValue = linearRegression.next()
            done = linearRegressionValue.done
            if (done) {
                result = <{ updatedWeight: number; updatedBias: number; costHistory: number[] }>(
                    linearRegressionValue.value
                )
            }
        }
        expect(result.updatedWeight).toBe(2.136232888888889)
        expect(result.updatedBias).toBe(1.0300813333333334)
        expect(result.costHistory).toStrictEqual([83, 78.04663629629631])
    })
})
