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
| [destroy](#destroy) |
| [getDependency](#getdependency) |
| [setContainer](#setcontainer) |
| [setup](#setup) |

## Constructors

{:.method-highlight}
\+ **new SVGVisualizationWrapper**(`visualization`: [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization), `name`: string, `initialData?`: TwoDPointScatter[] \| TwoDPointLine[]): [visualizations.d3.SVGVisualizationWrapper](../visualizations_d3_svgvisualizationwrapper)

#### Parameters:

Name | Type |
------ | ------ |
`visualization` | [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization) |
`name` | string |
`initialData?` | TwoDPointScatter[] \| TwoDPointLine[] |

**Returns:** [visualizations.d3.SVGVisualizationWrapper](../visualizations_d3_svgvisualizationwrapper)

*Overrides [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization).[constructor](../visualizations_d3_svgbasevisualization#constructor)*

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:13](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/d3/svgvisualizationwrapper.ts#L13)

## Properties

•  **config**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[config](../visualizations_basevisualization#config)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/basevisualization.ts#L8)

___

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[dependencies](../visualizations_basevisualization#dependencies)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/basevisualization.ts#L14)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[elemClass](../visualizations_basevisualization#elemclass)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/basevisualization.ts#L8)

___

• `Private` **name**: string

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:17](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/d3/svgvisualizationwrapper.ts#L17)

___

• `Private` **root**: Element \| null

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:13](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/d3/svgvisualizationwrapper.ts#L13)

___

• `Private` **visualization**: [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization)

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:16](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/d3/svgvisualizationwrapper.ts#L16)

## Accessors

{:.method-highlight}
• get **lab**(): [lab\_index](../lab_index)

**Returns:** [lab\_index](../lab_index)

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:24](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/d3/svgvisualizationwrapper.ts#L24)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[], `elemClass?`: string): null \| (data: any, elemClass: string) => void

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | TwoDPointScatter[] \| TwoDPointLine[] | - |
`elemClass` | string | this.visualization.elemClass |

**Returns:** null \| (data: any, elemClass: string) => void

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[dataUpdate](../visualizations_basevisualization#dataupdate)*

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:48](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/d3/svgvisualizationwrapper.ts#L48)

___

{:.method-highlight}
▸ **destroy**(): void

**Returns:** void

*Inherited from [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization).[destroy](../visualizations_d3_svgbasevisualization#destroy)*

{:.url-source-ref}
[lib/visualizations/d3/svgbase.ts:49](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/d3/svgbase.ts#L49)

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
[lib/visualizations/basevisualization.ts:28](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/basevisualization.ts#L28)

___

{:.method-highlight}
▸ **setContainer**(`containerRef`: HTMLElement \| [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization)): void

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement \| [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization) |

**Returns:** void

*Inherited from [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization).[setContainer](../visualizations_d3_svgbasevisualization#setcontainer)*

{:.url-source-ref}
[lib/visualizations/d3/svgbase.ts:24](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/d3/svgbase.ts#L24)

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
[lib/visualizations/d3/svgvisualizationwrapper.ts:28](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/d3/svgvisualizationwrapper.ts#L28)
