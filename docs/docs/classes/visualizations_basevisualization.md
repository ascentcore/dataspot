---
layout: default
title: BaseVisualization
parent: visualizations
grand_parent: Dataspot
has_children: false
---

# BaseVisualization

Base visualization abstract class.
The same logic will be used isomorphically on node and web platforms

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [config](#config) |
| [dependencies](#dependencies) |
| [elemClass](#elemclass) |

| Methods |
|-----------|
| [dataUpdate](#dataupdate) |
| [getDependency](#getdependency) |
| [setup](#setup) |

## Constructors

{:.method-highlight}
\+ **new BaseVisualization**(`config`: any, `elemClass`: string): [visualizations.BaseVisualization](../visualizations_basevisualization)

#### Parameters:

Name | Type |
------ | ------ |
`config` | any |
`elemClass` | string |

**Returns:** [visualizations.BaseVisualization](../visualizations_basevisualization)

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/basevisualization.ts#L7)

## Properties

•  **config**: any

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/basevisualization.ts#L8)

___

• `Protected` **dependencies**: any

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/basevisualization.ts#L14)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/basevisualization.ts#L8)

## Methods

{:.method-highlight}
▸ `Abstract`**dataUpdate**(`data`: any, `elemClass?`: undefined \| string): (data: any, elemClass: string) => void \| null

Isomorphic method used on every data update

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | any | array of data values  |
`elemClass?` | undefined \| string | - |

**Returns:** (data: any, elemClass: string) => void \| null

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:26](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/basevisualization.ts#L26)

___

{:.method-highlight}
▸ **getDependency**(`key`: string): any

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** any

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:28](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/basevisualization.ts#L28)

___

{:.method-highlight}
▸ `Abstract`**setup**(`initialData?`: any): void

Isomorphic method executed once for setting up the visualization and dependencies
that are going to be used by the data update function

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | any |

**Returns:** void

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:20](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/basevisualization.ts#L20)
