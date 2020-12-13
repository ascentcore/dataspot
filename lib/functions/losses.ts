import VectorUtils from '@ascentcore/dataspot/utils/vectorUtils'

/**
 * Losses documentation
 *
 * Usage example
 * ```ts
 * import Losses from '@ascentcore/dataspot/functions/losses'
 *
 * const loss = Losses.meanSquaredError([0.6, 0.3, 0.1], [1, 0, 0])
 * ```
 */
export default class Losses {
    /**
     * In statistics, the mean squared error (MSE) of an estimator (of a procedure for estimating an unobserved quantity)
     * measures the average of the squares of the errors — that is, the average squared difference between the estimated
     * values and what is estimated. MSE is a risk function, corresponding to the expected value of the squared error loss.
     * The fact that MSE is almost always strictly positive (and not zero) is because of randomness or because the estimator
     * does not account for information that could produce a more accurate estimate.
     * @param prediction predicted values
     * @param target real values
     */
    static meanSquaredError(prediction: number[], target: number[]): number {
        let value = 0
        for (let i = 0; i < target.length; i++) {
            value += (prediction[i] - target[i]) ** 2
        }

        return value / (2 * target.length)
    }

    /**
     * Cross-entropy loss, or log loss, measures the performance of a classification model whose output is a probability
     * value between 0 and 1. Cross-entropy loss increases as the predicted probability diverges from the actual label.
     * So predicting a probability of .012 when the actual observation label is 1 would be bad and result in a high loss value.
     * A perfect model would have a log loss of 0. [reference](https://ml-cheatsheet.readthedocs.io/en/latest/loss_functions.html)
     *
     * @param prediction predicted values
     * @param target real values
     */
    static crossEntropy(prediction: number[], target: number[]): number {
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

    /**
     * In machine learning, the hinge loss is a loss function used for training classifiers.
     * The hinge loss is used for "maximum-margin" classification, most notably for support vector machines [Wikipedia](https://en.wikipedia.org/wiki/Hinge_loss)
     *
     * @param prediction predicted values
     * @param target real values
     */
    static hinge(prediction: number[], target: number[]): number {
        const correctClassPredictionValue = prediction[target.indexOf(1)]

        return Math.max(0, 1 - correctClassPredictionValue)
    }

    /**
     * L2 Loss Function is used to minimize the error which is the sum of the all the squared differences between the true value and the predicted value [AfterAcademy](https://afteracademy.com/blog/what-are-l1-and-l2-loss-functions#:~:text=the%20predicted%20value.-,L2%20Loss%20Function,value%20and%20the%20predicted%20value.)
     *
     * @param prediction predicted values
     * @param target real values
     */
    static l2(prediction: number[], target: number[]): number {
        let value = 0
        for (let i = 0; i < target.length; i++) {
            value += (prediction[i] - target[i]) ** 2
        }

        return value
    }

    /**
     * Mean Absolute Error (MAE) is another loss function used for regression models.
     * MAE is the sum of absolute differences between our target and predicted variables.
     * So it measures the average magnitude of errors in a set of predictions, without considering their directions.
     * (If we consider directions also, that would be called Mean Bias Error (MBE), which is a sum of residuals/errors).
     * The range is also 0 to ∞ [Hearbeat.fritz.ai](https://heartbeat.fritz.ai/5-regression-loss-functions-all-machine-learners-should-know-4fb140e9d4b0)
     *
     * @param prediction predicted values
     * @param target real values
     */
    static meanAbsoluteError(prediction: number[], target: number[]): number {
        let value = 0
        for (let i = 0; i < target.length; i++) {
            value += Math.abs(prediction[i] - target[i])
        }

        return value / target.length
    }

    static supportVectorMachine(prediction: number[], target: number[]): number {
        let value = 0
        const correctClassPredictionValue = prediction[target.indexOf(1)]
        for (let i = 0; i < target.length; i++) {
            value += Math.max(0, prediction[i] - correctClassPredictionValue + 1)
        }
        value -= 1

        return value
    }
}
