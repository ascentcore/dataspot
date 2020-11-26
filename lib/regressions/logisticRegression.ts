import { crossEntropy } from '../functions/losses'
import { gradientDescent } from '../functions/optimizers'
import { sigmoid } from '../functions/activations'
import { decisionBoundary, predictMultivariable, RegressionOutputType, transposeAndNormalize } from './utilities'

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
        let updatedPrediction = predictMultivariable(transformedInput, biasAndWeights).map((pred) => sigmoid(pred))
        let probabilitiesToClasses = decisionBoundary(updatedPrediction)

        while (true) {
            let updated = true

            const bw = gradientDescent(transformedInput, target, biasAndWeights, learningRate, costFunction)

            biasAndWeights = bw

            // Calculate cost for auditing purposes
            const cost = crossEntropy(probabilitiesToClasses, target)
            costHistory.push(cost)

            updatedPrediction = predictMultivariable(transformedInput, biasAndWeights).map((pred) => sigmoid(pred))
            probabilitiesToClasses = decisionBoundary(updatedPrediction)

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
