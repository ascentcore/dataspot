import { meanSquaredError } from '../functions/losses'
import { gradientDescent } from '../functions/optimizers'
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
        const transformedInput = transformToPolynomialInput(input, degree)
        const normalizedInput = transposeAndNormalize(transformedInput)
        let biasAndWeights = Array(degree + 1).fill(0)
        let currentEpoch = 0
        let updatedPrediction = predictMultivariable(normalizedInput, biasAndWeights)

        while (true) {
            let updated = true

            const bw = gradientDescent(normalizedInput, target, biasAndWeights, learningRate, costFunction)

            biasAndWeights = bw

            // Calculate cost for auditing purposes
            const cost = meanSquaredError(updatedPrediction, target)
            costHistory.push(cost)

            updatedPrediction = predictMultivariable(normalizedInput, biasAndWeights)

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
