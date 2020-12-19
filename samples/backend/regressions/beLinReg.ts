import { LinearRegression, LinearRegressionConfig } from '@ascentcore/dataspot/regressions/linearRegression'

const input = [0.1, 0.2, 0.3, 0.4, 0.5]
const output = [0.5, 0.4, 0.3, 0.2, 0.1]

const config = new LinearRegressionConfig()
config.learningRate = 0.1
const linearRegression = new LinearRegression(config)
linearRegression.fit(input, output)

console.log(config.lossHistory)
