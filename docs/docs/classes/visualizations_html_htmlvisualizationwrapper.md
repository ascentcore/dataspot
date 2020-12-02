---
layout: default
title: HTMLVisualizationWrapper
parent: html
grand_parent: visualizations
has_children: false
---

# HTMLVisualizationWrapper

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [asHtml](#ashtml) |
| [config](#config) |
| [dependencies](#dependencies) |
| [elemClass](#elemclass) |
| [name](#name) |
| [root](#root) |
| [visualization](#visualization) |

| Accessors |
|-----------|
| [lab](#lab) |

| Methods |
|-----------|
| [dataUpdate](#dataupdate) |
| [getDependency](#getdependency) |
| [injectDOM](#injectdom) |
| [setContainer](#setcontainer) |
| [setup](#setup) |

## Constructors

{:.method-highlight}
\+ **new HTMLVisualizationWrapper**(`visualization`: [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization), `name`: string, `asHtml`: boolean, `initialData?`: TwoDPointScatter[] \| TwoDPointLine[]): [visualizations.html.HTMLVisualizationWrapper](../visualizations_html_htmlvisualizationwrapper)

#### Parameters:

Name | Type |
------ | ------ |
`visualization` | [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization) |
`name` | string |
`asHtml` | boolean |
`initialData?` | TwoDPointScatter[] \| TwoDPointLine[] |

**Returns:** [visualizations.html.HTMLVisualizationWrapper](../visualizations_html_htmlvisualizationwrapper)

*Overrides [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization).[constructor](../visualizations_html_htmlbasevisualization#constructor)*

{:.url-source-ref}
[lib/visualizations/html/htmlvisualizationwrapper.ts:14](https://github.com/ascentcore/dataspot/blob/12500c0/lib/visualizations/html/htmlvisualizationwrapper.ts#L14)

## Properties

• `Private` **asHtml**: boolean

{:.url-source-ref}
[lib/visualizations/html/htmlvisualizationwrapper.ts:19](https://github.com/ascentcore/dataspot/blob/12500c0/lib/visualizations/html/htmlvisualizationwrapper.ts#L19)

___

•  **config**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[config](../visualizations_basevisualization#config)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/12500c0/lib/visualizations/basevisualization.ts#L8)

___

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[dependencies](../visualizations_basevisualization#dependencies)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/12500c0/lib/visualizations/basevisualization.ts#L14)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[elemClass](../visualizations_basevisualization#elemclass)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/12500c0/lib/visualizations/basevisualization.ts#L8)

___

• `Private` **name**: string

{:.url-source-ref}
[lib/visualizations/html/htmlvisualizationwrapper.ts:18](https://github.com/ascentcore/dataspot/blob/12500c0/lib/visualizations/html/htmlvisualizationwrapper.ts#L18)

___

• `Private` **root**: Element \| null

{:.url-source-ref}
[lib/visualizations/html/htmlvisualizationwrapper.ts:14](https://github.com/ascentcore/dataspot/blob/12500c0/lib/visualizations/html/htmlvisualizationwrapper.ts#L14)

___

• `Private` **visualization**: [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization)

{:.url-source-ref}
[lib/visualizations/html/htmlvisualizationwrapper.ts:17](https://github.com/ascentcore/dataspot/blob/12500c0/lib/visualizations/html/htmlvisualizationwrapper.ts#L17)

## Accessors

{:.method-highlight}
• get **lab**(): [lab\_index](../lab_index)

**Returns:** [lab\_index](../lab_index)

{:.url-source-ref}
[lib/visualizations/html/htmlvisualizationwrapper.ts:26](https://github.com/ascentcore/dataspot/blob/12500c0/lib/visualizations/html/htmlvisualizationwrapper.ts#L26)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[], `elemClass?`: string): function

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | TwoDPointScatter[] \| TwoDPointLine[] | - |
`elemClass` | string | this.visualization.elemClass |

**Returns:** function

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[dataUpdate](../visualizations_basevisualization#dataupdate)*

{:.url-source-ref}
[lib/visualizations/html/htmlvisualizationwrapper.ts:52](https://github.com/ascentcore/dataspot/blob/12500c0/lib/visualizations/html/htmlvisualizationwrapper.ts#L52)

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
[lib/visualizations/basevisualization.ts:28](https://github.com/ascentcore/dataspot/blob/12500c0/lib/visualizations/basevisualization.ts#L28)

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
[lib/visualizations/html/htmlbase.ts:20](https://github.com/ascentcore/dataspot/blob/12500c0/lib/visualizations/html/htmlbase.ts#L20)

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
[lib/visualizations/html/htmlbase.ts:24](https://github.com/ascentcore/dataspot/blob/12500c0/lib/visualizations/html/htmlbase.ts#L24)

___

{:.method-highlight}
▸ **setup**(`initialData?`: any): void

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | any |

**Returns:** void

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[setup](../visualizations_basevisualization#setup)*

{:.url-source-ref}
[lib/visualizations/html/htmlvisualizationwrapper.ts:30](https://github.com/ascentcore/dataspot/blob/12500c0/lib/visualizations/html/htmlvisualizationwrapper.ts#L30)
