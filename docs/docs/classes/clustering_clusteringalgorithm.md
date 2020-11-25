---
layout: default
title: ClusteringAlgorithm
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm)

# ClusteringAlgorithm

## Type parameters

Name | Type |
------ | ------ |
`T` | [common.EvolutionaryConfig](common_evolutionaryconfig) |

## Hierarchy

* [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm)\<T>

  ↳ **clustering.ClusteringAlgorithm**

  ↳↳ [clustering.CentroidClustering](clustering_centroidclustering)

  ↳↳ [clustering.DBScan](clustering_dbscan)

  ↳↳ [clustering.AgglomerativeClustering](clustering_agglomerativeclustering)

## Index

### Constructors

* [constructor](clustering_clusteringalgorithm#constructor)

### Properties

* [config](clustering_clusteringalgorithm#config)
* [fitData](clustering_clusteringalgorithm#fitdata)
* [initialized](clustering_clusteringalgorithm#initialized)
* [iteration](clustering_clusteringalgorithm#iteration)
* [labels](clustering_clusteringalgorithm#labels)

### Methods

* [canStop](clustering_clusteringalgorithm#canstop)
* [fit](clustering_clusteringalgorithm#fit)
* [fitAsync](clustering_clusteringalgorithm#fitasync)
* [loadState](clustering_clusteringalgorithm#loadstate)
* [onEndFit](clustering_clusteringalgorithm#onendfit)
* [predict](clustering_clusteringalgorithm#predict)
* [prepareDataset](clustering_clusteringalgorithm#preparedataset)
* [serialize](clustering_clusteringalgorithm#serialize)
* [shouldStop](clustering_clusteringalgorithm#shouldstop)
* [step](clustering_clusteringalgorithm#step)

## Constructors

### constructor

\+ **new ClusteringAlgorithm**(`config`: T): [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm)

*Inherited from [common.Serializable](common_serializable).[constructor](common_serializable#constructor)*

*Defined in [lib/common/serializable.ts:7](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/common/serializable.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | T |

**Returns:** [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm)

## Properties

### config

•  **config**: T

*Inherited from [common.Serializable](common_serializable).[config](common_serializable#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/common/serializable.ts#L8)*

___

### fitData

• `Protected` **fitData**: number[][]

*Defined in [lib/clustering/clusteringBase.ts:4](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/clusteringBase.ts#L4)*

___

### initialized

• `Protected` **initialized**: boolean = false

*Defined in [lib/clustering/clusteringBase.ts:8](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/clusteringBase.ts#L8)*

___

### iteration

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[iteration](common_evolutionaryalgorithm#iteration)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/common/evolutionaryAlgorithm.ts#L8)*

___

### labels

• `Protected` **labels**: number[]

*Defined in [lib/clustering/clusteringBase.ts:6](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/clusteringBase.ts#L6)*

## Methods

### canStop

▸ `Abstract`**canStop**(): boolean

*Defined in [lib/clustering/clusteringBase.ts:43](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/clusteringBase.ts#L43)*

**Returns:** boolean

___

### fit

▸ **fit**(`data`: number[][]): number[]

*Defined in [lib/clustering/clusteringBase.ts:30](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/clusteringBase.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### fitAsync

▸ **fitAsync**(`data`: number[][]): Generator

*Defined in [lib/clustering/clusteringBase.ts:19](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/clusteringBase.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** Generator

___

### loadState

▸ **loadState**(`from`: string): void

*Inherited from [common.Serializable](common_serializable).[loadState](common_serializable#loadstate)*

*Defined in [lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/common/serializable.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`from` | string |

**Returns:** void

___

### onEndFit

▸ **onEndFit**(): void

*Defined in [lib/clustering/clusteringBase.ts:41](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/clusteringBase.ts#L41)*

**Returns:** void

___

### predict

▸ `Abstract`**predict**(`data`: number[][]): number[]

*Defined in [lib/clustering/clusteringBase.ts:45](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/clusteringBase.ts#L45)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### prepareDataset

▸ `Protected`**prepareDataset**(`data`: number[][]): void

*Defined in [lib/clustering/clusteringBase.ts:10](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/clustering/clusteringBase.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** void

___

### serialize

▸ **serialize**(): string

*Inherited from [common.Serializable](common_serializable).[serialize](common_serializable#serialize)*

*Defined in [lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/common/serializable.ts#L10)*

**Returns:** string

___

### shouldStop

▸ **shouldStop**(): boolean

*Inherited from [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[shouldStop](common_evolutionaryalgorithm#shouldstop)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/common/evolutionaryAlgorithm.ts#L10)*

**Returns:** boolean

___

### step

▸ `Abstract`**step**(): any

*Inherited from [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[step](common_evolutionaryalgorithm#step)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/common/evolutionaryAlgorithm.ts#L14)*

**Returns:** any
