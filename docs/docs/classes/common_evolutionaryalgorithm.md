---
layout: default
title: evolutionaryAlgorithm
parent: common
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [common.evolutionaryAlgorithm](common_evolutionaryalgorithm)

# evolutionaryAlgorithm

## Hierarchy

* [common.serializable](common_serializable)

  ↳ **common.evolutionaryAlgorithm**

  ↳↳ [clustering.centroidClustering](clustering_centroidclustering)

  ↳↳ [clustering.dbScan](clustering_dbscan)

  ↳↳ [clustering.agglomerativeClustering](clustering_agglomerativeclustering)

## Indexable

▪ [key: string]: SerializableType

## Index

### Constructors

* [constructor](common_evolutionaryalgorithm#constructor)

### Properties

* [config](common_evolutionaryalgorithm#config)
* [iteration](common_evolutionaryalgorithm#iteration)
* [iterations](common_evolutionaryalgorithm#iterations)

### Methods

* [loadState](common_evolutionaryalgorithm#loadstate)
* [serialize](common_evolutionaryalgorithm#serialize)
* [shouldStop](common_evolutionaryalgorithm#shouldstop)
* [step](common_evolutionaryalgorithm#step)

## Constructors

### constructor

\+ **new EvolutionaryAlgorithm**(`config`: T): EvolutionaryAlgorithm

*Inherited from [common.serializable](common_serializable).[constructor](common_serializable#constructor)*

*Defined in [lib/common/serializable.ts:7](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/serializable.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | T |

**Returns:** EvolutionaryAlgorithm

## Properties

### config

•  **config**: T

*Inherited from [common.serializable](common_serializable).[config](common_serializable#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/serializable.ts#L8)*

___

### iteration

• `Protected` **iteration**: number = 0

*Defined in [lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/evolutionaryAlgorithm.ts#L8)*

___

### iterations

•  **iterations**: number = 100

*Defined in [lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/evolutionaryAlgorithm.ts#L4)*

## Methods

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

### serialize

▸ **serialize**(): string

*Inherited from [common.serializable](common_serializable).[serialize](common_serializable#serialize)*

*Defined in [lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/serializable.ts#L10)*

**Returns:** string

___

### shouldStop

▸ **shouldStop**(): boolean

*Defined in [lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/evolutionaryAlgorithm.ts#L10)*

**Returns:** boolean

___

### step

▸ `Abstract`**step**(): any

*Defined in [lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/evolutionaryAlgorithm.ts#L14)*

**Returns:** any
