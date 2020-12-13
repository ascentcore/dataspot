import Losses from '@ascentcore/dataspot/functions/losses'
import { gradientDescent } from '@ascentcore/dataspot/functions/optimizers'
import VectorUtils from '@ascentcore/dataspot/utils/vectorUtils'
import predictSinglevariable, { RegressionOutputType } from './utilities'

export default class LinearRegression {
    static *fit(
        input: number[],
        target: number[],
        learningRate: number,
        epochs: number,
        costFunction: Function
    ): Generator<RegressionOutputType> {
        const costHistory = []
        const transformedInput = VectorUtils.normalize(input)
        let biasAndWeights: number[] = [0, 0]
        let updatedPrediction = predictSinglevariable(transformedInput, biasAndWeights)
        let currentEpoch = 0

        while (true) {
            let updated = true

            const bw = gradientDescent(transformedInput, target, biasAndWeights, learningRate, costFunction)

            biasAndWeights = bw

            // Calculate cost for auditing purposes
            const cost = Losses.meanSquaredError(updatedPrediction, target)
            costHistory.push(cost)

            updatedPrediction = predictSinglevariable(transformedInput, biasAndWeights)

            currentEpoch += 1

            if (
                costHistory.length >= 3 &&
                costHistory[costHistory.length - 1] === costHistory[costHistory.length - 2] &&
                costHistory[costHistory.length - 2] === costHistory[costHistory.length - 3]
            ) {
                updated = false
            }

            if (!updated || currentEpoch === epochs) {
                break
            }

            yield {
                biasAndWeights,
                costHistory
            }
        }

        return {
            biasAndWeights,
            costHistory
        }
    }
}
