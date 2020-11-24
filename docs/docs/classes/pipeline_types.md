---
layout: default
title: types
parent: pipeline
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [pipeline.types](pipeline_types)

# types

Pipeline step interface

## Type parameters

Name |
------ |
`T` |
`K` |

## Hierarchy

* **pipeline.types**

  ↳ [pipeline.pipeline](pipeline_pipeline)

## Index

### Properties

* [state](pipeline_types#state)

### Methods

* [execute](pipeline_types#execute)
* [getStateKey](pipeline_types#getstatekey)
* [setState](pipeline_types#setstate)
* [setStateKey](pipeline_types#setstatekey)

## Properties

### state

• `Protected` **state**: [models.objectLike](../interfaces/models_objectlike)

*Defined in [lib/pipeline/types.ts:12](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/types.ts#L12)*

Internal pipeline state reference

## Methods

### execute

▸ `Abstract`**execute**(`data`: T): Promise\<K>

*Defined in [lib/pipeline/types.ts:43](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/types.ts#L43)*

Execute a step in the pipeline and return a promise to the next element in pipe

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | T | data promise for the next step in pipe  |

**Returns:** Promise\<K>

___

### getStateKey

▸ **getStateKey**(`key`: string): any

*Defined in [lib/pipeline/types.ts:35](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/types.ts#L35)*

Return value at key from storage

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | storage key  |

**Returns:** any

___

### setState

▸ **setState**(`value`: [models.objectLike](../interfaces/models_objectlike)): void

*Defined in [lib/pipeline/types.ts:18](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/types.ts#L18)*

Set state reference

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | [models.objectLike](../interfaces/models_objectlike) | pipeline state reference  |

**Returns:** void

___

### setStateKey

▸ **setStateKey**(`key`: string, `value`: any): void

*Defined in [lib/pipeline/types.ts:27](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/types.ts#L27)*

Set state property

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | state property key storage name |
`value` | any | value to store at key  |

**Returns:** void
