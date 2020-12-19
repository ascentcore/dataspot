---
layout: default
title: MultivariableLinearRegression
parent: regressions
grand_parent: Dataspot
has_children: false
---

# MultivariableLinearRegression

Multivariable Linear Regression

**`sample_only`** documentation/multivariateLinearRegression

<div class="running-sample">
    <span class="running-sample-container" data-ref="documentation/multivariateLinearRegression"></span>
    <script src='/dataspot/samples/multivariateLinearRegression.js' title="documentation/multivariateLinearRegression"></script>
</div>

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

| Methods |
|-----------|
| [fit](#fit) |
| [fitAsync](#fitasync) |
| [getIteration](#getiteration) |
| [loadState](#loadstate) |
| [predict](#predict) |
| [prepareDataset](#preparedataset) |
| [serialize](#serialize) |
| [shouldStop](#shouldstop) |
| [step](#step) |

## Constructors

{:.method-highlight}
\+ **new MultivariableLinearRegression**(`config`: [regressions.MultivariableLinearRegressionConfig](../regressions_multivariablelinearregressionconfig)): [regressions.MultivariableLinearRegression](../regressions_multivariablelinearregression)

#### Parameters:

Name | Type |
------ | ------ |
`config` | [regressions.MultivariableLinearRegressionConfig](../regressions_multivariablelinearregressionconfig) |

**Returns:** [regressions.MultivariableLinearRegression](../regressions_multivariablelinearregression)

*Inherited from [regressions.Regression](../regressions_regression).[constructor](../regressions_regression#constructor)*

*Overrides [common.Serializable](../common_serializable).[constructor](../common_serializable#constructor)*

{:.url-source-ref}
[lib/regressions/regression.ts:29](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L29)

## Properties

•  **config**: [regressions.MultivariableLinearRegressionConfig](../regressions_multivariablelinearregressionconfig)

*Inherited from [common.Serializable](../common_serializable).[config](../common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/common/serializable.ts#L8)

___

• `Protected` **convergence**: [common.Convergence](../common_convergence)

*Inherited from [regressions.Regression](../regressions_regression).[convergence](../regressions_regression#convergence)*

{:.url-source-ref}
[lib/regressions/regression.ts:21](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L21)

___

• `Protected` **costFunction**: Function

*Inherited from [regressions.Regression](../regressions_regression).[costFunction](../regressions_regression#costfunction)*

{:.url-source-ref}
[lib/regressions/regression.ts:27](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L27)

___

• `Private` **currentPrediction**: number[] \| undefined

{:.url-source-ref}
[lib/regressions/multivariableLinearRegression.ts:17](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/multivariableLinearRegression.ts#L17)

___

• `Protected` **input**: number[] \| number[][] \| undefined

*Inherited from [regressions.Regression](../regressions_regression).[input](../regressions_regression#input)*

{:.url-source-ref}
[lib/regressions/regression.ts:23](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L23)

___

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[iteration](../common_evolutionaryalgorithm#iteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/common/evolutionaryAlgorithm.ts#L8)

___

• `Protected` **lossFunction**: Function

*Inherited from [regressions.Regression](../regressions_regression).[lossFunction](../regressions_regression#lossfunction)*

{:.url-source-ref}
[lib/regressions/regression.ts:29](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L29)

___

• `Protected` **target**: number[] \| undefined

*Inherited from [regressions.Regression](../regressions_regression).[target](../regressions_regression#target)*

{:.url-source-ref}
[lib/regressions/regression.ts:25](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L25)

___

• `Private` **transformedInput**: number[][] \| undefined

{:.url-source-ref}
[lib/regressions/multivariableLinearRegression.ts:15](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/multivariableLinearRegression.ts#L15)

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
[lib/regressions/regression.ts:55](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L55)

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
[lib/regressions/regression.ts:67](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L67)

___

{:.method-highlight}
▸ **getIteration**(): number

**Returns:** number

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[getIteration](../common_evolutionaryalgorithm#getiteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/common/evolutionaryAlgorithm.ts#L14)

___

{:.method-highlight}
▸ **loadState**(`from`: string \| [regressions.MultivariableLinearRegressionConfig](../regressions_multivariablelinearregressionconfig)): void

#### Parameters:

Name | Type |
------ | ------ |
`from` | string \| [regressions.MultivariableLinearRegressionConfig](../regressions_multivariablelinearregressionconfig) |

**Returns:** void

*Inherited from [common.Serializable](../common_serializable).[loadState](../common_serializable#loadstate)*

{:.url-source-ref}
[lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/common/serializable.ts#L14)

___

{:.method-highlight}
▸ **predict**(`input`: number[][]): number[]

#### Parameters:

Name | Type |
------ | ------ |
`input` | number[][] |

**Returns:** number[]

*Overrides [regressions.Regression](../regressions_regression).[predict](../regressions_regression#predict)*

{:.url-source-ref}
[lib/regressions/multivariableLinearRegression.ts:25](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/multivariableLinearRegression.ts#L25)

___

{:.method-highlight}
▸ **prepareDataset**(`input`: number[][]): void

#### Parameters:

Name | Type |
------ | ------ |
`input` | number[][] |

**Returns:** void

*Overrides [regressions.Regression](../regressions_regression).[prepareDataset](../regressions_regression#preparedataset)*

{:.url-source-ref}
[lib/regressions/multivariableLinearRegression.ts:19](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/multivariableLinearRegression.ts#L19)

___

{:.method-highlight}
▸ **serialize**(): string

**Returns:** string

*Inherited from [common.Serializable](../common_serializable).[serialize](../common_serializable#serialize)*

{:.url-source-ref}
[lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/common/serializable.ts#L10)

___

{:.method-highlight}
▸ **shouldStop**(): boolean

**Returns:** boolean

*Inherited from [regressions.Regression](../regressions_regression).[shouldStop](../regressions_regression#shouldstop)*

*Overrides [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[shouldStop](../common_evolutionaryalgorithm#shouldstop)*

{:.url-source-ref}
[lib/regressions/regression.ts:80](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L80)

___

{:.method-highlight}
▸ **step**(): void

**Returns:** void

*Overrides [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[step](../common_evolutionaryalgorithm#step)*

{:.url-source-ref}
[lib/regressions/multivariableLinearRegression.ts:29](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/multivariableLinearRegression.ts#L29)
