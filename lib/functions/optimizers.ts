import predictSinglevariable, { predictMultivariable } from '../regressions/utilities'
import { VectorUtils } from '../utils/math-utils'

export function mseCostFunction(input: number | number[], target: number, prediction: number): (number | number[])[] {
    const biasAndWeightsDeriv: number[] = []
    let derivate: number[] = []
    if (Array.isArray(input)) {
        for (let i = 0; i < input.length; i++) {
            biasAndWeightsDeriv.push(-1 * input[i] * (target - prediction))
        }
        // derivate[0] - bias; derivate[1-n] - weights;
        derivate = biasAndWeightsDeriv
    } else {
        biasAndWeightsDeriv.push(-1 * (target - prediction))
        biasAndWeightsDeriv.push(-1 * input * (target - prediction))
        // derivate[0] - bias; derivate[1] - weights;
        derivate = biasAndWeightsDeriv
    }

    return derivate
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
