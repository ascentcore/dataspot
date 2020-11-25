---
layout: default
title: CentroidClustering
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [clustering.CentroidClustering](clustering_centroidclustering)

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

### Constructors

* [constructor](clustering_centroidclustering#constructor)

### Properties

* [config](clustering_centroidclustering#config)
* [distanceFunc](clustering_centroidclustering#distancefunc)
* [fitData](clustering_centroidclustering#fitdata)
* [initialized](clustering_centroidclustering#initialized)
* [iteration](clustering_centroidclustering#iteration)
* [labels](clustering_centroidclustering#labels)

### Methods

* [canStop](clustering_centroidclustering#canstop)
* [fit](clustering_centroidclustering#fit)
* [fitAsync](clustering_centroidclustering#fitasync)
* [initializeDependencies](clustering_centroidclustering#initializedependencies)
* [loadState](clustering_centroidclustering#loadstate)
* [onEndFit](clustering_centroidclustering#onendfit)
* [predict](clustering_centroidclustering#predict)
* [prepareDataset](clustering_centroidclustering#preparedataset)
* [serialize](clustering_centroidclustering#serialize)
* [shouldStop](clustering_centroidclustering#shouldstop)
* [step](clustering_centroidclustering#step)

## Constructors

### constructor

\+ **new CentroidClustering**(`config?`: T \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): [clustering.CentroidClustering](clustering_centroidclustering)

*Overrides [common.Serializable](common_serializable).[constructor](common_serializable#constructor)*

*Defined in [lib/clustering/centroidClustering.ts:12](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/centroidClustering.ts#L12)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | T \| undefined |
`distanceFunction?` | DistanceMeasurement \| undefined |

**Returns:** [clustering.CentroidClustering](clustering_centroidclustering)

## Properties

### config

•  **config**: T

*Inherited from [common.Serializable](common_serializable).[config](common_serializable#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/common/serializable.ts#L8)*

___

### distanceFunc

• `Protected` **distanceFunc**: Function

*Defined in [lib/clustering/centroidClustering.ts:12](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/centroidClustering.ts#L12)*

___

### fitData

• `Protected` **fitData**: number[][]

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[fitData](clustering_clusteringalgorithm#fitdata)*

*Defined in [lib/clustering/clusteringBase.ts:4](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/clusteringBase.ts#L4)*

___

### initialized

• `Protected` **initialized**: boolean = false

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[initialized](clustering_clusteringalgorithm#initialized)*

*Defined in [lib/clustering/clusteringBase.ts:8](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/clusteringBase.ts#L8)*

___

### iteration

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[iteration](common_evolutionaryalgorithm#iteration)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/common/evolutionaryAlgorithm.ts#L8)*

___

### labels

• `Protected` **labels**: number[]

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[labels](clustering_clusteringalgorithm#labels)*

*Defined in [lib/clustering/clusteringBase.ts:6](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/clusteringBase.ts#L6)*

## Methods

### canStop

▸ `Abstract`**canStop**(): boolean

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[canStop](clustering_clusteringalgorithm#canstop)*

*Defined in [lib/clustering/clusteringBase.ts:43](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/clusteringBase.ts#L43)*

**Returns:** boolean

___

### fit

▸ **fit**(`data`: number[][]): number[]

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[fit](clustering_clusteringalgorithm#fit)*

*Defined in [lib/clustering/clusteringBase.ts:30](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/clusteringBase.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### fitAsync

▸ **fitAsync**(`data`: number[][]): Generator

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[fitAsync](clustering_clusteringalgorithm#fitasync)*

*Defined in [lib/clustering/clusteringBase.ts:19](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/clusteringBase.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** Generator

___

### initializeDependencies

▸ **initializeDependencies**(`distanceFunction?`: DistanceMeasurement): void

*Defined in [lib/clustering/centroidClustering.ts:55](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/centroidClustering.ts#L55)*

#### Parameters:

Name | Type |
------ | ------ |
`distanceFunction?` | DistanceMeasurement |

**Returns:** void

___

### loadState

▸ **loadState**(`config`: string): void

*Overrides [common.Serializable](common_serializable).[loadState](common_serializable#loadstate)*

*Defined in [lib/clustering/centroidClustering.ts:49](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/centroidClustering.ts#L49)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | string |

**Returns:** void

___

### onEndFit

▸ **onEndFit**(): void

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[onEndFit](clustering_clusteringalgorithm#onendfit)*

*Defined in [lib/clustering/clusteringBase.ts:41](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/clusteringBase.ts#L41)*

**Returns:** void

___

### predict

▸ **predict**(`data`: number[][]): number[]

*Overrides [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[predict](clustering_clusteringalgorithm#predict)*

*Defined in [lib/clustering/centroidClustering.ts:19](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/centroidClustering.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### prepareDataset

▸ `Protected`**prepareDataset**(`data`: number[][]): void

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[prepareDataset](clustering_clusteringalgorithm#preparedataset)*

*Defined in [lib/clustering/clusteringBase.ts:10](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/clusteringBase.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** void

___

### serialize

▸ **serialize**(): string

*Inherited from [common.Serializable](common_serializable).[serialize](common_serializable#serialize)*

*Defined in [lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/common/serializable.ts#L10)*

**Returns:** string

___

### shouldStop

▸ **shouldStop**(): boolean

*Inherited from [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[shouldStop](common_evolutionaryalgorithm#shouldstop)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/common/evolutionaryAlgorithm.ts#L10)*

**Returns:** boolean

___

### step

▸ `Abstract`**step**(): any

*Inherited from [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[step](common_evolutionaryalgorithm#step)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/common/evolutionaryAlgorithm.ts#L14)*

**Returns:** any
