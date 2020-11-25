---
layout: default
title: HTMLVisualizationWrapper
parent: html
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [visualizations.html.HTMLVisualizationWrapper](visualizations_html_htmlvisualizationwrapper)

# HTMLVisualizationWrapper

## Hierarchy

* [visualizations.html.HTMLBaseVisualization](visualizations_html_htmlbasevisualization)

  ↳ **visualizations.html.HTMLVisualizationWrapper**

## Index

### Constructors

* [constructor](visualizations_html_htmlvisualizationwrapper#constructor)

### Properties

* [asHtml](visualizations_html_htmlvisualizationwrapper#ashtml)
* [config](visualizations_html_htmlvisualizationwrapper#config)
* [dependencies](visualizations_html_htmlvisualizationwrapper#dependencies)
* [elemClass](visualizations_html_htmlvisualizationwrapper#elemclass)
* [name](visualizations_html_htmlvisualizationwrapper#name)
* [root](visualizations_html_htmlvisualizationwrapper#root)
* [visualization](visualizations_html_htmlvisualizationwrapper#visualization)

### Accessors

* [lab](visualizations_html_htmlvisualizationwrapper#lab)

### Methods

* [dataUpdate](visualizations_html_htmlvisualizationwrapper#dataupdate)
* [getDependency](visualizations_html_htmlvisualizationwrapper#getdependency)
* [injectDOM](visualizations_html_htmlvisualizationwrapper#injectdom)
* [setContainer](visualizations_html_htmlvisualizationwrapper#setcontainer)
* [setup](visualizations_html_htmlvisualizationwrapper#setup)

## Constructors

### constructor

\+ **new HTMLVisualizationWrapper**(`visualization`: [visualizations.html.HTMLBaseVisualization](visualizations_html_htmlbasevisualization), `name`: string, `asHtml`: boolean, `initialData?`: TwoDPointScatter[] \| TwoDPointLine[]): [visualizations.html.HTMLVisualizationWrapper](visualizations_html_htmlvisualizationwrapper)

*Overrides [visualizations.html.HTMLBaseVisualization](visualizations_html_htmlbasevisualization).[constructor](visualizations_html_htmlbasevisualization#constructor)*

*Defined in [lib/visualizations/html/htmlvisualizationwrapper.ts:14](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/html/htmlvisualizationwrapper.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`visualization` | [visualizations.html.HTMLBaseVisualization](visualizations_html_htmlbasevisualization) |
`name` | string |
`asHtml` | boolean |
`initialData?` | TwoDPointScatter[] \| TwoDPointLine[] |

**Returns:** [visualizations.html.HTMLVisualizationWrapper](visualizations_html_htmlvisualizationwrapper)

## Properties

### asHtml

• `Private` **asHtml**: boolean

*Defined in [lib/visualizations/html/htmlvisualizationwrapper.ts:19](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/html/htmlvisualizationwrapper.ts#L19)*

___

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

___

### name

• `Private` **name**: string

*Defined in [lib/visualizations/html/htmlvisualizationwrapper.ts:18](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/html/htmlvisualizationwrapper.ts#L18)*

___

### root

• `Private` **root**: Element \| null

*Defined in [lib/visualizations/html/htmlvisualizationwrapper.ts:14](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/html/htmlvisualizationwrapper.ts#L14)*

___

### visualization

• `Private` **visualization**: [visualizations.html.HTMLBaseVisualization](visualizations_html_htmlbasevisualization)

*Defined in [lib/visualizations/html/htmlvisualizationwrapper.ts:17](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/html/htmlvisualizationwrapper.ts#L17)*

## Accessors

### lab

• get **lab**(): [lab\_index](lab_index)

*Defined in [lib/visualizations/html/htmlvisualizationwrapper.ts:26](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/html/htmlvisualizationwrapper.ts#L26)*

**Returns:** [lab\_index](lab_index)

## Methods

### dataUpdate

▸ **dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[], `elemClass?`: string): function

*Overrides [visualizations.BaseVisualization](visualizations_basevisualization).[dataUpdate](visualizations_basevisualization#dataupdate)*

*Defined in [lib/visualizations/html/htmlvisualizationwrapper.ts:52](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/html/htmlvisualizationwrapper.ts#L52)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | TwoDPointScatter[] \| TwoDPointLine[] | - |
`elemClass` | string | this.visualization.elemClass |

**Returns:** function

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

▸ **setup**(`initialData?`: any): void

*Overrides [visualizations.BaseVisualization](visualizations_basevisualization).[setup](visualizations_basevisualization#setup)*

*Defined in [lib/visualizations/html/htmlvisualizationwrapper.ts:30](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/html/htmlvisualizationwrapper.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | any |

**Returns:** void
