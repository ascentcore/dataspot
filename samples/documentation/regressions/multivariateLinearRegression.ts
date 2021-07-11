/* eslint-disable no-new */
import irisDataset from '@ascentcore/dataspot/datasets/samples/iris'
import Random from '@ascentcore/dataspot/math/random'
import LabelEncoder from '@ascentcore/dataspot/preprocessing/labelEncoder'
import {
    MultivariableLinearRegression,
    MultivariableLinearRegressionConfig
} from '@ascentcore/dataspot/regressions/multivariableLinearRegression'
import Table from '@ascentcore/dataspot/visualizations/html/table'
import LineGraph from '@ascentcore/dataspot/ui/visualization/lineGraph'
import Container from '@ascentcore/dataspot/ui/container'
import StepAlgorithmWrapper from '@ascentcore/dataspot/wrappers/stepAlgorithmWrapper'

export default (async () => {
    Random.seed('multivariateLinearRegression')
    const ref: HTMLElement = Container.getRootContainer(`[data-ref="documentation/multivariateLinearRegression"]`)
    const container = document.createElement('div')
    const title = document.createElement('h4')
    title.innerText = 'Multivariate Linear Regression - Predicting Iris Sepal Length'
    ref.appendChild(title)
    const table = new Table({})
    table.injectDOM(document)
    table.setContainer(container)

    const functionGraph = new LineGraph(container, 400, 200)

    const config = new MultivariableLinearRegressionConfig()
    config.learningRate = 0.05
    config.convergenceRoundingPrecision = 5
    config.convergenceHistorySize = 5
    config.iterations = 10000

    Object.assign(config.constructor, {
        definitions: {
            learningRate: { label: 'Learning Rate', min: 0, max: 1, default: 0.2 },
            convergenceRoundingPrecision: { label: 'Convergence Rounding Precision', min: 0, default: 5 }
        }
    })

    const regression = new MultivariableLinearRegression(config)
    let generator: Generator
    let testInputData: number[][]
    let testOutputData: number[]
    let labelEncoder: LabelEncoder

    // Initialize the experiment runner wrapper
    const wrapper = new StepAlgorithmWrapper(ref as HTMLElement, regression, () => {
        if (regression.getIteration() === 0) {
            const input: number[][] = []
            const output: string[] = []

            Random.shuffleArray(irisDataset)

            irisDataset.forEach((data: any[]) => {
                const clone = [...data]
                output.push(clone.splice(-1)[0])
                input.push(clone)
            })

            labelEncoder = new LabelEncoder()
            const encoded = labelEncoder.fitTransform(output)

            const trainInputData = []
            const trainOutputData = []

            for (let i = 0; i < input.length; i++) {
                trainOutputData.push(input[i].splice(0, 1)[0])
                trainInputData.push([...input[i], encoded[i]])
            }

            const testCount = 10
            testInputData = trainInputData.splice(-testCount)
            testOutputData = trainOutputData.splice(-testCount)

            console.log(trainInputData)

            generator = regression.fitAsync(trainInputData, trainOutputData)
        }

        const result = generator.next()
        const predicted = regression.predict(testInputData)
        const expected = testOutputData

        const tableData: any[] = []
        for (let i = 0; i < predicted.length; i++) {
            tableData.push({
                'Sepal Width': testInputData[i][0],
                'Petal Length': testInputData[i][1],
                'Petal Width': testInputData[i][2],
                'Iris Class': labelEncoder.inverse([testInputData[i][3]]),
                'Predicted Sepal Length': predicted[i].toFixed(4),
                'Expected Sepal Length': expected[i].toFixed(1),
                'Abs Err': Math.abs(expected[i] - predicted[i]).toFixed(4)
            })
        }
        table.dataUpdate(tableData)

        functionGraph.dataUpdate(
            regression.config.lossHistory.slice(-100).map((val, index) => ({
                x: index,
                y: val
            }))
        )

        return result.done
    })

    wrapper.mainView.appendChild(container)
})()
