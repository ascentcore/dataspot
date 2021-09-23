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
| [getIteration](#getiteration) |
| [loadState](#loadstate) |
| [reset](#reset) |
| [serialize](#serialize) |
| [shouldStop](#shouldstop) |
| [step](#step) |

## Constructors

{:.method-highlight}
\+ **new EvolutionaryAlgorithm**(`config`: T): [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm)

#### Parameters:

Name | Type |
------ | ------ |
`config` | T |

**Returns:** [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm)

*Inherited from [common.Serializable](../common_serializable).[constructor](../common_serializable#constructor)*

{:.url-source-ref}
[lib/common/serializable.ts:7](https://github.com/ascentcore/dataspot/blob/236fcea/lib/common/serializable.ts#L7)

## Properties

•  **config**: T

*Inherited from [common.Serializable](../common_serializable).[config](../common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/236fcea/lib/common/serializable.ts#L8)

___

• `Protected` **iteration**: number = 0

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/236fcea/lib/common/evolutionaryAlgorithm.ts#L8)

## Methods

{:.method-highlight}
▸ **getIteration**(): number

**Returns:** number

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/236fcea/lib/common/evolutionaryAlgorithm.ts#L14)

___

{:.method-highlight}
▸ **loadState**(`from`: string \| T): void

#### Parameters:

Name | Type |
------ | ------ |
`from` | string \| T |

**Returns:** void

*Inherited from [common.Serializable](../common_serializable).[loadState](../common_serializable#loadstate)*

{:.url-source-ref}
[lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/236fcea/lib/common/serializable.ts#L14)

___

{:.method-highlight}
▸ **reset**(): void

**Returns:** void

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:18](https://github.com/ascentcore/dataspot/blob/236fcea/lib/common/evolutionaryAlgorithm.ts#L18)

___

{:.method-highlight}
▸ **serialize**(): string

**Returns:** string

*Inherited from [common.Serializable](../common_serializable).[serialize](../common_serializable#serialize)*

{:.url-source-ref}
[lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/236fcea/lib/common/serializable.ts#L10)

___

{:.method-highlight}
▸ **shouldStop**(): boolean

**Returns:** boolean

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/236fcea/lib/common/evolutionaryAlgorithm.ts#L10)

___

{:.method-highlight}
▸ `Abstract`**step**(): any

**Returns:** any

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:22](https://github.com/ascentcore/dataspot/blob/236fcea/lib/common/evolutionaryAlgorithm.ts#L22)
