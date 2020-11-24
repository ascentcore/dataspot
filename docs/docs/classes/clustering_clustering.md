---
layout: default
title: clustering
parent: Dataspot
grand_parent: 
has_children: true
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / clustering.clustering

# clustering

## Type parameters

Name | Type |
------ | ------ |
`T` | [common.evolutionaryAlgorithm](common_evolutionaryalgorithm.md) |

## Hierarchy

* EvolutionaryAlgorithm\<T>

  ↳ **clustering.clustering**

## Index

### Constructors

* [constructor](clustering_clustering.md#constructor)

### Properties

* [config](clustering_clustering.md#config)
* [fitData](clustering_clustering.md#fitdata)
* [initialized](clustering_clustering.md#initialized)
* [iteration](clustering_clustering.md#iteration)
* [labels](clustering_clustering.md#labels)

### Methods

* [canStop](clustering_clustering.md#canstop)
* [fit](clustering_clustering.md#fit)
* [fitAsync](clustering_clustering.md#fitasync)
* [loadState](clustering_clustering.md#loadstate)
* [onEndFit](clustering_clustering.md#onendfit)
* [predict](clustering_clustering.md#predict)
* [prepareDataset](clustering_clustering.md#preparedataset)
* [serialize](clustering_clustering.md#serialize)
* [shouldStop](clustering_clustering.md#shouldstop)
* [step](clustering_clustering.md#step)

## Constructors

### constructor

\+ **new ClusteringAlgorithm**(`config`: T): [clustering.clustering](clustering_clustering.md)

*Inherited from [common.serializable](common_serializable.md).[constructor](common_serializable.md#constructor)*

*Defined in [lib/common/serializable.ts:7](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/serializable.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | T |

**Returns:** [clustering.clustering](clustering_clustering.md)

## Properties

### config

•  **config**: T

*Inherited from [common.serializable](common_serializable.md).[config](common_serializable.md#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/serializable.ts#L8)*

___

### fitData

• `Protected` **fitData**: number[][]

*Defined in [lib/clustering/clustering.ts:4](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L4)*

___

### initialized

• `Protected` **initialized**: boolean = false

*Defined in [lib/clustering/clustering.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L8)*

___

### iteration

• `Protected` **iteration**: number = 0

*Inherited from [common.evolutionaryAlgorithm](common_evolutionaryalgorithm.md).[iteration](common_evolutionaryalgorithm.md#iteration)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/evolutionaryAlgorithm.ts#L8)*

___

### labels

• `Protected` **labels**: number[]

*Defined in [lib/clustering/clustering.ts:6](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L6)*

## Methods

### canStop

▸ `Abstract`**canStop**(): boolean

*Defined in [lib/clustering/clustering.ts:43](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L43)*

**Returns:** boolean

___

### fit

▸ **fit**(`data`: number[][]): number[]

*Defined in [lib/clustering/clustering.ts:30](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### fitAsync

▸ **fitAsync**(`data`: number[][]): Generator

*Defined in [lib/clustering/clustering.ts:19](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** Generator

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

*Defined in [lib/clustering/clustering.ts:41](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L41)*

**Returns:** void

___

### predict

▸ `Abstract`**predict**(`data`: number[][]): number[]

*Defined in [lib/clustering/clustering.ts:45](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L45)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### prepareDataset

▸ `Protected`**prepareDataset**(`data`: number[][]): void

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

▸ `Abstract`**step**(): any

*Inherited from [common.evolutionaryAlgorithm](common_evolutionaryalgorithm.md).[step](common_evolutionaryalgorithm.md#step)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/evolutionaryAlgorithm.ts#L14)*

**Returns:** any
