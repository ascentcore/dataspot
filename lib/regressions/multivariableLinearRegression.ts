import { meanSquaredError } from '../functions/losses'
import { gradientDescent } from '../functions/optimizers'

export type MultivariableLinearRegressionOutputType = {
    updatedWeight: number[]
    updatedBias: number
    costHistory: number[]
}

export function predictionMultivariable(input: number[][], weight: number[], bias: number): number[] {
    const value: number[] = []

    input.forEach((feature) => {
        let pred = 0
        for (let i = 0; i < input[0].length; i++) {
            pred += feature[i] * weight[i]
        }
        value.push(pred + bias)
    })

    return value
}

export default class MultivariableLinearRegression {
    static *fit(
        input: number[][],
        target: number[],
        weight: number[],
        bias: number,
        learningRate: number,
        epochs: number,
        costFunction: Function
    ): Generator<MultivariableLinearRegressionOutputType> {
        const costHistory = []
        let updatedWeight = weight
        let updatedBias = bias
        let updatedPrediction = predictionMultivariable(input, weight, bias)
        let currentEpoch = 0

        while (true) {
            let updated = true

            const [w, b] = gradientDescent(input, target, updatedWeight, updatedBias, learningRate, costFunction)

            updatedWeight = <number[]>w
            updatedBias = <number>b

            // Calculate cost for auditing purposes
            const cost = meanSquaredError(updatedPrediction, target)
            costHistory.push(cost)

            updatedPrediction = predictionMultivariable(input, updatedWeight, updatedBias)

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
                updatedWeight,
                updatedBias,
                costHistory
            }
        }

        return {
            updatedWeight,
            updatedBias,
            costHistory
        }
    }
}
