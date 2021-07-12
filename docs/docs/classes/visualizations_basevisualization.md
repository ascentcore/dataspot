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
| [getDataUpdateFn](#getdataupdatefn) |
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
[lib/visualizations/basevisualization.ts:6](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/basevisualization.ts#L6)

## Properties

•  **config**: any

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/basevisualization.ts#L7)

___

• `Protected` **dependencies**: any

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:13](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/basevisualization.ts#L13)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/basevisualization.ts#L7)

## Methods

{:.method-highlight}
▸ `Abstract`**dataUpdate**(`data`: any, `elemClass?`: undefined \| string): void

Isomorphic method used on every data update

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | any | array of data values  |
`elemClass?` | undefined \| string | - |

**Returns:** void

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:32](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/basevisualization.ts#L32)

___

{:.method-highlight}
▸ `Abstract`**getDataUpdateFn**(`elemClass?`: undefined \| string): function

Function used to get data update function

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`elemClass?` | undefined \| string | html class for identification  |

**Returns:** function

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:26](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/basevisualization.ts#L26)

___

{:.method-highlight}
▸ **getDependency**(`key`: string): any

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** any

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:34](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/basevisualization.ts#L34)

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
[lib/visualizations/basevisualization.ts:19](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/basevisualization.ts#L19)
