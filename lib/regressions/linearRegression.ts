import Optimizers from '@ascentcore/dataspot/functions/optimizers'
import VectorUtils from '@ascentcore/dataspot/utils/vectorUtils'
import { roundToPrecision } from '../math'
import Regression, { RegressionConfig } from './regression'
import predictSinglevariable from './utilities'

export class LinearRegressionConfig extends RegressionConfig {
    learningRate: number = 0.001
}

export class LinearRegression extends Regression<LinearRegressionConfig> {
    private transformedInput: number[] | undefined

    private transformedTarget: number[] | undefined

    private currentPrediction: number[] | undefined

    prepareDataset(input: number[], output: number[]): void {
        this.transformedInput = input
        this.transformedTarget = output
        this.config.biasAndWeights = [0, 0]
        this.currentPrediction = predictSinglevariable(this.transformedInput, this.config.biasAndWeights)
    }

    predict(data: number[]): number[] {
        return predictSinglevariable(data, this.config.biasAndWeights)
    }

    step() {
        const { biasAndWeights, learningRate } = this.config
        this.config.biasAndWeights = Optimizers.gradientDescent(
            this.transformedInput as number[],
            this.transformedTarget as number[],
            biasAndWeights,
            learningRate,
            this.costFunction
        )

        this.currentPrediction = predictSinglevariable(this.transformedInput as number[], this.config.biasAndWeights)
        const loss: number = this.lossFunction(this.currentPrediction, this.transformedTarget)
        const lossValue = roundToPrecision(loss, this.config.convergenceRoundingPrecision)
        this.config.lossHistory.push(lossValue)
        this.convergence.addValue(lossValue)

        this.iteration++
    }
}
