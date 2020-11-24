---
layout: default
title: kMeans
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / clustering.kMeans

# kMeans

## Hierarchy

* [clustering.centroidClustering](clustering_centroidclustering.md)

  ↳ **clustering.kMeans**

## Indexable

▪ [key: string]: SerializableType

## Index

### Constructors

* [constructor](clustering_kmeans.md#constructor)

### Properties

* [centroids](clustering_kmeans.md#centroids)
* [clusters](clustering_kmeans.md#clusters)
* [config](clustering_kmeans.md#config)
* [convergence](clustering_kmeans.md#convergence)
* [convergenceIterations](clustering_kmeans.md#convergenceiterations)
* [distanceFn](clustering_kmeans.md#distancefn)
* [distanceFunc](clustering_kmeans.md#distancefunc)
* [fitData](clustering_kmeans.md#fitdata)
* [initialized](clustering_kmeans.md#initialized)
* [iteration](clustering_kmeans.md#iteration)
* [iterations](clustering_kmeans.md#iterations)
* [labels](clustering_kmeans.md#labels)

### Methods

* [canStop](clustering_kmeans.md#canstop)
* [fit](clustering_kmeans.md#fit)
* [fitAsync](clustering_kmeans.md#fitasync)
* [initializeDependencies](clustering_kmeans.md#initializedependencies)
* [loadState](clustering_kmeans.md#loadstate)
* [onEndFit](clustering_kmeans.md#onendfit)
* [predict](clustering_kmeans.md#predict)
* [prepareDataset](clustering_kmeans.md#preparedataset)
* [serialize](clustering_kmeans.md#serialize)
* [shouldStop](clustering_kmeans.md#shouldstop)
* [step](clustering_kmeans.md#step)

## Constructors

### constructor

\+ **new KMeans**(`config?`: [clustering.kMeans](clustering_kmeans.md) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): KMeans

*Overrides [clustering.centroidClustering](clustering_centroidclustering.md).[constructor](clustering_centroidclustering.md#constructor)*

*Defined in [lib/clustering/kMeans.ts:17](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/kMeans.ts#L17)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [clustering.kMeans](clustering_kmeans.md) \| undefined |
`distanceFunction?` | DistanceMeasurement \| undefined |

**Returns:** KMeans

## Properties

### centroids

•  **centroids**: number[][] = []

*Inherited from [clustering.centroidClustering](clustering_centroidclustering.md).[centroids](clustering_centroidclustering.md#centroids)*

*Defined in [lib/clustering/centroidClustering.ts:6](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/centroidClustering.ts#L6)*

___

### clusters

•  **clusters**: number = 8

*Defined in [lib/clustering/kMeans.ts:9](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/kMeans.ts#L9)*

___

### config

•  **config**: [clustering.kMeans](clustering_kmeans.md)

*Inherited from [common.serializable](common_serializable.md).[config](common_serializable.md#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/serializable.ts#L8)*

___

### convergence

• `Private` **convergence**: [common.convergence](common_convergence.md)

*Defined in [lib/clustering/kMeans.ts:17](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/kMeans.ts#L17)*

___

### convergenceIterations

•  **convergenceIterations**: number = -1

*Defined in [lib/clustering/kMeans.ts:13](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/kMeans.ts#L13)*

___

### distanceFn

•  **distanceFn**: string = "euclideanDistance"

*Inherited from [clustering.centroidClustering](clustering_centroidclustering.md).[distanceFn](clustering_centroidclustering.md#distancefn)*

*Defined in [lib/clustering/centroidClustering.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/centroidClustering.ts#L8)*

___

### distanceFunc

• `Protected` **distanceFunc**: Function

*Inherited from [clustering.centroidClustering](clustering_centroidclustering.md).[distanceFunc](clustering_centroidclustering.md#distancefunc)*

*Defined in [lib/clustering/centroidClustering.ts:12](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/centroidClustering.ts#L12)*

___

### fitData

• `Protected` **fitData**: number[][]

*Inherited from [clustering.clustering](clustering_clustering.md).[fitData](clustering_clustering.md#fitdata)*

*Defined in [lib/clustering/clustering.ts:4](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L4)*

___

### initialized

• `Protected` **initialized**: boolean = false

*Inherited from [clustering.clustering](clustering_clustering.md).[initialized](clustering_clustering.md#initialized)*

*Defined in [lib/clustering/clustering.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L8)*

___

### iteration

• `Protected` **iteration**: number = 0

*Inherited from [common.evolutionaryAlgorithm](common_evolutionaryalgorithm.md).[iteration](common_evolutionaryalgorithm.md#iteration)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/evolutionaryAlgorithm.ts#L8)*

___

### iterations

•  **iterations**: number = 300

*Overrides [common.evolutionaryAlgorithm](common_evolutionaryalgorithm.md).[iterations](common_evolutionaryalgorithm.md#iterations)*

*Defined in [lib/clustering/kMeans.ts:11](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/kMeans.ts#L11)*

___

### labels

• `Protected` **labels**: number[]

*Inherited from [clustering.clustering](clustering_clustering.md).[labels](clustering_clustering.md#labels)*

*Defined in [lib/clustering/clustering.ts:6](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L6)*

## Methods

### canStop

▸ **canStop**(): boolean

*Overrides [clustering.clustering](clustering_clustering.md).[canStop](clustering_clustering.md#canstop)*

*Defined in [lib/clustering/kMeans.ts:59](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/kMeans.ts#L59)*

**Returns:** boolean

___

### fit

▸ **fit**(`data`: number[][]): number[]

*Inherited from [clustering.clustering](clustering_clustering.md).[fit](clustering_clustering.md#fit)*

*Defined in [lib/clustering/clustering.ts:30](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### fitAsync

▸ **fitAsync**(`data`: number[][]): Generator

*Inherited from [clustering.clustering](clustering_clustering.md).[fitAsync](clustering_clustering.md#fitasync)*

*Defined in [lib/clustering/clustering.ts:19](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** Generator

___

### initializeDependencies

▸ **initializeDependencies**(`distanceFunction?`: DistanceMeasurement): void

*Inherited from [clustering.centroidClustering](clustering_centroidclustering.md).[initializeDependencies](clustering_centroidclustering.md#initializedependencies)*

*Defined in [lib/clustering/centroidClustering.ts:55](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/centroidClustering.ts#L55)*

#### Parameters:

Name | Type |
------ | ------ |
`distanceFunction?` | DistanceMeasurement |

**Returns:** void

___

### loadState

▸ **loadState**(`config`: string): void

*Inherited from [clustering.centroidClustering](clustering_centroidclustering.md).[loadState](clustering_centroidclustering.md#loadstate)*

*Overrides [common.serializable](common_serializable.md).[loadState](common_serializable.md#loadstate)*

*Defined in [lib/clustering/centroidClustering.ts:49](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/centroidClustering.ts#L49)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | string |

**Returns:** void

___

### onEndFit

▸ **onEndFit**(): void

*Inherited from [clustering.clustering](clustering_clustering.md).[onEndFit](clustering_clustering.md#onendfit)*

*Defined in [lib/clustering/clustering.ts:41](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L41)*

**Returns:** void

___

### predict

▸ **predict**(`data`: number[][]): number[]

*Inherited from [clustering.centroidClustering](clustering_centroidclustering.md).[predict](clustering_centroidclustering.md#predict)*

*Overrides [clustering.clustering](clustering_clustering.md).[predict](clustering_clustering.md#predict)*

*Defined in [lib/clustering/centroidClustering.ts:19](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/centroidClustering.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### prepareDataset

▸ `Protected`**prepareDataset**(`data`: number[][]): void

*Inherited from [clustering.clustering](clustering_clustering.md).[prepareDataset](clustering_clustering.md#preparedataset)*

*Defined in [lib/clustering/clustering.ts:10](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** void

___

### serialize

▸ **serialize**(): string

*Inherited from [common.serializable](common_serializable.md).[serialize](common_serializable.md#serialize)*

*Defined in [lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/serializable.ts#L10)*

**Returns:** string

___

### shouldStop

▸ **shouldStop**(): boolean

*Inherited from [common.evolutionaryAlgorithm](common_evolutionaryalgorithm.md).[shouldStop](common_evolutionaryalgorithm.md#shouldstop)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/evolutionaryAlgorithm.ts#L10)*

**Returns:** boolean

___

### step

▸ **step**(): void

*Overrides [common.evolutionaryAlgorithm](common_evolutionaryalgorithm.md).[step](common_evolutionaryalgorithm.md#step)*

*Defined in [lib/clustering/kMeans.ts:24](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/kMeans.ts#L24)*

**Returns:** void
