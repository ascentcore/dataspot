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

## Hierarchy

* [pipeline.Step](/docs/classes/pipeline_step)\<any, any>

  ↳ **pipeline.Pipeline**

  ↳↳ [pipeline.ParalelPipeline](/docs/classes/pipeline_paralelpipeline)

  ↳↳ [pipeline.WaterfallPipeline](/docs/classes/pipeline_waterfallpipeline)

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
\+ **new Pipeline**(`steps?`: [pipeline.Step](/docs/classes/pipeline_step)\<any, any>[]): [pipeline.Pipeline](/docs/classes/pipeline_pipeline)

{:.url-source-ref}
[lib/pipeline/pipeline.ts:11](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/pipeline.ts#L11)

**Returns:** [pipeline.Pipeline](/docs/classes/pipeline_pipeline)

## Properties

• `Protected` **state**: [models.ObjectLike](/docs/classes/../interfaces/models_objectlike)

*Inherited from [pipeline.Step](/docs/classes/pipeline_step).[state](/docs/classes/pipeline_step#state)*

{:.url-source-ref}
[lib/pipeline/types.ts:12](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/types.ts#L12)

Internal pipeline state reference

___

• `Protected` **steps**: [pipeline.Step](/docs/classes/pipeline_step)\<any, any>[]

{:.url-source-ref}
[lib/pipeline/pipeline.ts:12](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/pipeline.ts#L12)

## Methods

{:.method-highlight}
▸ **add**(`step`: [pipeline.Step](/docs/classes/pipeline_step)\<any, any>): [pipeline.Pipeline](/docs/classes/pipeline_pipeline)

Adds one step executor to the pipeline

{:.url-source-ref}
[lib/pipeline/pipeline.ts:29](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/pipeline.ts#L29)

**Returns:** [pipeline.Pipeline](/docs/classes/pipeline_pipeline)

___

{:.method-highlight}
▸ **execute**\<T, K>(`data?`: Promise\<T>): Promise\<any>

Executes steps in a synchronous mode.
If steps can be paralelized consider using ParalelPipeline

*Overrides [pipeline.Step](/docs/classes/pipeline_step).[execute](/docs/classes/pipeline_step#execute)*

{:.url-source-ref}
[lib/pipeline/pipeline.ts:52](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/pipeline.ts#L52)

#### Type parameters:

Name |
------ |
`T` |
`K` |

**Returns:** Promise\<any>

___

{:.method-highlight}
▸ **getStateKey**(`key`: string): any

Return value at key from storage

*Inherited from [pipeline.Step](/docs/classes/pipeline_step).[getStateKey](/docs/classes/pipeline_step#getstatekey)*

{:.url-source-ref}
[lib/pipeline/types.ts:35](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/types.ts#L35)

**Returns:** any

___

{:.method-highlight}
▸ **setState**(`state`: [models.ObjectLike](/docs/classes/../interfaces/models_objectlike)): void

Update current pipe internal state with passed object and assign to children

*Overrides [pipeline.Step](/docs/classes/pipeline_step).[setState](/docs/classes/pipeline_step#setstate)*

{:.url-source-ref}
[lib/pipeline/pipeline.ts:20](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/pipeline.ts#L20)

**Returns:** void

___

{:.method-highlight}
▸ **setStateKey**(`key`: string, `value`: any): void

Set state property

*Inherited from [pipeline.Step](/docs/classes/pipeline_step).[setStateKey](/docs/classes/pipeline_step#setstatekey)*

{:.url-source-ref}
[lib/pipeline/types.ts:27](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/types.ts#L27)

**Returns:** void

___

{:.method-highlight}
▸ `Static`**executeStep**\<T, K>(`input`: T, `step`: [pipeline.Step](/docs/classes/pipeline_step)\<T, K>): Promise\<K>

Executes one pipeline step

{:.url-source-ref}
[lib/pipeline/pipeline.ts:43](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/pipeline.ts#L43)

#### Type parameters:

Name |
------ |
`T` |
`K` |

**Returns:** Promise\<K>
