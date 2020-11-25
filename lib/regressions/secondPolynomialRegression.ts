import { meanSquaredError } from '../functions/losses'
import { gradientDescent } from '../functions/optimizers'
import { VectorUtils, MatrixUtils } from '../math-utils'

export function predict(input: number[][], weight: number[]): number[] {
    const value: number[] = []

    let pred = 0
    input.forEach((feature) => {
        for (let i = 0; i < input[0].length; i++) {
            pred += feature[i] * weight[i]
        }
        value.push(pred)
    })

    return value
}

export function transformInput(input: number[], degree: number): number[][] {
    const polynomialInput: number[][] = []
    let transposePolynomialInput: number[][] = []
    let normalizePolynomialInput: number[][] = []

    for (let i = 0; i < input.length; i++) {
        const power = []
        for (let j = 1; j <= degree; j++) {
            power.push(input[i] ** j)
        }
        polynomialInput.push(power)
    }

    transposePolynomialInput = MatrixUtils.transpose(polynomialInput)

    for (let i = 0; i < degree; i++) {
        normalizePolynomialInput.push(VectorUtils.normalize(transposePolynomialInput[i]))
    }

    normalizePolynomialInput = MatrixUtils.transpose(normalizePolynomialInput)

    const inputWithBias = []
    for (let i = 0; i < input.length; i++) {
        inputWithBias.push([1].concat(normalizePolynomialInput[i]))
    }

    return inputWithBias
}

export type SecondPolynomialRegressionOutputType = {
    weights: number[]
    costHistory: number[]
}

export default class SecondPolynomialRegression {
    static *fit(
        input: number[],
        target: number[],
        degree: number,
        learningRate: number,
        epochs: number,
        costFunction: Function
    ): Generator<SecondPolynomialRegressionOutputType> {
        const costHistory: number[] = []
        let weights = Array(degree + 1).fill(0)
        let currentEpoch = 0

        const transformedInput = transformInput(input, degree)

        let updatedPrediction = predict(transformedInput, weights)

        while (true) {
            let updated = true

            const w = gradientDescent(transformedInput, target, weights, 1, learningRate, costFunction)

            weights = w

            // Calculate cost for auditing purposes
            const cost = meanSquaredError(updatedPrediction, target)
            costHistory.push(cost)

            updatedPrediction = predict(transformedInput, weights)

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
                weights,
                costHistory
            }
        }

        return {
            weights,
            costHistory
        }
    }
}
