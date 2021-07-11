---
layout: default
title: Pipeline
parent: pipeline
grand_parent: Dataspot
has_children: false
---

# Pipeline

Synchronous pipeline implementation - the pipeline is used
to ensure the correct order execution and separation of responsabilities
for each step in the validation / reporting process.

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [state](#state) |
| [steps](#steps) |

| Methods |
|-----------|
| [add](#add) |
| [execute](#execute) |
| [getStateKey](#getstatekey) |
| [setState](#setstate) |
| [setStateKey](#setstatekey) |
| [executeStep](#executestep) |

## Constructors

{:.method-highlight}
\+ **new Pipeline**(`steps?`: [pipeline.Step](../pipeline_step)\<any, any>[]): [pipeline.Pipeline](../pipeline_pipeline)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`steps` | [pipeline.Step](../pipeline_step)\<any, any>[] | [] |

**Returns:** [pipeline.Pipeline](../pipeline_pipeline)

{:.url-source-ref}
[lib/pipeline/pipeline.ts:11](https://github.com/ascentcore/dataspot/blob/85054f3/lib/pipeline/pipeline.ts#L11)

## Properties

• `Protected` **state**: [models.ObjectLike](../../interfaces/models_objectlike)

*Inherited from [pipeline.Step](../pipeline_step).[state](../pipeline_step#state)*

{:.url-source-ref}
[lib/pipeline/types.ts:12](https://github.com/ascentcore/dataspot/blob/85054f3/lib/pipeline/types.ts#L12)

Internal pipeline state reference

___

• `Protected` **steps**: [pipeline.Step](../pipeline_step)\<any, any>[]

{:.url-source-ref}
[lib/pipeline/pipeline.ts:12](https://github.com/ascentcore/dataspot/blob/85054f3/lib/pipeline/pipeline.ts#L12)

## Methods

{:.method-highlight}
▸ **add**(`step`: [pipeline.Step](../pipeline_step)\<any, any>): [pipeline.Pipeline](../pipeline_pipeline)

Adds one step executor to the pipeline

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`step` | [pipeline.Step](../pipeline_step)\<any, any> | pipeline step  |

**Returns:** [pipeline.Pipeline](../pipeline_pipeline)

{:.url-source-ref}
[lib/pipeline/pipeline.ts:29](https://github.com/ascentcore/dataspot/blob/85054f3/lib/pipeline/pipeline.ts#L29)

___

{:.method-highlight}
▸ **execute**\<T, K>(`data?`: Promise\<T>): Promise\<any>

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

*Overrides [pipeline.Step](../pipeline_step).[execute](../pipeline_step#execute)*

{:.url-source-ref}
[lib/pipeline/pipeline.ts:52](https://github.com/ascentcore/dataspot/blob/85054f3/lib/pipeline/pipeline.ts#L52)

___

{:.method-highlight}
▸ **getStateKey**(`key`: string): any

Return value at key from storage

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | storage key  |

**Returns:** any

*Inherited from [pipeline.Step](../pipeline_step).[getStateKey](../pipeline_step#getstatekey)*

{:.url-source-ref}
[lib/pipeline/types.ts:35](https://github.com/ascentcore/dataspot/blob/85054f3/lib/pipeline/types.ts#L35)

___

{:.method-highlight}
▸ **setState**(`state`: [models.ObjectLike](../../interfaces/models_objectlike)): void

Update current pipe internal state with passed object and assign to children

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`state` | [models.ObjectLike](../../interfaces/models_objectlike) | state object  |

**Returns:** void

*Overrides [pipeline.Step](../pipeline_step).[setState](../pipeline_step#setstate)*

{:.url-source-ref}
[lib/pipeline/pipeline.ts:20](https://github.com/ascentcore/dataspot/blob/85054f3/lib/pipeline/pipeline.ts#L20)

___

{:.method-highlight}
▸ **setStateKey**(`key`: string, `value`: any): void

Set state property

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | state property key storage name |
`value` | any | value to store at key  |

**Returns:** void

*Inherited from [pipeline.Step](../pipeline_step).[setStateKey](../pipeline_step#setstatekey)*

{:.url-source-ref}
[lib/pipeline/types.ts:27](https://github.com/ascentcore/dataspot/blob/85054f3/lib/pipeline/types.ts#L27)

___

{:.method-highlight}
▸ `Static`**executeStep**\<T, K>(`input`: T, `step`: [pipeline.Step](../pipeline_step)\<T, K>): Promise\<K>

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
`step` | [pipeline.Step](../pipeline_step)\<T, K> | step to be executed  |

**Returns:** Promise\<K>

{:.url-source-ref}
[lib/pipeline/pipeline.ts:43](https://github.com/ascentcore/dataspot/blob/85054f3/lib/pipeline/pipeline.ts#L43)
