---
layout: default
title: clusteringBase
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [clustering.clusteringBase](clustering_clusteringbase)

# clusteringBase

## Type parameters

Name | Type |
------ | ------ |
`T` | [common.evolutionaryAlgorithm](common_evolutionaryalgorithm) |

## Hierarchy

* EvolutionaryAlgorithm\<T>

  ↳ **clustering.clusteringBase**

## Index

### Constructors

* [constructor](clustering_clusteringbase#constructor)

### Properties

* [config](clustering_clusteringbase#config)
* [fitData](clustering_clusteringbase#fitdata)
* [initialized](clustering_clusteringbase#initialized)
* [iteration](clustering_clusteringbase#iteration)
* [labels](clustering_clusteringbase#labels)

### Methods

* [canStop](clustering_clusteringbase#canstop)
* [fit](clustering_clusteringbase#fit)
* [fitAsync](clustering_clusteringbase#fitasync)
* [loadState](clustering_clusteringbase#loadstate)
* [onEndFit](clustering_clusteringbase#onendfit)
* [predict](clustering_clusteringbase#predict)
* [prepareDataset](clustering_clusteringbase#preparedataset)
* [serialize](clustering_clusteringbase#serialize)
* [shouldStop](clustering_clusteringbase#shouldstop)
* [step](clustering_clusteringbase#step)

## Constructors

### constructor

\+ **new ClusteringAlgorithm**(`config`: T): [clustering.clusteringBase](clustering_clusteringbase)

*Inherited from [common.serializable](common_serializable).[constructor](common_serializable#constructor)*

*Defined in [lib/common/serializable.ts:7](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/serializable.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | T |

**Returns:** [clustering.clusteringBase](clustering_clusteringbase)

## Properties

### config

•  **config**: T

*Inherited from [common.serializable](common_serializable).[config](common_serializable#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/serializable.ts#L8)*

___

### fitData

• `Protected` **fitData**: number[][]

*Defined in lib/clustering/clusteringBase.ts:4*

___

### initialized

• `Protected` **initialized**: boolean = false

*Defined in lib/clustering/clusteringBase.ts:8*

___

### iteration

• `Protected` **iteration**: number = 0

*Inherited from [common.evolutionaryAlgorithm](common_evolutionaryalgorithm).[iteration](common_evolutionaryalgorithm#iteration)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/evolutionaryAlgorithm.ts#L8)*

___

### labels

• `Protected` **labels**: number[]

*Defined in lib/clustering/clusteringBase.ts:6*

## Methods

### canStop

▸ `Abstract`**canStop**(): boolean

*Defined in lib/clustering/clusteringBase.ts:43*

**Returns:** boolean

___

### fit

▸ **fit**(`data`: number[][]): number[]

*Defined in lib/clustering/clusteringBase.ts:30*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### fitAsync

▸ **fitAsync**(`data`: number[][]): Generator

*Defined in lib/clustering/clusteringBase.ts:19*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** Generator

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

*Defined in lib/clustering/clusteringBase.ts:41*

**Returns:** void

___

### predict

▸ `Abstract`**predict**(`data`: number[][]): number[]

*Defined in lib/clustering/clusteringBase.ts:45*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### prepareDataset

▸ `Protected`**prepareDataset**(`data`: number[][]): void

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

▸ `Abstract`**step**(): any

*Inherited from [common.evolutionaryAlgorithm](common_evolutionaryalgorithm).[step](common_evolutionaryalgorithm#step)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/evolutionaryAlgorithm.ts#L14)*

**Returns:** any
