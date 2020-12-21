import Optimizers from '@ascentcore/dataspot/functions/optimizers'
import { roundToPrecision } from '../math'
import Regression, { RegressionConfig } from './regression'
import { predictMultivariable, transformToPolynomialInput, transpose } from './utilities'

export class PolynomialRegressionConfig extends RegressionConfig {
    learningRate: number = 0.001

    degree: number = 2
}

/**
 * In statistics, polynomial regression is a form of regression analysis in which the relationship
 * between the independent variable x and the dependent variable y is modelled as an nth degree polynomial in x.
 *
 * Polynomial regression fits a nonlinear relationship between the value of x and the corresponding conditional mean of y,
 * denoted E(y |x). Although polynomial regression fits a nonlinear model to the data,
 * as a statistical estimation problem it is linear, in the sense that the regression function E(y | x)
 * is linear in the unknown parameters that are estimated from the data. For this reason, polynomial regression
 * is considered to be a special case of multiple linear regression. [Wikipedia](https://en.wikipedia.org/wiki/Polynomial_regression)
 *
 * [Towards Data Science Article](https://towardsdatascience.com/polynomial-regression-bbe8b9d97491)
 *
 * @sample documentation/polynomialRegression
 *
 * Sample usage
 * @code samples/backend/regressions/bePolyReg.ts
 */
export class PolynomialRegression extends Regression<PolynomialRegressionConfig> {
    private transformedInput: number[][] | undefined

    private transformedTarget: number[] | undefined

    private currentPrediction: number[] | undefined

    prepareDataset(input: number[], output: number[]): void {
        this.transformedInput = transpose(transformToPolynomialInput(input, this.config.degree))
        this.config.biasAndWeights = Array(this.config.degree + 1).fill(0)
        this.transformedTarget = output
        this.currentPrediction = predictMultivariable(this.transformedInput, this.config.biasAndWeights)
    }

    predict(data: number[]): number[] {
        const polyInput = transformToPolynomialInput(data, this.config.degree)
        const transformedInput = transpose(polyInput)
        return predictMultivariable(transformedInput, this.config.biasAndWeights)
    }

    step() {
        const { biasAndWeights, learningRate } = this.config
        this.config.biasAndWeights = Optimizers.gradientDescent(
            this.transformedInput as number[][],
            this.transformedTarget as number[],
            biasAndWeights,
            learningRate,
            this.costFunction
        )

        const loss: number = this.lossFunction(this.currentPrediction, this.transformedTarget)
        const lossValue = roundToPrecision(loss, this.config.convergenceRoundingPrecision)
        this.config.lossHistory.push(lossValue)

        this.currentPrediction = predictMultivariable(this.transformedInput as number[][], this.config.biasAndWeights)
        this.convergence.addValue(lossValue)
    }
}
