---
layout: default
title: evolutionaryAlgorithm
parent: common
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / common.evolutionaryAlgorithm

# evolutionaryAlgorithm

## Hierarchy

* [common.serializable](common_serializable.md)

  ↳ **common.evolutionaryAlgorithm**

  ↳↳ [clustering.centroidClustering](clustering_centroidclustering.md)

  ↳↳ [clustering.dbScan](clustering_dbscan.md)

  ↳↳ [clustering.agglomerativeClustering](clustering_agglomerativeclustering.md)

## Indexable

▪ [key: string]: SerializableType

## Index

### Constructors

* [constructor](common_evolutionaryalgorithm.md#constructor)

### Properties

* [config](common_evolutionaryalgorithm.md#config)
* [iteration](common_evolutionaryalgorithm.md#iteration)
* [iterations](common_evolutionaryalgorithm.md#iterations)

### Methods

* [loadState](common_evolutionaryalgorithm.md#loadstate)
* [serialize](common_evolutionaryalgorithm.md#serialize)
* [shouldStop](common_evolutionaryalgorithm.md#shouldstop)
* [step](common_evolutionaryalgorithm.md#step)

## Constructors

### constructor

\+ **new EvolutionaryAlgorithm**(`config`: T): EvolutionaryAlgorithm

*Inherited from [common.serializable](common_serializable.md).[constructor](common_serializable.md#constructor)*

*Defined in [lib/common/serializable.ts:7](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/serializable.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | T |

**Returns:** EvolutionaryAlgorithm

## Properties

### config

•  **config**: T

*Inherited from [common.serializable](common_serializable.md).[config](common_serializable.md#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/serializable.ts#L8)*

___

### iteration

• `Protected` **iteration**: number = 0

*Defined in [lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/evolutionaryAlgorithm.ts#L8)*

___

### iterations

•  **iterations**: number = 100

*Defined in [lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/evolutionaryAlgorithm.ts#L4)*

## Methods

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

### serialize

▸ **serialize**(): string

*Inherited from [common.serializable](common_serializable.md).[serialize](common_serializable.md#serialize)*

*Defined in [lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/serializable.ts#L10)*

**Returns:** string

___

### shouldStop

▸ **shouldStop**(): boolean

*Defined in [lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/evolutionaryAlgorithm.ts#L10)*

**Returns:** boolean

___

### step

▸ `Abstract`**step**(): any

*Defined in [lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/evolutionaryAlgorithm.ts#L14)*

**Returns:** any
