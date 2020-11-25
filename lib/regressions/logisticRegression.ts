import { crossEntropy } from '../functions/losses'
import { gradientDescent } from '../functions/optimizers'
import { sigmoid } from '../functions/activations'
import { MatrixUtils, VectorUtils } from '../math-utils'

function transformInput(input: number[][]): number[][] {
    const inputWithBias: number[][] = []
    let transposeInput: number[][] = []
    let normalizeInput: number[][] = []

    for (let i = 0; i < input.length; i++) {
        inputWithBias.push([1].concat(input[i]))
    }

    transposeInput = MatrixUtils.transpose(inputWithBias)

    for (let i = 0; i < transposeInput[0].length; i++) {
        normalizeInput.push(VectorUtils.normalize(transposeInput[i]))
    }

    normalizeInput = MatrixUtils.transpose(normalizeInput)

    return normalizeInput
}

function predict(input: number[][], weight: number[]): number[] {
    const value: number[] = []

    input.forEach((feature) => {
        let pred = 0
        for (let i = 0; i < input[0].length; i++) {
            pred += feature[i] * weight[i]
        }
        value.push(sigmoid(pred))
    })

    return value
}

// Convert probabilities to classes
function decisionBoundary(probabilities: number[]): number[] {
    const value = []
    for (let i = 0; i < probabilities.length; i++) {
        value.push(probabilities[i] >= 0.5 ? 1 : 0)
    }

    return value
}

export type LogisticRegressionOutputType = {
    updatedWeight: number[]
    costHistory: number[]
}

export default class LogisticRegression {
    static *fit(
        input: number[][],
        target: number[],
        weight: number[],
        learningRate: number,
        epochs: number,
        costFunction: Function
    ): Generator<LogisticRegressionOutputType> {
        const costHistory: number[] = []
        let updatedWeight = weight
        let currentEpoch = 0

        const transformedInput = transformInput(input)

        let updatedPrediction = predict(transformedInput, weight)

        let probabilitiesToClasses = decisionBoundary(updatedPrediction)

        while (true) {
            let updated = true

            const [w] = gradientDescent(input, target, updatedWeight, 1, learningRate, costFunction)

            updatedWeight = <number[]>w

            // Calculate cost for auditing purposes
            const cost = crossEntropy(probabilitiesToClasses, target)
            costHistory.push(cost)

            updatedPrediction = predict(transformedInput, updatedWeight)

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
                updatedWeight,
                costHistory
            }
        }

        return {
            updatedWeight,
            costHistory
        }
    }
}
