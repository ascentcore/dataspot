import { meanSquaredError } from '../functions/losses'
import { gradientDescent } from '../functions/optimizers'
import { VectorUtils, MatrixUtils } from '../math-utils'
import { predictionMultivariable } from './multivariableLinearRegression'

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

    return normalizePolynomialInput
}

export type PolynomialRegressionOutputType = {
    updatedWeight: number[]
    updatedBias: number
    costHistory: number[]
}

export default class PolynomialRegression {
    static *fit(
        input: number[],
        target: number[],
        weight: number[],
        bias: number,
        degree: number,
        learningRate: number,
        epochs: number,
        costFunction: Function
    ): Generator<PolynomialRegressionOutputType> {
        const costHistory: number[] = []
        let updatedWeight = weight
        let updatedBias = bias
        let currentEpoch = 0

        const transformedInput = transformInput(input, degree)

        let updatedPrediction = predictionMultivariable(transformedInput, weight, bias)

        while (true) {
            let updated = true

            const [w, b] = gradientDescent(
                transformedInput,
                target,
                updatedWeight,
                updatedBias,
                learningRate,
                costFunction
            )

            updatedWeight = <number[]>w
            updatedBias = <number>b

            // Calculate cost for auditing purposes
            const cost = meanSquaredError(updatedPrediction, target)
            costHistory.push(cost)

            updatedPrediction = predictionMultivariable(transformedInput, updatedWeight, updatedBias)

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
