---
layout: default
title: MeanShitft
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / MeanShitft

# MeanShitft

## Hierarchy

* [CentroidClustering](centroidclustering.md)\<[MeanShiftConfig](meanshiftconfig.md)>

  ↳ **MeanShitft**

## Index

### Constructors

* [constructor](meanshitft.md#constructor)

### Properties

* [config](meanshitft.md#config)
* [distanceFunc](meanshitft.md#distancefunc)
* [fitData](meanshitft.md#fitdata)
* [initialized](meanshitft.md#initialized)
* [iteration](meanshitft.md#iteration)
* [labels](meanshitft.md#labels)
* [shifting](meanshitft.md#shifting)
* [shiftingPoints](meanshitft.md#shiftingpoints)

### Methods

* [canStop](meanshitft.md#canstop)
* [fit](meanshitft.md#fit)
* [fitAsync](meanshitft.md#fitasync)
* [initializeDependencies](meanshitft.md#initializedependencies)
* [loadState](meanshitft.md#loadstate)
* [onEndFit](meanshitft.md#onendfit)
* [predict](meanshitft.md#predict)
* [prepareDataset](meanshitft.md#preparedataset)
* [serialize](meanshitft.md#serialize)
* [shiftPoint](meanshitft.md#shiftpoint)
* [shouldStop](meanshitft.md#shouldstop)
* [step](meanshitft.md#step)

## Constructors

### constructor

\+ **new MeanShitft**(`config?`: [MeanShiftConfig](meanshiftconfig.md) \| undefined, `distanceFunction?`: [DistanceMeasurement](../globals.md#distancemeasurement) \| undefined): [MeanShitft](meanshitft.md)

*Overrides [CentroidClustering](centroidclustering.md).[constructor](centroidclustering.md#constructor)*

*Defined in [lib/clustering/meanShift.ts:17](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/meanShift.ts#L17)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [MeanShiftConfig](meanshiftconfig.md) \| undefined |
`distanceFunction?` | [DistanceMeasurement](../globals.md#distancemeasurement) \| undefined |

**Returns:** [MeanShitft](meanshitft.md)

## Properties

### config

•  **config**: [MeanShiftConfig](meanshiftconfig.md)

*Inherited from [Serializable](serializable.md).[config](serializable.md#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/serializable.ts#L8)*

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

___

### shifting

• `Private` **shifting**: boolean[]

*Defined in [lib/clustering/meanShift.ts:17](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/meanShift.ts#L17)*

___

### shiftingPoints

• `Private` **shiftingPoints**: number[][]

*Defined in [lib/clustering/meanShift.ts:15](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/meanShift.ts#L15)*

## Methods

### canStop

▸ **canStop**(): boolean

*Overrides [ClusteringAlgorithm](clusteringalgorithm.md).[canStop](clusteringalgorithm.md#canstop)*

*Defined in [lib/clustering/meanShift.ts:70](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/meanShift.ts#L70)*

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

*Overrides [ClusteringAlgorithm](clusteringalgorithm.md).[onEndFit](clusteringalgorithm.md#onendfit)*

*Defined in [lib/clustering/meanShift.ts:40](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/meanShift.ts#L40)*

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

▸ **prepareDataset**(`data`: number[][]): void

*Overrides [ClusteringAlgorithm](clusteringalgorithm.md).[prepareDataset](clusteringalgorithm.md#preparedataset)*

*Defined in [lib/clustering/meanShift.ts:74](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/meanShift.ts#L74)*

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

### shiftPoint

▸ `Private`**shiftPoint**(`point`: number[], `points`: number[][], `kernelBandwidth`: number): number[]

*Defined in [lib/clustering/meanShift.ts:81](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/meanShift.ts#L81)*

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

*Inherited from [EvolutionaryAlgorithm](evolutionaryalgorithm.md).[shouldStop](evolutionaryalgorithm.md#shouldstop)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/evolutionaryAlgorithm.ts#L10)*

**Returns:** boolean

___

### step

▸ **step**(): void

*Overrides [EvolutionaryAlgorithm](evolutionaryalgorithm.md).[step](evolutionaryalgorithm.md#step)*

*Defined in [lib/clustering/meanShift.ts:24](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/meanShift.ts#L24)*

**Returns:** void
