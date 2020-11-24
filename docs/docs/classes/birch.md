---
layout: default
title: Birch
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / Birch

# Birch

## Hierarchy

* [CentroidClustering](centroidclustering.md)\<[BirchConfig](birchconfig.md)>

  ↳ **Birch**

## Index

### Constructors

* [constructor](birch.md#constructor)

### Properties

* [config](birch.md#config)
* [distanceFunc](birch.md#distancefunc)
* [fitData](birch.md#fitdata)
* [initialized](birch.md#initialized)
* [iteration](birch.md#iteration)
* [labels](birch.md#labels)

### Methods

* [canStop](birch.md#canstop)
* [fit](birch.md#fit)
* [fitAsync](birch.md#fitasync)
* [initializeDependencies](birch.md#initializedependencies)
* [loadState](birch.md#loadstate)
* [onEndFit](birch.md#onendfit)
* [predict](birch.md#predict)
* [prepareDataset](birch.md#preparedataset)
* [serialize](birch.md#serialize)
* [shouldStop](birch.md#shouldstop)
* [step](birch.md#step)

## Constructors

### constructor

\+ **new Birch**(`config?`: [BirchConfig](birchconfig.md) \| undefined, `distanceFunction?`: [DistanceMeasurement](../globals.md#distancemeasurement) \| undefined): [Birch](birch.md)

*Overrides [CentroidClustering](centroidclustering.md).[constructor](centroidclustering.md#constructor)*

*Defined in [lib/clustering/birch.ts:14](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/birch.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [BirchConfig](birchconfig.md) \| undefined |
`distanceFunction?` | [DistanceMeasurement](../globals.md#distancemeasurement) \| undefined |

**Returns:** [Birch](birch.md)

## Properties

### config

•  **config**: [BirchConfig](birchconfig.md)

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

## Methods

### canStop

▸ **canStop**(): boolean

*Overrides [ClusteringAlgorithm](clusteringalgorithm.md).[canStop](clusteringalgorithm.md#canstop)*

*Defined in [lib/clustering/birch.ts:25](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/birch.ts#L25)*

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

*Defined in [lib/clustering/birch.ts:20](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/birch.ts#L20)*

**Returns:** void
