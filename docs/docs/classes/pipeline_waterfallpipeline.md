---
layout: default
title: WaterfallPipeline
parent: pipeline
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [pipeline.WaterfallPipeline](pipeline_waterfallpipeline)

# WaterfallPipeline

Waterfall pipeline implementation. Used when the steps
has to be executed one after the other and the results collected in a single object

## Hierarchy

* [pipeline.Pipeline](pipeline_pipeline)

  ↳ **pipeline.WaterfallPipeline**

## Index

### Constructors

* [constructor](pipeline_waterfallpipeline#constructor)

### Properties

* [state](pipeline_waterfallpipeline#state)
* [steps](pipeline_waterfallpipeline#steps)

### Methods

* [add](pipeline_waterfallpipeline#add)
* [execute](pipeline_waterfallpipeline#execute)
* [getStateKey](pipeline_waterfallpipeline#getstatekey)
* [setState](pipeline_waterfallpipeline#setstate)
* [setStateKey](pipeline_waterfallpipeline#setstatekey)
* [executeStep](pipeline_waterfallpipeline#executestep)

## Constructors

### constructor

\+ **new WaterfallPipeline**(`steps?`: [pipeline.Step](pipeline_step)\<any, any>[]): [pipeline.WaterfallPipeline](pipeline_waterfallpipeline)

*Inherited from [pipeline.Pipeline](pipeline_pipeline).[constructor](pipeline_pipeline#constructor)*

*Defined in [lib/pipeline/pipeline.ts:11](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/pipeline/pipeline.ts#L11)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`steps` | [pipeline.Step](pipeline_step)\<any, any>[] | [] |

**Returns:** [pipeline.WaterfallPipeline](pipeline_waterfallpipeline)

## Properties

### state

• `Protected` **state**: [models.ObjectLike](../interfaces/models_objectlike)

*Inherited from [pipeline.Step](pipeline_step).[state](pipeline_step#state)*

*Defined in [lib/pipeline/types.ts:12](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/pipeline/types.ts#L12)*

Internal pipeline state reference

___

### steps

• `Protected` **steps**: [pipeline.Step](pipeline_step)\<any, any>[]

*Inherited from [pipeline.Pipeline](pipeline_pipeline).[steps](pipeline_pipeline#steps)*

*Defined in [lib/pipeline/pipeline.ts:12](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/pipeline/pipeline.ts#L12)*

## Methods

### add

▸ **add**(`step`: [pipeline.Step](pipeline_step)\<any, any>): [pipeline.Pipeline](pipeline_pipeline)

*Inherited from [pipeline.Pipeline](pipeline_pipeline).[add](pipeline_pipeline#add)*

*Defined in [lib/pipeline/pipeline.ts:29](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/pipeline/pipeline.ts#L29)*

Adds one step executor to the pipeline

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`step` | [pipeline.Step](pipeline_step)\<any, any> | pipeline step  |

**Returns:** [pipeline.Pipeline](pipeline_pipeline)

___

### execute

▸ **execute**\<T, K>(`inputData`: Promise\<T>): Promise\<any>

*Overrides [pipeline.Pipeline](pipeline_pipeline).[execute](pipeline_pipeline#execute)*

*Defined in [lib/pipeline/pipeline.ts:95](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/pipeline/pipeline.ts#L95)*

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

*Inherited from [pipeline.Step](pipeline_step).[getStateKey](pipeline_step#getstatekey)*

*Defined in [lib/pipeline/types.ts:35](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/pipeline/types.ts#L35)*

Return value at key from storage

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | storage key  |

**Returns:** any

___

### setState

▸ **setState**(`state`: [models.ObjectLike](../interfaces/models_objectlike)): void

*Inherited from [pipeline.Pipeline](pipeline_pipeline).[setState](pipeline_pipeline#setstate)*

*Overrides [pipeline.Step](pipeline_step).[setState](pipeline_step#setstate)*

*Defined in [lib/pipeline/pipeline.ts:20](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/pipeline/pipeline.ts#L20)*

Update current pipe internal state with passed object and assign to children

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`state` | [models.ObjectLike](../interfaces/models_objectlike) | state object  |

**Returns:** void

___

### setStateKey

▸ **setStateKey**(`key`: string, `value`: any): void

*Inherited from [pipeline.Step](pipeline_step).[setStateKey](pipeline_step#setstatekey)*

*Defined in [lib/pipeline/types.ts:27](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/pipeline/types.ts#L27)*

Set state property

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | state property key storage name |
`value` | any | value to store at key  |

**Returns:** void

___

### executeStep

▸ `Static`**executeStep**\<T, K>(`input`: T, `step`: [pipeline.Step](pipeline_step)\<T, K>): Promise\<K>

*Inherited from [pipeline.Pipeline](pipeline_pipeline).[executeStep](pipeline_pipeline#executestep)*

*Defined in [lib/pipeline/pipeline.ts:43](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/pipeline/pipeline.ts#L43)*

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
`step` | [pipeline.Step](pipeline_step)\<T, K> | step to be executed  |

**Returns:** Promise\<K>
