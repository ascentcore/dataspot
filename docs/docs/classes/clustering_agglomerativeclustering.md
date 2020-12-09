---
layout: default
title: AgglomerativeClustering
parent: clustering
grand_parent: Dataspot
has_children: false
---

# AgglomerativeClustering

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [config](#config) |
| [distanceFunc](#distancefunc) |
| [fitData](#fitdata) |
| [hierarchyFitData](#hierarchyfitdata) |
| [initialized](#initialized) |
| [iteration](#iteration) |
| [labels](#labels) |

| Methods |
|-----------|
| [canStop](#canstop) |
| [fit](#fit) |
| [fitAsync](#fitasync) |
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
\+ **new AgglomerativeClustering**(`config?`: [clustering.AglomerativeClusteringConfig](../clustering_aglomerativeclusteringconfig) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): [clustering.AgglomerativeClustering](../clustering_agglomerativeclustering)

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [clustering.AglomerativeClusteringConfig](../clustering_aglomerativeclusteringconfig) \| undefined |
`distanceFunction?` | DistanceMeasurement \| undefined |

**Returns:** [clustering.AgglomerativeClustering](../clustering_agglomerativeclustering)

*Overrides [common.Serializable](../common_serializable).[constructor](../common_serializable#constructor)*

{:.url-source-ref}
[lib/clustering/agglomerativeClustering.ts:13](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/clustering/agglomerativeClustering.ts#L13)

## Properties

•  **config**: [clustering.AglomerativeClusteringConfig](../clustering_aglomerativeclusteringconfig)

*Inherited from [common.Serializable](../common_serializable).[config](../common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/common/serializable.ts#L8)

___

• `Protected` **distanceFunc**: Function

{:.url-source-ref}
[lib/clustering/agglomerativeClustering.ts:11](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/clustering/agglomerativeClustering.ts#L11)

___

• `Protected` **fitData**: number[][]

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[fitData](../clustering_clusteringalgorithm#fitdata)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:10](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/clustering/clusteringBase.ts#L10)

Base data for fitted algorithm

___

• `Private` **hierarchyFitData**: HierarchyPoints[] = []

{:.url-source-ref}
[lib/clustering/agglomerativeClustering.ts:13](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/clustering/agglomerativeClustering.ts#L13)

___

• `Protected` **initialized**: boolean = false

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[initialized](../clustering_clusteringalgorithm#initialized)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:20](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/clustering/clusteringBase.ts#L20)

Initialization state

___

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[iteration](../common_evolutionaryalgorithm#iteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/common/evolutionaryAlgorithm.ts#L8)

___

• `Protected` **labels**: number[]

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[labels](../clustering_clusteringalgorithm#labels)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:15](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/clustering/clusteringBase.ts#L15)

Stored labels after the initial fit

## Methods

{:.method-highlight}
▸ **canStop**(): boolean

**Returns:** boolean

*Overrides [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[canStop](../clustering_clusteringalgorithm#canstop)*

{:.url-source-ref}
[lib/clustering/agglomerativeClustering.ts:26](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/clustering/agglomerativeClustering.ts#L26)

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

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[fit](../clustering_clusteringalgorithm#fit)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:58](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/clustering/clusteringBase.ts#L58)

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

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[fitAsync](../clustering_clusteringalgorithm#fitasync)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:41](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/clustering/clusteringBase.ts#L41)

___

{:.method-highlight}
▸ **initializeDependencies**(`distanceFunction?`: DistanceMeasurement): void

#### Parameters:

Name | Type |
------ | ------ |
`distanceFunction?` | DistanceMeasurement |

**Returns:** void

{:.url-source-ref}
[lib/clustering/agglomerativeClustering.ts:39](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/clustering/agglomerativeClustering.ts#L39)

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
[lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/common/serializable.ts#L14)

___

{:.method-highlight}
▸ **onEndFit**(): void

Function executed after clustering is completed

**Returns:** void

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[onEndFit](../clustering_clusteringalgorithm#onendfit)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:72](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/clustering/clusteringBase.ts#L72)

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
[lib/clustering/agglomerativeClustering.ts:48](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/clustering/agglomerativeClustering.ts#L48)

___

{:.method-highlight}
▸ **prepareDataset**(`data`: number[][]): void

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** void

*Overrides [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[prepareDataset](../clustering_clusteringalgorithm#preparedataset)*

{:.url-source-ref}
[lib/clustering/agglomerativeClustering.ts:34](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/clustering/agglomerativeClustering.ts#L34)

___

{:.method-highlight}
▸ **serialize**(): string

**Returns:** string

*Inherited from [common.Serializable](../common_serializable).[serialize](../common_serializable#serialize)*

{:.url-source-ref}
[lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/common/serializable.ts#L10)

___

{:.method-highlight}
▸ **shouldStop**(): boolean

**Returns:** boolean

*Overrides [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[shouldStop](../common_evolutionaryalgorithm#shouldstop)*

{:.url-source-ref}
[lib/clustering/agglomerativeClustering.ts:30](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/clustering/agglomerativeClustering.ts#L30)

___

{:.method-highlight}
▸ **step**(): void

**Returns:** void

*Overrides [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[step](../common_evolutionaryalgorithm#step)*

{:.url-source-ref}
[lib/clustering/agglomerativeClustering.ts:20](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/clustering/agglomerativeClustering.ts#L20)
