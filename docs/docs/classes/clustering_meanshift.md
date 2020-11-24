---
layout: default
title: meanShift
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / clustering.meanShift

# meanShift

## Hierarchy

* [clustering.centroidClustering](clustering_centroidclustering.md)

  ↳ **clustering.meanShift**

## Indexable

▪ [key: string]: SerializableType

## Index

### Constructors

* [constructor](clustering_meanshift.md#constructor)

### Properties

* [bandwidth](clustering_meanshift.md#bandwidth)
* [centroids](clustering_meanshift.md#centroids)
* [clusterThreshold](clustering_meanshift.md#clusterthreshold)
* [config](clustering_meanshift.md#config)
* [distanceFn](clustering_meanshift.md#distancefn)
* [distanceFunc](clustering_meanshift.md#distancefunc)
* [fitData](clustering_meanshift.md#fitdata)
* [initialized](clustering_meanshift.md#initialized)
* [iteration](clustering_meanshift.md#iteration)
* [iterations](clustering_meanshift.md#iterations)
* [labels](clustering_meanshift.md#labels)
* [shifting](clustering_meanshift.md#shifting)
* [shiftingPoints](clustering_meanshift.md#shiftingpoints)
* [stopThreshold](clustering_meanshift.md#stopthreshold)

### Methods

* [canStop](clustering_meanshift.md#canstop)
* [fit](clustering_meanshift.md#fit)
* [fitAsync](clustering_meanshift.md#fitasync)
* [initializeDependencies](clustering_meanshift.md#initializedependencies)
* [loadState](clustering_meanshift.md#loadstate)
* [onEndFit](clustering_meanshift.md#onendfit)
* [predict](clustering_meanshift.md#predict)
* [prepareDataset](clustering_meanshift.md#preparedataset)
* [serialize](clustering_meanshift.md#serialize)
* [shiftPoint](clustering_meanshift.md#shiftpoint)
* [shouldStop](clustering_meanshift.md#shouldstop)
* [step](clustering_meanshift.md#step)

## Constructors

### constructor

\+ **new MeanShitft**(`config?`: [clustering.meanShift](clustering_meanshift.md) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): MeanShitft

*Overrides [clustering.centroidClustering](clustering_centroidclustering.md).[constructor](clustering_centroidclustering.md#constructor)*

*Defined in [lib/clustering/meanShift.ts:17](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/meanShift.ts#L17)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [clustering.meanShift](clustering_meanshift.md) \| undefined |
`distanceFunction?` | DistanceMeasurement \| undefined |

**Returns:** MeanShitft

## Properties

### bandwidth

•  **bandwidth**: number = 0.1

*Defined in [lib/clustering/meanShift.ts:7](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/meanShift.ts#L7)*

___

### centroids

•  **centroids**: number[][] = []

*Inherited from [clustering.centroidClustering](clustering_centroidclustering.md).[centroids](clustering_centroidclustering.md#centroids)*

*Defined in [lib/clustering/centroidClustering.ts:6](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/centroidClustering.ts#L6)*

___

### clusterThreshold

•  **clusterThreshold**: number = 0.1

*Defined in [lib/clustering/meanShift.ts:9](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/meanShift.ts#L9)*

___

### config

•  **config**: [clustering.meanShift](clustering_meanshift.md)

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

### shifting

• `Private` **shifting**: boolean[]

*Defined in [lib/clustering/meanShift.ts:17](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/meanShift.ts#L17)*

___

### shiftingPoints

• `Private` **shiftingPoints**: number[][]

*Defined in [lib/clustering/meanShift.ts:15](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/meanShift.ts#L15)*

___

### stopThreshold

•  **stopThreshold**: number = 0.0001

*Defined in [lib/clustering/meanShift.ts:11](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/meanShift.ts#L11)*

## Methods

### canStop

▸ **canStop**(): boolean

*Overrides [clustering.clustering](clustering_clustering.md).[canStop](clustering_clustering.md#canstop)*

*Defined in [lib/clustering/meanShift.ts:70](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/meanShift.ts#L70)*

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

*Overrides [clustering.clustering](clustering_clustering.md).[onEndFit](clustering_clustering.md#onendfit)*

*Defined in [lib/clustering/meanShift.ts:40](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/meanShift.ts#L40)*

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

▸ **prepareDataset**(`data`: number[][]): void

*Overrides [clustering.clustering](clustering_clustering.md).[prepareDataset](clustering_clustering.md#preparedataset)*

*Defined in [lib/clustering/meanShift.ts:74](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/meanShift.ts#L74)*

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

### shiftPoint

▸ `Private`**shiftPoint**(`point`: number[], `points`: number[][], `kernelBandwidth`: number): number[]

*Defined in [lib/clustering/meanShift.ts:81](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/meanShift.ts#L81)*

#### Parameters:

Name | Type |
------ | ------ |
`point` | number[] |
`points` | number[][] |
`kernelBandwidth` | number |

**Returns:** number[]

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

*Defined in [lib/clustering/meanShift.ts:24](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/meanShift.ts#L24)*

**Returns:** void
