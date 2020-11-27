---
layout: default
title: CentroidClustering
parent: clustering
grand_parent: Dataspot
has_children: false
---

# CentroidClustering

## Type parameters

Name | Type |
------ | ------ |
`T` | [clustering.CentroidConfig](clustering_centroidconfig) |

## Hierarchy

* [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm)\<T>

  ↳ **clustering.CentroidClustering**

  ↳↳ [clustering.KMeans](clustering_kmeans)

  ↳↳ [clustering.MeanShitft](clustering_meanshitft)

  ↳↳ [clustering.Birch](clustering_birch)

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
\+ **new CentroidClustering**(`config?`: T \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): [clustering.CentroidClustering](clustering_centroidclustering)

*Overrides [common.Serializable](common_serializable).[constructor](common_serializable#constructor)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:12](https://github.com/ascentcore/dataspot/blob/40beee3/lib/clustering/centroidClustering.ts#L12)

**Returns:** [clustering.CentroidClustering](clustering_centroidclustering)

## Properties

•  **config**: T

*Inherited from [common.Serializable](common_serializable).[config](common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/40beee3/lib/common/serializable.ts#L8)

___

• `Protected` **distanceFunc**: Function

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:12](https://github.com/ascentcore/dataspot/blob/40beee3/lib/clustering/centroidClustering.ts#L12)

___

• `Protected` **fitData**: number[][]

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[fitData](clustering_clusteringalgorithm#fitdata)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:4](https://github.com/ascentcore/dataspot/blob/40beee3/lib/clustering/clusteringBase.ts#L4)

___

• `Protected` **initialized**: boolean = false

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[initialized](clustering_clusteringalgorithm#initialized)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:8](https://github.com/ascentcore/dataspot/blob/40beee3/lib/clustering/clusteringBase.ts#L8)

___

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[iteration](common_evolutionaryalgorithm#iteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/40beee3/lib/common/evolutionaryAlgorithm.ts#L8)

___

• `Protected` **labels**: number[]

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[labels](clustering_clusteringalgorithm#labels)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:6](https://github.com/ascentcore/dataspot/blob/40beee3/lib/clustering/clusteringBase.ts#L6)

## Methods

{:.method-highlight}
▸ `Abstract`**canStop**(): boolean

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[canStop](clustering_clusteringalgorithm#canstop)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:43](https://github.com/ascentcore/dataspot/blob/40beee3/lib/clustering/clusteringBase.ts#L43)

**Returns:** boolean

___

{:.method-highlight}
▸ **fit**(`data`: number[][]): number[]

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[fit](clustering_clusteringalgorithm#fit)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:30](https://github.com/ascentcore/dataspot/blob/40beee3/lib/clustering/clusteringBase.ts#L30)

**Returns:** number[]

___

{:.method-highlight}
▸ **fitAsync**(`data`: number[][]): Generator

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[fitAsync](clustering_clusteringalgorithm#fitasync)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:19](https://github.com/ascentcore/dataspot/blob/40beee3/lib/clustering/clusteringBase.ts#L19)

**Returns:** Generator

___

{:.method-highlight}
▸ **initializeDependencies**(`distanceFunction?`: DistanceMeasurement): void

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:55](https://github.com/ascentcore/dataspot/blob/40beee3/lib/clustering/centroidClustering.ts#L55)

**Returns:** void

___

{:.method-highlight}
▸ **loadState**(`config`: string): void

*Overrides [common.Serializable](common_serializable).[loadState](common_serializable#loadstate)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:49](https://github.com/ascentcore/dataspot/blob/40beee3/lib/clustering/centroidClustering.ts#L49)

**Returns:** void

___

{:.method-highlight}
▸ **onEndFit**(): void

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[onEndFit](clustering_clusteringalgorithm#onendfit)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:41](https://github.com/ascentcore/dataspot/blob/40beee3/lib/clustering/clusteringBase.ts#L41)

**Returns:** void

___

{:.method-highlight}
▸ **predict**(`data`: number[][]): number[]

*Overrides [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[predict](clustering_clusteringalgorithm#predict)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:19](https://github.com/ascentcore/dataspot/blob/40beee3/lib/clustering/centroidClustering.ts#L19)

**Returns:** number[]

___

{:.method-highlight}
▸ `Protected`**prepareDataset**(`data`: number[][]): void

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[prepareDataset](clustering_clusteringalgorithm#preparedataset)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:10](https://github.com/ascentcore/dataspot/blob/40beee3/lib/clustering/clusteringBase.ts#L10)

**Returns:** void

___

{:.method-highlight}
▸ **serialize**(): string

*Inherited from [common.Serializable](common_serializable).[serialize](common_serializable#serialize)*

{:.url-source-ref}
[lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/40beee3/lib/common/serializable.ts#L10)

**Returns:** string

___

{:.method-highlight}
▸ **shouldStop**(): boolean

*Inherited from [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[shouldStop](common_evolutionaryalgorithm#shouldstop)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/40beee3/lib/common/evolutionaryAlgorithm.ts#L10)

**Returns:** boolean

___

{:.method-highlight}
▸ `Abstract`**step**(): any

*Inherited from [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[step](common_evolutionaryalgorithm#step)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/40beee3/lib/common/evolutionaryAlgorithm.ts#L14)

**Returns:** any
