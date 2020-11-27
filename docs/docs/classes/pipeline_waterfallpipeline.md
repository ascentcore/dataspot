---
layout: default
title: WaterfallPipeline
parent: pipeline
grand_parent: Dataspot
has_children: false
---

# WaterfallPipeline

Waterfall pipeline implementation. Used when the steps
has to be executed one after the other and the results collected in a single object

## Hierarchy

* [pipeline.Pipeline](/docs/classes/pipeline_pipeline)

  ↳ **pipeline.WaterfallPipeline**

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
\+ **new WaterfallPipeline**(`steps?`: [pipeline.Step](/docs/classes/pipeline_step)\<any, any>[]): [pipeline.WaterfallPipeline](/docs/classes/pipeline_waterfallpipeline)

*Inherited from [pipeline.Pipeline](/docs/classes/pipeline_pipeline).[constructor](/docs/classes/pipeline_pipeline#constructor)*

{:.url-source-ref}
[lib/pipeline/pipeline.ts:11](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/pipeline.ts#L11)

**Returns:** [pipeline.WaterfallPipeline](/docs/classes/pipeline_waterfallpipeline)

## Properties

• `Protected` **state**: [models.ObjectLike](/docs/classes/../interfaces/models_objectlike)

*Inherited from [pipeline.Step](/docs/classes/pipeline_step).[state](/docs/classes/pipeline_step#state)*

{:.url-source-ref}
[lib/pipeline/types.ts:12](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/types.ts#L12)

Internal pipeline state reference

___

• `Protected` **steps**: [pipeline.Step](/docs/classes/pipeline_step)\<any, any>[]

*Inherited from [pipeline.Pipeline](/docs/classes/pipeline_pipeline).[steps](/docs/classes/pipeline_pipeline#steps)*

{:.url-source-ref}
[lib/pipeline/pipeline.ts:12](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/pipeline.ts#L12)

## Methods

{:.method-highlight}
▸ **add**(`step`: [pipeline.Step](/docs/classes/pipeline_step)\<any, any>): [pipeline.Pipeline](/docs/classes/pipeline_pipeline)

Adds one step executor to the pipeline

*Inherited from [pipeline.Pipeline](/docs/classes/pipeline_pipeline).[add](/docs/classes/pipeline_pipeline#add)*

{:.url-source-ref}
[lib/pipeline/pipeline.ts:29](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/pipeline.ts#L29)

**Returns:** [pipeline.Pipeline](/docs/classes/pipeline_pipeline)

___

{:.method-highlight}
▸ **execute**\<T, K>(`inputData`: Promise\<T>): Promise\<any>

*Overrides [pipeline.Pipeline](/docs/classes/pipeline_pipeline).[execute](/docs/classes/pipeline_pipeline#execute)*

{:.url-source-ref}
[lib/pipeline/pipeline.ts:95](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/pipeline.ts#L95)

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

*Inherited from [pipeline.Pipeline](/docs/classes/pipeline_pipeline).[setState](/docs/classes/pipeline_pipeline#setstate)*

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

*Inherited from [pipeline.Pipeline](/docs/classes/pipeline_pipeline).[executeStep](/docs/classes/pipeline_pipeline#executestep)*

{:.url-source-ref}
[lib/pipeline/pipeline.ts:43](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/pipeline.ts#L43)

#### Type parameters:

Name |
------ |
`T` |
`K` |

**Returns:** Promise\<K>
