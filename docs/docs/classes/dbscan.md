---
layout: default
title: DBScan
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / DBScan

# DBScan

## Hierarchy

* [ClusteringAlgorithm](clusteringalgorithm.md)\<[DBScanConfig](dbscanconfig.md)>

  ↳ **DBScan**

## Index

### Constructors

* [constructor](dbscan.md#constructor)

### Properties

* [config](dbscan.md#config)
* [distanceFunc](dbscan.md#distancefunc)
* [fitData](dbscan.md#fitdata)
* [initialized](dbscan.md#initialized)
* [iteration](dbscan.md#iteration)
* [labels](dbscan.md#labels)

### Methods

* [canStop](dbscan.md#canstop)
* [fit](dbscan.md#fit)
* [fitAsync](dbscan.md#fitasync)
* [getNeigbouringIndexes](dbscan.md#getneigbouringindexes)
* [initializeDependencies](dbscan.md#initializedependencies)
* [loadState](dbscan.md#loadstate)
* [onEndFit](dbscan.md#onendfit)
* [predict](dbscan.md#predict)
* [prepareDataset](dbscan.md#preparedataset)
* [serialize](dbscan.md#serialize)
* [shouldStop](dbscan.md#shouldstop)
* [step](dbscan.md#step)

## Constructors

### constructor

\+ **new DBScan**(`config?`: [DBScanConfig](dbscanconfig.md) \| undefined, `distanceFunction?`: [DistanceMeasurement](../globals.md#distancemeasurement) \| undefined): [DBScan](dbscan.md)

*Overrides [Serializable](serializable.md).[constructor](serializable.md#constructor)*

*Defined in [lib/clustering/dbScan.ts:14](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/dbScan.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [DBScanConfig](dbscanconfig.md) \| undefined |
`distanceFunction?` | [DistanceMeasurement](../globals.md#distancemeasurement) \| undefined |

**Returns:** [DBScan](dbscan.md)

## Properties

### config

•  **config**: [DBScanConfig](dbscanconfig.md)

*Inherited from [Serializable](serializable.md).[config](serializable.md#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/serializable.ts#L8)*

___

### distanceFunc

• `Private` **distanceFunc**: Function

*Defined in [lib/clustering/dbScan.ts:14](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/dbScan.ts#L14)*

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

*Defined in [lib/clustering/dbScan.ts:21](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/dbScan.ts#L21)*

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

### getNeigbouringIndexes

▸ `Private`**getNeigbouringIndexes**(`reference`: number[]): number[]

*Defined in [lib/clustering/dbScan.ts:29](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/dbScan.ts#L29)*

#### Parameters:

Name | Type |
------ | ------ |
`reference` | number[] |

**Returns:** number[]

___

### initializeDependencies

▸ **initializeDependencies**(`distanceFunction?`: [DistanceMeasurement](../globals.md#distancemeasurement)): void

*Defined in [lib/clustering/dbScan.ts:67](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/dbScan.ts#L67)*

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

*Defined in [lib/clustering/dbScan.ts:25](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/dbScan.ts#L25)*

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

*Defined in [lib/clustering/dbScan.ts:38](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/dbScan.ts#L38)*

**Returns:** void
