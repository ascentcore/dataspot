---
layout: default
title: EvolutionaryAlgorithm
parent: common
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm)

# EvolutionaryAlgorithm

## Type parameters

Name | Type |
------ | ------ |
`T` | [common.EvolutionaryConfig](common_evolutionaryconfig) |

## Hierarchy

* [common.Serializable](common_serializable)\<T>

  ↳ **common.EvolutionaryAlgorithm**

  ↳↳ [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm)

## Index

### Constructors

* [constructor](common_evolutionaryalgorithm#constructor)

### Properties

* [config](common_evolutionaryalgorithm#config)
* [iteration](common_evolutionaryalgorithm#iteration)

### Methods

* [loadState](common_evolutionaryalgorithm#loadstate)
* [serialize](common_evolutionaryalgorithm#serialize)
* [shouldStop](common_evolutionaryalgorithm#shouldstop)
* [step](common_evolutionaryalgorithm#step)

## Constructors

### constructor

\+ **new EvolutionaryAlgorithm**(`config`: T): [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm)

*Inherited from [common.Serializable](common_serializable).[constructor](common_serializable#constructor)*

*Defined in [lib/common/serializable.ts:7](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/common/serializable.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | T |

**Returns:** [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm)

## Properties

### config

•  **config**: T

*Inherited from [common.Serializable](common_serializable).[config](common_serializable#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/common/serializable.ts#L8)*

___

### iteration

• `Protected` **iteration**: number = 0

*Defined in [lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/common/evolutionaryAlgorithm.ts#L8)*

## Methods

### loadState

▸ **loadState**(`from`: string): void

*Inherited from [common.Serializable](common_serializable).[loadState](common_serializable#loadstate)*

*Defined in [lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/common/serializable.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`from` | string |

**Returns:** void

___

### serialize

▸ **serialize**(): string

*Inherited from [common.Serializable](common_serializable).[serialize](common_serializable#serialize)*

*Defined in [lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/common/serializable.ts#L10)*

**Returns:** string

___

### shouldStop

▸ **shouldStop**(): boolean

*Defined in [lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/common/evolutionaryAlgorithm.ts#L10)*

**Returns:** boolean

___

### step

▸ `Abstract`**step**(): any

*Defined in [lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/common/evolutionaryAlgorithm.ts#L14)*

**Returns:** any
