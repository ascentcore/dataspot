---
layout: default
title: ClusteringAlgorithm
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / ClusteringAlgorithm

# ClusteringAlgorithm

## Type parameters

Name | Type |
------ | ------ |
`T` | [EvolutionaryConfig](evolutionaryconfig.md) |

## Hierarchy

* [EvolutionaryAlgorithm](evolutionaryalgorithm.md)\<T>

  ↳ **ClusteringAlgorithm**

  ↳↳ [CentroidClustering](centroidclustering.md)

  ↳↳ [DBScan](dbscan.md)

  ↳↳ [AgglomerativeClustering](agglomerativeclustering.md)

## Index

### Constructors

* [constructor](clusteringalgorithm.md#constructor)

### Properties

* [config](clusteringalgorithm.md#config)
* [fitData](clusteringalgorithm.md#fitdata)
* [initialized](clusteringalgorithm.md#initialized)
* [iteration](clusteringalgorithm.md#iteration)
* [labels](clusteringalgorithm.md#labels)

### Methods

* [canStop](clusteringalgorithm.md#canstop)
* [fit](clusteringalgorithm.md#fit)
* [fitAsync](clusteringalgorithm.md#fitasync)
* [loadState](clusteringalgorithm.md#loadstate)
* [onEndFit](clusteringalgorithm.md#onendfit)
* [predict](clusteringalgorithm.md#predict)
* [prepareDataset](clusteringalgorithm.md#preparedataset)
* [serialize](clusteringalgorithm.md#serialize)
* [shouldStop](clusteringalgorithm.md#shouldstop)
* [step](clusteringalgorithm.md#step)

## Constructors

### constructor

\+ **new ClusteringAlgorithm**(`config`: T): [ClusteringAlgorithm](clusteringalgorithm.md)

*Inherited from [Serializable](serializable.md).[constructor](serializable.md#constructor)*

*Defined in [lib/common/serializable.ts:7](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/serializable.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | T |

**Returns:** [ClusteringAlgorithm](clusteringalgorithm.md)

## Properties

### config

•  **config**: T

*Inherited from [Serializable](serializable.md).[config](serializable.md#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/serializable.ts#L8)*

___

### fitData

• `Protected` **fitData**: number[][]

*Defined in [lib/clustering/clustering.ts:4](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/clustering.ts#L4)*

___

### initialized

• `Protected` **initialized**: boolean = false

*Defined in [lib/clustering/clustering.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/clustering.ts#L8)*

___

### iteration

• `Protected` **iteration**: number = 0

*Inherited from [EvolutionaryAlgorithm](evolutionaryalgorithm.md).[iteration](evolutionaryalgorithm.md#iteration)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/evolutionaryAlgorithm.ts#L8)*

___

### labels

• `Protected` **labels**: number[]

*Defined in [lib/clustering/clustering.ts:6](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/clustering.ts#L6)*

## Methods

### canStop

▸ `Abstract`**canStop**(): boolean

*Defined in [lib/clustering/clustering.ts:43](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/clustering.ts#L43)*

**Returns:** boolean

___

### fit

▸ **fit**(`data`: number[][]): number[]

*Defined in [lib/clustering/clustering.ts:30](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/clustering.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### fitAsync

▸ **fitAsync**(`data`: number[][]): Generator

*Defined in [lib/clustering/clustering.ts:19](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/clustering.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** Generator

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

*Defined in [lib/clustering/clustering.ts:41](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/clustering.ts#L41)*

**Returns:** void

___

### predict

▸ `Abstract`**predict**(`data`: number[][]): number[]

*Defined in [lib/clustering/clustering.ts:45](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/clustering.ts#L45)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### prepareDataset

▸ `Protected`**prepareDataset**(`data`: number[][]): void

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

▸ `Abstract`**step**(): any

*Inherited from [EvolutionaryAlgorithm](evolutionaryalgorithm.md).[step](evolutionaryalgorithm.md#step)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/evolutionaryAlgorithm.ts#L14)*

**Returns:** any
