---
layout: default
title: KMeans
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [clustering.KMeans](clustering_kmeans)

# KMeans

KMeans documentation

## Hierarchy

* [clustering.CentroidClustering](clustering_centroidclustering)\<[clustering.KMeansConfig](clustering_kmeansconfig)>

  ↳ **clustering.KMeans**

## Index

### Constructors

* [constructor](clustering_kmeans#constructor)

### Properties

* [config](clustering_kmeans#config)
* [convergence](clustering_kmeans#convergence)
* [distanceFunc](clustering_kmeans#distancefunc)
* [fitData](clustering_kmeans#fitdata)
* [initialized](clustering_kmeans#initialized)
* [iteration](clustering_kmeans#iteration)
* [labels](clustering_kmeans#labels)

### Methods

* [canStop](clustering_kmeans#canstop)
* [fit](clustering_kmeans#fit)
* [fitAsync](clustering_kmeans#fitasync)
* [initializeDependencies](clustering_kmeans#initializedependencies)
* [loadState](clustering_kmeans#loadstate)
* [onEndFit](clustering_kmeans#onendfit)
* [predict](clustering_kmeans#predict)
* [prepareDataset](clustering_kmeans#preparedataset)
* [serialize](clustering_kmeans#serialize)
* [shouldStop](clustering_kmeans#shouldstop)
* [step](clustering_kmeans#step)

## Constructors

### constructor

\+ **new KMeans**(`config?`: [clustering.KMeansConfig](clustering_kmeansconfig) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): [clustering.KMeans](clustering_kmeans)

*Overrides [clustering.CentroidClustering](clustering_centroidclustering).[constructor](clustering_centroidclustering#constructor)*

*Defined in [lib/clustering/kMeans.ts:22](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/kMeans.ts#L22)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [clustering.KMeansConfig](clustering_kmeansconfig) \| undefined |
`distanceFunction?` | DistanceMeasurement \| undefined |

**Returns:** [clustering.KMeans](clustering_kmeans)

## Properties

### config

•  **config**: [clustering.KMeansConfig](clustering_kmeansconfig)

*Inherited from [common.Serializable](common_serializable).[config](common_serializable#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/aa42404/lib/common/serializable.ts#L8)*

___

### convergence

• `Private` **convergence**: [common.Convergence](common_convergence)

*Defined in [lib/clustering/kMeans.ts:22](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/kMeans.ts#L22)*

___

### distanceFunc

• `Protected` **distanceFunc**: Function

*Inherited from [clustering.CentroidClustering](clustering_centroidclustering).[distanceFunc](clustering_centroidclustering#distancefunc)*

*Defined in [lib/clustering/centroidClustering.ts:12](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/centroidClustering.ts#L12)*

___

### fitData

• `Protected` **fitData**: number[][]

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[fitData](clustering_clusteringalgorithm#fitdata)*

*Defined in [lib/clustering/clusteringBase.ts:4](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/clusteringBase.ts#L4)*

___

### initialized

• `Protected` **initialized**: boolean = false

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[initialized](clustering_clusteringalgorithm#initialized)*

*Defined in [lib/clustering/clusteringBase.ts:8](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/clusteringBase.ts#L8)*

___

### iteration

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[iteration](common_evolutionaryalgorithm#iteration)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/aa42404/lib/common/evolutionaryAlgorithm.ts#L8)*

___

### labels

• `Protected` **labels**: number[]

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[labels](clustering_clusteringalgorithm#labels)*

*Defined in [lib/clustering/clusteringBase.ts:6](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/clusteringBase.ts#L6)*

## Methods

### canStop

▸ **canStop**(): boolean

*Overrides [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[canStop](clustering_clusteringalgorithm#canstop)*

*Defined in [lib/clustering/kMeans.ts:70](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/kMeans.ts#L70)*

test kmeans stop documentation

**Returns:** boolean

___

### fit

▸ **fit**(`data`: number[][]): number[]

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[fit](clustering_clusteringalgorithm#fit)*

*Defined in [lib/clustering/clusteringBase.ts:30](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/clusteringBase.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### fitAsync

▸ **fitAsync**(`data`: number[][]): Generator

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[fitAsync](clustering_clusteringalgorithm#fitasync)*

*Defined in [lib/clustering/clusteringBase.ts:19](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/clusteringBase.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** Generator

___

### initializeDependencies

▸ **initializeDependencies**(`distanceFunction?`: DistanceMeasurement): void

*Inherited from [clustering.CentroidClustering](clustering_centroidclustering).[initializeDependencies](clustering_centroidclustering#initializedependencies)*

*Defined in [lib/clustering/centroidClustering.ts:55](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/centroidClustering.ts#L55)*

#### Parameters:

Name | Type |
------ | ------ |
`distanceFunction?` | DistanceMeasurement |

**Returns:** void

___

### loadState

▸ **loadState**(`config`: string): void

*Inherited from [clustering.CentroidClustering](clustering_centroidclustering).[loadState](clustering_centroidclustering#loadstate)*

*Overrides [common.Serializable](common_serializable).[loadState](common_serializable#loadstate)*

*Defined in [lib/clustering/centroidClustering.ts:49](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/centroidClustering.ts#L49)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | string |

**Returns:** void

___

### onEndFit

▸ **onEndFit**(): void

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[onEndFit](clustering_clusteringalgorithm#onendfit)*

*Defined in [lib/clustering/clusteringBase.ts:41](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/clusteringBase.ts#L41)*

**Returns:** void

___

### predict

▸ **predict**(`data`: number[][]): number[]

*Inherited from [clustering.CentroidClustering](clustering_centroidclustering).[predict](clustering_centroidclustering#predict)*

*Overrides [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[predict](clustering_clusteringalgorithm#predict)*

*Defined in [lib/clustering/centroidClustering.ts:19](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/centroidClustering.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### prepareDataset

▸ `Protected`**prepareDataset**(`data`: number[][]): void

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[prepareDataset](clustering_clusteringalgorithm#preparedataset)*

*Defined in [lib/clustering/clusteringBase.ts:10](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/clusteringBase.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** void

___

### serialize

▸ **serialize**(): string

*Inherited from [common.Serializable](common_serializable).[serialize](common_serializable#serialize)*

*Defined in [lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/aa42404/lib/common/serializable.ts#L10)*

**Returns:** string

___

### shouldStop

▸ **shouldStop**(): boolean

*Inherited from [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[shouldStop](common_evolutionaryalgorithm#shouldstop)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/aa42404/lib/common/evolutionaryAlgorithm.ts#L10)*

**Returns:** boolean

___

### step

▸ **step**(): void

*Overrides [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[step](common_evolutionaryalgorithm#step)*

*Defined in [lib/clustering/kMeans.ts:32](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/kMeans.ts#L32)*

Test kmeans step documentation

**Returns:** void
