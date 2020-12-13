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

• `Protected` **state**: [models.ObjectLike](../../interfaces/models_objectlike)

{:.url-source-ref}
[lib/pipeline/types.ts:12](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/pipeline/types.ts#L12)

Internal pipeline state reference

## Methods

{:.method-highlight}
▸ `Abstract`**execute**(`data`: T): Promise\<K>

Execute a step in the pipeline and return a promise to the next element in pipe

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | T | data promise for the next step in pipe  |

**Returns:** Promise\<K>

{:.url-source-ref}
[lib/pipeline/types.ts:43](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/pipeline/types.ts#L43)

___

{:.method-highlight}
▸ **getStateKey**(`key`: string): any

Return value at key from storage

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | storage key  |

**Returns:** any

{:.url-source-ref}
[lib/pipeline/types.ts:35](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/pipeline/types.ts#L35)

___

{:.method-highlight}
▸ **setState**(`value`: [models.ObjectLike](../../interfaces/models_objectlike)): void

Set state reference

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | [models.ObjectLike](../../interfaces/models_objectlike) | pipeline state reference  |

**Returns:** void

{:.url-source-ref}
[lib/pipeline/types.ts:18](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/pipeline/types.ts#L18)

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

{:.url-source-ref}
[lib/pipeline/types.ts:27](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/pipeline/types.ts#L27)
