---
layout: default
title: HTMLBaseVisualization
parent: html
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [visualizations.html.HTMLBaseVisualization](visualizations_html_htmlbasevisualization)

# HTMLBaseVisualization

## Hierarchy

* [visualizations.BaseVisualization](visualizations_basevisualization)

  ↳ **visualizations.html.HTMLBaseVisualization**

  ↳↳ [visualizations.html.HTMLVisualizationWrapper](visualizations_html_htmlvisualizationwrapper)

  ↳↳ [visualizations.html.Table](visualizations_html_table)

## Index

### Constructors

* [constructor](visualizations_html_htmlbasevisualization#constructor)

### Properties

* [config](visualizations_html_htmlbasevisualization#config)
* [dependencies](visualizations_html_htmlbasevisualization#dependencies)
* [elemClass](visualizations_html_htmlbasevisualization#elemclass)

### Methods

* [dataUpdate](visualizations_html_htmlbasevisualization#dataupdate)
* [getDependency](visualizations_html_htmlbasevisualization#getdependency)
* [injectDOM](visualizations_html_htmlbasevisualization#injectdom)
* [setContainer](visualizations_html_htmlbasevisualization#setcontainer)
* [setup](visualizations_html_htmlbasevisualization#setup)

## Constructors

### constructor

\+ **new HTMLBaseVisualization**(`config`: any, `elemClass`: string): [visualizations.html.HTMLBaseVisualization](visualizations_html_htmlbasevisualization)

*Overrides [visualizations.BaseVisualization](visualizations_basevisualization).[constructor](visualizations_basevisualization#constructor)*

*Defined in [lib/visualizations/html/htmlbase.ts:9](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/html/htmlbase.ts#L9)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | any |
`elemClass` | string |

**Returns:** [visualizations.html.HTMLBaseVisualization](visualizations_html_htmlbasevisualization)

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

▸ `Abstract`**dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[] \| FunctioDefinitionMesh \| any, `elemClass?`: string): (data: TwoDPointScatter[] \| TwoDPointLine[], elemClass: string) => void \| null

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[dataUpdate](visualizations_basevisualization#dataupdate)*

*Defined in [lib/visualizations/basevisualization.ts:26](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/basevisualization.ts#L26)*

Isomorphic method used on every data update

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | TwoDPointScatter[] \| TwoDPointLine[] \| FunctioDefinitionMesh \| any | array of data values  |
`elemClass?` | string | - |

**Returns:** (data: TwoDPointScatter[] \| TwoDPointLine[], elemClass: string) => void \| null

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

*Defined in [lib/visualizations/html/htmlbase.ts:20](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/html/htmlbase.ts#L20)*

#### Parameters:

Name | Type |
------ | ------ |
`document` | any |

**Returns:** void

___

### setContainer

▸ **setContainer**(`containerRef`: HTMLElement \| [visualizations.html.HTMLBaseVisualization](visualizations_html_htmlbasevisualization)): void

*Defined in [lib/visualizations/html/htmlbase.ts:24](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/html/htmlbase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement \| [visualizations.html.HTMLBaseVisualization](visualizations_html_htmlbasevisualization) |

**Returns:** void

___

### setup

▸ `Abstract`**setup**(`initialData?`: any): void

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[setup](visualizations_basevisualization#setup)*

*Defined in [lib/visualizations/basevisualization.ts:20](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/basevisualization.ts#L20)*

Isomorphic method executed once for setting up the visualization and dependencies
that are going to be used by the data update function

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | any |

**Returns:** void
