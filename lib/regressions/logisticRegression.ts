import Optimizers from '@ascentcore/dataspot/functions/optimizers'
import Losses from '@ascentcore/dataspot/functions/losses'
// import { gradientDescent } from '../functions/optimizers'
import ActivationFunctions from '../functions/activations'
import { predictMultivariable, RegressionOutputType, transposeAndNormalize } from './utilities'

export default class LogisticRegression {
    static *fit(
        input: number[][],
        target: number[],
        learningRate: number,
        epochs: number,
        costFunction: Function
    ): Generator<RegressionOutputType> {
        const costHistory: number[] = []
        const transformedInput = transposeAndNormalize(input)
        let biasAndWeights = Array(input[0].length + 1).fill(0)
        let currentEpoch = 0
        let updatedPrediction = predictMultivariable(transformedInput, biasAndWeights).map((pred) =>
            ActivationFunctions.sigmoid(pred)
        )
        while (true) {
            let updated = true
            const bw = Optimizers.gradientDescent(transformedInput, target, biasAndWeights, learningRate, costFunction)

            biasAndWeights = bw

            // Calculate cost for auditing purposes
            const cost = Losses.crossEntropy(updatedPrediction, target)
            costHistory.push(cost)

            updatedPrediction = predictMultivariable(transformedInput, biasAndWeights).map((pred) =>
                ActivationFunctions.sigmoid(pred)
            )

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
