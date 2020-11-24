---
layout: default
title: table
parent: html
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / visualizations.html.table

# table

## Hierarchy

* [visualizations.html.htmlbase](visualizations_html_htmlbase.md)

  ↳ **visualizations.html.table**

## Index

### Constructors

* [constructor](visualizations_html_table.md#constructor)

### Properties

* [config](visualizations_html_table.md#config)
* [dependencies](visualizations_html_table.md#dependencies)
* [elemClass](visualizations_html_table.md#elemclass)

### Methods

* [dataUpdate](visualizations_html_table.md#dataupdate)
* [getDependency](visualizations_html_table.md#getdependency)
* [injectDOM](visualizations_html_table.md#injectdom)
* [setContainer](visualizations_html_table.md#setcontainer)
* [setup](visualizations_html_table.md#setup)
* [updateFn](visualizations_html_table.md#updatefn)

## Constructors

### constructor

\+ **new Table**(`config`: any, `elemClass?`: string): [visualizations.html.table](visualizations_html_table.md)

*Overrides [visualizations.html.htmlbase](visualizations_html_htmlbase.md).[constructor](visualizations_html_htmlbase.md#constructor)*

*Defined in [lib/visualizations/html/table.ts:4](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/html/table.ts#L4)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "table-elem" |

**Returns:** [visualizations.html.table](visualizations_html_table.md)

## Properties

### config

•  **config**: any

*Inherited from [visualizations.basevisualization](visualizations_basevisualization.md).[config](visualizations_basevisualization.md#config)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/basevisualization.ts#L8)*

___

### dependencies

• `Protected` **dependencies**: any

*Inherited from [visualizations.basevisualization](visualizations_basevisualization.md).[dependencies](visualizations_basevisualization.md#dependencies)*

*Defined in [lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/basevisualization.ts#L14)*

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

### elemClass

•  **elemClass**: string

*Inherited from [visualizations.basevisualization](visualizations_basevisualization.md).[elemClass](visualizations_basevisualization.md#elemclass)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/basevisualization.ts#L8)*

## Methods

### dataUpdate

▸ **dataUpdate**(`data`: TwoDPointLine[] \| TwoDPointScatter[], `elemClass?`: string): [updateFn](visualizations_html_table.md#updatefn)

*Overrides [visualizations.basevisualization](visualizations_basevisualization.md).[dataUpdate](visualizations_basevisualization.md#dataupdate)*

*Defined in [lib/visualizations/html/table.ts:49](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/html/table.ts#L49)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | TwoDPointLine[] \| TwoDPointScatter[] | - |
`elemClass` | string | this.elemClass |

**Returns:** [updateFn](visualizations_html_table.md#updatefn)

___

### getDependency

▸ **getDependency**(`key`: string): any

*Inherited from [visualizations.basevisualization](visualizations_basevisualization.md).[getDependency](visualizations_basevisualization.md#getdependency)*

*Defined in [lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/basevisualization.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** any

___

### injectDOM

▸ **injectDOM**(`document`: any): void

*Inherited from [visualizations.html.htmlbase](visualizations_html_htmlbase.md).[injectDOM](visualizations_html_htmlbase.md#injectdom)*

*Defined in [lib/visualizations/html/htmlbase.ts:20](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/html/htmlbase.ts#L20)*

#### Parameters:

Name | Type |
------ | ------ |
`document` | any |

**Returns:** void

___

### setContainer

▸ **setContainer**(`containerRef`: HTMLElement \| [visualizations.html.htmlbase](visualizations_html_htmlbase.md)): void

*Inherited from [visualizations.html.htmlbase](visualizations_html_htmlbase.md).[setContainer](visualizations_html_htmlbase.md#setcontainer)*

*Defined in [lib/visualizations/html/htmlbase.ts:24](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/html/htmlbase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement \| [visualizations.html.htmlbase](visualizations_html_htmlbase.md) |

**Returns:** void

___

### setup

▸ **setup**(): void

*Overrides [visualizations.basevisualization](visualizations_basevisualization.md).[setup](visualizations_basevisualization.md#setup)*

*Defined in [lib/visualizations/html/table.ts:9](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/html/table.ts#L9)*

**Returns:** void

___

### updateFn

▸ `Private`**updateFn**(`data`: TwoDPointLine[] \| TwoDPointScatter[], `elemClass`: string): void

*Defined in [lib/visualizations/html/table.ts:11](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/html/table.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | TwoDPointLine[] \| TwoDPointScatter[] |
`elemClass` | string |

**Returns:** void
