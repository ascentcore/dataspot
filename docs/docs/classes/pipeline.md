---
layout: default
title: Pipeline
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / Pipeline

# Pipeline

Synchronous pipeline implementation - the pipeline is used
to ensure the correct order execution and separation of responsabilities
for each step in the validation / reporting process.

## Hierarchy

* [Step](step.md)\<any, any>

  ↳ **Pipeline**

  ↳↳ [ParalelPipeline](paralelpipeline.md)

  ↳↳ [WaterfallPipeline](waterfallpipeline.md)

## Index

### Constructors

* [constructor](pipeline.md#constructor)

### Properties

* [state](pipeline.md#state)
* [steps](pipeline.md#steps)

### Methods

* [add](pipeline.md#add)
* [execute](pipeline.md#execute)
* [getStateKey](pipeline.md#getstatekey)
* [setState](pipeline.md#setstate)
* [setStateKey](pipeline.md#setstatekey)
* [executeStep](pipeline.md#executestep)

## Constructors

### constructor

\+ **new Pipeline**(`steps?`: [Step](step.md)\<any, any>[]): [Pipeline](pipeline.md)

*Defined in [lib/pipeline/pipeline.ts:11](https://github.com/ascentcore/dataspot/blob/8a56680/lib/pipeline/pipeline.ts#L11)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`steps` | [Step](step.md)\<any, any>[] | [] |

**Returns:** [Pipeline](pipeline.md)

## Properties

### state

• `Protected` **state**: [ObjectLike](../interfaces/objectlike.md)

*Inherited from [Step](step.md).[state](step.md#state)*

*Defined in [lib/pipeline/types.ts:12](https://github.com/ascentcore/dataspot/blob/8a56680/lib/pipeline/types.ts#L12)*

Internal pipeline state reference

___

### steps

• `Protected` **steps**: [Step](step.md)\<any, any>[]

*Defined in [lib/pipeline/pipeline.ts:12](https://github.com/ascentcore/dataspot/blob/8a56680/lib/pipeline/pipeline.ts#L12)*

## Methods

### add

▸ **add**(`step`: [Step](step.md)\<any, any>): [Pipeline](pipeline.md)

*Defined in [lib/pipeline/pipeline.ts:29](https://github.com/ascentcore/dataspot/blob/8a56680/lib/pipeline/pipeline.ts#L29)*

Adds one step executor to the pipeline

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`step` | [Step](step.md)\<any, any> | pipeline step  |

**Returns:** [Pipeline](pipeline.md)

___

### execute

▸ **execute**\<T, K>(`data?`: Promise\<T>): Promise\<any>

*Overrides [Step](step.md).[execute](step.md#execute)*

*Defined in [lib/pipeline/pipeline.ts:52](https://github.com/ascentcore/dataspot/blob/8a56680/lib/pipeline/pipeline.ts#L52)*

Executes steps in a synchronous mode.
If steps can be paralelized consider using ParalelPipeline

#### Type parameters:

Name |
------ |
`T` |
`K` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data?` | Promise\<T> | root data to be used as input  |

**Returns:** Promise\<any>

___

### getStateKey

▸ **getStateKey**(`key`: string): any

*Inherited from [Step](step.md).[getStateKey](step.md#getstatekey)*

*Defined in [lib/pipeline/types.ts:35](https://github.com/ascentcore/dataspot/blob/8a56680/lib/pipeline/types.ts#L35)*

Return value at key from storage

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | storage key  |

**Returns:** any

___

### setState

▸ **setState**(`state`: [ObjectLike](../interfaces/objectlike.md)): void

*Overrides [Step](step.md).[setState](step.md#setstate)*

*Defined in [lib/pipeline/pipeline.ts:20](https://github.com/ascentcore/dataspot/blob/8a56680/lib/pipeline/pipeline.ts#L20)*

Update current pipe internal state with passed object and assign to children

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`state` | [ObjectLike](../interfaces/objectlike.md) | state object  |

**Returns:** void

___

### setStateKey

▸ **setStateKey**(`key`: string, `value`: any): void

*Inherited from [Step](step.md).[setStateKey](step.md#setstatekey)*

*Defined in [lib/pipeline/types.ts:27](https://github.com/ascentcore/dataspot/blob/8a56680/lib/pipeline/types.ts#L27)*

Set state property

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | state property key storage name |
`value` | any | value to store at key  |

**Returns:** void

___

### executeStep

▸ `Static`**executeStep**\<T, K>(`input`: T, `step`: [Step](step.md)\<T, K>): Promise\<K>

*Defined in [lib/pipeline/pipeline.ts:43](https://github.com/ascentcore/dataspot/blob/8a56680/lib/pipeline/pipeline.ts#L43)*

Executes one pipeline step

#### Type parameters:

Name |
------ |
`T` |
`K` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | T | input data from the root input or from the previous element in the pipe |
`step` | [Step](step.md)\<T, K> | step to be executed  |

**Returns:** Promise\<K>
