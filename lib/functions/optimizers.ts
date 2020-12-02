import predictSinglevariable, { predictMultivariable } from '../regressions/utilities'
import { VectorUtils } from '../utils/math-utils'
import { sigmoid } from './activations'

export function mseCostFunction(input: number | number[], target: number, prediction: number): (number | number[])[] {
    const biasAndWeightsDeriv: number[] = []
    if (Array.isArray(input)) {
        for (let i = 0; i < input.length; i++) {
            biasAndWeightsDeriv.push(-1 * input[i] * (target - prediction))
        }
    } else {
        biasAndWeightsDeriv.push(-1 * (target - prediction))
        biasAndWeightsDeriv.push(-1 * input * (target - prediction))
    }

    return biasAndWeightsDeriv
}

export function crossEntropyCostFunction(input: number[], target: number, prediction: number): number[] {
    const biasAndWeightsDeriv = []
    for (let i = 0; i < input.length; i++) {
        biasAndWeightsDeriv.push(input[i] * (sigmoid(prediction) - target))
    }

    return biasAndWeightsDeriv
}

export function gradientDescent(
    input: number[] | number[][],
    target: number[],
    biasAndWeights: number[],
    learningRate: number,
    costFunction: Function
): number[] {
    const samples = input.length
    const predictions =
        biasAndWeights.length === 2
            ? predictSinglevariable(<number[]>input, biasAndWeights)
            : predictMultivariable(<number[][]>input, biasAndWeights)
    let update: number[] = Array(biasAndWeights.length).fill(0)
    let biasAndWeightsDeriv: number[] = Array(biasAndWeights.length).fill(0)
    let stepSize: number[] = Array(biasAndWeights.length).fill(0)

    for (let i = 0; i < samples; i++) {
        const bwD = costFunction(input[i], target[i], predictions[i])

        biasAndWeightsDeriv = VectorUtils.addition(biasAndWeightsDeriv, bwD)
    }

    stepSize = VectorUtils.scalarMultiplication(VectorUtils.scalarDivision(biasAndWeightsDeriv, samples), learningRate)

    update = VectorUtils.subtraction(biasAndWeights, stepSize)

    return update
}
