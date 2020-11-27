---
layout: default
title: SVGVisualizationWrapper
parent: d3
grand_parent: visualizations
has_children: false
---

# SVGVisualizationWrapper

## Hierarchy

* [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization)

  ↳ **visualizations.d3.SVGVisualizationWrapper**

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
| [getDependency](#getdependency) |
| [setContainer](#setcontainer) |
| [setup](#setup) |

## Constructors

{:.method-highlight}
\+ **new SVGVisualizationWrapper**(`visualization`: [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization), `name`: string, `initialData?`: TwoDPointScatter[] \| TwoDPointLine[]): [visualizations.d3.SVGVisualizationWrapper](visualizations_d3_svgvisualizationwrapper)

*Overrides [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization).[constructor](visualizations_d3_svgbasevisualization#constructor)*

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:13](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/d3/svgvisualizationwrapper.ts#L13)

**Returns:** [visualizations.d3.SVGVisualizationWrapper](visualizations_d3_svgvisualizationwrapper)

## Properties

•  **config**: any

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[config](visualizations_basevisualization#config)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/basevisualization.ts#L8)

___

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[dependencies](visualizations_basevisualization#dependencies)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/basevisualization.ts#L14)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[elemClass](visualizations_basevisualization#elemclass)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/basevisualization.ts#L8)

___

• `Private` **name**: string

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:17](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/d3/svgvisualizationwrapper.ts#L17)

___

• `Private` **root**: Element \| null

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:13](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/d3/svgvisualizationwrapper.ts#L13)

___

• `Private` **visualization**: [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization)

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:16](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/d3/svgvisualizationwrapper.ts#L16)

## Accessors

{:.method-highlight}
• get **lab**(): [lab\_index](lab_index)

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:24](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/d3/svgvisualizationwrapper.ts#L24)

**Returns:** [lab\_index](lab_index)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[], `elemClass?`: string): function

*Overrides [visualizations.BaseVisualization](visualizations_basevisualization).[dataUpdate](visualizations_basevisualization#dataupdate)*

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:48](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/d3/svgvisualizationwrapper.ts#L48)

**Returns:** function

___

{:.method-highlight}
▸ **getDependency**(`key`: string): any

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[getDependency](visualizations_basevisualization#getdependency)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/basevisualization.ts#L31)

**Returns:** any

___

{:.method-highlight}
▸ **setContainer**(`containerRef`: HTMLElement \| [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization)): void

*Inherited from [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization).[setContainer](visualizations_d3_svgbasevisualization#setcontainer)*

{:.url-source-ref}
[lib/visualizations/d3/svgbase.ts:24](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/d3/svgbase.ts#L24)

**Returns:** void

___

{:.method-highlight}
▸ **setup**(`initialData?`: any): void

*Overrides [visualizations.BaseVisualization](visualizations_basevisualization).[setup](visualizations_basevisualization#setup)*

{:.url-source-ref}
[lib/visualizations/d3/svgvisualizationwrapper.ts:28](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/d3/svgvisualizationwrapper.ts#L28)

**Returns:** void
