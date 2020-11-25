---
layout: default
title: Pipeline
parent: pipeline
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [pipeline.Pipeline](pipeline_pipeline)

# Pipeline

Synchronous pipeline implementation - the pipeline is used
to ensure the correct order execution and separation of responsabilities
for each step in the validation / reporting process.

## Hierarchy

* [pipeline.Step](pipeline_step)\<any, any>

  ↳ **pipeline.Pipeline**

  ↳↳ [pipeline.ParalelPipeline](pipeline_paralelpipeline)

  ↳↳ [pipeline.WaterfallPipeline](pipeline_waterfallpipeline)

## Index

### Constructors

* [constructor](pipeline_pipeline#constructor)

### Properties

* [state](pipeline_pipeline#state)
* [steps](pipeline_pipeline#steps)

### Methods

* [add](pipeline_pipeline#add)
* [execute](pipeline_pipeline#execute)
* [getStateKey](pipeline_pipeline#getstatekey)
* [setState](pipeline_pipeline#setstate)
* [setStateKey](pipeline_pipeline#setstatekey)
* [executeStep](pipeline_pipeline#executestep)

## Constructors

### constructor

\+ **new Pipeline**(`steps?`: [pipeline.Step](pipeline_step)\<any, any>[]): [pipeline.Pipeline](pipeline_pipeline)

*Defined in [lib/pipeline/pipeline.ts:11](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/pipeline/pipeline.ts#L11)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`steps` | [pipeline.Step](pipeline_step)\<any, any>[] | [] |

**Returns:** [pipeline.Pipeline](pipeline_pipeline)

## Properties

### state

• `Protected` **state**: [models.ObjectLike](../interfaces/models_objectlike)

*Inherited from [pipeline.Step](pipeline_step).[state](pipeline_step#state)*

*Defined in [lib/pipeline/types.ts:12](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/pipeline/types.ts#L12)*

Internal pipeline state reference

___

### steps

• `Protected` **steps**: [pipeline.Step](pipeline_step)\<any, any>[]

*Defined in [lib/pipeline/pipeline.ts:12](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/pipeline/pipeline.ts#L12)*

## Methods

### add

▸ **add**(`step`: [pipeline.Step](pipeline_step)\<any, any>): [pipeline.Pipeline](pipeline_pipeline)

*Defined in [lib/pipeline/pipeline.ts:29](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/pipeline/pipeline.ts#L29)*

Adds one step executor to the pipeline

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`step` | [pipeline.Step](pipeline_step)\<any, any> | pipeline step  |

**Returns:** [pipeline.Pipeline](pipeline_pipeline)

___

### execute

▸ **execute**\<T, K>(`data?`: Promise\<T>): Promise\<any>

*Overrides [pipeline.Step](pipeline_step).[execute](pipeline_step#execute)*

*Defined in [lib/pipeline/pipeline.ts:52](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/pipeline/pipeline.ts#L52)*

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

*Inherited from [pipeline.Step](pipeline_step).[getStateKey](pipeline_step#getstatekey)*

*Defined in [lib/pipeline/types.ts:35](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/pipeline/types.ts#L35)*

Return value at key from storage

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | storage key  |

**Returns:** any

___

### setState

▸ **setState**(`state`: [models.ObjectLike](../interfaces/models_objectlike)): void

*Overrides [pipeline.Step](pipeline_step).[setState](pipeline_step#setstate)*

*Defined in [lib/pipeline/pipeline.ts:20](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/pipeline/pipeline.ts#L20)*

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

*Defined in [lib/pipeline/types.ts:27](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/pipeline/types.ts#L27)*

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

*Defined in [lib/pipeline/pipeline.ts:43](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/pipeline/pipeline.ts#L43)*

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
