---
layout: default
title: Regression
parent: regressions
grand_parent: Dataspot
has_children: false
---

# Regression

Base class for regression algorithms

## Type parameters

Name | Type |
------ | ------ |
`T` | [regressions.RegressionConfig](../regressions_regressionconfig) |

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [config](#config) |
| [convergence](#convergence) |
| [costFunction](#costfunction) |
| [input](#input) |
| [iteration](#iteration) |
| [lossFunction](#lossfunction) |
| [target](#target) |

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
\+ **new Regression**(`config`: T): [regressions.Regression](../regressions_regression)

#### Parameters:

Name | Type |
------ | ------ |
`config` | T |

**Returns:** [regressions.Regression](../regressions_regression)

*Overrides [common.Serializable](../common_serializable).[constructor](../common_serializable#constructor)*

{:.url-source-ref}
[lib/regressions/regression.ts:44](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L44)

## Properties

•  **config**: T

*Inherited from [common.Serializable](../common_serializable).[config](../common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/3098228/lib/common/serializable.ts#L8)

___

• `Protected` **convergence**: [common.Convergence](../common_convergence)

{:.url-source-ref}
[lib/regressions/regression.ts:36](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L36)

___

• `Protected` **costFunction**: Function

{:.url-source-ref}
[lib/regressions/regression.ts:42](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L42)

___

• `Protected` **input**: number[] \| number[][] \| undefined

{:.url-source-ref}
[lib/regressions/regression.ts:38](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L38)

___

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[iteration](../common_evolutionaryalgorithm#iteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/3098228/lib/common/evolutionaryAlgorithm.ts#L8)

___

• `Protected` **lossFunction**: Function

{:.url-source-ref}
[lib/regressions/regression.ts:44](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L44)

___

• `Protected` **target**: number[] \| undefined

{:.url-source-ref}
[lib/regressions/regression.ts:40](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L40)

## Methods

{:.method-highlight}
▸ **fit**(`input`: number[] \| number[][], `target`: number[]): number[]

#### Parameters:

Name | Type |
------ | ------ |
`input` | number[] \| number[][] |
`target` | number[] |

**Returns:** number[]

{:.url-source-ref}
[lib/regressions/regression.ts:70](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L70)

___

{:.method-highlight}
▸ **fitAsync**(`input`: number[] \| number[][], `target`: number[]): Generator\<number[]>

#### Parameters:

Name | Type |
------ | ------ |
`input` | number[] \| number[][] |
`target` | number[] |

**Returns:** Generator\<number[]>

{:.url-source-ref}
[lib/regressions/regression.ts:82](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L82)

___

{:.method-highlight}
▸ **getIteration**(): number

**Returns:** number

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[getIteration](../common_evolutionaryalgorithm#getiteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/3098228/lib/common/evolutionaryAlgorithm.ts#L14)

___

{:.method-highlight}
▸ **loadState**(`from`: string \| T): void

#### Parameters:

Name | Type |
------ | ------ |
`from` | string \| T |

**Returns:** void

*Inherited from [common.Serializable](../common_serializable).[loadState](../common_serializable#loadstate)*

{:.url-source-ref}
[lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/3098228/lib/common/serializable.ts#L14)

___

{:.method-highlight}
▸ `Abstract`**predict**(`data`: number[] \| number[][]): number[]

Predict new data based on the fitted data

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | number[] \| number[][] | never seen data  |

**Returns:** number[]

{:.url-source-ref}
[lib/regressions/regression.ts:110](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L110)

___

{:.method-highlight}
▸ `Abstract`**prepareDataset**(`input`: number[] \| number[][], `output`: number[]): void

Prepares input / output datasets for performing fitting

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | number[] \| number[][] | input dataset |
`output` | number[] | output dataset  |

**Returns:** void

{:.url-source-ref}
[lib/regressions/regression.ts:104](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L104)

___

{:.method-highlight}
▸ **serialize**(): string

**Returns:** string

*Inherited from [common.Serializable](../common_serializable).[serialize](../common_serializable#serialize)*

{:.url-source-ref}
[lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/3098228/lib/common/serializable.ts#L10)

___

{:.method-highlight}
▸ **shouldStop**(): boolean

**Returns:** boolean

*Overrides [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[shouldStop](../common_evolutionaryalgorithm#shouldstop)*

{:.url-source-ref}
[lib/regressions/regression.ts:95](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L95)

___

{:.method-highlight}
▸ `Abstract`**step**(): any

**Returns:** any

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[step](../common_evolutionaryalgorithm#step)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:18](https://github.com/ascentcore/dataspot/blob/3098228/lib/common/evolutionaryAlgorithm.ts#L18)
