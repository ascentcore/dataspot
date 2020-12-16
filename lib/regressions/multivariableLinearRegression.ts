import Optimizers from '@ascentcore/dataspot/functions/optimizers'
import { LinearRegressionConfig } from './linearRegression'
import Regression from './regression'
import { addBias, predictMultivariable } from './utilities'

export class MultivariableLinearRegressionConfig extends LinearRegressionConfig {}

export class MultivariableLinearRegression extends Regression<MultivariableLinearRegressionConfig> {
    private transformedInput: number[][] | undefined

    private currentPrediction: number[] | undefined

    prepareDataset(input: number[][]): void {
        this.transformedInput = addBias(input)
        this.config.biasAndWeights = Array(input[0].length + 1).fill(0)
        this.currentPrediction = predictMultivariable(this.transformedInput, this.config.biasAndWeights)
    }

    predict(input: number[][]): number[] {
        return predictMultivariable(addBias(input), this.config.biasAndWeights)
    }

    step() {
        const { biasAndWeights, learningRate } = this.config
        this.config.biasAndWeights = Optimizers.gradientDescent(
            this.transformedInput as number[][],
            this.target as number[],
            biasAndWeights,
            learningRate,
            this.costFunction
        )

        this.currentPrediction = predictMultivariable(this.transformedInput as number[][], this.config.biasAndWeights)
        const loss: number = this.lossFunction(this.currentPrediction, this.target)
        this.config.lossHistory.push(loss)
        this.convergence.addValue(loss)

        this.iteration++
    }
}
