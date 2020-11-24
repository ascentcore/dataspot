---
layout: default
title: meanShift
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [clustering.meanShift](clustering_meanshift)

# meanShift

## Hierarchy

* [clustering.centroidClustering](clustering_centroidclustering)

  ↳ **clustering.meanShift**

## Indexable

▪ [key: string]: SerializableType

## Index

### Constructors

* [constructor](clustering_meanshift#constructor)

### Properties

* [bandwidth](clustering_meanshift#bandwidth)
* [centroids](clustering_meanshift#centroids)
* [clusterThreshold](clustering_meanshift#clusterthreshold)
* [config](clustering_meanshift#config)
* [distanceFn](clustering_meanshift#distancefn)
* [distanceFunc](clustering_meanshift#distancefunc)
* [fitData](clustering_meanshift#fitdata)
* [initialized](clustering_meanshift#initialized)
* [iteration](clustering_meanshift#iteration)
* [iterations](clustering_meanshift#iterations)
* [labels](clustering_meanshift#labels)
* [shifting](clustering_meanshift#shifting)
* [shiftingPoints](clustering_meanshift#shiftingpoints)
* [stopThreshold](clustering_meanshift#stopthreshold)

### Methods

* [canStop](clustering_meanshift#canstop)
* [fit](clustering_meanshift#fit)
* [fitAsync](clustering_meanshift#fitasync)
* [initializeDependencies](clustering_meanshift#initializedependencies)
* [loadState](clustering_meanshift#loadstate)
* [onEndFit](clustering_meanshift#onendfit)
* [predict](clustering_meanshift#predict)
* [prepareDataset](clustering_meanshift#preparedataset)
* [serialize](clustering_meanshift#serialize)
* [shiftPoint](clustering_meanshift#shiftpoint)
* [shouldStop](clustering_meanshift#shouldstop)
* [step](clustering_meanshift#step)

## Constructors

### constructor

\+ **new MeanShitft**(`config?`: [clustering.meanShift](clustering_meanshift) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): MeanShitft

*Overrides [clustering.centroidClustering](clustering_centroidclustering).[constructor](clustering_centroidclustering#constructor)*

*Defined in [lib/clustering/meanShift.ts:17](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/meanShift.ts#L17)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [clustering.meanShift](clustering_meanshift) \| undefined |
`distanceFunction?` | DistanceMeasurement \| undefined |

**Returns:** MeanShitft

## Properties

### bandwidth

•  **bandwidth**: number = 0.1

*Defined in [lib/clustering/meanShift.ts:7](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/meanShift.ts#L7)*

___

### centroids

•  **centroids**: number[][] = []

*Inherited from [clustering.centroidClustering](clustering_centroidclustering).[centroids](clustering_centroidclustering#centroids)*

*Defined in [lib/clustering/centroidClustering.ts:6](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/centroidClustering.ts#L6)*

___

### clusterThreshold

•  **clusterThreshold**: number = 0.1

*Defined in [lib/clustering/meanShift.ts:9](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/meanShift.ts#L9)*

___

### config

•  **config**: [clustering.meanShift](clustering_meanshift)

*Inherited from [common.serializable](common_serializable).[config](common_serializable#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/serializable.ts#L8)*

___

### distanceFn

•  **distanceFn**: string = "euclideanDistance"

*Inherited from [clustering.centroidClustering](clustering_centroidclustering).[distanceFn](clustering_centroidclustering#distancefn)*

*Defined in [lib/clustering/centroidClustering.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/centroidClustering.ts#L8)*

___

### distanceFunc

• `Protected` **distanceFunc**: Function

*Inherited from [clustering.centroidClustering](clustering_centroidclustering).[distanceFunc](clustering_centroidclustering#distancefunc)*

*Defined in [lib/clustering/centroidClustering.ts:12](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/centroidClustering.ts#L12)*

___

### fitData

• `Protected` **fitData**: number[][]

*Inherited from [clustering.clusteringBase](clustering_clusteringbase).[fitData](clustering_clusteringbase#fitdata)*

*Defined in lib/clustering/clusteringBase.ts:4*

___

### initialized

• `Protected` **initialized**: boolean = false

*Inherited from [clustering.clusteringBase](clustering_clusteringbase).[initialized](clustering_clusteringbase#initialized)*

*Defined in lib/clustering/clusteringBase.ts:8*

___

### iteration

• `Protected` **iteration**: number = 0

*Inherited from [common.evolutionaryAlgorithm](common_evolutionaryalgorithm).[iteration](common_evolutionaryalgorithm#iteration)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/evolutionaryAlgorithm.ts#L8)*

___

### iterations

•  **iterations**: number = 100

*Inherited from [common.evolutionaryAlgorithm](common_evolutionaryalgorithm).[iterations](common_evolutionaryalgorithm#iterations)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/evolutionaryAlgorithm.ts#L4)*

___

### labels

• `Protected` **labels**: number[]

*Inherited from [clustering.clusteringBase](clustering_clusteringbase).[labels](clustering_clusteringbase#labels)*

*Defined in lib/clustering/clusteringBase.ts:6*

___

### shifting

• `Private` **shifting**: boolean[]

*Defined in [lib/clustering/meanShift.ts:17](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/meanShift.ts#L17)*

___

### shiftingPoints

• `Private` **shiftingPoints**: number[][]

*Defined in [lib/clustering/meanShift.ts:15](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/meanShift.ts#L15)*

___

### stopThreshold

•  **stopThreshold**: number = 0.0001

*Defined in [lib/clustering/meanShift.ts:11](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/meanShift.ts#L11)*

## Methods

### canStop

▸ **canStop**(): boolean

*Overrides [clustering.clusteringBase](clustering_clusteringbase).[canStop](clustering_clusteringbase#canstop)*

*Defined in [lib/clustering/meanShift.ts:70](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/meanShift.ts#L70)*

**Returns:** boolean

___

### fit

▸ **fit**(`data`: number[][]): number[]

*Inherited from [clustering.clusteringBase](clustering_clusteringbase).[fit](clustering_clusteringbase#fit)*

*Defined in lib/clustering/clusteringBase.ts:30*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### fitAsync

▸ **fitAsync**(`data`: number[][]): Generator

*Inherited from [clustering.clusteringBase](clustering_clusteringbase).[fitAsync](clustering_clusteringbase#fitasync)*

*Defined in lib/clustering/clusteringBase.ts:19*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** Generator

___

### initializeDependencies

▸ **initializeDependencies**(`distanceFunction?`: DistanceMeasurement): void

*Inherited from [clustering.centroidClustering](clustering_centroidclustering).[initializeDependencies](clustering_centroidclustering#initializedependencies)*

*Defined in [lib/clustering/centroidClustering.ts:55](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/centroidClustering.ts#L55)*

#### Parameters:

Name | Type |
------ | ------ |
`distanceFunction?` | DistanceMeasurement |

**Returns:** void

___

### loadState

▸ **loadState**(`config`: string): void

*Inherited from [clustering.centroidClustering](clustering_centroidclustering).[loadState](clustering_centroidclustering#loadstate)*

*Overrides [common.serializable](common_serializable).[loadState](common_serializable#loadstate)*

*Defined in [lib/clustering/centroidClustering.ts:49](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/centroidClustering.ts#L49)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | string |

**Returns:** void

___

### onEndFit

▸ **onEndFit**(): void

*Overrides [clustering.clusteringBase](clustering_clusteringbase).[onEndFit](clustering_clusteringbase#onendfit)*

*Defined in [lib/clustering/meanShift.ts:40](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/meanShift.ts#L40)*

**Returns:** void

___

### predict

▸ **predict**(`data`: number[][]): number[]

*Inherited from [clustering.centroidClustering](clustering_centroidclustering).[predict](clustering_centroidclustering#predict)*

*Overrides [clustering.clusteringBase](clustering_clusteringbase).[predict](clustering_clusteringbase#predict)*

*Defined in [lib/clustering/centroidClustering.ts:19](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/centroidClustering.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### prepareDataset

▸ **prepareDataset**(`data`: number[][]): void

*Overrides [clustering.clusteringBase](clustering_clusteringbase).[prepareDataset](clustering_clusteringbase#preparedataset)*

*Defined in [lib/clustering/meanShift.ts:74](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/meanShift.ts#L74)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** void

___

### serialize

▸ **serialize**(): string

*Inherited from [common.serializable](common_serializable).[serialize](common_serializable#serialize)*

*Defined in [lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/serializable.ts#L10)*

**Returns:** string

___

### shiftPoint

▸ `Private`**shiftPoint**(`point`: number[], `points`: number[][], `kernelBandwidth`: number): number[]

*Defined in [lib/clustering/meanShift.ts:81](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/meanShift.ts#L81)*

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

*Inherited from [common.evolutionaryAlgorithm](common_evolutionaryalgorithm).[shouldStop](common_evolutionaryalgorithm#shouldstop)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/evolutionaryAlgorithm.ts#L10)*

**Returns:** boolean

___

### step

▸ **step**(): void

*Overrides [common.evolutionaryAlgorithm](common_evolutionaryalgorithm).[step](common_evolutionaryalgorithm#step)*

*Defined in [lib/clustering/meanShift.ts:24](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/meanShift.ts#L24)*

**Returns:** void
