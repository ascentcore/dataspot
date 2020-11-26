function crossEntropy(prediction: number[], target: number[]): number {
    const correctClassPredictionValue = prediction[target.indexOf(1)]

    return -Math.log(correctClassPredictionValue)
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
