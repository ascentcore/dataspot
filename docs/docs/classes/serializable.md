---
layout: default
title: Serializable
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / Serializable

# Serializable

## Type parameters

Name | Type |
------ | ------ |
`T` | [SerializableConfig](serializableconfig.md) |

## Hierarchy

* **Serializable**

  ↳ [EvolutionaryAlgorithm](evolutionaryalgorithm.md)

## Indexable

▪ [key: string]: string \| number \| boolean \| string[] \| number[] \| boolean[]

## Index

### Constructors

* [constructor](serializable.md#constructor)

### Properties

* [config](serializable.md#config)

### Methods

* [loadState](serializable.md#loadstate)
* [serialize](serializable.md#serialize)

## Constructors

### constructor

\+ **new Serializable**(`config`: T): [Serializable](serializable.md)

*Defined in [lib/common/serializable.ts:7](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/serializable.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | T |

**Returns:** [Serializable](serializable.md)

## Properties

### config

•  **config**: T

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/serializable.ts#L8)*

## Methods

### loadState

▸ **loadState**(`from`: string): void

*Defined in [lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/serializable.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`from` | string |

**Returns:** void

___

### serialize

▸ **serialize**(): string

*Defined in [lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/serializable.ts#L10)*

**Returns:** string
