---
layout: default
title: HTMLBaseVisualization
parent: html
grand_parent: visualizations
has_children: false
---

# HTMLBaseVisualization

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
| [injectDOM](#injectdom) |
| [setContainer](#setcontainer) |
| [setup](#setup) |

## Constructors

{:.method-highlight}
\+ **new HTMLBaseVisualization**(`config`: any, `elemClass`: string): [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization)

#### Parameters:

Name | Type |
------ | ------ |
`config` | any |
`elemClass` | string |

**Returns:** [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization)

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[constructor](../visualizations_basevisualization#constructor)*

{:.url-source-ref}
[lib/visualizations/html/htmlbase.ts:9](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/html/htmlbase.ts#L9)

## Properties

•  **config**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[config](../visualizations_basevisualization#config)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/basevisualization.ts#L7)

___

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[dependencies](../visualizations_basevisualization#dependencies)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:13](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/basevisualization.ts#L13)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[elemClass](../visualizations_basevisualization#elemclass)*

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

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[dataUpdate](../visualizations_basevisualization#dataupdate)*

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

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[getDataUpdateFn](../visualizations_basevisualization#getdataupdatefn)*

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

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[getDependency](../visualizations_basevisualization#getdependency)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:34](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/basevisualization.ts#L34)

___

{:.method-highlight}
▸ **injectDOM**(`document`: any): void

#### Parameters:

Name | Type |
------ | ------ |
`document` | any |

**Returns:** void

{:.url-source-ref}
[lib/visualizations/html/htmlbase.ts:20](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/html/htmlbase.ts#L20)

___

{:.method-highlight}
▸ **setContainer**(`containerRef`: HTMLElement \| [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization)): void

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement \| [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization) |

**Returns:** void

{:.url-source-ref}
[lib/visualizations/html/htmlbase.ts:24](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/html/htmlbase.ts#L24)

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

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[setup](../visualizations_basevisualization#setup)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:19](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/basevisualization.ts#L19)
