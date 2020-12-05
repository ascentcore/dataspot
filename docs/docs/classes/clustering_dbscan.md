---
layout: default
title: DBScan
parent: clustering
grand_parent: Dataspot
has_children: false
---

# DBScan

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [config](#config) |
| [distanceFunc](#distancefunc) |
| [fitData](#fitdata) |
| [initialized](#initialized) |
| [iteration](#iteration) |
| [labels](#labels) |

| Methods |
|-----------|
| [canStop](#canstop) |
| [fit](#fit) |
| [fitAsync](#fitasync) |
| [getNeigbouringIndexes](#getneigbouringindexes) |
| [initializeDependencies](#initializedependencies) |
| [loadState](#loadstate) |
| [onEndFit](#onendfit) |
| [predict](#predict) |
| [prepareDataset](#preparedataset) |
| [serialize](#serialize) |
| [shouldStop](#shouldstop) |
| [step](#step) |

## Constructors

{:.method-highlight}
\+ **new DBScan**(`config?`: [clustering.DBScanConfig](../clustering_dbscanconfig) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): [clustering.DBScan](../clustering_dbscan)

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [clustering.DBScanConfig](../clustering_dbscanconfig) \| undefined |
`distanceFunction?` | DistanceMeasurement \| undefined |

**Returns:** [clustering.DBScan](../clustering_dbscan)

*Overrides [common.Serializable](../common_serializable).[constructor](../common_serializable#constructor)*

{:.url-source-ref}
[lib/clustering/dbScan.ts:14](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/dbScan.ts#L14)

## Properties

•  **config**: [clustering.DBScanConfig](../clustering_dbscanconfig)

*Inherited from [common.Serializable](../common_serializable).[config](../common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/common/serializable.ts#L8)

___

• `Private` **distanceFunc**: Function

{:.url-source-ref}
[lib/clustering/dbScan.ts:14](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/dbScan.ts#L14)

___

• `Protected` **fitData**: number[][]

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[fitData](../clustering_clusteringalgorithm#fitdata)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:4](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/clusteringBase.ts#L4)

___

• `Protected` **initialized**: boolean = false

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[initialized](../clustering_clusteringalgorithm#initialized)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:8](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/clusteringBase.ts#L8)

___

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[iteration](../common_evolutionaryalgorithm#iteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/common/evolutionaryAlgorithm.ts#L8)

___

• `Protected` **labels**: number[]

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[labels](../clustering_clusteringalgorithm#labels)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:6](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/clusteringBase.ts#L6)

## Methods

{:.method-highlight}
▸ **canStop**(): boolean

**Returns:** boolean

*Overrides [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[canStop](../clustering_clusteringalgorithm#canstop)*

{:.url-source-ref}
[lib/clustering/dbScan.ts:21](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/dbScan.ts#L21)

___

{:.method-highlight}
▸ **fit**(`data`: number[][]): number[]

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[fit](../clustering_clusteringalgorithm#fit)*

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

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[fitAsync](../clustering_clusteringalgorithm#fitasync)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:19](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/clusteringBase.ts#L19)

___

{:.method-highlight}
▸ `Private`**getNeigbouringIndexes**(`reference`: number[]): number[]

#### Parameters:

Name | Type |
------ | ------ |
`reference` | number[] |

**Returns:** number[]

{:.url-source-ref}
[lib/clustering/dbScan.ts:29](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/dbScan.ts#L29)

___

{:.method-highlight}
▸ **initializeDependencies**(`distanceFunction?`: DistanceMeasurement): void

#### Parameters:

Name | Type |
------ | ------ |
`distanceFunction?` | DistanceMeasurement |

**Returns:** void

{:.url-source-ref}
[lib/clustering/dbScan.ts:67](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/dbScan.ts#L67)

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

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[onEndFit](../clustering_clusteringalgorithm#onendfit)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:41](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/clusteringBase.ts#L41)

___

{:.method-highlight}
▸ **predict**(`data`: number[][]): number[]

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

*Overrides [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[predict](../clustering_clusteringalgorithm#predict)*

{:.url-source-ref}
[lib/clustering/dbScan.ts:25](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/dbScan.ts#L25)

___

{:.method-highlight}
▸ `Protected`**prepareDataset**(`data`: number[][]): void

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** void

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[prepareDataset](../clustering_clusteringalgorithm#preparedataset)*

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
▸ **step**(): void

**Returns:** void

*Overrides [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[step](../common_evolutionaryalgorithm#step)*

{:.url-source-ref}
[lib/clustering/dbScan.ts:38](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/clustering/dbScan.ts#L38)
