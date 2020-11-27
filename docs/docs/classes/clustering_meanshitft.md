---
layout: default
title: MeanShitft
parent: clustering
grand_parent: Dataspot
has_children: false
---

# MeanShitft

## Hierarchy

* [clustering.CentroidClustering](../clustering_centroidclustering)\<[clustering.MeanShiftConfig](../clustering_meanshiftconfig)>

  ↳ **clustering.MeanShitft**

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
| [initializeDependencies](#initializedependencies) |
| [loadState](#loadstate) |
| [onEndFit](#onendfit) |
| [predict](#predict) |
| [prepareDataset](#preparedataset) |
| [serialize](#serialize) |
| [shiftPoint](#shiftpoint) |
| [shouldStop](#shouldstop) |
| [step](#step) |

## Constructors

{:.method-highlight}
\+ **new MeanShitft**(`config?`: [clustering.MeanShiftConfig](../clustering_meanshiftconfig) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): [clustering.MeanShitft](../clustering_meanshitft)

*Overrides [clustering.CentroidClustering](../clustering_centroidclustering).[constructor](../clustering_centroidclustering#constructor)*

{:.url-source-ref}
[lib/clustering/meanShift.ts:17](https://github.com/ascentcore/dataspot/blob/ef89391/lib/clustering/meanShift.ts#L17)

**Returns:** [clustering.MeanShitft](../clustering_meanshitft)

## Properties

•  **config**: [clustering.MeanShiftConfig](../clustering_meanshiftconfig)

*Inherited from [common.Serializable](../common_serializable).[config](../common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/ef89391/lib/common/serializable.ts#L8)

___

• `Protected` **distanceFunc**: Function

*Inherited from [clustering.CentroidClustering](../clustering_centroidclustering).[distanceFunc](../clustering_centroidclustering#distancefunc)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:12](https://github.com/ascentcore/dataspot/blob/ef89391/lib/clustering/centroidClustering.ts#L12)

___

• `Protected` **fitData**: number[][]

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[fitData](../clustering_clusteringalgorithm#fitdata)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:4](https://github.com/ascentcore/dataspot/blob/ef89391/lib/clustering/clusteringBase.ts#L4)

___

• `Protected` **initialized**: boolean = false

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[initialized](../clustering_clusteringalgorithm#initialized)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:8](https://github.com/ascentcore/dataspot/blob/ef89391/lib/clustering/clusteringBase.ts#L8)

___

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[iteration](../common_evolutionaryalgorithm#iteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/ef89391/lib/common/evolutionaryAlgorithm.ts#L8)

___

• `Protected` **labels**: number[]

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[labels](../clustering_clusteringalgorithm#labels)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:6](https://github.com/ascentcore/dataspot/blob/ef89391/lib/clustering/clusteringBase.ts#L6)

___

• `Private` **shifting**: boolean[]

{:.url-source-ref}
[lib/clustering/meanShift.ts:17](https://github.com/ascentcore/dataspot/blob/ef89391/lib/clustering/meanShift.ts#L17)

___

• `Private` **shiftingPoints**: number[][]

{:.url-source-ref}
[lib/clustering/meanShift.ts:15](https://github.com/ascentcore/dataspot/blob/ef89391/lib/clustering/meanShift.ts#L15)

## Methods

{:.method-highlight}
▸ **canStop**(): boolean

*Overrides [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[canStop](../clustering_clusteringalgorithm#canstop)*

{:.url-source-ref}
[lib/clustering/meanShift.ts:70](https://github.com/ascentcore/dataspot/blob/ef89391/lib/clustering/meanShift.ts#L70)

**Returns:** boolean

___

{:.method-highlight}
▸ **fit**(`data`: number[][]): number[]

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[fit](../clustering_clusteringalgorithm#fit)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:30](https://github.com/ascentcore/dataspot/blob/ef89391/lib/clustering/clusteringBase.ts#L30)

**Returns:** number[]

___

{:.method-highlight}
▸ **fitAsync**(`data`: number[][]): Generator

*Inherited from [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[fitAsync](../clustering_clusteringalgorithm#fitasync)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:19](https://github.com/ascentcore/dataspot/blob/ef89391/lib/clustering/clusteringBase.ts#L19)

**Returns:** Generator

___

{:.method-highlight}
▸ **initializeDependencies**(`distanceFunction?`: DistanceMeasurement): void

*Inherited from [clustering.CentroidClustering](../clustering_centroidclustering).[initializeDependencies](../clustering_centroidclustering#initializedependencies)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:55](https://github.com/ascentcore/dataspot/blob/ef89391/lib/clustering/centroidClustering.ts#L55)

**Returns:** void

___

{:.method-highlight}
▸ **loadState**(`config`: string): void

*Inherited from [clustering.CentroidClustering](../clustering_centroidclustering).[loadState](../clustering_centroidclustering#loadstate)*

*Overrides [common.Serializable](../common_serializable).[loadState](../common_serializable#loadstate)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:49](https://github.com/ascentcore/dataspot/blob/ef89391/lib/clustering/centroidClustering.ts#L49)

**Returns:** void

___

{:.method-highlight}
▸ **onEndFit**(): void

*Overrides [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[onEndFit](../clustering_clusteringalgorithm#onendfit)*

{:.url-source-ref}
[lib/clustering/meanShift.ts:40](https://github.com/ascentcore/dataspot/blob/ef89391/lib/clustering/meanShift.ts#L40)

**Returns:** void

___

{:.method-highlight}
▸ **predict**(`data`: number[][]): number[]

*Inherited from [clustering.CentroidClustering](../clustering_centroidclustering).[predict](../clustering_centroidclustering#predict)*

*Overrides [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[predict](../clustering_clusteringalgorithm#predict)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:19](https://github.com/ascentcore/dataspot/blob/ef89391/lib/clustering/centroidClustering.ts#L19)

**Returns:** number[]

___

{:.method-highlight}
▸ **prepareDataset**(`data`: number[][]): void

*Overrides [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm).[prepareDataset](../clustering_clusteringalgorithm#preparedataset)*

{:.url-source-ref}
[lib/clustering/meanShift.ts:74](https://github.com/ascentcore/dataspot/blob/ef89391/lib/clustering/meanShift.ts#L74)

**Returns:** void

___

{:.method-highlight}
▸ **serialize**(): string

*Inherited from [common.Serializable](../common_serializable).[serialize](../common_serializable#serialize)*

{:.url-source-ref}
[lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/ef89391/lib/common/serializable.ts#L10)

**Returns:** string

___

{:.method-highlight}
▸ `Private`**shiftPoint**(`point`: number[], `points`: number[][], `kernelBandwidth`: number): number[]

{:.url-source-ref}
[lib/clustering/meanShift.ts:81](https://github.com/ascentcore/dataspot/blob/ef89391/lib/clustering/meanShift.ts#L81)

**Returns:** number[]

___

{:.method-highlight}
▸ **shouldStop**(): boolean

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[shouldStop](../common_evolutionaryalgorithm#shouldstop)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/ef89391/lib/common/evolutionaryAlgorithm.ts#L10)

**Returns:** boolean

___

{:.method-highlight}
▸ **step**(): void

*Overrides [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[step](../common_evolutionaryalgorithm#step)*

{:.url-source-ref}
[lib/clustering/meanShift.ts:24](https://github.com/ascentcore/dataspot/blob/ef89391/lib/clustering/meanShift.ts#L24)

**Returns:** void
