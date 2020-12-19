---
layout: default
title: Regression
parent: regressions
grand_parent: Dataspot
has_children: false
---

# Regression

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
[lib/regressions/regression.ts:29](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L29)

## Properties

•  **config**: T

*Inherited from [common.Serializable](../common_serializable).[config](../common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/common/serializable.ts#L8)

___

• `Protected` **convergence**: [common.Convergence](../common_convergence)

{:.url-source-ref}
[lib/regressions/regression.ts:21](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L21)

___

• `Protected` **costFunction**: Function

{:.url-source-ref}
[lib/regressions/regression.ts:27](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L27)

___

• `Protected` **input**: number[] \| number[][] \| undefined

{:.url-source-ref}
[lib/regressions/regression.ts:23](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L23)

___

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[iteration](../common_evolutionaryalgorithm#iteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/common/evolutionaryAlgorithm.ts#L8)

___

• `Protected` **lossFunction**: Function

{:.url-source-ref}
[lib/regressions/regression.ts:29](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L29)

___

• `Protected` **target**: number[] \| undefined

{:.url-source-ref}
[lib/regressions/regression.ts:25](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L25)

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
▸ **loadState**(`from`: string \| T): void

#### Parameters:

Name | Type |
------ | ------ |
`from` | string \| T |

**Returns:** void

*Inherited from [common.Serializable](../common_serializable).[loadState](../common_serializable#loadstate)*

{:.url-source-ref}
[lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/common/serializable.ts#L14)

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
[lib/regressions/regression.ts:90](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L90)

___

{:.method-highlight}
▸ `Abstract`**prepareDataset**(`input`: number[] \| number[][], `output`: number[]): void

#### Parameters:

Name | Type |
------ | ------ |
`input` | number[] \| number[][] |
`output` | number[] |

**Returns:** void

{:.url-source-ref}
[lib/regressions/regression.ts:84](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L84)

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

*Overrides [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[shouldStop](../common_evolutionaryalgorithm#shouldstop)*

{:.url-source-ref}
[lib/regressions/regression.ts:80](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L80)

___

{:.method-highlight}
▸ `Abstract`**step**(): any

**Returns:** any

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[step](../common_evolutionaryalgorithm#step)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:18](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/common/evolutionaryAlgorithm.ts#L18)
