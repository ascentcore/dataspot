import Losses from '@ascentcore/dataspot/functions/losses'
import Optimizers from '../functions/optimizers'
import {
    predictMultivariable,
    RegressionOutputType,
    transformToPolynomialInput,
    transposeAndNormalize
} from './utilities'

export default class PolynomialRegression {
    static *fit(
        input: number[],
        target: number[],
        degree: number,
        learningRate: number,
        epochs: number,
        costFunction: Function
    ): Generator<RegressionOutputType> {
        const costHistory: number[] = []
        const transformedInput = transposeAndNormalize(transformToPolynomialInput(input, degree))
        let biasAndWeights = Array(degree + 1).fill(0)
        let currentEpoch = 0
        let updatedPrediction = predictMultivariable(transformedInput, biasAndWeights)

        while (true) {
            let updated = true

            const bw = Optimizers.gradientDescent(transformedInput, target, biasAndWeights, learningRate, costFunction)

            biasAndWeights = bw

            // Calculate cost for auditing purposes
            const cost = Losses.meanSquaredError(updatedPrediction, target)
            costHistory.push(cost)

            updatedPrediction = predictMultivariable(transformedInput, biasAndWeights)

            currentEpoch += 1

            if (
                costHistory.length >= 3 &&
                costHistory[costHistory.length - 1] === costHistory[costHistory.length - 2] &&
                costHistory[costHistory.length - 2] === costHistory[costHistory.length - 3]
            ) {
                updated = false
            }

            if (!updated || currentEpoch === epochs) {
                break
            }

            yield {
                biasAndWeights,
                costHistory
            }
        }

        return {
            biasAndWeights,
            costHistory
        }
    }
}
