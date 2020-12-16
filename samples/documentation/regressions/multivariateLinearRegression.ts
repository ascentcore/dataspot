/* eslint-disable no-new */
import irisDataset from '@ascentcore/dataspot/datasets/samples/iris'
import Random from '@ascentcore/dataspot/math/random'
import { LabelEncoder } from '@ascentcore/dataspot/preprocessing/labelEncoder'
import {
    MultivariableLinearRegression,
    MultivariableLinearRegressionConfig
} from '@ascentcore/dataspot/regressions/multivariableLinearRegression'
import Table from '@ascentcore/dataspot/visualizations/html/table'
import LineGraph from '@ascentcore/dataspot/ui/visualization/lineGraph'

export default (async () => {
    const input: number[][] = []
    const output: string[] = []

    Random.seed('multivariateLinearRegression')
    Random.shuffleArray(irisDataset)

    irisDataset.forEach((data: any[]) => {
        output.push(data.splice(-1)[0])
        input.push(data)
    })

    const labelEncoder = new LabelEncoder()
    const encoded = labelEncoder.fitTransform(output)

    const trainInputData = []
    const trainOutputData = []

    for (let i = 0; i < input.length; i++) {
        trainOutputData.push(input[i].splice(0, 1)[0])
        trainInputData.push([...input[i], encoded[i]])
    }

    const testCount = 10
    const testInputData = trainInputData.splice(-testCount)
    const testOutputData = trainOutputData.splice(-testCount)

    const config = new MultivariableLinearRegressionConfig()
    config.learningRate = 0.05
    config.convergenceHistorySize = 5
    config.iterations = 10000
    const regressor = new MultivariableLinearRegression(config)

    const ref: HTMLElement = document.querySelector(`[data-ref="documentation/linearRegression"]`) || document.body
    // ref.innerHTML += `<hr><h4>Multivariate Linear Regression - Predicting Iris Sepal Length</h4>`
    ref.appendChild(document.createElement('hr'))
    const title = document.createElement('h4')
    title.innerText = 'Multivariate Linear Regression - Predicting Iris Sepal Length'
    ref.appendChild(title)
    const table = new Table({})
    table.injectDOM(document)
    table.setContainer(ref)

    const generator = regressor.fitAsync(trainInputData, trainOutputData)
    const functionGraph = new LineGraph(ref, 400, 200)
    function step() {
        const res = generator.next()
        const predicted = regressor.predict(testInputData)
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
            regressor.config.lossHistory.slice(-100).map((val, index) => ({
                x: index,
                y: val
            }))
        )

        if (!res.done) {
            setTimeout(() => step(), 50)
        }
    }

    step()
})()
