---
layout: default
title: Serializable
parent: common
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [common.Serializable](common_serializable)

# Serializable

## Type parameters

Name | Type |
------ | ------ |
`T` | [common.SerializableConfig](common_serializableconfig) |

## Hierarchy

* **common.Serializable**

  ↳ [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm)

## Indexable

▪ [key: string]: string \| number \| boolean \| string[] \| number[] \| boolean[]

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

\+ **new Serializable**(`config`: T): [common.Serializable](common_serializable)

*Defined in [lib/common/serializable.ts:7](https://github.com/ascentcore/dataspot/blob/aa42404/lib/common/serializable.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | T |

**Returns:** [common.Serializable](common_serializable)

## Properties

### config

•  **config**: T

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/aa42404/lib/common/serializable.ts#L8)*

## Methods

### loadState

▸ **loadState**(`from`: string): void

*Defined in [lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/aa42404/lib/common/serializable.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`from` | string |

**Returns:** void

___

### serialize

▸ **serialize**(): string

*Defined in [lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/aa42404/lib/common/serializable.ts#L10)*

**Returns:** string
