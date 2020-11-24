---
layout: default
title: EvolutionaryAlgorithm
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / EvolutionaryAlgorithm

# EvolutionaryAlgorithm

## Type parameters

Name | Type |
------ | ------ |
`T` | [EvolutionaryConfig](evolutionaryconfig.md) |

## Hierarchy

* [Serializable](serializable.md)\<T>

  ↳ **EvolutionaryAlgorithm**

  ↳↳ [ClusteringAlgorithm](clusteringalgorithm.md)

## Index

### Constructors

* [constructor](evolutionaryalgorithm.md#constructor)

### Properties

* [config](evolutionaryalgorithm.md#config)
* [iteration](evolutionaryalgorithm.md#iteration)

### Methods

* [loadState](evolutionaryalgorithm.md#loadstate)
* [serialize](evolutionaryalgorithm.md#serialize)
* [shouldStop](evolutionaryalgorithm.md#shouldstop)
* [step](evolutionaryalgorithm.md#step)

## Constructors

### constructor

\+ **new EvolutionaryAlgorithm**(`config`: T): [EvolutionaryAlgorithm](evolutionaryalgorithm.md)

*Inherited from [Serializable](serializable.md).[constructor](serializable.md#constructor)*

*Defined in [lib/common/serializable.ts:7](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/serializable.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | T |

**Returns:** [EvolutionaryAlgorithm](evolutionaryalgorithm.md)

## Properties

### config

•  **config**: T

*Inherited from [Serializable](serializable.md).[config](serializable.md#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/serializable.ts#L8)*

___

### iteration

• `Protected` **iteration**: number = 0

*Defined in [lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/evolutionaryAlgorithm.ts#L8)*

## Methods

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

### serialize

▸ **serialize**(): string

*Inherited from [Serializable](serializable.md).[serialize](serializable.md#serialize)*

*Defined in [lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/serializable.ts#L10)*

**Returns:** string

___

### shouldStop

▸ **shouldStop**(): boolean

*Defined in [lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/evolutionaryAlgorithm.ts#L10)*

**Returns:** boolean

___

### step

▸ `Abstract`**step**(): any

*Defined in [lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/evolutionaryAlgorithm.ts#L14)*

**Returns:** any
