---
layout: default
title: Table
parent: html
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [visualizations.html.Table](visualizations_html_table)

# Table

## Hierarchy

* [visualizations.html.HTMLBaseVisualization](visualizations_html_htmlbasevisualization)

  ↳ **visualizations.html.Table**

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

\+ **new Table**(`config`: any, `elemClass?`: string): [visualizations.html.Table](visualizations_html_table)

*Overrides [visualizations.html.HTMLBaseVisualization](visualizations_html_htmlbasevisualization).[constructor](visualizations_html_htmlbasevisualization#constructor)*

*Defined in [lib/visualizations/html/table.ts:4](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/html/table.ts#L4)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "table-elem" |

**Returns:** [visualizations.html.Table](visualizations_html_table)

## Properties

### config

•  **config**: any

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[config](visualizations_basevisualization#config)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/basevisualization.ts#L8)*

___

### dependencies

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[dependencies](visualizations_basevisualization#dependencies)*

*Defined in [lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/basevisualization.ts#L14)*

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

### elemClass

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[elemClass](visualizations_basevisualization#elemclass)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/basevisualization.ts#L8)*

## Methods

### dataUpdate

▸ **dataUpdate**(`data`: TwoDPointLine[] \| TwoDPointScatter[], `elemClass?`: string): [updateFn](visualizations_html_table#updatefn)

*Overrides [visualizations.BaseVisualization](visualizations_basevisualization).[dataUpdate](visualizations_basevisualization#dataupdate)*

*Defined in [lib/visualizations/html/table.ts:49](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/html/table.ts#L49)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | TwoDPointLine[] \| TwoDPointScatter[] | - |
`elemClass` | string | this.elemClass |

**Returns:** [updateFn](visualizations_html_table#updatefn)

___

### getDependency

▸ **getDependency**(`key`: string): any

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[getDependency](visualizations_basevisualization#getdependency)*

*Defined in [lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/basevisualization.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** any

___

### injectDOM

▸ **injectDOM**(`document`: any): void

*Inherited from [visualizations.html.HTMLBaseVisualization](visualizations_html_htmlbasevisualization).[injectDOM](visualizations_html_htmlbasevisualization#injectdom)*

*Defined in [lib/visualizations/html/htmlbase.ts:20](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/html/htmlbase.ts#L20)*

#### Parameters:

Name | Type |
------ | ------ |
`document` | any |

**Returns:** void

___

### setContainer

▸ **setContainer**(`containerRef`: HTMLElement \| [visualizations.html.HTMLBaseVisualization](visualizations_html_htmlbasevisualization)): void

*Inherited from [visualizations.html.HTMLBaseVisualization](visualizations_html_htmlbasevisualization).[setContainer](visualizations_html_htmlbasevisualization#setcontainer)*

*Defined in [lib/visualizations/html/htmlbase.ts:24](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/html/htmlbase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement \| [visualizations.html.HTMLBaseVisualization](visualizations_html_htmlbasevisualization) |

**Returns:** void

___

### setup

▸ **setup**(): void

*Overrides [visualizations.BaseVisualization](visualizations_basevisualization).[setup](visualizations_basevisualization#setup)*

*Defined in [lib/visualizations/html/table.ts:9](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/html/table.ts#L9)*

**Returns:** void

___

### updateFn

▸ `Private`**updateFn**(`data`: TwoDPointLine[] \| TwoDPointScatter[], `elemClass`: string): void

*Defined in [lib/visualizations/html/table.ts:11](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/html/table.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | TwoDPointLine[] \| TwoDPointScatter[] |
`elemClass` | string |

**Returns:** void
