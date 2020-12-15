/* eslint-disable no-new */
import irisDataset from '@ascentcore/dataspot/datasets/samples/iris'
import Random from '@ascentcore/dataspot/math/random'
import { LabelEncoder } from '@ascentcore/dataspot/preprocessing/labelEncoder'
import {
    MultivariableLinearRegression,
    MultivariableLinearRegressionConfig
} from '@ascentcore/dataspot/regressions/multivariableLinearRegression'
import Table from '@ascentcore/dataspot/visualizations/html/table'

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
    config.learningRate = 0.01
    config.convergenceHistorySize = 5
    config.iterations = 10000
    const regressor = new MultivariableLinearRegression(config)
    regressor.fit(trainInputData, trainOutputData)

    const predicted = regressor.predict(testInputData)
    const expected = testOutputData

    const tableData: any[] = []
    for (let i = 0; i < predicted.length; i++) {
        tableData.push({
            'Sepal Width': testInputData[i][0],
            'Petal Length': testInputData[i][1],
            'Petal Width': testInputData[i][2],
            'Iris Class': labelEncoder.inverse([testInputData[i][3]]),
            'Predicted Sepal Length': predicted[i],
            'Expected Sepal Length': expected[i]
        })
    }

    const ref: HTMLElement = document.querySelector(`[data-ref="documentation/linearRegression"]`) || document.body
    ref.innerHTML += `<hr><h4>Multivariate Linear Regression - Predicting Iris Sepal Length</h4>`
    const table = new Table({})
    table.injectDOM(document)
    table.setContainer(ref)
    table.dataUpdate(tableData)
})()
