---
layout: default
title: table
parent: html
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [visualizations.html.table](visualizations_html_table)

# table

## Hierarchy

* [visualizations.html.htmlbase](visualizations_html_htmlbase)

  ↳ **visualizations.html.table**

## Index

### Constructors

* [constructor](visualizations_html_table#constructor)

### Properties

* [config](visualizations_html_table#config)
* [dependencies](visualizations_html_table#dependencies)
* [elemClass](visualizations_html_table#elemclass)

### Methods

* [dataUpdate](visualizations_html_table#dataupdate)
* [getDependency](visualizations_html_table#getdependency)
* [injectDOM](visualizations_html_table#injectdom)
* [setContainer](visualizations_html_table#setcontainer)
* [setup](visualizations_html_table#setup)
* [updateFn](visualizations_html_table#updatefn)

## Constructors

### constructor

\+ **new Table**(`config`: any, `elemClass?`: string): [visualizations.html.table](visualizations_html_table)

*Overrides [visualizations.html.htmlbase](visualizations_html_htmlbase).[constructor](visualizations_html_htmlbase#constructor)*

*Defined in [lib/visualizations/html/table.ts:4](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/html/table.ts#L4)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "table-elem" |

**Returns:** [visualizations.html.table](visualizations_html_table)

## Properties

### config

•  **config**: any

*Inherited from [visualizations.basevisualization](visualizations_basevisualization).[config](visualizations_basevisualization#config)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/basevisualization.ts#L8)*

___

### dependencies

• `Protected` **dependencies**: any

*Inherited from [visualizations.basevisualization](visualizations_basevisualization).[dependencies](visualizations_basevisualization#dependencies)*

*Defined in [lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/basevisualization.ts#L14)*

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

### elemClass

•  **elemClass**: string

*Inherited from [visualizations.basevisualization](visualizations_basevisualization).[elemClass](visualizations_basevisualization#elemclass)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/basevisualization.ts#L8)*

## Methods

### dataUpdate

▸ **dataUpdate**(`data`: TwoDPointLine[] \| TwoDPointScatter[], `elemClass?`: string): [updateFn](visualizations_html_table#updatefn)

*Overrides [visualizations.basevisualization](visualizations_basevisualization).[dataUpdate](visualizations_basevisualization#dataupdate)*

*Defined in [lib/visualizations/html/table.ts:49](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/html/table.ts#L49)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | TwoDPointLine[] \| TwoDPointScatter[] | - |
`elemClass` | string | this.elemClass |

**Returns:** [updateFn](visualizations_html_table#updatefn)

___

### getDependency

▸ **getDependency**(`key`: string): any

*Inherited from [visualizations.basevisualization](visualizations_basevisualization).[getDependency](visualizations_basevisualization#getdependency)*

*Defined in [lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/basevisualization.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** any

___

### injectDOM

▸ **injectDOM**(`document`: any): void

*Inherited from [visualizations.html.htmlbase](visualizations_html_htmlbase).[injectDOM](visualizations_html_htmlbase#injectdom)*

*Defined in [lib/visualizations/html/htmlbase.ts:20](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/html/htmlbase.ts#L20)*

#### Parameters:

Name | Type |
------ | ------ |
`document` | any |

**Returns:** void

___

### setContainer

▸ **setContainer**(`containerRef`: HTMLElement \| [visualizations.html.htmlbase](visualizations_html_htmlbase)): void

*Inherited from [visualizations.html.htmlbase](visualizations_html_htmlbase).[setContainer](visualizations_html_htmlbase#setcontainer)*

*Defined in [lib/visualizations/html/htmlbase.ts:24](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/html/htmlbase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement \| [visualizations.html.htmlbase](visualizations_html_htmlbase) |

**Returns:** void

___

### setup

▸ **setup**(): void

*Overrides [visualizations.basevisualization](visualizations_basevisualization).[setup](visualizations_basevisualization#setup)*

*Defined in [lib/visualizations/html/table.ts:9](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/html/table.ts#L9)*

**Returns:** void

___

### updateFn

▸ `Private`**updateFn**(`data`: TwoDPointLine[] \| TwoDPointScatter[], `elemClass`: string): void

*Defined in [lib/visualizations/html/table.ts:11](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/html/table.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | TwoDPointLine[] \| TwoDPointScatter[] |
`elemClass` | string |

**Returns:** void
