---
layout: default
title: LinearRegression
parent: regressions
grand_parent: Dataspot
has_children: false
---

# LinearRegression

Simple linear regression is useful for finding relationship between two continuous variables.
One is predictor or independent variable and other is response or dependent variable.
Relationship between two variables is said to be deterministic if one variable can be accurately expressed by the other.

**`sample`** documentation/linearRegression

Example:

<div class="running-sample">
    <span class="running-sample-container" data-ref="documentation/linearRegression"></span>
    <script src='/dataspot/samples/linearRegression.js' title="documentation/linearRegression"></script>
</div>

**`code`** samples/backend/regressions/beLinReg.ts

```ts
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
\+ **new LinearRegression**(`config`: [regressions.LinearRegressionConfig](../regressions_linearregressionconfig)): [regressions.LinearRegression](../regressions_linearregression)

#### Parameters:

Name | Type |
------ | ------ |
`config` | [regressions.LinearRegressionConfig](../regressions_linearregressionconfig) |

**Returns:** [regressions.LinearRegression](../regressions_linearregression)

*Inherited from [regressions.Regression](../regressions_regression).[constructor](../regressions_regression#constructor)*

*Overrides [common.Serializable](../common_serializable).[constructor](../common_serializable#constructor)*

{:.url-source-ref}
[lib/regressions/regression.ts:44](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/regressions/regression.ts#L44)

## Properties

•  **config**: [regressions.LinearRegressionConfig](../regressions_linearregressionconfig)

*Inherited from [common.Serializable](../common_serializable).[config](../common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/common/serializable.ts#L8)

___

• `Protected` **convergence**: [common.Convergence](../common_convergence)

*Inherited from [regressions.Regression](../regressions_regression).[convergence](../regressions_regression#convergence)*

{:.url-source-ref}
[lib/regressions/regression.ts:36](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/regressions/regression.ts#L36)

___

• `Protected` **costFunction**: Function

*Inherited from [regressions.Regression](../regressions_regression).[costFunction](../regressions_regression#costfunction)*

{:.url-source-ref}
[lib/regressions/regression.ts:42](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/regressions/regression.ts#L42)

___

• `Private` **currentPrediction**: number[] \| undefined

{:.url-source-ref}
[lib/regressions/linearRegression.ts:25](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/regressions/linearRegression.ts#L25)

___

• `Protected` **input**: number[] \| number[][] \| undefined

*Inherited from [regressions.Regression](../regressions_regression).[input](../regressions_regression#input)*

{:.url-source-ref}
[lib/regressions/regression.ts:38](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/regressions/regression.ts#L38)

___

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[iteration](../common_evolutionaryalgorithm#iteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/common/evolutionaryAlgorithm.ts#L8)

___

• `Protected` **lossFunction**: Function

*Inherited from [regressions.Regression](../regressions_regression).[lossFunction](../regressions_regression#lossfunction)*

{:.url-source-ref}
[lib/regressions/regression.ts:44](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/regressions/regression.ts#L44)

___

• `Protected` **target**: number[] \| undefined

*Inherited from [regressions.Regression](../regressions_regression).[target](../regressions_regression#target)*

{:.url-source-ref}
[lib/regressions/regression.ts:40](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/regressions/regression.ts#L40)

___

• `Private` **transformedInput**: number[] \| undefined

{:.url-source-ref}
[lib/regressions/linearRegression.ts:21](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/regressions/linearRegression.ts#L21)

___

• `Private` **transformedTarget**: number[] \| undefined

{:.url-source-ref}
[lib/regressions/linearRegression.ts:23](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/regressions/linearRegression.ts#L23)

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
[lib/regressions/regression.ts:70](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/regressions/regression.ts#L70)

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
[lib/regressions/regression.ts:82](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/regressions/regression.ts#L82)

___

{:.method-highlight}
▸ **getIteration**(): number

**Returns:** number

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[getIteration](../common_evolutionaryalgorithm#getiteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/common/evolutionaryAlgorithm.ts#L14)

___

{:.method-highlight}
▸ **loadState**(`from`: string \| [regressions.LinearRegressionConfig](../regressions_linearregressionconfig)): void

#### Parameters:

Name | Type |
------ | ------ |
`from` | string \| [regressions.LinearRegressionConfig](../regressions_linearregressionconfig) |

**Returns:** void

*Inherited from [common.Serializable](../common_serializable).[loadState](../common_serializable#loadstate)*

{:.url-source-ref}
[lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/common/serializable.ts#L14)

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
[lib/regressions/linearRegression.ts:34](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/regressions/linearRegression.ts#L34)

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
[lib/regressions/linearRegression.ts:27](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/regressions/linearRegression.ts#L27)

___

{:.method-highlight}
▸ **reset**(): void

**Returns:** void

*Inherited from [regressions.Regression](../regressions_regression).[reset](../regressions_regression#reset)*

*Overrides [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[reset](../common_evolutionaryalgorithm#reset)*

{:.url-source-ref}
[lib/regressions/regression.ts:99](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/regressions/regression.ts#L99)

___

{:.method-highlight}
▸ **serialize**(): string

**Returns:** string

*Inherited from [common.Serializable](../common_serializable).[serialize](../common_serializable#serialize)*

{:.url-source-ref}
[lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/common/serializable.ts#L10)

___

{:.method-highlight}
▸ **shouldStop**(): boolean

**Returns:** boolean

*Inherited from [regressions.Regression](../regressions_regression).[shouldStop](../regressions_regression#shouldstop)*

*Overrides [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[shouldStop](../common_evolutionaryalgorithm#shouldstop)*

{:.url-source-ref}
[lib/regressions/regression.ts:95](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/regressions/regression.ts#L95)

___

{:.method-highlight}
▸ **step**(): void

**Returns:** void

*Overrides [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[step](../common_evolutionaryalgorithm#step)*

{:.url-source-ref}
[lib/regressions/linearRegression.ts:38](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/regressions/linearRegression.ts#L38)
