import { MatrixUtils, VectorUtils } from '../math-utils'

export type RegressionOutputType = {
    biasAndWeights: number[]
    costHistory: number[]
}

export default function predictSinglevariable(input: number[], biasAndWeights: number[]): number[] {
    const value = []
    for (let i = 0; i < input.length; i++) {
        value.push(biasAndWeights[1] * input[i] + biasAndWeights[0])
    }

    return value
}

export function predictMultivariable(input: number[][], biasAndWeights: number[]): number[] {
    const value: number[] = []

    input.forEach((feature) => {
        let pred = 0
        for (let i = 0; i < input[0].length; i++) {
            pred += feature[i] * biasAndWeights[i]
        }
        value.push(pred)
    })

    return value
}

export function addBias(input: number[][]): number[][] {
    const value = []
    for (let i = 0; i < input.length; i++) {
        value.push([1].concat(input[i]))
    }

    return value
}

export function transposeAndNormalize(input: number[][]): number[][] {
    let transposedInput: number[][] = []
    let normalizedInput: number[][] = []

    transposedInput = MatrixUtils.transpose(input)

    for (let i = 0; i < transposedInput.length; i++) {
        normalizedInput.push(VectorUtils.normalize(transposedInput[i]))
    }

    normalizedInput = MatrixUtils.transpose(normalizedInput)

    const inputWithBias = addBias(normalizedInput)

    return inputWithBias
}

export function transformToPolynomialInput(input: number[], degree: number): number[][] {
    const polynomialInput: number[][] = []
    for (let i = 0; i < input.length; i++) {
        const power = []
        for (let j = 1; j <= degree; j++) {
            power.push(input[i] ** j)
        }
        polynomialInput.push(power)
    }

    return polynomialInput
}
