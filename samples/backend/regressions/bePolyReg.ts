import { PolynomialRegression, PolynomialRegressionConfig } from '@ascentcore/dataspot/regressions/polynomialRegression'

const input = [[0.1], [0.2], [0.3], [0.4], [0.5], [0.6], [0.7], [0.8], [0.9]]
const output = [0.8, 0.6, 0.5, 0.45, 0.4, 0.45, 0.5, 0.6, 0.8]

const config = new PolynomialRegressionConfig()
config.degree = 3
config.iterations = 10000
config.convergenceHistorySize = 5
const polynomialRegression = new PolynomialRegression(config)
polynomialRegression.fit(input, output)

console.log(polynomialRegression.predict([0.15, 0.56]))
/** Output: [ 0.4127125100370872, 0.5230331576583737 ] */
