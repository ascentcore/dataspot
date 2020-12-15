import Optimizers from '@ascentcore/dataspot/functions/optimizers'
import VectorUtils from '@ascentcore/dataspot/utils/vectorUtils'
import Regression, { RegressionConfig } from './regression'
import predictSinglevariable from './utilities'

export class LinearRegressionConfig extends RegressionConfig {
    learningRate: number = 0.001
}

export class LinearRegression extends Regression<LinearRegressionConfig> {
    private transformedInput: number[] | undefined

    private currentPrediction: number[] | undefined

    prepareDataset(input: number[]): void {
        this.transformedInput = VectorUtils.normalize(input)
        this.config.biasAndWeights = [0, 0]
        this.currentPrediction = predictSinglevariable(this.transformedInput, this.config.biasAndWeights)
    }

    predict(data: number[]): number[] {
        return predictSinglevariable(VectorUtils.normalize(data), this.config.biasAndWeights)
    }

    step() {
        const { biasAndWeights, learningRate } = this.config
        this.config.biasAndWeights = Optimizers.gradientDescent(
            this.transformedInput as number[],
            this.target as number[],
            biasAndWeights,
            learningRate,
            this.costFunction
        )

        this.currentPrediction = predictSinglevariable(this.transformedInput as number[], this.config.biasAndWeights)
        const loss: number = this.lossFunction(this.currentPrediction, this.target)
        this.config.lossHistory.push(loss)
        this.convergence.addValue(loss)

        this.iteration++
    }
}
