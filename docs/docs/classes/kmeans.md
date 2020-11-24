---
layout: default
title: KMeans
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / KMeans

# KMeans

## Hierarchy

* [CentroidClustering](centroidclustering.md)\<[KMeansConfig](kmeansconfig.md)>

  ↳ **KMeans**

## Index

### Constructors

* [constructor](kmeans.md#constructor)

### Properties

* [config](kmeans.md#config)
* [convergence](kmeans.md#convergence)
* [distanceFunc](kmeans.md#distancefunc)
* [fitData](kmeans.md#fitdata)
* [initialized](kmeans.md#initialized)
* [iteration](kmeans.md#iteration)
* [labels](kmeans.md#labels)

### Methods

* [canStop](kmeans.md#canstop)
* [fit](kmeans.md#fit)
* [fitAsync](kmeans.md#fitasync)
* [initializeDependencies](kmeans.md#initializedependencies)
* [loadState](kmeans.md#loadstate)
* [onEndFit](kmeans.md#onendfit)
* [predict](kmeans.md#predict)
* [prepareDataset](kmeans.md#preparedataset)
* [serialize](kmeans.md#serialize)
* [shouldStop](kmeans.md#shouldstop)
* [step](kmeans.md#step)

## Constructors

### constructor

\+ **new KMeans**(`config?`: [KMeansConfig](kmeansconfig.md) \| undefined, `distanceFunction?`: [DistanceMeasurement](../globals.md#distancemeasurement) \| undefined): [KMeans](kmeans.md)

*Overrides [CentroidClustering](centroidclustering.md).[constructor](centroidclustering.md#constructor)*

*Defined in [lib/clustering/kMeans.ts:17](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/kMeans.ts#L17)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [KMeansConfig](kmeansconfig.md) \| undefined |
`distanceFunction?` | [DistanceMeasurement](../globals.md#distancemeasurement) \| undefined |

**Returns:** [KMeans](kmeans.md)

## Properties

### config

•  **config**: [KMeansConfig](kmeansconfig.md)

*Inherited from [Serializable](serializable.md).[config](serializable.md#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/serializable.ts#L8)*

___

### convergence

• `Private` **convergence**: [Convergence](convergence.md)

*Defined in [lib/clustering/kMeans.ts:17](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/kMeans.ts#L17)*

___

### distanceFunc

• `Protected` **distanceFunc**: Function

*Inherited from [CentroidClustering](centroidclustering.md).[distanceFunc](centroidclustering.md#distancefunc)*

*Defined in [lib/clustering/centroidClustering.ts:12](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/centroidClustering.ts#L12)*

___

### fitData

• `Protected` **fitData**: number[][]

*Inherited from [ClusteringAlgorithm](clusteringalgorithm.md).[fitData](clusteringalgorithm.md#fitdata)*

*Defined in [lib/clustering/clustering.ts:4](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/clustering.ts#L4)*

___

### initialized

• `Protected` **initialized**: boolean = false

*Inherited from [ClusteringAlgorithm](clusteringalgorithm.md).[initialized](clusteringalgorithm.md#initialized)*

*Defined in [lib/clustering/clustering.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/clustering.ts#L8)*

___

### iteration

• `Protected` **iteration**: number = 0

*Inherited from [EvolutionaryAlgorithm](evolutionaryalgorithm.md).[iteration](evolutionaryalgorithm.md#iteration)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/evolutionaryAlgorithm.ts#L8)*

___

### labels

• `Protected` **labels**: number[]

*Inherited from [ClusteringAlgorithm](clusteringalgorithm.md).[labels](clusteringalgorithm.md#labels)*

*Defined in [lib/clustering/clustering.ts:6](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/clustering.ts#L6)*

## Methods

### canStop

▸ **canStop**(): boolean

*Overrides [ClusteringAlgorithm](clusteringalgorithm.md).[canStop](clusteringalgorithm.md#canstop)*

*Defined in [lib/clustering/kMeans.ts:59](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/kMeans.ts#L59)*

**Returns:** boolean

___

### fit

▸ **fit**(`data`: number[][]): number[]

*Inherited from [ClusteringAlgorithm](clusteringalgorithm.md).[fit](clusteringalgorithm.md#fit)*

*Defined in [lib/clustering/clustering.ts:30](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/clustering.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### fitAsync

▸ **fitAsync**(`data`: number[][]): Generator

*Inherited from [ClusteringAlgorithm](clusteringalgorithm.md).[fitAsync](clusteringalgorithm.md#fitasync)*

*Defined in [lib/clustering/clustering.ts:19](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/clustering.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** Generator

___

### initializeDependencies

▸ **initializeDependencies**(`distanceFunction?`: [DistanceMeasurement](../globals.md#distancemeasurement)): void

*Inherited from [CentroidClustering](centroidclustering.md).[initializeDependencies](centroidclustering.md#initializedependencies)*

*Defined in [lib/clustering/centroidClustering.ts:55](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/centroidClustering.ts#L55)*

#### Parameters:

Name | Type |
------ | ------ |
`distanceFunction?` | [DistanceMeasurement](../globals.md#distancemeasurement) |

**Returns:** void

___

### loadState

▸ **loadState**(`config`: string): void

*Inherited from [CentroidClustering](centroidclustering.md).[loadState](centroidclustering.md#loadstate)*

*Overrides [Serializable](serializable.md).[loadState](serializable.md#loadstate)*

*Defined in [lib/clustering/centroidClustering.ts:49](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/centroidClustering.ts#L49)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | string |

**Returns:** void

___

### onEndFit

▸ **onEndFit**(): void

*Inherited from [ClusteringAlgorithm](clusteringalgorithm.md).[onEndFit](clusteringalgorithm.md#onendfit)*

*Defined in [lib/clustering/clustering.ts:41](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/clustering.ts#L41)*

**Returns:** void

___

### predict

▸ **predict**(`data`: number[][]): number[]

*Inherited from [CentroidClustering](centroidclustering.md).[predict](centroidclustering.md#predict)*

*Overrides [ClusteringAlgorithm](clusteringalgorithm.md).[predict](clusteringalgorithm.md#predict)*

*Defined in [lib/clustering/centroidClustering.ts:19](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/centroidClustering.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### prepareDataset

▸ `Protected`**prepareDataset**(`data`: number[][]): void

*Inherited from [ClusteringAlgorithm](clusteringalgorithm.md).[prepareDataset](clusteringalgorithm.md#preparedataset)*

*Defined in [lib/clustering/clustering.ts:10](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/clustering.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** void

___

### serialize

▸ **serialize**(): string

*Inherited from [Serializable](serializable.md).[serialize](serializable.md#serialize)*

*Defined in [lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/serializable.ts#L10)*

**Returns:** string

___

### shouldStop

▸ **shouldStop**(): boolean

*Inherited from [EvolutionaryAlgorithm](evolutionaryalgorithm.md).[shouldStop](evolutionaryalgorithm.md#shouldstop)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/evolutionaryAlgorithm.ts#L10)*

**Returns:** boolean

___

### step

▸ **step**(): void

*Overrides [EvolutionaryAlgorithm](evolutionaryalgorithm.md).[step](evolutionaryalgorithm.md#step)*

*Defined in [lib/clustering/kMeans.ts:24](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/kMeans.ts#L24)*

**Returns:** void
