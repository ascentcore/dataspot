---
layout: default
title: Axis
parent: d3
grand_parent: visualizations
has_children: false
---

# Axis

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
| [getDataUpdateFn](#getdataupdatefn) |
| [getDependency](#getdependency) |
| [setContainer](#setcontainer) |
| [setup](#setup) |
| [updateFn](#updatefn) |

## Constructors

{:.method-highlight}
\+ **new Axis**(`config`: any, `elemClass?`: string): [visualizations.d3.Axis](../visualizations_d3_axis)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "axis-elem" |

**Returns:** [visualizations.d3.Axis](../visualizations_d3_axis)

*Overrides [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization).[constructor](../visualizations_d3_svgbasevisualization#constructor)*

{:.url-source-ref}
[lib/visualizations/d3/axis.ts:4](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/d3/axis.ts#L4)

## Properties

•  **config**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[config](../visualizations_basevisualization#config)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/basevisualization.ts#L7)

___

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[dependencies](../visualizations_basevisualization#dependencies)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:13](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/basevisualization.ts#L13)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[elemClass](../visualizations_basevisualization#elemclass)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/basevisualization.ts#L7)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: TwoDPointLine[] \| TwoDPointScatter[]): void

#### Parameters:

Name | Type |
------ | ------ |
`data` | TwoDPointLine[] \| TwoDPointScatter[] |

**Returns:** void

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[dataUpdate](../visualizations_basevisualization#dataupdate)*

{:.url-source-ref}
[lib/visualizations/d3/axis.ts:110](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/d3/axis.ts#L110)

___

{:.method-highlight}
▸ **destroy**(): void

**Returns:** void

*Inherited from [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization).[destroy](../visualizations_d3_svgbasevisualization#destroy)*

{:.url-source-ref}
[lib/visualizations/d3/svgbase.ts:49](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/d3/svgbase.ts#L49)

___

{:.method-highlight}
▸ **getDataUpdateFn**(): [updateFn](../visualizations_d3_axis#updatefn)

**Returns:** [updateFn](../visualizations_d3_axis#updatefn)

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[getDataUpdateFn](../visualizations_basevisualization#getdataupdatefn)*

{:.url-source-ref}
[lib/visualizations/d3/axis.ts:106](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/d3/axis.ts#L106)

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
[lib/visualizations/basevisualization.ts:34](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/basevisualization.ts#L34)

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
[lib/visualizations/d3/svgbase.ts:24](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/d3/svgbase.ts#L24)

___

{:.method-highlight}
▸ **setup**(`initialData?`: TwoDPointLine[] \| TwoDPointScatter[]): void

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | TwoDPointLine[] \| TwoDPointScatter[] |

**Returns:** void

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[setup](../visualizations_basevisualization#setup)*

{:.url-source-ref}
[lib/visualizations/d3/axis.ts:62](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/d3/axis.ts#L62)

___

{:.method-highlight}
▸ `Private`**updateFn**(`data`: TwoDPointLine[] \| TwoDPointScatter[], `elemClass`: string): void

#### Parameters:

Name | Type |
------ | ------ |
`data` | TwoDPointLine[] \| TwoDPointScatter[] |
`elemClass` | string |

**Returns:** void

{:.url-source-ref}
[lib/visualizations/d3/axis.ts:9](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/visualizations/d3/axis.ts#L9)
