---
layout: default
title: Step
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / Step

# Step

Pipeline step interface

## Type parameters

Name |
------ |
`T` |
`K` |

## Hierarchy

* **Step**

  ↳ [Pipeline](pipeline.md)

## Index

### Properties

* [state](step.md#state)

### Methods

* [execute](step.md#execute)
* [getStateKey](step.md#getstatekey)
* [setState](step.md#setstate)
* [setStateKey](step.md#setstatekey)

## Properties

### state

• `Protected` **state**: [ObjectLike](../interfaces/objectlike.md)

*Defined in [lib/pipeline/types.ts:12](https://github.com/ascentcore/dataspot/blob/8a56680/lib/pipeline/types.ts#L12)*

Internal pipeline state reference

## Methods

### execute

▸ `Abstract`**execute**(`data`: T): Promise\<K>

*Defined in [lib/pipeline/types.ts:43](https://github.com/ascentcore/dataspot/blob/8a56680/lib/pipeline/types.ts#L43)*

Execute a step in the pipeline and return a promise to the next element in pipe

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | T | data promise for the next step in pipe  |

**Returns:** Promise\<K>

___

### getStateKey

▸ **getStateKey**(`key`: string): any

*Defined in [lib/pipeline/types.ts:35](https://github.com/ascentcore/dataspot/blob/8a56680/lib/pipeline/types.ts#L35)*

Return value at key from storage

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | storage key  |

**Returns:** any

___

### setState

▸ **setState**(`value`: [ObjectLike](../interfaces/objectlike.md)): void

*Defined in [lib/pipeline/types.ts:18](https://github.com/ascentcore/dataspot/blob/8a56680/lib/pipeline/types.ts#L18)*

Set state reference

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | [ObjectLike](../interfaces/objectlike.md) | pipeline state reference  |

**Returns:** void

___

### setStateKey

▸ **setStateKey**(`key`: string, `value`: any): void

*Defined in [lib/pipeline/types.ts:27](https://github.com/ascentcore/dataspot/blob/8a56680/lib/pipeline/types.ts#L27)*

Set state property

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | state property key storage name |
`value` | any | value to store at key  |

**Returns:** void
