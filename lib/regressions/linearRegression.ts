import { meanSquaredError } from '../functions/losses'

export default function linearRegression(
    input: number[],
    target: number[],
    weight: number,
    bias: number,
    learningRate: number,
    epochs: number
) {
    const costHistory = []
    const samples = input.length
    const prediction = []

    for (let i = 0; i < samples; i++) {
        prediction.push(weight * input[i] + bias)
    }

    for (let i = 0; i < epochs; i++) {
        // let weight, bias = gradientDescent(input, target, weight, bias, learningRate)

        // Calculate cost for auditing purposes
        const cost = meanSquaredError(prediction, target)
        costHistory.push(cost)
    }
}
