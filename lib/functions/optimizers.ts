import { predictionSinglevariable } from '../regressions/linearRegression'
import { predictionMultivariable } from '../regressions/multivariableLinearRegression'
import { VectorUtils } from '../utils/math-utils'

export function mseCostFunction(input: number | number[], target: number, prediction: number): (number | number[])[] {
    const derivate: (number | number[])[] = []
    if (Array.isArray(input)) {
        const weightsDeriv = []
        for (let i = 0; i < input.length; i++) {
            weightsDeriv.push(-2 * input[i] * (target - prediction))
        }
        derivate.push(weightsDeriv)
    } else {
        let weightDeriv = 0
        weightDeriv = -2 * input * (target - prediction)
        derivate.push(weightDeriv)
    }

    derivate.push(-2 * (target - prediction))

    return derivate
}

export function gradientDescent(
    input: number[] | number[][],
    target: number[],
    weight: number | number[],
    bias: number,
    learningRate: number,
    costFunction: Function
): (number | number[])[] {
    const weightInit: number[] = Array(target.length).fill(0)
    const update = Array.isArray(weight) ? [weightInit, 0] : [0, 0]
    const samples = input.length
    const predictions = Array.isArray(weight)
        ? predictionMultivariable(<number[][]>input, weight, bias)
        : predictionSinglevariable(<number[]>input, weight, bias)
    let weightDeriv = Array.isArray(weight) ? weightInit : 0
    let biasDeriv = 0
    let stepSizeWeight = Array.isArray(weight) ? weightInit : 0
    let stepSizeBias = 0

    for (let i = 0; i < samples; i++) {
        const [wD, bD] = costFunction(input[i], target[i], predictions[i])

        weightDeriv = Array.isArray(weightDeriv) ? VectorUtils.addition(weightDeriv, wD) : weightDeriv + wD
        biasDeriv += bD
    }

    stepSizeWeight = Array.isArray(weightDeriv)
        ? VectorUtils.scalarMultiplication(VectorUtils.scalarDivision(weightDeriv, samples), learningRate)
        : (weightDeriv / samples) * learningRate
    stepSizeBias = (biasDeriv / samples) * learningRate

    update[0] = Array.isArray(weight)
        ? VectorUtils.subtraction(weight, <number[]>stepSizeWeight)
        : weight - <number>stepSizeWeight
    update[1] = bias - stepSizeBias

    return update
}
