---
layout: default
title: Step
parent: pipeline
grand_parent: Dataspot
has_children: false
---

# Step

Pipeline step interface

## Type parameters

Name |
------ |
`T` |
`K` |

## Hierarchy

* **pipeline.Step**

  ↳ [pipeline.Pipeline](/docs/classes/pipeline_pipeline)

## Index

| Properties |
|-----------|
| [state](#state) |

| Methods |
|-----------|
| [execute](#execute) |
| [getStateKey](#getstatekey) |
| [setState](#setstate) |
| [setStateKey](#setstatekey) |

## Properties

• `Protected` **state**: [models.ObjectLike](/docs/classes/../interfaces/models_objectlike)

{:.url-source-ref}
[lib/pipeline/types.ts:12](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/types.ts#L12)

Internal pipeline state reference

## Methods

{:.method-highlight}
▸ `Abstract`**execute**(`data`: T): Promise\<K>

Execute a step in the pipeline and return a promise to the next element in pipe

{:.url-source-ref}
[lib/pipeline/types.ts:43](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/types.ts#L43)

**Returns:** Promise\<K>

___

{:.method-highlight}
▸ **getStateKey**(`key`: string): any

Return value at key from storage

{:.url-source-ref}
[lib/pipeline/types.ts:35](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/types.ts#L35)

**Returns:** any

___

{:.method-highlight}
▸ **setState**(`value`: [models.ObjectLike](/docs/classes/../interfaces/models_objectlike)): void

Set state reference

{:.url-source-ref}
[lib/pipeline/types.ts:18](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/types.ts#L18)

**Returns:** void

___

{:.method-highlight}
▸ **setStateKey**(`key`: string, `value`: any): void

Set state property

{:.url-source-ref}
[lib/pipeline/types.ts:27](https://github.com/ascentcore/dataspot/blob/b02167c/lib/pipeline/types.ts#L27)

**Returns:** void
