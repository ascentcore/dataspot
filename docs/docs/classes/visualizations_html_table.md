---
layout: default
title: Table
parent: html
grand_parent: visualizations
has_children: false
---

# Table

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
| [injectDOM](#injectdom) |
| [setContainer](#setcontainer) |
| [setup](#setup) |
| [updateFn](#updatefn) |

## Constructors

{:.method-highlight}
\+ **new Table**(`config`: any, `elemClass?`: string): [visualizations.html.Table](../visualizations_html_table)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "table-elem" |

**Returns:** [visualizations.html.Table](../visualizations_html_table)

*Overrides [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization).[constructor](../visualizations_html_htmlbasevisualization#constructor)*

{:.url-source-ref}
[lib/visualizations/html/table.ts:3](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/html/table.ts#L3)

## Properties

•  **config**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[config](../visualizations_basevisualization#config)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/basevisualization.ts#L7)

___

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[dependencies](../visualizations_basevisualization#dependencies)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:13](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/basevisualization.ts#L13)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[elemClass](../visualizations_basevisualization#elemclass)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/basevisualization.ts#L7)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: any[], `elemClass?`: string): [updateFn](../visualizations_html_table#updatefn)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | any[] | - |
`elemClass` | string | this.elemClass |

**Returns:** [updateFn](../visualizations_html_table#updatefn)

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[dataUpdate](../visualizations_basevisualization#dataupdate)*

{:.url-source-ref}
[lib/visualizations/html/table.ts:48](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/html/table.ts#L48)

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
[lib/visualizations/basevisualization.ts:27](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/basevisualization.ts#L27)

___

{:.method-highlight}
▸ **injectDOM**(`document`: any): void

#### Parameters:

Name | Type |
------ | ------ |
`document` | any |

**Returns:** void

*Inherited from [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization).[injectDOM](../visualizations_html_htmlbasevisualization#injectdom)*

{:.url-source-ref}
[lib/visualizations/html/htmlbase.ts:20](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/html/htmlbase.ts#L20)

___

{:.method-highlight}
▸ **setContainer**(`containerRef`: HTMLElement \| [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization)): void

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement \| [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization) |

**Returns:** void

*Inherited from [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization).[setContainer](../visualizations_html_htmlbasevisualization#setcontainer)*

{:.url-source-ref}
[lib/visualizations/html/htmlbase.ts:24](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/html/htmlbase.ts#L24)

___

{:.method-highlight}
▸ **setup**(): void

**Returns:** void

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[setup](../visualizations_basevisualization#setup)*

{:.url-source-ref}
[lib/visualizations/html/table.ts:8](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/html/table.ts#L8)

___

{:.method-highlight}
▸ `Private`**updateFn**(`data`: any[], `elemClass`: string): void

#### Parameters:

Name | Type |
------ | ------ |
`data` | any[] |
`elemClass` | string |

**Returns:** void

{:.url-source-ref}
[lib/visualizations/html/table.ts:10](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/html/table.ts#L10)
