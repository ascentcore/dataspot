---
layout: default
title: pipeline
parent: Dataspot
grand_parent: 
has_children: true
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / pipeline.pipeline

# pipeline

Synchronous pipeline implementation - the pipeline is used
to ensure the correct order execution and separation of responsabilities
for each step in the validation / reporting process.

## Hierarchy

* [pipeline.types](pipeline_types.md)\<any, any>

  ↳ **pipeline.pipeline**

## Index

### Constructors

* [constructor](pipeline_pipeline.md#constructor)
* [constructor](pipeline_pipeline.md#constructor)
* [constructor](pipeline_pipeline.md#constructor)

### Properties

* [state](pipeline_pipeline.md#state)
* [state](pipeline_pipeline.md#state)
* [state](pipeline_pipeline.md#state)
* [steps](pipeline_pipeline.md#steps)
* [steps](pipeline_pipeline.md#steps)
* [steps](pipeline_pipeline.md#steps)

### Methods

* [add](pipeline_pipeline.md#add)
* [add](pipeline_pipeline.md#add)
* [add](pipeline_pipeline.md#add)
* [execute](pipeline_pipeline.md#execute)
* [execute](pipeline_pipeline.md#execute)
* [execute](pipeline_pipeline.md#execute)
* [getStateKey](pipeline_pipeline.md#getstatekey)
* [getStateKey](pipeline_pipeline.md#getstatekey)
* [getStateKey](pipeline_pipeline.md#getstatekey)
* [setState](pipeline_pipeline.md#setstate)
* [setState](pipeline_pipeline.md#setstate)
* [setState](pipeline_pipeline.md#setstate)
* [setStateKey](pipeline_pipeline.md#setstatekey)
* [setStateKey](pipeline_pipeline.md#setstatekey)
* [setStateKey](pipeline_pipeline.md#setstatekey)
* [executeStep](pipeline_pipeline.md#executestep)
* [executeStep](pipeline_pipeline.md#executestep)
* [executeStep](pipeline_pipeline.md#executestep)

## Constructors

### constructor

\+ **new Pipeline**(`steps?`: [pipeline.types](pipeline_types.md)\<any, any>[]): [pipeline.pipeline](pipeline_pipeline.md)

*Defined in [lib/pipeline/pipeline.ts:11](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/pipeline.ts#L11)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`steps` | [pipeline.types](pipeline_types.md)\<any, any>[] | [] |

**Returns:** [pipeline.pipeline](pipeline_pipeline.md)

___

### constructor

\+ **new ParalelPipeline**(`steps?`: [pipeline.types](pipeline_types.md)\<any, any>[]): ParalelPipeline

*Inherited from [pipeline.pipeline](pipeline_pipeline.md).[constructor](pipeline_pipeline.md#constructor)*

*Defined in [lib/pipeline/pipeline.ts:11](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/pipeline.ts#L11)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`steps` | [pipeline.types](pipeline_types.md)\<any, any>[] | [] |

**Returns:** ParalelPipeline

___

### constructor

\+ **new WaterfallPipeline**(`steps?`: [pipeline.types](pipeline_types.md)\<any, any>[]): WaterfallPipeline

*Inherited from [pipeline.pipeline](pipeline_pipeline.md).[constructor](pipeline_pipeline.md#constructor)*

*Defined in [lib/pipeline/pipeline.ts:11](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/pipeline.ts#L11)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`steps` | [pipeline.types](pipeline_types.md)\<any, any>[] | [] |

**Returns:** WaterfallPipeline

## Properties

### state

• `Protected` **state**: [models.objectLike](../interfaces/models_objectlike.md)

*Inherited from [pipeline.types](pipeline_types.md).[state](pipeline_types.md#state)*

*Defined in [lib/pipeline/types.ts:12](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/types.ts#L12)*

Internal pipeline state reference

___

### state

• `Protected` **state**: [models.objectLike](../interfaces/models_objectlike.md)

*Inherited from [pipeline.types](pipeline_types.md).[state](pipeline_types.md#state)*

*Defined in [lib/pipeline/types.ts:12](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/types.ts#L12)*

Internal pipeline state reference

___

### state

• `Protected` **state**: [models.objectLike](../interfaces/models_objectlike.md)

*Inherited from [pipeline.types](pipeline_types.md).[state](pipeline_types.md#state)*

*Defined in [lib/pipeline/types.ts:12](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/types.ts#L12)*

Internal pipeline state reference

___

### steps

• `Protected` **steps**: [pipeline.types](pipeline_types.md)\<any, any>[]

*Defined in [lib/pipeline/pipeline.ts:12](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/pipeline.ts#L12)*

___

### steps

• `Protected` **steps**: [pipeline.types](pipeline_types.md)\<any, any>[]

*Inherited from [pipeline.pipeline](pipeline_pipeline.md).[steps](pipeline_pipeline.md#steps)*

*Defined in [lib/pipeline/pipeline.ts:12](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/pipeline.ts#L12)*

___

### steps

• `Protected` **steps**: [pipeline.types](pipeline_types.md)\<any, any>[]

*Inherited from [pipeline.pipeline](pipeline_pipeline.md).[steps](pipeline_pipeline.md#steps)*

*Defined in [lib/pipeline/pipeline.ts:12](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/pipeline.ts#L12)*

## Methods

### add

▸ **add**(`step`: [pipeline.types](pipeline_types.md)\<any, any>): [pipeline.pipeline](pipeline_pipeline.md)

*Defined in [lib/pipeline/pipeline.ts:29](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/pipeline.ts#L29)*

Adds one step executor to the pipeline

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`step` | [pipeline.types](pipeline_types.md)\<any, any> | pipeline step  |

**Returns:** [pipeline.pipeline](pipeline_pipeline.md)

___

### add

▸ **add**(`step`: [pipeline.types](pipeline_types.md)\<any, any>): [pipeline.pipeline](pipeline_pipeline.md)

*Inherited from [pipeline.pipeline](pipeline_pipeline.md).[add](pipeline_pipeline.md#add)*

*Defined in [lib/pipeline/pipeline.ts:29](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/pipeline.ts#L29)*

Adds one step executor to the pipeline

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`step` | [pipeline.types](pipeline_types.md)\<any, any> | pipeline step  |

**Returns:** [pipeline.pipeline](pipeline_pipeline.md)

___

### add

▸ **add**(`step`: [pipeline.types](pipeline_types.md)\<any, any>): [pipeline.pipeline](pipeline_pipeline.md)

*Inherited from [pipeline.pipeline](pipeline_pipeline.md).[add](pipeline_pipeline.md#add)*

*Defined in [lib/pipeline/pipeline.ts:29](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/pipeline.ts#L29)*

Adds one step executor to the pipeline

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`step` | [pipeline.types](pipeline_types.md)\<any, any> | pipeline step  |

**Returns:** [pipeline.pipeline](pipeline_pipeline.md)

___

### execute

▸ **execute**\<T, K>(`data?`: Promise\<T>): Promise\<any>

*Overrides [pipeline.types](pipeline_types.md).[execute](pipeline_types.md#execute)*

*Defined in [lib/pipeline/pipeline.ts:52](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/pipeline.ts#L52)*

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

### execute

▸ **execute**\<T, K>(`inputData`: Promise\<T>): Promise\<any>

*Overrides [pipeline.pipeline](pipeline_pipeline.md).[execute](pipeline_pipeline.md#execute)*

*Defined in [lib/pipeline/pipeline.ts:73](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/pipeline.ts#L73)*

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

### execute

▸ **execute**\<T, K>(`inputData`: Promise\<T>): Promise\<any>

*Overrides [pipeline.pipeline](pipeline_pipeline.md).[execute](pipeline_pipeline.md#execute)*

*Defined in [lib/pipeline/pipeline.ts:95](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/pipeline.ts#L95)*

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

*Inherited from [pipeline.types](pipeline_types.md).[getStateKey](pipeline_types.md#getstatekey)*

*Defined in [lib/pipeline/types.ts:35](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/types.ts#L35)*

Return value at key from storage

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | storage key  |

**Returns:** any

___

### getStateKey

▸ **getStateKey**(`key`: string): any

*Inherited from [pipeline.types](pipeline_types.md).[getStateKey](pipeline_types.md#getstatekey)*

*Defined in [lib/pipeline/types.ts:35](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/types.ts#L35)*

Return value at key from storage

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | storage key  |

**Returns:** any

___

### getStateKey

▸ **getStateKey**(`key`: string): any

*Inherited from [pipeline.types](pipeline_types.md).[getStateKey](pipeline_types.md#getstatekey)*

*Defined in [lib/pipeline/types.ts:35](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/types.ts#L35)*

Return value at key from storage

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | storage key  |

**Returns:** any

___

### setState

▸ **setState**(`state`: [models.objectLike](../interfaces/models_objectlike.md)): void

*Overrides [pipeline.types](pipeline_types.md).[setState](pipeline_types.md#setstate)*

*Defined in [lib/pipeline/pipeline.ts:20](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/pipeline.ts#L20)*

Update current pipe internal state with passed object and assign to children

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`state` | [models.objectLike](../interfaces/models_objectlike.md) | state object  |

**Returns:** void

___

### setState

▸ **setState**(`state`: [models.objectLike](../interfaces/models_objectlike.md)): void

*Inherited from [pipeline.pipeline](pipeline_pipeline.md).[setState](pipeline_pipeline.md#setstate)*

*Overrides [pipeline.types](pipeline_types.md).[setState](pipeline_types.md#setstate)*

*Defined in [lib/pipeline/pipeline.ts:20](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/pipeline.ts#L20)*

Update current pipe internal state with passed object and assign to children

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`state` | [models.objectLike](../interfaces/models_objectlike.md) | state object  |

**Returns:** void

___

### setState

▸ **setState**(`state`: [models.objectLike](../interfaces/models_objectlike.md)): void

*Inherited from [pipeline.pipeline](pipeline_pipeline.md).[setState](pipeline_pipeline.md#setstate)*

*Overrides [pipeline.types](pipeline_types.md).[setState](pipeline_types.md#setstate)*

*Defined in [lib/pipeline/pipeline.ts:20](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/pipeline.ts#L20)*

Update current pipe internal state with passed object and assign to children

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`state` | [models.objectLike](../interfaces/models_objectlike.md) | state object  |

**Returns:** void

___

### setStateKey

▸ **setStateKey**(`key`: string, `value`: any): void

*Inherited from [pipeline.types](pipeline_types.md).[setStateKey](pipeline_types.md#setstatekey)*

*Defined in [lib/pipeline/types.ts:27](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/types.ts#L27)*

Set state property

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | state property key storage name |
`value` | any | value to store at key  |

**Returns:** void

___

### setStateKey

▸ **setStateKey**(`key`: string, `value`: any): void

*Inherited from [pipeline.types](pipeline_types.md).[setStateKey](pipeline_types.md#setstatekey)*

*Defined in [lib/pipeline/types.ts:27](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/types.ts#L27)*

Set state property

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | state property key storage name |
`value` | any | value to store at key  |

**Returns:** void

___

### setStateKey

▸ **setStateKey**(`key`: string, `value`: any): void

*Inherited from [pipeline.types](pipeline_types.md).[setStateKey](pipeline_types.md#setstatekey)*

*Defined in [lib/pipeline/types.ts:27](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/types.ts#L27)*

Set state property

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | state property key storage name |
`value` | any | value to store at key  |

**Returns:** void

___

### executeStep

▸ `Static`**executeStep**\<T, K>(`input`: T, `step`: [pipeline.types](pipeline_types.md)\<T, K>): Promise\<K>

*Defined in [lib/pipeline/pipeline.ts:43](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/pipeline.ts#L43)*

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
`step` | [pipeline.types](pipeline_types.md)\<T, K> | step to be executed  |

**Returns:** Promise\<K>

___

### executeStep

▸ `Static`**executeStep**\<T, K>(`input`: T, `step`: [pipeline.types](pipeline_types.md)\<T, K>): Promise\<K>

*Inherited from [pipeline.pipeline](pipeline_pipeline.md).[executeStep](pipeline_pipeline.md#executestep)*

*Defined in [lib/pipeline/pipeline.ts:43](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/pipeline.ts#L43)*

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
`step` | [pipeline.types](pipeline_types.md)\<T, K> | step to be executed  |

**Returns:** Promise\<K>

___

### executeStep

▸ `Static`**executeStep**\<T, K>(`input`: T, `step`: [pipeline.types](pipeline_types.md)\<T, K>): Promise\<K>

*Inherited from [pipeline.pipeline](pipeline_pipeline.md).[executeStep](pipeline_pipeline.md#executestep)*

*Defined in [lib/pipeline/pipeline.ts:43](https://github.com/ascentcore/dataspot/blob/46219f5/lib/pipeline/pipeline.ts#L43)*

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
`step` | [pipeline.types](pipeline_types.md)\<T, K> | step to be executed  |

**Returns:** Promise\<K>
