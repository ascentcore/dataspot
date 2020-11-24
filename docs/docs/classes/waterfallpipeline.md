---
layout: default
title: WaterfallPipeline
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / WaterfallPipeline

# WaterfallPipeline

Waterfall pipeline implementation. Used when the steps
has to be executed one after the other and the results collected in a single object

## Hierarchy

* [Pipeline](pipeline.md)

  ↳ **WaterfallPipeline**

## Index

### Constructors

* [constructor](waterfallpipeline.md#constructor)

### Properties

* [state](waterfallpipeline.md#state)
* [steps](waterfallpipeline.md#steps)

### Methods

* [add](waterfallpipeline.md#add)
* [execute](waterfallpipeline.md#execute)
* [getStateKey](waterfallpipeline.md#getstatekey)
* [setState](waterfallpipeline.md#setstate)
* [setStateKey](waterfallpipeline.md#setstatekey)
* [executeStep](waterfallpipeline.md#executestep)

## Constructors

### constructor

\+ **new WaterfallPipeline**(`steps?`: [Step](step.md)\<any, any>[]): [WaterfallPipeline](waterfallpipeline.md)

*Inherited from [Pipeline](pipeline.md).[constructor](pipeline.md#constructor)*

*Defined in [lib/pipeline/pipeline.ts:11](https://github.com/ascentcore/dataspot/blob/8a56680/lib/pipeline/pipeline.ts#L11)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`steps` | [Step](step.md)\<any, any>[] | [] |

**Returns:** [WaterfallPipeline](waterfallpipeline.md)

## Properties

### state

• `Protected` **state**: [ObjectLike](../interfaces/objectlike.md)

*Inherited from [Step](step.md).[state](step.md#state)*

*Defined in [lib/pipeline/types.ts:12](https://github.com/ascentcore/dataspot/blob/8a56680/lib/pipeline/types.ts#L12)*

Internal pipeline state reference

___

### steps

• `Protected` **steps**: [Step](step.md)\<any, any>[]

*Inherited from [Pipeline](pipeline.md).[steps](pipeline.md#steps)*

*Defined in [lib/pipeline/pipeline.ts:12](https://github.com/ascentcore/dataspot/blob/8a56680/lib/pipeline/pipeline.ts#L12)*

## Methods

### add

▸ **add**(`step`: [Step](step.md)\<any, any>): [Pipeline](pipeline.md)

*Inherited from [Pipeline](pipeline.md).[add](pipeline.md#add)*

*Defined in [lib/pipeline/pipeline.ts:29](https://github.com/ascentcore/dataspot/blob/8a56680/lib/pipeline/pipeline.ts#L29)*

Adds one step executor to the pipeline

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`step` | [Step](step.md)\<any, any> | pipeline step  |

**Returns:** [Pipeline](pipeline.md)

___

### execute

▸ **execute**\<T, K>(`inputData`: Promise\<T>): Promise\<any>

*Overrides [Pipeline](pipeline.md).[execute](pipeline.md#execute)*

*Defined in [lib/pipeline/pipeline.ts:95](https://github.com/ascentcore/dataspot/blob/8a56680/lib/pipeline/pipeline.ts#L95)*

#### Type parameters:

Name |
------ |
`T` |
`K` |

#### Parameters:

Name | Type |
------ | ------ |
`inputData` | Promise\<T> |

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

*Inherited from [Pipeline](pipeline.md).[setState](pipeline.md#setstate)*

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

*Inherited from [Pipeline](pipeline.md).[executeStep](pipeline.md#executestep)*

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
