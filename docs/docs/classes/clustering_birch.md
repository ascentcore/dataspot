---
layout: default
title: birch
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / clustering.birch

# birch

## Hierarchy

* [clustering.centroidClustering](clustering_centroidclustering.md)

  ↳ **clustering.birch**

## Indexable

▪ [key: string]: SerializableType

## Index

### Constructors

* [constructor](clustering_birch.md#constructor)

### Properties

* [branchingFactor](clustering_birch.md#branchingfactor)
* [centroids](clustering_birch.md#centroids)
* [clusters](clustering_birch.md#clusters)
* [config](clustering_birch.md#config)
* [distanceFn](clustering_birch.md#distancefn)
* [distanceFunc](clustering_birch.md#distancefunc)
* [fitData](clustering_birch.md#fitdata)
* [initialized](clustering_birch.md#initialized)
* [iteration](clustering_birch.md#iteration)
* [iterations](clustering_birch.md#iterations)
* [labels](clustering_birch.md#labels)
* [threshold](clustering_birch.md#threshold)

### Methods

* [canStop](clustering_birch.md#canstop)
* [fit](clustering_birch.md#fit)
* [fitAsync](clustering_birch.md#fitasync)
* [initializeDependencies](clustering_birch.md#initializedependencies)
* [loadState](clustering_birch.md#loadstate)
* [onEndFit](clustering_birch.md#onendfit)
* [predict](clustering_birch.md#predict)
* [prepareDataset](clustering_birch.md#preparedataset)
* [serialize](clustering_birch.md#serialize)
* [shouldStop](clustering_birch.md#shouldstop)
* [step](clustering_birch.md#step)

## Constructors

### constructor

\+ **new Birch**(`config?`: [clustering.birch](clustering_birch.md) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): Birch

*Overrides [clustering.centroidClustering](clustering_centroidclustering.md).[constructor](clustering_centroidclustering.md#constructor)*

*Defined in [lib/clustering/birch.ts:14](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/birch.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [clustering.birch](clustering_birch.md) \| undefined |
`distanceFunction?` | DistanceMeasurement \| undefined |

**Returns:** Birch

## Properties

### branchingFactor

•  **branchingFactor**: number = 50

*Defined in [lib/clustering/birch.ts:10](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/birch.ts#L10)*

___

### centroids

•  **centroids**: number[][] = []

*Inherited from [clustering.centroidClustering](clustering_centroidclustering.md).[centroids](clustering_centroidclustering.md#centroids)*

*Defined in [lib/clustering/centroidClustering.ts:6](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/centroidClustering.ts#L6)*

___

### clusters

•  **clusters**: number = 3

*Defined in [lib/clustering/birch.ts:6](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/birch.ts#L6)*

___

### config

•  **config**: [clustering.birch](clustering_birch.md)

*Inherited from [common.serializable](common_serializable.md).[config](common_serializable.md#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/serializable.ts#L8)*

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

•  **iterations**: number = 100

*Inherited from [common.evolutionaryAlgorithm](common_evolutionaryalgorithm.md).[iterations](common_evolutionaryalgorithm.md#iterations)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/evolutionaryAlgorithm.ts#L4)*

___

### labels

• `Protected` **labels**: number[]

*Inherited from [clustering.clustering](clustering_clustering.md).[labels](clustering_clustering.md#labels)*

*Defined in [lib/clustering/clustering.ts:6](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L6)*

___

### threshold

•  **threshold**: number = 0.5

*Defined in [lib/clustering/birch.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/birch.ts#L8)*

## Methods

### canStop

▸ **canStop**(): boolean

*Overrides [clustering.clustering](clustering_clustering.md).[canStop](clustering_clustering.md#canstop)*

*Defined in [lib/clustering/birch.ts:25](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/birch.ts#L25)*

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

*Defined in [lib/clustering/birch.ts:20](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/birch.ts#L20)*

**Returns:** void
