---
layout: default
title: ParalelPipeline
parent: pipeline
grand_parent: Dataspot
has_children: false
---

# ParalelPipeline

Paralel pipeline implementation. Used when the steps
can be executed at once thus reducing the execution time of the entire chain

## Hierarchy

* [pipeline.Pipeline](pipeline_pipeline)

  ↳ **pipeline.ParalelPipeline**

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
\+ **new ParalelPipeline**(`steps?`: [pipeline.Step](pipeline_step)\<any, any>[]): [pipeline.ParalelPipeline](pipeline_paralelpipeline)

*Inherited from [pipeline.Pipeline](pipeline_pipeline).[constructor](pipeline_pipeline#constructor)*

{:.url-source-ref}
[lib/pipeline/pipeline.ts:11](https://github.com/ascentcore/dataspot/blob/40beee3/lib/pipeline/pipeline.ts#L11)

**Returns:** [pipeline.ParalelPipeline](pipeline_paralelpipeline)

## Properties

• `Protected` **state**: [models.ObjectLike](../interfaces/models_objectlike)

*Inherited from [pipeline.Step](pipeline_step).[state](pipeline_step#state)*

{:.url-source-ref}
[lib/pipeline/types.ts:12](https://github.com/ascentcore/dataspot/blob/40beee3/lib/pipeline/types.ts#L12)

Internal pipeline state reference

___

• `Protected` **steps**: [pipeline.Step](pipeline_step)\<any, any>[]

*Inherited from [pipeline.Pipeline](pipeline_pipeline).[steps](pipeline_pipeline#steps)*

{:.url-source-ref}
[lib/pipeline/pipeline.ts:12](https://github.com/ascentcore/dataspot/blob/40beee3/lib/pipeline/pipeline.ts#L12)

## Methods

{:.method-highlight}
▸ **add**(`step`: [pipeline.Step](pipeline_step)\<any, any>): [pipeline.Pipeline](pipeline_pipeline)

Adds one step executor to the pipeline

*Inherited from [pipeline.Pipeline](pipeline_pipeline).[add](pipeline_pipeline#add)*

{:.url-source-ref}
[lib/pipeline/pipeline.ts:29](https://github.com/ascentcore/dataspot/blob/40beee3/lib/pipeline/pipeline.ts#L29)

**Returns:** [pipeline.Pipeline](pipeline_pipeline)

___

{:.method-highlight}
▸ **execute**\<T, K>(`inputData`: Promise\<T>): Promise\<any>

*Overrides [pipeline.Pipeline](pipeline_pipeline).[execute](pipeline_pipeline#execute)*

{:.url-source-ref}
[lib/pipeline/pipeline.ts:73](https://github.com/ascentcore/dataspot/blob/40beee3/lib/pipeline/pipeline.ts#L73)

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

*Inherited from [pipeline.Step](pipeline_step).[getStateKey](pipeline_step#getstatekey)*

{:.url-source-ref}
[lib/pipeline/types.ts:35](https://github.com/ascentcore/dataspot/blob/40beee3/lib/pipeline/types.ts#L35)

**Returns:** any

___

{:.method-highlight}
▸ **setState**(`state`: [models.ObjectLike](../interfaces/models_objectlike)): void

Update current pipe internal state with passed object and assign to children

*Inherited from [pipeline.Pipeline](pipeline_pipeline).[setState](pipeline_pipeline#setstate)*

*Overrides [pipeline.Step](pipeline_step).[setState](pipeline_step#setstate)*

{:.url-source-ref}
[lib/pipeline/pipeline.ts:20](https://github.com/ascentcore/dataspot/blob/40beee3/lib/pipeline/pipeline.ts#L20)

**Returns:** void

___

{:.method-highlight}
▸ **setStateKey**(`key`: string, `value`: any): void

Set state property

*Inherited from [pipeline.Step](pipeline_step).[setStateKey](pipeline_step#setstatekey)*

{:.url-source-ref}
[lib/pipeline/types.ts:27](https://github.com/ascentcore/dataspot/blob/40beee3/lib/pipeline/types.ts#L27)

**Returns:** void

___

{:.method-highlight}
▸ `Static`**executeStep**\<T, K>(`input`: T, `step`: [pipeline.Step](pipeline_step)\<T, K>): Promise\<K>

Executes one pipeline step

*Inherited from [pipeline.Pipeline](pipeline_pipeline).[executeStep](pipeline_pipeline#executestep)*

{:.url-source-ref}
[lib/pipeline/pipeline.ts:43](https://github.com/ascentcore/dataspot/blob/40beee3/lib/pipeline/pipeline.ts#L43)

#### Type parameters:

Name |
------ |
`T` |
`K` |

**Returns:** Promise\<K>
