---
layout: default
title: SVGMultipleVisualization
parent: d3
grand_parent: visualizations
has_children: false
---

# SVGMultipleVisualization

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [config](#config) |
| [dependencies](#dependencies) |
| [elemClass](#elemclass) |
| [visualizations](#visualizations) |

| Methods |
|-----------|
| [dataUpdate](#dataupdate) |
| [destroy](#destroy) |
| [getDependency](#getdependency) |
| [setContainer](#setcontainer) |
| [setup](#setup) |

## Constructors

{:.method-highlight}
\+ **new SVGMultipleVisualization**(`config`: any, `elemClass`: string, `visualizations`: [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization)[]): [visualizations.d3.SVGMultipleVisualization](../visualizations_d3_svgmultiplevisualization)

#### Parameters:

Name | Type |
------ | ------ |
`config` | any |
`elemClass` | string |
`visualizations` | [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization)[] |

**Returns:** [visualizations.d3.SVGMultipleVisualization](../visualizations_d3_svgmultiplevisualization)

*Overrides [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization).[constructor](../visualizations_d3_svgbasevisualization#constructor)*

{:.url-source-ref}
[lib/visualizations/d3/svgmultiple.ts:5](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/d3/svgmultiple.ts#L5)

## Properties

•  **config**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[config](../visualizations_basevisualization#config)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/basevisualization.ts#L7)

___

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[dependencies](../visualizations_basevisualization#dependencies)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:13](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/basevisualization.ts#L13)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[elemClass](../visualizations_basevisualization#elemclass)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/basevisualization.ts#L7)

___

• `Private` **visualizations**: { [name:string]: [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization);  }

{:.url-source-ref}
[lib/visualizations/d3/svgmultiple.ts:5](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/d3/svgmultiple.ts#L5)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[], `elemClass`: string): null \| (data: any, elemClass: string) => void

#### Parameters:

Name | Type |
------ | ------ |
`data` | TwoDPointScatter[] \| TwoDPointLine[] |
`elemClass` | string |

**Returns:** null \| (data: any, elemClass: string) => void

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[dataUpdate](../visualizations_basevisualization#dataupdate)*

{:.url-source-ref}
[lib/visualizations/d3/svgmultiple.ts:40](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/d3/svgmultiple.ts#L40)

___

{:.method-highlight}
▸ **destroy**(): void

**Returns:** void

*Overrides [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization).[destroy](../visualizations_d3_svgbasevisualization#destroy)*

{:.url-source-ref}
[lib/visualizations/d3/svgmultiple.ts:48](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/d3/svgmultiple.ts#L48)

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
[lib/visualizations/basevisualization.ts:27](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/basevisualization.ts#L27)

___

{:.method-highlight}
▸ **setContainer**(`containerRef`: HTMLElement): void

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement |

**Returns:** void

*Overrides [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization).[setContainer](../visualizations_d3_svgbasevisualization#setcontainer)*

{:.url-source-ref}
[lib/visualizations/d3/svgmultiple.ts:32](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/d3/svgmultiple.ts#L32)

___

{:.method-highlight}
▸ **setup**(): void

**Returns:** void

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[setup](../visualizations_basevisualization#setup)*

{:.url-source-ref}
[lib/visualizations/d3/svgmultiple.ts:28](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/visualizations/d3/svgmultiple.ts#L28)
