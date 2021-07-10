---
layout: default
title: MeanShift
parent: clustering
grand_parent: Dataspot
has_children: false
---

# MeanShift

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
| [shifting](#shifting) |
| [shiftingPoints](#shiftingpoints) |

| Methods |
|-----------|
| [canStop](#canstop) |
| [fit](#fit) |
| [fitAsync](#fitasync) |
| [getIteration](#getiteration) |
| [initializeDependencies](#initializedependencies) |
| [loadState](#loadstate) |
| [onEndFit](#onendfit) |
| [predict](#predict) |
| [prepareDataset](#preparedataset) |
| [reset](#reset) |
| [serialize](#serialize) |
| [shiftPoint](#shiftpoint) |
| [shouldStop](#shouldstop) |
| [step](#step) |

## Constructors

{:.method-highlight}
\+ **new MeanShift**(`config?`: [clustering.MeanShiftConfig](../clustering_meanshiftconfig) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): [clustering.MeanShift](../clustering_meanshift)

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [clustering.MeanShiftConfig](../clustering_meanshiftconfig) \| undefined |
`distanceFunction?` | DistanceMeasurement \| undefined |

**Returns:** [clustering.MeanShift](../clustering_meanshift)

*Overrides [clustering.CentroidClustering](../clustering_centroidclustering).[constructor](../clustering_centroidclustering#constructor)*

{:.url-source-ref}
[lib/clustering/meanShift.ts:17](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/clustering/meanShift.ts#L17)

## Properties

•  **config**: [clustering.MeanShiftConfig](../clustering_meanshiftconfig)

*Inherited from [common.Serializable](../common_serializable).[config](../common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/common/serializable.ts#L8)

___

• `Protected` **distanceFunc**: Function

*Inherited from [clustering.CentroidClustering](../clustering_centroidclustering).[distanceFunc](../clustering_centroidclustering#distancefunc)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:12](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/clustering/centroidClustering.ts#L12)

___

• `Protected` **fitData**: number[][]

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[fitData](../clustering_clusteringalgorithm#fitdata)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:10](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/clustering/clusteringBase.ts#L10)

Base data for fitted algorithm

___

• `Protected` **initialized**: boolean = false

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[initialized](../clustering_clusteringalgorithm#initialized)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:20](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/clustering/clusteringBase.ts#L20)

Initialization state

___

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[iteration](../common_evolutionaryalgorithm#iteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/common/evolutionaryAlgorithm.ts#L8)

___

• `Protected` **labels**: number[]

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[labels](../clustering_clusteringalgorithm#labels)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:15](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/clustering/clusteringBase.ts#L15)

Stored labels after the initial fit

___

• `Private` **shifting**: boolean[]

{:.url-source-ref}
[lib/clustering/meanShift.ts:17](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/clustering/meanShift.ts#L17)

___

• `Private` **shiftingPoints**: number[][]

{:.url-source-ref}
[lib/clustering/meanShift.ts:15](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/clustering/meanShift.ts#L15)

## Methods

{:.method-highlight}
▸ **canStop**(): boolean

**Returns:** boolean

*Overrides [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[canStop](../clustering_clusteringalgorithm#canstop)*

{:.url-source-ref}
[lib/clustering/meanShift.ts:70](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/clustering/meanShift.ts#L70)

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
[lib/clustering/clusteringBase.ts:58](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/clustering/clusteringBase.ts#L58)

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
[lib/clustering/clusteringBase.ts:41](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/clustering/clusteringBase.ts#L41)

___

{:.method-highlight}
▸ **getIteration**(): number

**Returns:** number

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[getIteration](../common_evolutionaryalgorithm#getiteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/common/evolutionaryAlgorithm.ts#L14)

___

{:.method-highlight}
▸ **initializeDependencies**(`distanceFunction?`: DistanceMeasurement): void

#### Parameters:

Name | Type |
------ | ------ |
`distanceFunction?` | DistanceMeasurement |

**Returns:** void

*Inherited from [clustering.CentroidClustering](../clustering_centroidclustering).[initializeDependencies](../clustering_centroidclustering#initializedependencies)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:55](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/clustering/centroidClustering.ts#L55)

___

{:.method-highlight}
▸ **loadState**(`config`: string): void

#### Parameters:

Name | Type |
------ | ------ |
`config` | string |

**Returns:** void

*Inherited from [clustering.CentroidClustering](../clustering_centroidclustering).[loadState](../clustering_centroidclustering#loadstate)*

*Overrides [common.Serializable](../common_serializable).[loadState](../common_serializable#loadstate)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:49](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/clustering/centroidClustering.ts#L49)

___

{:.method-highlight}
▸ **onEndFit**(): void

**Returns:** void

*Overrides [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[onEndFit](../clustering_clusteringalgorithm#onendfit)*

{:.url-source-ref}
[lib/clustering/meanShift.ts:40](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/clustering/meanShift.ts#L40)

___

{:.method-highlight}
▸ **predict**(`data`: number[][]): number[]

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

*Inherited from [clustering.CentroidClustering](../clustering_centroidclustering).[predict](../clustering_centroidclustering#predict)*

*Overrides [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[predict](../clustering_clusteringalgorithm#predict)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:19](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/clustering/centroidClustering.ts#L19)

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
[lib/clustering/meanShift.ts:74](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/clustering/meanShift.ts#L74)

___

{:.method-highlight}
▸ **reset**(): void

**Returns:** void

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[reset](../common_evolutionaryalgorithm#reset)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:18](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/common/evolutionaryAlgorithm.ts#L18)

___

{:.method-highlight}
▸ **serialize**(): string

**Returns:** string

*Inherited from [common.Serializable](../common_serializable).[serialize](../common_serializable#serialize)*

{:.url-source-ref}
[lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/common/serializable.ts#L10)

___

{:.method-highlight}
▸ `Private`**shiftPoint**(`point`: number[], `points`: number[][], `kernelBandwidth`: number): number[]

#### Parameters:

Name | Type |
------ | ------ |
`point` | number[] |
`points` | number[][] |
`kernelBandwidth` | number |

**Returns:** number[]

{:.url-source-ref}
[lib/clustering/meanShift.ts:81](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/clustering/meanShift.ts#L81)

___

{:.method-highlight}
▸ **shouldStop**(): boolean

**Returns:** boolean

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[shouldStop](../common_evolutionaryalgorithm#shouldstop)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/common/evolutionaryAlgorithm.ts#L10)

___

{:.method-highlight}
▸ **step**(): void

**Returns:** void

*Overrides [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[step](../common_evolutionaryalgorithm#step)*

{:.url-source-ref}
[lib/clustering/meanShift.ts:24](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/clustering/meanShift.ts#L24)
