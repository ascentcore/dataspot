---
layout: default
title: serializable
parent: common
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [common.serializable](common_serializable)

# serializable

## Hierarchy

* **common.serializable**

  ↳ [common.evolutionaryAlgorithm](common_evolutionaryalgorithm)

## Indexable

▪ [key: string]: SerializableType

## Index

### Constructors

* [constructor](common_serializable#constructor)

### Properties

* [config](common_serializable#config)

### Methods

* [loadState](common_serializable#loadstate)
* [serialize](common_serializable#serialize)

## Constructors

### constructor

\+ **new Serializable**(`config`: T): Serializable

*Defined in [lib/common/serializable.ts:7](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/serializable.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | T |

**Returns:** Serializable

## Properties

### config

•  **config**: T

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/serializable.ts#L8)*

## Methods

### loadState

▸ **loadState**(`from`: string): void

*Defined in [lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/serializable.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`from` | string |

**Returns:** void

___

### serialize

▸ **serialize**(): string

*Defined in [lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/serializable.ts#L10)*

**Returns:** string
