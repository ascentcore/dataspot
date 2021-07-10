---
layout: default
title: PolynomialRegression
parent: regressions
grand_parent: Dataspot
has_children: false
---

# PolynomialRegression

In statistics, polynomial regression is a form of regression analysis in which the relationship
between the independent variable x and the dependent variable y is modelled as an nth degree polynomial in x.

Polynomial regression fits a nonlinear relationship between the value of x and the corresponding conditional mean of y,
denoted E(y |x). Although polynomial regression fits a nonlinear model to the data,
as a statistical estimation problem it is linear, in the sense that the regression function E(y | x)
is linear in the unknown parameters that are estimated from the data. For this reason, polynomial regression
is considered to be a special case of multiple linear regression. [Wikipedia](https://en.wikipedia.org/wiki/Polynomial_regression)

[Towards Data Science Article](https://towardsdatascience.com/polynomial-regression-bbe8b9d97491)

**`sample`** documentation/polynomialRegression

Sample usage

<div class="running-sample">
    <span class="running-sample-container" data-ref="documentation/polynomialRegression"></span>
    <script src='/dataspot/samples/polynomialRegression.js' title="documentation/polynomialRegression"></script>
</div>

**`code`** samples/backend/regressions/bePolyReg.ts

```ts
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

```

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [config](#config) |
| [convergence](#convergence) |
| [costFunction](#costfunction) |
| [currentPrediction](#currentprediction) |
| [input](#input) |
| [iteration](#iteration) |
| [lossFunction](#lossfunction) |
| [target](#target) |
| [transformedInput](#transformedinput) |
| [transformedTarget](#transformedtarget) |

| Methods |
|-----------|
| [fit](#fit) |
| [fitAsync](#fitasync) |
| [getIteration](#getiteration) |
| [loadState](#loadstate) |
| [predict](#predict) |
| [prepareDataset](#preparedataset) |
| [reset](#reset) |
| [serialize](#serialize) |
| [shouldStop](#shouldstop) |
| [step](#step) |

## Constructors

{:.method-highlight}
\+ **new PolynomialRegression**(`config`: [regressions.PolynomialRegressionConfig](../regressions_polynomialregressionconfig)): [regressions.PolynomialRegression](../regressions_polynomialregression)

#### Parameters:

Name | Type |
------ | ------ |
`config` | [regressions.PolynomialRegressionConfig](../regressions_polynomialregressionconfig) |

**Returns:** [regressions.PolynomialRegression](../regressions_polynomialregression)

*Inherited from [regressions.Regression](../regressions_regression).[constructor](../regressions_regression#constructor)*

*Overrides [common.Serializable](../common_serializable).[constructor](../common_serializable#constructor)*

{:.url-source-ref}
[lib/regressions/regression.ts:44](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/regressions/regression.ts#L44)

## Properties

•  **config**: [regressions.PolynomialRegressionConfig](../regressions_polynomialregressionconfig)

*Inherited from [common.Serializable](../common_serializable).[config](../common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/common/serializable.ts#L8)

___

• `Protected` **convergence**: [common.Convergence](../common_convergence)

*Inherited from [regressions.Regression](../regressions_regression).[convergence](../regressions_regression#convergence)*

{:.url-source-ref}
[lib/regressions/regression.ts:36](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/regressions/regression.ts#L36)

___

• `Protected` **costFunction**: Function

*Inherited from [regressions.Regression](../regressions_regression).[costFunction](../regressions_regression#costfunction)*

{:.url-source-ref}
[lib/regressions/regression.ts:42](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/regressions/regression.ts#L42)

___

• `Private` **currentPrediction**: number[] \| undefined

{:.url-source-ref}
[lib/regressions/polynomialRegression.ts:34](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/regressions/polynomialRegression.ts#L34)

___

• `Protected` **input**: number[] \| number[][] \| undefined

*Inherited from [regressions.Regression](../regressions_regression).[input](../regressions_regression#input)*

{:.url-source-ref}
[lib/regressions/regression.ts:38](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/regressions/regression.ts#L38)

___

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[iteration](../common_evolutionaryalgorithm#iteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/common/evolutionaryAlgorithm.ts#L8)

___

• `Protected` **lossFunction**: Function

*Inherited from [regressions.Regression](../regressions_regression).[lossFunction](../regressions_regression#lossfunction)*

{:.url-source-ref}
[lib/regressions/regression.ts:44](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/regressions/regression.ts#L44)

___

• `Protected` **target**: number[] \| undefined

*Inherited from [regressions.Regression](../regressions_regression).[target](../regressions_regression#target)*

{:.url-source-ref}
[lib/regressions/regression.ts:40](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/regressions/regression.ts#L40)

___

• `Private` **transformedInput**: number[][] \| undefined

{:.url-source-ref}
[lib/regressions/polynomialRegression.ts:30](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/regressions/polynomialRegression.ts#L30)

___

• `Private` **transformedTarget**: number[] \| undefined

{:.url-source-ref}
[lib/regressions/polynomialRegression.ts:32](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/regressions/polynomialRegression.ts#L32)

## Methods

{:.method-highlight}
▸ **fit**(`input`: number[] \| number[][], `target`: number[]): number[]

#### Parameters:

Name | Type |
------ | ------ |
`input` | number[] \| number[][] |
`target` | number[] |

**Returns:** number[]

*Inherited from [regressions.Regression](../regressions_regression).[fit](../regressions_regression#fit)*

{:.url-source-ref}
[lib/regressions/regression.ts:70](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/regressions/regression.ts#L70)

___

{:.method-highlight}
▸ **fitAsync**(`input`: number[] \| number[][], `target`: number[]): Generator\<number[]>

#### Parameters:

Name | Type |
------ | ------ |
`input` | number[] \| number[][] |
`target` | number[] |

**Returns:** Generator\<number[]>

*Inherited from [regressions.Regression](../regressions_regression).[fitAsync](../regressions_regression#fitasync)*

{:.url-source-ref}
[lib/regressions/regression.ts:82](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/regressions/regression.ts#L82)

___

{:.method-highlight}
▸ **getIteration**(): number

**Returns:** number

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[getIteration](../common_evolutionaryalgorithm#getiteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/common/evolutionaryAlgorithm.ts#L14)

___

{:.method-highlight}
▸ **loadState**(`from`: string \| [regressions.PolynomialRegressionConfig](../regressions_polynomialregressionconfig)): void

#### Parameters:

Name | Type |
------ | ------ |
`from` | string \| [regressions.PolynomialRegressionConfig](../regressions_polynomialregressionconfig) |

**Returns:** void

*Inherited from [common.Serializable](../common_serializable).[loadState](../common_serializable#loadstate)*

{:.url-source-ref}
[lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/common/serializable.ts#L14)

___

{:.method-highlight}
▸ **predict**(`data`: number[]): number[]

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[] |

**Returns:** number[]

*Overrides [regressions.Regression](../regressions_regression).[predict](../regressions_regression#predict)*

{:.url-source-ref}
[lib/regressions/polynomialRegression.ts:43](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/regressions/polynomialRegression.ts#L43)

___

{:.method-highlight}
▸ **prepareDataset**(`input`: number[], `output`: number[]): void

#### Parameters:

Name | Type |
------ | ------ |
`input` | number[] |
`output` | number[] |

**Returns:** void

*Overrides [regressions.Regression](../regressions_regression).[prepareDataset](../regressions_regression#preparedataset)*

{:.url-source-ref}
[lib/regressions/polynomialRegression.ts:36](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/regressions/polynomialRegression.ts#L36)

___

{:.method-highlight}
▸ **reset**(): void

**Returns:** void

*Inherited from [regressions.Regression](../regressions_regression).[reset](../regressions_regression#reset)*

*Overrides [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[reset](../common_evolutionaryalgorithm#reset)*

{:.url-source-ref}
[lib/regressions/regression.ts:99](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/regressions/regression.ts#L99)

___

{:.method-highlight}
▸ **serialize**(): string

**Returns:** string

*Inherited from [common.Serializable](../common_serializable).[serialize](../common_serializable#serialize)*

{:.url-source-ref}
[lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/common/serializable.ts#L10)

___

{:.method-highlight}
▸ **shouldStop**(): boolean

**Returns:** boolean

*Inherited from [regressions.Regression](../regressions_regression).[shouldStop](../regressions_regression#shouldstop)*

*Overrides [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[shouldStop](../common_evolutionaryalgorithm#shouldstop)*

{:.url-source-ref}
[lib/regressions/regression.ts:95](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/regressions/regression.ts#L95)

___

{:.method-highlight}
▸ **step**(): void

**Returns:** void

*Overrides [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[step](../common_evolutionaryalgorithm#step)*

{:.url-source-ref}
[lib/regressions/polynomialRegression.ts:49](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/regressions/polynomialRegression.ts#L49)
