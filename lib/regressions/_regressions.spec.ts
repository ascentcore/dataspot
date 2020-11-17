/* eslint-disable @typescript-eslint/no-unused-vars */
import LinearRegression from './linearRegression'
import { mseCostFunction } from '../functions/optimizers'
import MultivariableLinearRegression, { predictionMultivariable } from './multivariableLinearRegression'

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

    it('Multivariable Linear Regression - Prediction Function', async () => {
        expect(predictionMultivariable([[1, 2, 3], [4, 5, 6]], [0.1, 0.2, 0.3], 1)).toEqual([2.4, 4.1999999999999997])
        expect(predictionMultivariable([[1, 2], [2, 3]], [0.5, 1], 1)).toEqual([3.5, 5])
        expect(predictionMultivariable([[1, 2], [2, 3]], [0.4995, 0.999], 0.9995)).toEqual([3.497, 4.9955])
    })

    it('Multivariable Linear Regression', async () => {
        const multivariableLinearRegression = MultivariableLinearRegression.fit(
            [[1, 2], [2, 3]],
            [3, 5],
            [0.5, 1],
            1,
            0.001,
            2,
            mseCostFunction
        )
        let done: boolean | undefined = false
        let result: { updatedWeight: number[]; updatedBias: number; costHistory: number[] } = {
            updatedWeight: [],
            updatedBias: 0,
            costHistory: []
        }
        while (!done) {
            const multivariableLinearRegressionValue = multivariableLinearRegression.next()
            done = multivariableLinearRegressionValue.done
            if (done) {
                result = <{ updatedWeight: number[]; updatedBias: number; costHistory: number[] }>(
                    multivariableLinearRegressionValue.value
                )
            }
        }
        expect(result.updatedWeight).toEqual([0.499012, 0.9980195])
        expect(result.updatedBias).toBe(0.9990075)
        expect(result.costHistory).toEqual([0.125, 0.12351462499999995])
    })
})
