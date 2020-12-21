import { LinearRegression, LinearRegressionConfig } from '@ascentcore/dataspot/regressions/linearRegression'

const input = [0.1, 0.2, 0.3, 0.4, 0.5]
const output = [1, 2, 3, 4, 5]

const config = new LinearRegressionConfig()
config.learningRate = 0.5
const linearRegression = new LinearRegression(config)
linearRegression.fit(input, output)

const prediction = linearRegression.predict([0.6, 0.7, 0.8, 0.9])
console.log(prediction)

/** output [ 5.935202327991267, 6.913192347254651, 7.891182366518035, 8.869172385781418 ] */
