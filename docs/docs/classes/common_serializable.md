---
layout: default
title: Serializable
parent: common
grand_parent: Dataspot
has_children: false
---

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

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [config](#config) |

| Methods |
|-----------|
| [loadState](#loadstate) |
| [serialize](#serialize) |

## Constructors

{:.method-highlight}
\+ **new Serializable**(`config`: T): [common.Serializable](common_serializable)

{:.url-source-ref}
[lib/common/serializable.ts:7](https://github.com/ascentcore/dataspot/blob/40beee3/lib/common/serializable.ts#L7)

**Returns:** [common.Serializable](common_serializable)

## Properties

•  **config**: T

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/40beee3/lib/common/serializable.ts#L8)

## Methods

{:.method-highlight}
▸ **loadState**(`from`: string): void

{:.url-source-ref}
[lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/40beee3/lib/common/serializable.ts#L14)

**Returns:** void

___

{:.method-highlight}
▸ **serialize**(): string

{:.url-source-ref}
[lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/40beee3/lib/common/serializable.ts#L10)

**Returns:** string
