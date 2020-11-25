---
layout: default
title: DBScan
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [clustering.DBScan](clustering_dbscan)

# DBScan

## Hierarchy

* [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm)\<[clustering.DBScanConfig](clustering_dbscanconfig)>

  ↳ **clustering.DBScan**

## Index

### Constructors

* [constructor](clustering_dbscan#constructor)

### Properties

* [config](clustering_dbscan#config)
* [distanceFunc](clustering_dbscan#distancefunc)
* [fitData](clustering_dbscan#fitdata)
* [initialized](clustering_dbscan#initialized)
* [iteration](clustering_dbscan#iteration)
* [labels](clustering_dbscan#labels)

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

\+ **new DBScan**(`config?`: [clustering.DBScanConfig](clustering_dbscanconfig) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): [clustering.DBScan](clustering_dbscan)

*Overrides [common.Serializable](common_serializable).[constructor](common_serializable#constructor)*

*Defined in [lib/clustering/dbScan.ts:14](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/clustering/dbScan.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [clustering.DBScanConfig](clustering_dbscanconfig) \| undefined |
`distanceFunction?` | DistanceMeasurement \| undefined |

**Returns:** [clustering.DBScan](clustering_dbscan)

## Properties

### config

•  **config**: [clustering.DBScanConfig](clustering_dbscanconfig)

*Inherited from [common.Serializable](common_serializable).[config](common_serializable#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/common/serializable.ts#L8)*

___

### distanceFunc

• `Private` **distanceFunc**: Function

*Defined in [lib/clustering/dbScan.ts:14](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/clustering/dbScan.ts#L14)*

___

### fitData

• `Protected` **fitData**: number[][]

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[fitData](clustering_clusteringalgorithm#fitdata)*

*Defined in [lib/clustering/clusteringBase.ts:4](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/clustering/clusteringBase.ts#L4)*

___

### initialized

• `Protected` **initialized**: boolean = false

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[initialized](clustering_clusteringalgorithm#initialized)*

*Defined in [lib/clustering/clusteringBase.ts:8](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/clustering/clusteringBase.ts#L8)*

___

### iteration

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[iteration](common_evolutionaryalgorithm#iteration)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/common/evolutionaryAlgorithm.ts#L8)*

___

### labels

• `Protected` **labels**: number[]

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[labels](clustering_clusteringalgorithm#labels)*

*Defined in [lib/clustering/clusteringBase.ts:6](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/clustering/clusteringBase.ts#L6)*

## Methods

### canStop

▸ **canStop**(): boolean

*Overrides [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[canStop](clustering_clusteringalgorithm#canstop)*

*Defined in [lib/clustering/dbScan.ts:21](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/clustering/dbScan.ts#L21)*

**Returns:** boolean

___

### fit

▸ **fit**(`data`: number[][]): number[]

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[fit](clustering_clusteringalgorithm#fit)*

*Defined in [lib/clustering/clusteringBase.ts:30](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/clustering/clusteringBase.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### fitAsync

▸ **fitAsync**(`data`: number[][]): Generator

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[fitAsync](clustering_clusteringalgorithm#fitasync)*

*Defined in [lib/clustering/clusteringBase.ts:19](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/clustering/clusteringBase.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** Generator

___

### getNeigbouringIndexes

▸ `Private`**getNeigbouringIndexes**(`reference`: number[]): number[]

*Defined in [lib/clustering/dbScan.ts:29](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/clustering/dbScan.ts#L29)*

#### Parameters:

Name | Type |
------ | ------ |
`reference` | number[] |

**Returns:** number[]

___

### initializeDependencies

▸ **initializeDependencies**(`distanceFunction?`: DistanceMeasurement): void

*Defined in [lib/clustering/dbScan.ts:67](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/clustering/dbScan.ts#L67)*

#### Parameters:

Name | Type |
------ | ------ |
`distanceFunction?` | DistanceMeasurement |

**Returns:** void

___

### loadState

▸ **loadState**(`from`: string): void

*Inherited from [common.Serializable](common_serializable).[loadState](common_serializable#loadstate)*

*Defined in [lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/common/serializable.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`from` | string |

**Returns:** void

___

### onEndFit

▸ **onEndFit**(): void

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[onEndFit](clustering_clusteringalgorithm#onendfit)*

*Defined in [lib/clustering/clusteringBase.ts:41](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/clustering/clusteringBase.ts#L41)*

**Returns:** void

___

### predict

▸ **predict**(`data`: number[][]): number[]

*Overrides [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[predict](clustering_clusteringalgorithm#predict)*

*Defined in [lib/clustering/dbScan.ts:25](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/clustering/dbScan.ts#L25)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### prepareDataset

▸ `Protected`**prepareDataset**(`data`: number[][]): void

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[prepareDataset](clustering_clusteringalgorithm#preparedataset)*

*Defined in [lib/clustering/clusteringBase.ts:10](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/clustering/clusteringBase.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** void

___

### serialize

▸ **serialize**(): string

*Inherited from [common.Serializable](common_serializable).[serialize](common_serializable#serialize)*

*Defined in [lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/common/serializable.ts#L10)*

**Returns:** string

___

### shouldStop

▸ **shouldStop**(): boolean

*Inherited from [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[shouldStop](common_evolutionaryalgorithm#shouldstop)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/common/evolutionaryAlgorithm.ts#L10)*

**Returns:** boolean

___

### step

▸ **step**(): void

*Overrides [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[step](common_evolutionaryalgorithm#step)*

*Defined in [lib/clustering/dbScan.ts:38](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/clustering/dbScan.ts#L38)*

**Returns:** void
