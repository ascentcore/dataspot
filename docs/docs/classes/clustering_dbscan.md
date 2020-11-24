---
layout: default
title: dbScan
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [clustering.dbScan](clustering_dbscan)

# dbScan

## Hierarchy

* [common.evolutionaryAlgorithm](common_evolutionaryalgorithm)

  ↳ **clustering.dbScan**

## Indexable

▪ [key: string]: SerializableType

## Index

### Constructors

* [constructor](clustering_dbscan#constructor)

### Properties

* [config](clustering_dbscan#config)
* [distanceFn](clustering_dbscan#distancefn)
* [distanceFunc](clustering_dbscan#distancefunc)
* [epsilon](clustering_dbscan#epsilon)
* [fitData](clustering_dbscan#fitdata)
* [initialized](clustering_dbscan#initialized)
* [iteration](clustering_dbscan#iteration)
* [iterations](clustering_dbscan#iterations)
* [labels](clustering_dbscan#labels)
* [minNeighbours](clustering_dbscan#minneighbours)

### Methods

* [canStop](clustering_dbscan#canstop)
* [fit](clustering_dbscan#fit)
* [fitAsync](clustering_dbscan#fitasync)
* [getNeigbouringIndexes](clustering_dbscan#getneigbouringindexes)
* [initializeDependencies](clustering_dbscan#initializedependencies)
* [loadState](clustering_dbscan#loadstate)
* [onEndFit](clustering_dbscan#onendfit)
* [predict](clustering_dbscan#predict)
* [prepareDataset](clustering_dbscan#preparedataset)
* [serialize](clustering_dbscan#serialize)
* [shouldStop](clustering_dbscan#shouldstop)
* [step](clustering_dbscan#step)

## Constructors

### constructor

\+ **new DBScan**(`config?`: [clustering.dbScan](clustering_dbscan) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): DBScan

*Overrides [common.serializable](common_serializable).[constructor](common_serializable#constructor)*

*Defined in [lib/clustering/dbScan.ts:14](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/dbScan.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [clustering.dbScan](clustering_dbscan) \| undefined |
`distanceFunction?` | DistanceMeasurement \| undefined |

**Returns:** DBScan

## Properties

### config

•  **config**: [clustering.dbScan](clustering_dbscan)

*Inherited from [common.serializable](common_serializable).[config](common_serializable#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/serializable.ts#L8)*

___

### distanceFn

•  **distanceFn**: string = "euclideanDistance"

*Defined in [lib/clustering/dbScan.ts:10](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/dbScan.ts#L10)*

___

### distanceFunc

• `Private` **distanceFunc**: Function

*Defined in [lib/clustering/dbScan.ts:14](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/dbScan.ts#L14)*

___

### epsilon

•  **epsilon**: number = 0.1

*Defined in [lib/clustering/dbScan.ts:6](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/dbScan.ts#L6)*

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

### minNeighbours

•  **minNeighbours**: number = 5

*Defined in [lib/clustering/dbScan.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/dbScan.ts#L8)*

## Methods

### canStop

▸ **canStop**(): boolean

*Overrides [clustering.clusteringBase](clustering_clusteringbase).[canStop](clustering_clusteringbase#canstop)*

*Defined in [lib/clustering/dbScan.ts:21](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/dbScan.ts#L21)*

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

### getNeigbouringIndexes

▸ `Private`**getNeigbouringIndexes**(`reference`: number[]): number[]

*Defined in [lib/clustering/dbScan.ts:29](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/dbScan.ts#L29)*

#### Parameters:

Name | Type |
------ | ------ |
`reference` | number[] |

**Returns:** number[]

___

### initializeDependencies

▸ **initializeDependencies**(`distanceFunction?`: DistanceMeasurement): void

*Defined in [lib/clustering/dbScan.ts:67](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/dbScan.ts#L67)*

#### Parameters:

Name | Type |
------ | ------ |
`distanceFunction?` | DistanceMeasurement |

**Returns:** void

___

### loadState

▸ **loadState**(`from`: string): void

*Inherited from [common.serializable](common_serializable).[loadState](common_serializable#loadstate)*

*Defined in [lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/serializable.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`from` | string |

**Returns:** void

___

### onEndFit

▸ **onEndFit**(): void

*Inherited from [clustering.clusteringBase](clustering_clusteringbase).[onEndFit](clustering_clusteringbase#onendfit)*

*Defined in lib/clustering/clusteringBase.ts:41*

**Returns:** void

___

### predict

▸ **predict**(`data`: number[][]): number[]

*Overrides [clustering.clusteringBase](clustering_clusteringbase).[predict](clustering_clusteringbase#predict)*

*Defined in [lib/clustering/dbScan.ts:25](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/dbScan.ts#L25)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### prepareDataset

▸ `Protected`**prepareDataset**(`data`: number[][]): void

*Inherited from [clustering.clusteringBase](clustering_clusteringbase).[prepareDataset](clustering_clusteringbase#preparedataset)*

*Defined in lib/clustering/clusteringBase.ts:10*

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

### shouldStop

▸ **shouldStop**(): boolean

*Inherited from [common.evolutionaryAlgorithm](common_evolutionaryalgorithm).[shouldStop](common_evolutionaryalgorithm#shouldstop)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/evolutionaryAlgorithm.ts#L10)*

**Returns:** boolean

___

### step

▸ **step**(): void

*Overrides [common.evolutionaryAlgorithm](common_evolutionaryalgorithm).[step](common_evolutionaryalgorithm#step)*

*Defined in [lib/clustering/dbScan.ts:38](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/dbScan.ts#L38)*

**Returns:** void
