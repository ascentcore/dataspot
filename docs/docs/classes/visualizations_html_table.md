---
layout: default
title: Table
parent: html
grand_parent: visualizations
has_children: false
---

# Table

## Hierarchy

* [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization)

  ↳ **visualizations.html.Table**

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

*Overrides [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization).[constructor](../visualizations_html_htmlbasevisualization#constructor)*

{:.url-source-ref}
[lib/visualizations/html/table.ts:4](https://github.com/ascentcore/dataspot/blob/0893946/lib/visualizations/html/table.ts#L4)

**Returns:** [visualizations.html.Table](../visualizations_html_table)

## Properties

•  **config**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[config](../visualizations_basevisualization#config)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/0893946/lib/visualizations/basevisualization.ts#L8)

___

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[dependencies](../visualizations_basevisualization#dependencies)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/0893946/lib/visualizations/basevisualization.ts#L14)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[elemClass](../visualizations_basevisualization#elemclass)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/0893946/lib/visualizations/basevisualization.ts#L8)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: TwoDPointLine[] \| TwoDPointScatter[], `elemClass?`: string): [updateFn](../visualizations_html_table#updatefn)

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[dataUpdate](../visualizations_basevisualization#dataupdate)*

{:.url-source-ref}
[lib/visualizations/html/table.ts:49](https://github.com/ascentcore/dataspot/blob/0893946/lib/visualizations/html/table.ts#L49)

**Returns:** [updateFn](../visualizations_html_table#updatefn)

___

{:.method-highlight}
▸ **getDependency**(`key`: string): any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[getDependency](../visualizations_basevisualization#getdependency)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/0893946/lib/visualizations/basevisualization.ts#L31)

**Returns:** any

___

{:.method-highlight}
▸ **injectDOM**(`document`: any): void

*Inherited from [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization).[injectDOM](../visualizations_html_htmlbasevisualization#injectdom)*

{:.url-source-ref}
[lib/visualizations/html/htmlbase.ts:20](https://github.com/ascentcore/dataspot/blob/0893946/lib/visualizations/html/htmlbase.ts#L20)

**Returns:** void

___

{:.method-highlight}
▸ **setContainer**(`containerRef`: HTMLElement \| [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization)): void

*Inherited from [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization).[setContainer](../visualizations_html_htmlbasevisualization#setcontainer)*

{:.url-source-ref}
[lib/visualizations/html/htmlbase.ts:24](https://github.com/ascentcore/dataspot/blob/0893946/lib/visualizations/html/htmlbase.ts#L24)

**Returns:** void

___

{:.method-highlight}
▸ **setup**(): void

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[setup](../visualizations_basevisualization#setup)*

{:.url-source-ref}
[lib/visualizations/html/table.ts:9](https://github.com/ascentcore/dataspot/blob/0893946/lib/visualizations/html/table.ts#L9)

**Returns:** void

___

{:.method-highlight}
▸ `Private`**updateFn**(`data`: TwoDPointLine[] \| TwoDPointScatter[], `elemClass`: string): void

{:.url-source-ref}
[lib/visualizations/html/table.ts:11](https://github.com/ascentcore/dataspot/blob/0893946/lib/visualizations/html/table.ts#L11)

**Returns:** void
