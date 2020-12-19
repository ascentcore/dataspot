---
layout: default
title: ClusteringAlgorithm
parent: clustering
grand_parent: Dataspot
has_children: false
---

# ClusteringAlgorithm

Base class for any clustering algorithms.

## Type parameters

Name | Type |
------ | ------ |
`T` | [common.EvolutionaryConfig](../common_evolutionaryconfig) |

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [config](#config) |
| [fitData](#fitdata) |
| [initialized](#initialized) |
| [iteration](#iteration) |
| [labels](#labels) |

| Methods |
|-----------|
| [canStop](#canstop) |
| [fit](#fit) |
| [fitAsync](#fitasync) |
| [getIteration](#getiteration) |
| [loadState](#loadstate) |
| [onEndFit](#onendfit) |
| [predict](#predict) |
| [prepareDataset](#preparedataset) |
| [serialize](#serialize) |
| [shouldStop](#shouldstop) |
| [step](#step) |

## Constructors

{:.method-highlight}
\+ **new ClusteringAlgorithm**(`config`: T): [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm)

#### Parameters:

Name | Type |
------ | ------ |
`config` | T |

**Returns:** [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm)

*Inherited from [common.Serializable](../common_serializable).[constructor](../common_serializable#constructor)*

{:.url-source-ref}
[lib/common/serializable.ts:7](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/common/serializable.ts#L7)

## Properties

•  **config**: T

*Inherited from [common.Serializable](../common_serializable).[config](../common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/common/serializable.ts#L8)

___

• `Protected` **fitData**: number[][]

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:10](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/clustering/clusteringBase.ts#L10)

Base data for fitted algorithm

___

• `Protected` **initialized**: boolean = false

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:20](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/clustering/clusteringBase.ts#L20)

Initialization state

___

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[iteration](../common_evolutionaryalgorithm#iteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/common/evolutionaryAlgorithm.ts#L8)

___

• `Protected` **labels**: number[]

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:15](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/clustering/clusteringBase.ts#L15)

Stored labels after the initial fit

## Methods

{:.method-highlight}
▸ `Abstract`**canStop**(): boolean

Flag to check if the algorithm converged

**Returns:** boolean

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:77](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/clustering/clusteringBase.ts#L77)

___

{:.method-highlight}
▸ **fit**(`data`: number[][]): number[]

Synchronous data fitting

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | number[][] | data to be fitted |

**Returns:** number[]

fitted labels

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:58](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/clustering/clusteringBase.ts#L58)

___

{:.method-highlight}
▸ **fitAsync**(`data`: number[][]): Generator

Asynchronous data fitting

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | number[][] | data to be fitted |

**Returns:** Generator

generator function

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:41](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/clustering/clusteringBase.ts#L41)

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
▸ **onEndFit**(): void

Function executed after clustering is completed

**Returns:** void

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:72](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/clustering/clusteringBase.ts#L72)

___

{:.method-highlight}
▸ `Abstract`**predict**(`data`: number[][]): number[]

Cluster new data

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | number[][] | new data to be clustered after fit  |

**Returns:** number[]

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:83](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/clustering/clusteringBase.ts#L83)

___

{:.method-highlight}
▸ `Protected`**prepareDataset**(`data`: number[][]): void

Prepares dataset and local state for fitting

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | number[][] | data to be fitted  |

**Returns:** void

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:26](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/clustering/clusteringBase.ts#L26)

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

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[shouldStop](../common_evolutionaryalgorithm#shouldstop)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/common/evolutionaryAlgorithm.ts#L10)

___

{:.method-highlight}
▸ `Abstract`**step**(): any

**Returns:** any

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[step](../common_evolutionaryalgorithm#step)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:18](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/common/evolutionaryAlgorithm.ts#L18)
