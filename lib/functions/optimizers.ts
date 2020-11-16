import { VectorUtils } from '../math-utils'
import { predictionSinglevariable } from '../regressions/linearRegression'
import { predictionMultivariable } from '../regressions/multivariableLinearRegression'

export function mseCostFunction(input: number | number[], target: number, prediction: number): (number | number[])[] {
    const derivate: (number | number[])[] = []
    if (typeof input === 'number') {
        let weightDeriv = 0
        weightDeriv = -2 * input * (target - prediction)
        derivate.push(weightDeriv)
    } else {
        const weightsDeriv = []
        for (let i = 0; i < input.length; i++) {
            weightsDeriv.push(-2 * input[i] * (target - prediction))
        }
        derivate.push(weightsDeriv)
    }

    derivate.push(-2 * (target - prediction))

    return derivate
}

export function updateWeightAndBias(
    input: number[],
    target: number[],
    weight: number,
    bias: number,
    learningRate: number,
    costFunction: Function
): number[] {
    let weightDeriv = 0
    let biasDeriv = 0
    let stepSizeWeight = 0
    let stepSizeBias = 0
    const update: number[] = []
    const samples = input.length

    const prediction = predictionSinglevariable(input, weight, bias)

    for (let i = 0; i < samples; i++) {
        const [wD, bD] = costFunction(input[i], target[i], prediction[i])

        weightDeriv += wD
        biasDeriv += bD
    }
    stepSizeWeight = (weightDeriv / samples) * learningRate
    stepSizeBias = (biasDeriv / samples) * learningRate

    update.push(weight - stepSizeWeight)
    update.push(bias - stepSizeBias)

    return update
}

export function updateWeightsAndBias(
    input: number[][],
    target: number[],
    weight: number[],
    bias: number,
    learningRate: number,
    costFunction: Function
): [number[], number] {
    const weightInit: number[] = Array(weight.length).fill(0)
    let weightDeriv = weightInit
    let biasDeriv = 0
    let stepSizeWeight = weightInit
    let stepSizeBias = 0
    const update: [number[], number] = [weightInit, 0]
    const samples = input.length

    const predictions = predictionMultivariable(input, weight, bias)

    for (let i = 0; i < samples; i++) {
        const [wD, bD] = costFunction(input[i], target[i], predictions[i])

        weightDeriv = VectorUtils.addition(weightDeriv, wD)
        biasDeriv += bD
    }

    stepSizeWeight = VectorUtils.scalarDivision(weightDeriv, samples)
    stepSizeWeight = VectorUtils.scalarMultiplication(stepSizeWeight, learningRate)

    stepSizeBias = (biasDeriv / samples) * learningRate

    update[0] = VectorUtils.subtraction(weight, stepSizeWeight)
    update[1] = bias - stepSizeBias

    return update
}
