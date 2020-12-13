---
layout: default
title: HierarchyPlot
parent: d3
grand_parent: visualizations
has_children: false
---

# HierarchyPlot

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [config](#config) |
| [dependencies](#dependencies) |
| [elemClass](#elemclass) |

| Methods |
|-----------|
| [dataUpdate](#dataupdate) |
| [destroy](#destroy) |
| [getDependency](#getdependency) |
| [setContainer](#setcontainer) |
| [setup](#setup) |
| [updateFn](#updatefn) |

## Constructors

{:.method-highlight}
\+ **new HierarchyPlot**(`config`: any, `elemClass?`: string): [visualizations.d3.HierarchyPlot](../visualizations_d3_hierarchyplot)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "hierarchy-elem" |

**Returns:** [visualizations.d3.HierarchyPlot](../visualizations_d3_hierarchyplot)

*Overrides [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization).[constructor](../visualizations_d3_svgbasevisualization#constructor)*

{:.url-source-ref}
[lib/visualizations/d3/hierarchy.ts:3](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/visualizations/d3/hierarchy.ts#L3)

## Properties

•  **config**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[config](../visualizations_basevisualization#config)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/visualizations/basevisualization.ts#L7)

___

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[dependencies](../visualizations_basevisualization#dependencies)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:13](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/visualizations/basevisualization.ts#L13)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[elemClass](../visualizations_basevisualization#elemclass)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/visualizations/basevisualization.ts#L7)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: any, `elemClass?`: string): [updateFn](../visualizations_d3_hierarchyplot#updatefn)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | any | - |
`elemClass` | string | this.elemClass |

**Returns:** [updateFn](../visualizations_d3_hierarchyplot#updatefn)

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[dataUpdate](../visualizations_basevisualization#dataupdate)*

{:.url-source-ref}
[lib/visualizations/d3/hierarchy.ts:86](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/visualizations/d3/hierarchy.ts#L86)

___

{:.method-highlight}
▸ **destroy**(): void

**Returns:** void

*Inherited from [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization).[destroy](../visualizations_d3_svgbasevisualization#destroy)*

{:.url-source-ref}
[lib/visualizations/d3/svgbase.ts:49](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/visualizations/d3/svgbase.ts#L49)

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
[lib/visualizations/basevisualization.ts:27](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/visualizations/basevisualization.ts#L27)

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
[lib/visualizations/d3/svgbase.ts:24](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/visualizations/d3/svgbase.ts#L24)

___

{:.method-highlight}
▸ **setup**(): void

**Returns:** void

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[setup](../visualizations_basevisualization#setup)*

{:.url-source-ref}
[lib/visualizations/d3/hierarchy.ts:8](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/visualizations/d3/hierarchy.ts#L8)

___

{:.method-highlight}
▸ **updateFn**(`data`: any, `elemClass`: string): void

#### Parameters:

Name | Type |
------ | ------ |
`data` | any |
`elemClass` | string |

**Returns:** void

{:.url-source-ref}
[lib/visualizations/d3/hierarchy.ts:10](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/visualizations/d3/hierarchy.ts#L10)
