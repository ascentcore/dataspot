export default function gradientDescent(
    input: number[],
    target: number[],
    weight: number,
    bias: number,
    learningRate: number
) {
    let newWeight = 0
    let newBias = 0
    let weightDeriv = 0
    let biasDeriv = 0
    let stepSizeWeight = 0
    let stepSizeBias = 0
    const samples = input.length

    for (let i = 0; i < samples; i++) {
        // Calculate partial derivatives
        // -2x(y - (mx + b))
        weightDeriv += -2 * input[i] * (target[i] - (weight * input[i] + bias))

        // -2(y - (mx + b))
        biasDeriv += -2 * (target[i] - (weight * input[i] + bias))
    }

    stepSizeWeight = (weightDeriv / samples) * learningRate
    stepSizeBias = (biasDeriv / samples) * learningRate

    newWeight = weight - stepSizeWeight
    newBias = bias - stepSizeBias

    return { newWeight, newBias }
}
