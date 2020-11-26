/* eslint-disable @typescript-eslint/no-unused-vars */
import LinearRegression from './linearRegression'
import { mseCostFunction } from '../functions/optimizers'
import MultivariableLinearRegression from './multivariableLinearRegression'
import PolynomialRegression from './polynomialRegression'
import { RegressionOutputType } from './utilities'

describe('Regressions', () => {
    it('Linear Regression', async () => {
        const linearRegression = LinearRegression.fit([3, 4, 5], [9, 16, 25], 0.001, 2, mseCostFunction)
        let done: boolean | undefined = false
        let result: RegressionOutputType = {
            biasAndWeights: [0, 0],
            costHistory: []
        }
        while (!done) {
            const linearRegressionValue = linearRegression.next()
            done = linearRegressionValue.done
            if (done) {
                result = <RegressionOutputType>linearRegressionValue.value
            }
        }
        expect(result.biasAndWeights).toEqual([0.03331666666666667, 0.013057413322196192])
        expect(result.costHistory).toEqual([160.33333333333334, 160.0130491111111])
    })

    it('Multivariable Linear Regression', async () => {
        const multivariableLinearRegression = MultivariableLinearRegression.fit(
            [[1, 2], [2, 3]],
            [3, 5],
            0.001,
            2,
            mseCostFunction
        )
        let done: boolean | undefined = false
        let result: RegressionOutputType = {
            biasAndWeights: [],
            costHistory: []
        }
        while (!done) {
            const multivariableLinearRegressionValue = multivariableLinearRegression.next()
            done = multivariableLinearRegressionValue.done
            if (done) {
                result = <RegressionOutputType>multivariableLinearRegressionValue.value
            }
        }

        expect(result.biasAndWeights).toEqual([0.007996, 0.0019979999999999998, 0.0019979999999999998])
        expect(result.costHistory).toEqual([8.5, 8.46353925])
    })

    it('Polynomial Regression', async () => {
        const polynomialRegression = PolynomialRegression.fit(
            [1, 1.5, 2, 2.5, 3, 4, 5, 5.9, 7, 8, 8.5, 9, 9.5],
            [2, 1.25, 0.75, 0.25, 0, 0, 0.5, 1, 2, 3, 4, 5, 6],
            2,
            0.1,
            2,
            mseCostFunction
        )
        let done: boolean | undefined = false
        let result: RegressionOutputType = {
            biasAndWeights: [],
            costHistory: []
        }
        while (!done) {
            const polynomialRegressionValue = polynomialRegression.next()
            done = polynomialRegressionValue.done
            if (done) {
                result = <RegressionOutputType>polynomialRegressionValue.value
            }
        }
        expect(result.biasAndWeights).toEqual([0.3763461538461539, 0.2637018197663789, 0.30354392103052863])
        expect(result.costHistory).toEqual([3.7475961538461537, 2.9264552670781123])
    })
})
