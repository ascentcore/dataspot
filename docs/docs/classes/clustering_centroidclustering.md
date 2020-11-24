---
layout: default
title: centroidClustering
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / clustering.centroidClustering

# centroidClustering

## Hierarchy

* [common.evolutionaryAlgorithm](common_evolutionaryalgorithm.md)

  ↳ **clustering.centroidClustering**

  ↳↳ [clustering.kMeans](clustering_kmeans.md)

  ↳↳ [clustering.meanShift](clustering_meanshift.md)

  ↳↳ [clustering.birch](clustering_birch.md)

## Indexable

▪ [key: string]: SerializableType

## Index

### Constructors

* [constructor](clustering_centroidclustering.md#constructor)

### Properties

* [centroids](clustering_centroidclustering.md#centroids)
* [config](clustering_centroidclustering.md#config)
* [distanceFn](clustering_centroidclustering.md#distancefn)
* [distanceFunc](clustering_centroidclustering.md#distancefunc)
* [fitData](clustering_centroidclustering.md#fitdata)
* [initialized](clustering_centroidclustering.md#initialized)
* [iteration](clustering_centroidclustering.md#iteration)
* [iterations](clustering_centroidclustering.md#iterations)
* [labels](clustering_centroidclustering.md#labels)

### Methods

* [canStop](clustering_centroidclustering.md#canstop)
* [fit](clustering_centroidclustering.md#fit)
* [fitAsync](clustering_centroidclustering.md#fitasync)
* [initializeDependencies](clustering_centroidclustering.md#initializedependencies)
* [loadState](clustering_centroidclustering.md#loadstate)
* [onEndFit](clustering_centroidclustering.md#onendfit)
* [predict](clustering_centroidclustering.md#predict)
* [prepareDataset](clustering_centroidclustering.md#preparedataset)
* [serialize](clustering_centroidclustering.md#serialize)
* [shouldStop](clustering_centroidclustering.md#shouldstop)
* [step](clustering_centroidclustering.md#step)

## Constructors

### constructor

\+ **new CentroidClustering**(`config?`: T \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): CentroidClustering

*Overrides [common.serializable](common_serializable.md).[constructor](common_serializable.md#constructor)*

*Defined in [lib/clustering/centroidClustering.ts:12](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/centroidClustering.ts#L12)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | T \| undefined |
`distanceFunction?` | DistanceMeasurement \| undefined |

**Returns:** CentroidClustering

## Properties

### centroids

•  **centroids**: number[][] = []

*Defined in [lib/clustering/centroidClustering.ts:6](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/centroidClustering.ts#L6)*

___

### config

•  **config**: T

*Inherited from [common.serializable](common_serializable.md).[config](common_serializable.md#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/serializable.ts#L8)*

___

### distanceFn

•  **distanceFn**: string = "euclideanDistance"

*Defined in [lib/clustering/centroidClustering.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/centroidClustering.ts#L8)*

___

### distanceFunc

• `Protected` **distanceFunc**: Function

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

•  **iterations**: number = 100

*Inherited from [common.evolutionaryAlgorithm](common_evolutionaryalgorithm.md).[iterations](common_evolutionaryalgorithm.md#iterations)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/evolutionaryAlgorithm.ts#L4)*

___

### labels

• `Protected` **labels**: number[]

*Inherited from [clustering.clustering](clustering_clustering.md).[labels](clustering_clustering.md#labels)*

*Defined in [lib/clustering/clustering.ts:6](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L6)*

## Methods

### canStop

▸ `Abstract`**canStop**(): boolean

*Inherited from [clustering.clustering](clustering_clustering.md).[canStop](clustering_clustering.md#canstop)*

*Defined in [lib/clustering/clustering.ts:43](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L43)*

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

*Defined in [lib/clustering/centroidClustering.ts:55](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/centroidClustering.ts#L55)*

#### Parameters:

Name | Type |
------ | ------ |
`distanceFunction?` | DistanceMeasurement |

**Returns:** void

___

### loadState

▸ **loadState**(`config`: string): void

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

▸ `Abstract`**step**(): any

*Inherited from [common.evolutionaryAlgorithm](common_evolutionaryalgorithm.md).[step](common_evolutionaryalgorithm.md#step)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/evolutionaryAlgorithm.ts#L14)*

**Returns:** any
