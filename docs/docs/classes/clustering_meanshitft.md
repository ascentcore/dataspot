---
layout: default
title: MeanShitft
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [clustering.MeanShitft](clustering_meanshitft)

# MeanShitft

## Hierarchy

* [clustering.CentroidClustering](clustering_centroidclustering)\<[clustering.MeanShiftConfig](clustering_meanshiftconfig)>

  ↳ **clustering.MeanShitft**

## Index

### Constructors

* [constructor](clustering_meanshitft#constructor)

### Properties

* [config](clustering_meanshitft#config)
* [distanceFunc](clustering_meanshitft#distancefunc)
* [fitData](clustering_meanshitft#fitdata)
* [initialized](clustering_meanshitft#initialized)
* [iteration](clustering_meanshitft#iteration)
* [labels](clustering_meanshitft#labels)
* [shifting](clustering_meanshitft#shifting)
* [shiftingPoints](clustering_meanshitft#shiftingpoints)

### Methods

* [canStop](clustering_meanshitft#canstop)
* [fit](clustering_meanshitft#fit)
* [fitAsync](clustering_meanshitft#fitasync)
* [initializeDependencies](clustering_meanshitft#initializedependencies)
* [loadState](clustering_meanshitft#loadstate)
* [onEndFit](clustering_meanshitft#onendfit)
* [predict](clustering_meanshitft#predict)
* [prepareDataset](clustering_meanshitft#preparedataset)
* [serialize](clustering_meanshitft#serialize)
* [shiftPoint](clustering_meanshitft#shiftpoint)
* [shouldStop](clustering_meanshitft#shouldstop)
* [step](clustering_meanshitft#step)

## Constructors

### constructor

\+ **new MeanShitft**(`config?`: [clustering.MeanShiftConfig](clustering_meanshiftconfig) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): [clustering.MeanShitft](clustering_meanshitft)

*Overrides [clustering.CentroidClustering](clustering_centroidclustering).[constructor](clustering_centroidclustering#constructor)*

*Defined in [lib/clustering/meanShift.ts:17](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/meanShift.ts#L17)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [clustering.MeanShiftConfig](clustering_meanshiftconfig) \| undefined |
`distanceFunction?` | DistanceMeasurement \| undefined |

**Returns:** [clustering.MeanShitft](clustering_meanshitft)

## Properties

### config

•  **config**: [clustering.MeanShiftConfig](clustering_meanshiftconfig)

*Inherited from [common.Serializable](common_serializable).[config](common_serializable#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/aa42404/lib/common/serializable.ts#L8)*

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

___

### shifting

• `Private` **shifting**: boolean[]

*Defined in [lib/clustering/meanShift.ts:17](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/meanShift.ts#L17)*

___

### shiftingPoints

• `Private` **shiftingPoints**: number[][]

*Defined in [lib/clustering/meanShift.ts:15](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/meanShift.ts#L15)*

## Methods

### canStop

▸ **canStop**(): boolean

*Overrides [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[canStop](clustering_clusteringalgorithm#canstop)*

*Defined in [lib/clustering/meanShift.ts:70](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/meanShift.ts#L70)*

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

*Overrides [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[onEndFit](clustering_clusteringalgorithm#onendfit)*

*Defined in [lib/clustering/meanShift.ts:40](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/meanShift.ts#L40)*

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

▸ **prepareDataset**(`data`: number[][]): void

*Overrides [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[prepareDataset](clustering_clusteringalgorithm#preparedataset)*

*Defined in [lib/clustering/meanShift.ts:74](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/meanShift.ts#L74)*

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

### shiftPoint

▸ `Private`**shiftPoint**(`point`: number[], `points`: number[][], `kernelBandwidth`: number): number[]

*Defined in [lib/clustering/meanShift.ts:81](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/meanShift.ts#L81)*

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

*Inherited from [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[shouldStop](common_evolutionaryalgorithm#shouldstop)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/aa42404/lib/common/evolutionaryAlgorithm.ts#L10)*

**Returns:** boolean

___

### step

▸ **step**(): void

*Overrides [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[step](common_evolutionaryalgorithm#step)*

*Defined in [lib/clustering/meanShift.ts:24](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/meanShift.ts#L24)*

**Returns:** void
