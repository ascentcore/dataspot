export function mseDerivatesCostFunction(input: number, target: number, weight: number, bias: number): number[] {
    const derivate = []
    derivate.push(-2 * input * (target - (weight * input + bias)))
    derivate.push(-2 * (target - (weight * input + bias)))

    return derivate
}

export default function gradientDescent(
    input: number[],
    target: number[],
    weight: number,
    bias: number,
    learningRate: number,
    derivatesCostFunction: Function
) {
    let newWeight = 0
    let newBias = 0
    let weightDeriv = 0
    let biasDeriv = 0
    let stepSizeWeight = 0
    let stepSizeBias = 0
    const samples = input.length

    for (let i = 0; i < samples; i++) {
        const [wD, bD] = derivatesCostFunction(input, target, weight, bias)

        weightDeriv += wD
        biasDeriv += bD
    }

    stepSizeWeight = (weightDeriv / samples) * learningRate
    stepSizeBias = (biasDeriv / samples) * learningRate

    newWeight = weight - stepSizeWeight
    newBias = bias - stepSizeBias

    return { newWeight, newBias }
}
