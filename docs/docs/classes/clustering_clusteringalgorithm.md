---
layout: default
title: ClusteringAlgorithm
parent: clustering
grand_parent: Dataspot
has_children: false
---

# ClusteringAlgorithm

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
[lib/common/serializable.ts:7](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/common/serializable.ts#L7)

## Properties

•  **config**: T

*Inherited from [common.Serializable](../common_serializable).[config](../common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/common/serializable.ts#L8)

___

• `Protected` **fitData**: number[][]

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:4](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/clusteringBase.ts#L4)

___

• `Protected` **initialized**: boolean = false

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:8](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/clusteringBase.ts#L8)

___

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[iteration](../common_evolutionaryalgorithm#iteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/common/evolutionaryAlgorithm.ts#L8)

___

• `Protected` **labels**: number[]

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:6](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/clusteringBase.ts#L6)

## Methods

{:.method-highlight}
▸ `Abstract`**canStop**(): boolean

**Returns:** boolean

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:43](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/clusteringBase.ts#L43)

___

{:.method-highlight}
▸ **fit**(`data`: number[][]): number[]

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:30](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/clusteringBase.ts#L30)

___

{:.method-highlight}
▸ **fitAsync**(`data`: number[][]): Generator

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** Generator

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:19](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/clusteringBase.ts#L19)

___

{:.method-highlight}
▸ **loadState**(`from`: string): void

#### Parameters:

Name | Type |
------ | ------ |
`from` | string |

**Returns:** void

*Inherited from [common.Serializable](../common_serializable).[loadState](../common_serializable#loadstate)*

{:.url-source-ref}
[lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/common/serializable.ts#L14)

___

{:.method-highlight}
▸ **onEndFit**(): void

**Returns:** void

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:41](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/clusteringBase.ts#L41)

___

{:.method-highlight}
▸ `Abstract`**predict**(`data`: number[][]): number[]

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:45](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/clusteringBase.ts#L45)

___

{:.method-highlight}
▸ `Protected`**prepareDataset**(`data`: number[][]): void

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** void

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:10](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/clusteringBase.ts#L10)

___

{:.method-highlight}
▸ **serialize**(): string

**Returns:** string

*Inherited from [common.Serializable](../common_serializable).[serialize](../common_serializable#serialize)*

{:.url-source-ref}
[lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/common/serializable.ts#L10)

___

{:.method-highlight}
▸ **shouldStop**(): boolean

**Returns:** boolean

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[shouldStop](../common_evolutionaryalgorithm#shouldstop)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/common/evolutionaryAlgorithm.ts#L10)

___

{:.method-highlight}
▸ `Abstract`**step**(): any

**Returns:** any

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[step](../common_evolutionaryalgorithm#step)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/common/evolutionaryAlgorithm.ts#L14)
