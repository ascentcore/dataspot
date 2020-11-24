---
layout: default
title: pipeline
parent: Dataspot
grand_parent: 
has_children: true
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [pipeline.pipeline](pipeline_pipeline)

# pipeline

Synchronous pipeline implementation - the pipeline is used
to ensure the correct order execution and separation of responsabilities
for each step in the validation / reporting process.

## Hierarchy

* [pipeline.types](pipeline_types)\<any, any>

  ↳ **pipeline.pipeline**

## Index

### Constructors

* [constructor](pipeline_pipeline#constructor)
* [constructor](pipeline_pipeline#constructor)
* [constructor](pipeline_pipeline#constructor)

### Properties

* [state](pipeline_pipeline#state)
* [state](pipeline_pipeline#state)
* [state](pipeline_pipeline#state)
* [steps](pipeline_pipeline#steps)
* [steps](pipeline_pipeline#steps)
* [steps](pipeline_pipeline#steps)

### Methods

* [add](pipeline_pipeline#add)
* [add](pipeline_pipeline#add)
* [add](pipeline_pipeline#add)
* [execute](pipeline_pipeline#execute)
* [execute](pipeline_pipeline#execute)
* [execute](pipeline_pipeline#execute)
* [getStateKey](pipeline_pipeline#getstatekey)
* [getStateKey](pipeline_pipeline#getstatekey)
* [getStateKey](pipeline_pipeline#getstatekey)
* [setState](pipeline_pipeline#setstate)
* [setState](pipeline_pipeline#setstate)
* [setState](pipeline_pipeline#setstate)
* [setStateKey](pipeline_pipeline#setstatekey)
* [setStateKey](pipeline_pipeline#setstatekey)
* [setStateKey](pipeline_pipeline#setstatekey)
* [executeStep](pipeline_pipeline#executestep)
* [executeStep](pipeline_pipeline#executestep)
* [executeStep](pipeline_pipeline#executestep)

## Constructors

### constructor

\+ **new Pipeline**(`steps?`: [pipeline.types](pipeline_types)\<any, any>[]): [pipeline.pipeline](pipeline_pipeline)

*Defined in [lib/pipeline/pipeline.ts:11](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/pipeline.ts#L11)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`steps` | [pipeline.types](pipeline_types)\<any, any>[] | [] |

**Returns:** [pipeline.pipeline](pipeline_pipeline)

___

### constructor

\+ **new ParalelPipeline**(`steps?`: [pipeline.types](pipeline_types)\<any, any>[]): ParalelPipeline

*Inherited from [pipeline.pipeline](pipeline_pipeline).[constructor](pipeline_pipeline#constructor)*

*Defined in [lib/pipeline/pipeline.ts:11](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/pipeline.ts#L11)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`steps` | [pipeline.types](pipeline_types)\<any, any>[] | [] |

**Returns:** ParalelPipeline

___

### constructor

\+ **new WaterfallPipeline**(`steps?`: [pipeline.types](pipeline_types)\<any, any>[]): WaterfallPipeline

*Inherited from [pipeline.pipeline](pipeline_pipeline).[constructor](pipeline_pipeline#constructor)*

*Defined in [lib/pipeline/pipeline.ts:11](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/pipeline.ts#L11)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`steps` | [pipeline.types](pipeline_types)\<any, any>[] | [] |

**Returns:** WaterfallPipeline

## Properties

### state

• `Protected` **state**: [models.objectLike](../interfaces/models_objectlike)

*Inherited from [pipeline.types](pipeline_types).[state](pipeline_types#state)*

*Defined in [lib/pipeline/types.ts:12](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/types.ts#L12)*

Internal pipeline state reference

___

### state

• `Protected` **state**: [models.objectLike](../interfaces/models_objectlike)

*Inherited from [pipeline.types](pipeline_types).[state](pipeline_types#state)*

*Defined in [lib/pipeline/types.ts:12](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/types.ts#L12)*

Internal pipeline state reference

___

### state

• `Protected` **state**: [models.objectLike](../interfaces/models_objectlike)

*Inherited from [pipeline.types](pipeline_types).[state](pipeline_types#state)*

*Defined in [lib/pipeline/types.ts:12](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/types.ts#L12)*

Internal pipeline state reference

___

### steps

• `Protected` **steps**: [pipeline.types](pipeline_types)\<any, any>[]

*Defined in [lib/pipeline/pipeline.ts:12](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/pipeline.ts#L12)*

___

### steps

• `Protected` **steps**: [pipeline.types](pipeline_types)\<any, any>[]

*Inherited from [pipeline.pipeline](pipeline_pipeline).[steps](pipeline_pipeline#steps)*

*Defined in [lib/pipeline/pipeline.ts:12](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/pipeline.ts#L12)*

___

### steps

• `Protected` **steps**: [pipeline.types](pipeline_types)\<any, any>[]

*Inherited from [pipeline.pipeline](pipeline_pipeline).[steps](pipeline_pipeline#steps)*

*Defined in [lib/pipeline/pipeline.ts:12](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/pipeline.ts#L12)*

## Methods

### add

▸ **add**(`step`: [pipeline.types](pipeline_types)\<any, any>): [pipeline.pipeline](pipeline_pipeline)

*Defined in [lib/pipeline/pipeline.ts:29](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/pipeline.ts#L29)*

Adds one step executor to the pipeline

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`step` | [pipeline.types](pipeline_types)\<any, any> | pipeline step  |

**Returns:** [pipeline.pipeline](pipeline_pipeline)

___

### add

▸ **add**(`step`: [pipeline.types](pipeline_types)\<any, any>): [pipeline.pipeline](pipeline_pipeline)

*Inherited from [pipeline.pipeline](pipeline_pipeline).[add](pipeline_pipeline#add)*

*Defined in [lib/pipeline/pipeline.ts:29](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/pipeline.ts#L29)*

Adds one step executor to the pipeline

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`step` | [pipeline.types](pipeline_types)\<any, any> | pipeline step  |

**Returns:** [pipeline.pipeline](pipeline_pipeline)

___

### add

▸ **add**(`step`: [pipeline.types](pipeline_types)\<any, any>): [pipeline.pipeline](pipeline_pipeline)

*Inherited from [pipeline.pipeline](pipeline_pipeline).[add](pipeline_pipeline#add)*

*Defined in [lib/pipeline/pipeline.ts:29](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/pipeline.ts#L29)*

Adds one step executor to the pipeline

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`step` | [pipeline.types](pipeline_types)\<any, any> | pipeline step  |

**Returns:** [pipeline.pipeline](pipeline_pipeline)

___

### execute

▸ **execute**\<T, K>(`data?`: Promise\<T>): Promise\<any>

*Overrides [pipeline.types](pipeline_types).[execute](pipeline_types#execute)*

*Defined in [lib/pipeline/pipeline.ts:52](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/pipeline.ts#L52)*

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

*Overrides [pipeline.pipeline](pipeline_pipeline).[execute](pipeline_pipeline#execute)*

*Defined in [lib/pipeline/pipeline.ts:73](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/pipeline.ts#L73)*

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

*Overrides [pipeline.pipeline](pipeline_pipeline).[execute](pipeline_pipeline#execute)*

*Defined in [lib/pipeline/pipeline.ts:95](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/pipeline.ts#L95)*

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

*Inherited from [pipeline.types](pipeline_types).[getStateKey](pipeline_types#getstatekey)*

*Defined in [lib/pipeline/types.ts:35](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/types.ts#L35)*

Return value at key from storage

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | storage key  |

**Returns:** any

___

### getStateKey

▸ **getStateKey**(`key`: string): any

*Inherited from [pipeline.types](pipeline_types).[getStateKey](pipeline_types#getstatekey)*

*Defined in [lib/pipeline/types.ts:35](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/types.ts#L35)*

Return value at key from storage

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | storage key  |

**Returns:** any

___

### getStateKey

▸ **getStateKey**(`key`: string): any

*Inherited from [pipeline.types](pipeline_types).[getStateKey](pipeline_types#getstatekey)*

*Defined in [lib/pipeline/types.ts:35](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/types.ts#L35)*

Return value at key from storage

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | storage key  |

**Returns:** any

___

### setState

▸ **setState**(`state`: [models.objectLike](../interfaces/models_objectlike)): void

*Overrides [pipeline.types](pipeline_types).[setState](pipeline_types#setstate)*

*Defined in [lib/pipeline/pipeline.ts:20](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/pipeline.ts#L20)*

Update current pipe internal state with passed object and assign to children

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`state` | [models.objectLike](../interfaces/models_objectlike) | state object  |

**Returns:** void

___

### setState

▸ **setState**(`state`: [models.objectLike](../interfaces/models_objectlike)): void

*Inherited from [pipeline.pipeline](pipeline_pipeline).[setState](pipeline_pipeline#setstate)*

*Overrides [pipeline.types](pipeline_types).[setState](pipeline_types#setstate)*

*Defined in [lib/pipeline/pipeline.ts:20](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/pipeline.ts#L20)*

Update current pipe internal state with passed object and assign to children

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`state` | [models.objectLike](../interfaces/models_objectlike) | state object  |

**Returns:** void

___

### setState

▸ **setState**(`state`: [models.objectLike](../interfaces/models_objectlike)): void

*Inherited from [pipeline.pipeline](pipeline_pipeline).[setState](pipeline_pipeline#setstate)*

*Overrides [pipeline.types](pipeline_types).[setState](pipeline_types#setstate)*

*Defined in [lib/pipeline/pipeline.ts:20](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/pipeline.ts#L20)*

Update current pipe internal state with passed object and assign to children

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`state` | [models.objectLike](../interfaces/models_objectlike) | state object  |

**Returns:** void

___

### setStateKey

▸ **setStateKey**(`key`: string, `value`: any): void

*Inherited from [pipeline.types](pipeline_types).[setStateKey](pipeline_types#setstatekey)*

*Defined in [lib/pipeline/types.ts:27](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/types.ts#L27)*

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

*Inherited from [pipeline.types](pipeline_types).[setStateKey](pipeline_types#setstatekey)*

*Defined in [lib/pipeline/types.ts:27](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/types.ts#L27)*

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

*Inherited from [pipeline.types](pipeline_types).[setStateKey](pipeline_types#setstatekey)*

*Defined in [lib/pipeline/types.ts:27](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/types.ts#L27)*

Set state property

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | string | state property key storage name |
`value` | any | value to store at key  |

**Returns:** void

___

### executeStep

▸ `Static`**executeStep**\<T, K>(`input`: T, `step`: [pipeline.types](pipeline_types)\<T, K>): Promise\<K>

*Defined in [lib/pipeline/pipeline.ts:43](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/pipeline.ts#L43)*

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
`step` | [pipeline.types](pipeline_types)\<T, K> | step to be executed  |

**Returns:** Promise\<K>

___

### executeStep

▸ `Static`**executeStep**\<T, K>(`input`: T, `step`: [pipeline.types](pipeline_types)\<T, K>): Promise\<K>

*Inherited from [pipeline.pipeline](pipeline_pipeline).[executeStep](pipeline_pipeline#executestep)*

*Defined in [lib/pipeline/pipeline.ts:43](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/pipeline.ts#L43)*

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
`step` | [pipeline.types](pipeline_types)\<T, K> | step to be executed  |

**Returns:** Promise\<K>

___

### executeStep

▸ `Static`**executeStep**\<T, K>(`input`: T, `step`: [pipeline.types](pipeline_types)\<T, K>): Promise\<K>

*Inherited from [pipeline.pipeline](pipeline_pipeline).[executeStep](pipeline_pipeline#executestep)*

*Defined in [lib/pipeline/pipeline.ts:43](https://github.com/ascentcore/dataspot/blob/7114653/lib/pipeline/pipeline.ts#L43)*

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
`step` | [pipeline.types](pipeline_types)\<T, K> | step to be executed  |

**Returns:** Promise\<K>
