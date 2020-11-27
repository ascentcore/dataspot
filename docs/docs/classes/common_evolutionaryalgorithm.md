---
layout: default
title: EvolutionaryAlgorithm
parent: common
grand_parent: Dataspot
has_children: false
---

# EvolutionaryAlgorithm

## Type parameters

Name | Type |
------ | ------ |
`T` | [common.EvolutionaryConfig](../common_evolutionaryconfig) |

## Hierarchy

* [common.Serializable](../common_serializable)\<T>

  ↳ **common.EvolutionaryAlgorithm**

  ↳↳ [clustering.ClusteringAlgorithm](../clustering_clusteringalgorithm)

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [config](#config) |
| [iteration](#iteration) |

| Methods |
|-----------|
| [loadState](#loadstate) |
| [serialize](#serialize) |
| [shouldStop](#shouldstop) |
| [step](#step) |

## Constructors

{:.method-highlight}
\+ **new EvolutionaryAlgorithm**(`config`: T): [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm)

*Inherited from [common.Serializable](../common_serializable).[constructor](../common_serializable#constructor)*

{:.url-source-ref}
[lib/common/serializable.ts:7](https://github.com/ascentcore/dataspot/blob/ef89391/lib/common/serializable.ts#L7)

**Returns:** [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm)

## Properties

•  **config**: T

*Inherited from [common.Serializable](../common_serializable).[config](../common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/ef89391/lib/common/serializable.ts#L8)

___

• `Protected` **iteration**: number = 0

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/ef89391/lib/common/evolutionaryAlgorithm.ts#L8)

## Methods

{:.method-highlight}
▸ **loadState**(`from`: string): void

*Inherited from [common.Serializable](../common_serializable).[loadState](../common_serializable#loadstate)*

{:.url-source-ref}
[lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/ef89391/lib/common/serializable.ts#L14)

**Returns:** void

___

{:.method-highlight}
▸ **serialize**(): string

*Inherited from [common.Serializable](../common_serializable).[serialize](../common_serializable#serialize)*

{:.url-source-ref}
[lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/ef89391/lib/common/serializable.ts#L10)

**Returns:** string

___

{:.method-highlight}
▸ **shouldStop**(): boolean

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/ef89391/lib/common/evolutionaryAlgorithm.ts#L10)

**Returns:** boolean

___

{:.method-highlight}
▸ `Abstract`**step**(): any

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/ef89391/lib/common/evolutionaryAlgorithm.ts#L14)

**Returns:** any
