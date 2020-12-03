import { VectorUtils } from '../utils/math-utils'

function crossEntropy(prediction: number[], target: number[]): number {
    const logClass1Pred: number[] = []
    const logClass2Pred: number[] = []
    const samples = prediction.length
    let class1Cost: number[] = []
    let class2Cost: number[] = []
    let cost: number[] = []
    for (let i = 0; i < samples; i++) {
        logClass1Pred.push(Math.log(prediction[i]))
        logClass2Pred.push(Math.log(1 - prediction[i]))
    }
    class1Cost = VectorUtils.scalarMultiplication(VectorUtils.multiplication(logClass1Pred, target), -1)
    class2Cost = VectorUtils.scalarMultiplication(
        VectorUtils.multiplication(logClass2Pred, VectorUtils.scalarSubtraction(target, 1)),
        -1
    )

    cost = VectorUtils.subtraction(class1Cost, class2Cost)

    return VectorUtils.sumElements(cost) / samples
}

function hinge(prediction: number[], target: number[]): number {
    const correctClassPredictionValue = prediction[target.indexOf(1)]

    return Math.max(0, 1 - correctClassPredictionValue)
}

function meanSquaredError(prediction: number[], target: number[]): number {
    let value = 0
    for (let i = 0; i < target.length; i++) {
        value += (prediction[i] - target[i]) ** 2
    }

    return value / (2 * target.length)
}

function l2(prediction: number[], target: number[]): number {
    let value = 0
    for (let i = 0; i < target.length; i++) {
        value += (prediction[i] - target[i]) ** 2
    }

    return value
}

function meanAbsoluteError(prediction: number[], target: number[]): number {
    let value = 0
    for (let i = 0; i < target.length; i++) {
        value += Math.abs(prediction[i] - target[i])
    }

    return value / target.length
}

function supportVectorMachine(prediction: number[], target: number[]): number {
    let value = 0
    const correctClassPredictionValue = prediction[target.indexOf(1)]
    for (let i = 0; i < target.length; i++) {
        value += Math.max(0, prediction[i] - correctClassPredictionValue + 1)
    }
    value -= 1

    return value
}

export { crossEntropy, hinge, meanSquaredError, l2, meanAbsoluteError, supportVectorMachine }
