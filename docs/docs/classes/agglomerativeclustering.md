---
layout: default
title: AgglomerativeClustering
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / AgglomerativeClustering

# AgglomerativeClustering

## Hierarchy

* [ClusteringAlgorithm](clusteringalgorithm.md)\<[AglomerativeClusteringConfig](aglomerativeclusteringconfig.md)>

  ↳ **AgglomerativeClustering**

## Index

### Constructors

* [constructor](agglomerativeclustering.md#constructor)

### Properties

* [config](agglomerativeclustering.md#config)
* [distanceFunc](agglomerativeclustering.md#distancefunc)
* [fitData](agglomerativeclustering.md#fitdata)
* [initialized](agglomerativeclustering.md#initialized)
* [iteration](agglomerativeclustering.md#iteration)
* [labels](agglomerativeclustering.md#labels)
* [numLeaves](agglomerativeclustering.md#numleaves)

### Methods

* [canStop](agglomerativeclustering.md#canstop)
* [fit](agglomerativeclustering.md#fit)
* [fitAsync](agglomerativeclustering.md#fitasync)
* [initializeDependencies](agglomerativeclustering.md#initializedependencies)
* [loadState](agglomerativeclustering.md#loadstate)
* [onEndFit](agglomerativeclustering.md#onendfit)
* [predict](agglomerativeclustering.md#predict)
* [prepareDataset](agglomerativeclustering.md#preparedataset)
* [serialize](agglomerativeclustering.md#serialize)
* [shouldStop](agglomerativeclustering.md#shouldstop)
* [step](agglomerativeclustering.md#step)

## Constructors

### constructor

\+ **new AgglomerativeClustering**(`config?`: [AglomerativeClusteringConfig](aglomerativeclusteringconfig.md) \| undefined, `distanceFunction?`: [DistanceMeasurement](../globals.md#distancemeasurement) \| undefined): [AgglomerativeClustering](agglomerativeclustering.md)

*Overrides [Serializable](serializable.md).[constructor](serializable.md#constructor)*

*Defined in [lib/clustering/agglomerativeClustering.ts:12](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/agglomerativeClustering.ts#L12)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [AglomerativeClusteringConfig](aglomerativeclusteringconfig.md) \| undefined |
`distanceFunction?` | [DistanceMeasurement](../globals.md#distancemeasurement) \| undefined |

**Returns:** [AgglomerativeClustering](agglomerativeclustering.md)

## Properties

### config

•  **config**: [AglomerativeClusteringConfig](aglomerativeclusteringconfig.md)

*Inherited from [Serializable](serializable.md).[config](serializable.md#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/serializable.ts#L8)*

___

### distanceFunc

• `Protected` **distanceFunc**: Function

*Defined in [lib/clustering/agglomerativeClustering.ts:10](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/agglomerativeClustering.ts#L10)*

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

### numLeaves

• `Private` **numLeaves**: number

*Defined in [lib/clustering/agglomerativeClustering.ts:12](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/agglomerativeClustering.ts#L12)*

## Methods

### canStop

▸ **canStop**(): boolean

*Overrides [ClusteringAlgorithm](clusteringalgorithm.md).[canStop](clusteringalgorithm.md#canstop)*

*Defined in [lib/clustering/agglomerativeClustering.ts:23](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/agglomerativeClustering.ts#L23)*

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

*Defined in [lib/clustering/agglomerativeClustering.ts:38](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/agglomerativeClustering.ts#L38)*

#### Parameters:

Name | Type |
------ | ------ |
`distanceFunction?` | [DistanceMeasurement](../globals.md#distancemeasurement) |

**Returns:** void

___

### loadState

▸ **loadState**(`from`: string): void

*Inherited from [Serializable](serializable.md).[loadState](serializable.md#loadstate)*

*Defined in [lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/serializable.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`from` | string |

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

*Overrides [ClusteringAlgorithm](clusteringalgorithm.md).[predict](clusteringalgorithm.md#predict)*

*Defined in [lib/clustering/agglomerativeClustering.ts:47](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/agglomerativeClustering.ts#L47)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### prepareDataset

▸ **prepareDataset**(`data`: number[][]): void

*Overrides [ClusteringAlgorithm](clusteringalgorithm.md).[prepareDataset](clusteringalgorithm.md#preparedataset)*

*Defined in [lib/clustering/agglomerativeClustering.ts:31](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/agglomerativeClustering.ts#L31)*

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

*Overrides [EvolutionaryAlgorithm](evolutionaryalgorithm.md).[shouldStop](evolutionaryalgorithm.md#shouldstop)*

*Defined in [lib/clustering/agglomerativeClustering.ts:27](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/agglomerativeClustering.ts#L27)*

**Returns:** boolean

___

### step

▸ **step**(): void

*Overrides [EvolutionaryAlgorithm](evolutionaryalgorithm.md).[step](evolutionaryalgorithm.md#step)*

*Defined in [lib/clustering/agglomerativeClustering.ts:19](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/agglomerativeClustering.ts#L19)*

**Returns:** void
