---
layout: default
title: dbScan
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / clustering.dbScan

# dbScan

## Hierarchy

* [common.evolutionaryAlgorithm](common_evolutionaryalgorithm.md)

  ↳ **clustering.dbScan**

## Indexable

▪ [key: string]: SerializableType

## Index

### Constructors

* [constructor](clustering_dbscan.md#constructor)

### Properties

* [config](clustering_dbscan.md#config)
* [distanceFn](clustering_dbscan.md#distancefn)
* [distanceFunc](clustering_dbscan.md#distancefunc)
* [epsilon](clustering_dbscan.md#epsilon)
* [fitData](clustering_dbscan.md#fitdata)
* [initialized](clustering_dbscan.md#initialized)
* [iteration](clustering_dbscan.md#iteration)
* [iterations](clustering_dbscan.md#iterations)
* [labels](clustering_dbscan.md#labels)
* [minNeighbours](clustering_dbscan.md#minneighbours)

### Methods

* [canStop](clustering_dbscan.md#canstop)
* [fit](clustering_dbscan.md#fit)
* [fitAsync](clustering_dbscan.md#fitasync)
* [getNeigbouringIndexes](clustering_dbscan.md#getneigbouringindexes)
* [initializeDependencies](clustering_dbscan.md#initializedependencies)
* [loadState](clustering_dbscan.md#loadstate)
* [onEndFit](clustering_dbscan.md#onendfit)
* [predict](clustering_dbscan.md#predict)
* [prepareDataset](clustering_dbscan.md#preparedataset)
* [serialize](clustering_dbscan.md#serialize)
* [shouldStop](clustering_dbscan.md#shouldstop)
* [step](clustering_dbscan.md#step)

## Constructors

### constructor

\+ **new DBScan**(`config?`: [clustering.dbScan](clustering_dbscan.md) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): DBScan

*Overrides [common.serializable](common_serializable.md).[constructor](common_serializable.md#constructor)*

*Defined in [lib/clustering/dbScan.ts:14](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/dbScan.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [clustering.dbScan](clustering_dbscan.md) \| undefined |
`distanceFunction?` | DistanceMeasurement \| undefined |

**Returns:** DBScan

## Properties

### config

•  **config**: [clustering.dbScan](clustering_dbscan.md)

*Inherited from [common.serializable](common_serializable.md).[config](common_serializable.md#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/serializable.ts#L8)*

___

### distanceFn

•  **distanceFn**: string = "euclideanDistance"

*Defined in [lib/clustering/dbScan.ts:10](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/dbScan.ts#L10)*

___

### distanceFunc

• `Private` **distanceFunc**: Function

*Defined in [lib/clustering/dbScan.ts:14](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/dbScan.ts#L14)*

___

### epsilon

•  **epsilon**: number = 0.1

*Defined in [lib/clustering/dbScan.ts:6](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/dbScan.ts#L6)*

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

### minNeighbours

•  **minNeighbours**: number = 5

*Defined in [lib/clustering/dbScan.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/dbScan.ts#L8)*

## Methods

### canStop

▸ **canStop**(): boolean

*Overrides [clustering.clustering](clustering_clustering.md).[canStop](clustering_clustering.md#canstop)*

*Defined in [lib/clustering/dbScan.ts:21](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/dbScan.ts#L21)*

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

### getNeigbouringIndexes

▸ `Private`**getNeigbouringIndexes**(`reference`: number[]): number[]

*Defined in [lib/clustering/dbScan.ts:29](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/dbScan.ts#L29)*

#### Parameters:

Name | Type |
------ | ------ |
`reference` | number[] |

**Returns:** number[]

___

### initializeDependencies

▸ **initializeDependencies**(`distanceFunction?`: DistanceMeasurement): void

*Defined in [lib/clustering/dbScan.ts:67](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/dbScan.ts#L67)*

#### Parameters:

Name | Type |
------ | ------ |
`distanceFunction?` | DistanceMeasurement |

**Returns:** void

___

### loadState

▸ **loadState**(`from`: string): void

*Inherited from [common.serializable](common_serializable.md).[loadState](common_serializable.md#loadstate)*

*Defined in [lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/serializable.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`from` | string |

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

*Defined in [lib/clustering/dbScan.ts:25](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/dbScan.ts#L25)*

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

*Defined in [lib/clustering/dbScan.ts:38](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/dbScan.ts#L38)*

**Returns:** void
