---
layout: default
title: SVGVisualizationWrapper
parent: d3
grand_parent: visualizations
has_children: false
---

# SVGVisualizationWrapper

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
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
\+ **new SVGVisualizationWrapper**(`visualization`: [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization), `name`: string): [visualizations.d3.SVGVisualizationWrapper](../visualizations_d3_svgvisualizationwrapper)

#### Parameters:

Name | Type |
------ | ------ |
`visualization` | [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization) |
`name` | string |

**Returns:** [visualizations.d3.SVGVisualizationWrapper](../visualizations_d3_svgvisualizationwrapper)

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:15](https://github.com/ascentcore/dataspot/blob/85054f3/lib/visualizations/d3/svgvisualizationwrapper.ts#L15)

## Properties

• `Private` **name**: string

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:17](https://github.com/ascentcore/dataspot/blob/85054f3/lib/visualizations/d3/svgvisualizationwrapper.ts#L17)

___

• `Private` **root**: Element \| null

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:15](https://github.com/ascentcore/dataspot/blob/85054f3/lib/visualizations/d3/svgvisualizationwrapper.ts#L15)

___

• `Private` **visualization**: [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization)

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:17](https://github.com/ascentcore/dataspot/blob/85054f3/lib/visualizations/d3/svgvisualizationwrapper.ts#L17)

## Accessors

{:.method-highlight}
• get **lab**(): [lab\_index](../lab_index)

**Returns:** [lab\_index](../lab_index)

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:19](https://github.com/ascentcore/dataspot/blob/85054f3/lib/visualizations/d3/svgvisualizationwrapper.ts#L19)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[] \| ThreeDPointScatter[], `elemClass`: string): Promise\<void>

#### Parameters:

Name | Type |
------ | ------ |
`data` | TwoDPointScatter[] \| TwoDPointLine[] \| ThreeDPointScatter[] |
`elemClass` | string |

**Returns:** Promise\<void>

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:44](https://github.com/ascentcore/dataspot/blob/85054f3/lib/visualizations/d3/svgvisualizationwrapper.ts#L44)

___

{:.method-highlight}
▸ **setup**(`initialData?`: { data: any ; elemClass: string  }[]): Promise\<void>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`initialData` | { data: any ; elemClass: string  }[] | [] |

**Returns:** Promise\<void>

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:23](https://github.com/ascentcore/dataspot/blob/85054f3/lib/visualizations/d3/svgvisualizationwrapper.ts#L23)
