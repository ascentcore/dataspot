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
| [name](#name) |
| [root](#root) |
| [visualization](#visualization) |

| Accessors |
|-----------|
| [lab](#lab) |

| Methods |
|-----------|
| [dataUpdate](#dataupdate) |
| [setup](#setup) |

## Constructors

{:.method-highlight}
\+ **new HTMLVisualizationWrapper**(`visualization`: [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization), `name`: string, `asHtml`: boolean): [visualizations.html.HTMLVisualizationWrapper](../visualizations_html_htmlvisualizationwrapper)

#### Parameters:

Name | Type |
------ | ------ |
`visualization` | [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization) |
`name` | string |
`asHtml` | boolean |

**Returns:** [visualizations.html.HTMLVisualizationWrapper](../visualizations_html_htmlvisualizationwrapper)

{:.url-source-ref}
[lib/visualizations/html/htmlvisualizationwrapper.ts:15](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/html/htmlvisualizationwrapper.ts#L15)

## Properties

• `Private` **asHtml**: boolean

{:.url-source-ref}
[lib/visualizations/html/htmlvisualizationwrapper.ts:17](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/html/htmlvisualizationwrapper.ts#L17)

___

• `Private` **name**: string

{:.url-source-ref}
[lib/visualizations/html/htmlvisualizationwrapper.ts:17](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/html/htmlvisualizationwrapper.ts#L17)

___

• `Private` **root**: Element \| null

{:.url-source-ref}
[lib/visualizations/html/htmlvisualizationwrapper.ts:15](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/html/htmlvisualizationwrapper.ts#L15)

___

• `Private` **visualization**: [visualizations.html.HTMLBaseVisualization](../visualizations_html_htmlbasevisualization)

{:.url-source-ref}
[lib/visualizations/html/htmlvisualizationwrapper.ts:17](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/html/htmlvisualizationwrapper.ts#L17)

## Accessors

{:.method-highlight}
• get **lab**(): [lab\_index](../lab_index)

**Returns:** [lab\_index](../lab_index)

{:.url-source-ref}
[lib/visualizations/html/htmlvisualizationwrapper.ts:19](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/html/htmlvisualizationwrapper.ts#L19)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: any[], `elemClass`: string): Promise\<void>

#### Parameters:

Name | Type |
------ | ------ |
`data` | any[] |
`elemClass` | string |

**Returns:** Promise\<void>

{:.url-source-ref}
[lib/visualizations/html/htmlvisualizationwrapper.ts:40](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/html/htmlvisualizationwrapper.ts#L40)

___

{:.method-highlight}
▸ **setup**(`initialData?`: TwoDPointLine \| TwoDPointScatter): Promise\<void>

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | TwoDPointLine \| TwoDPointScatter |

**Returns:** Promise\<void>

{:.url-source-ref}
[lib/visualizations/html/htmlvisualizationwrapper.ts:23](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/html/htmlvisualizationwrapper.ts#L23)
