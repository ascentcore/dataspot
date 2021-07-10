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
| [getDataUpdateFn](#getdataupdatefn) |
| [getDependency](#getdependency) |
| [setContainer](#setcontainer) |
| [setup](#setup) |
| [updateFn](#updatefn) |

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
[lib/visualizations/d3/svgmultiple.ts:5](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/d3/svgmultiple.ts#L5)

## Properties

•  **config**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[config](../visualizations_basevisualization#config)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/basevisualization.ts#L7)

___

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[dependencies](../visualizations_basevisualization#dependencies)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:13](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/basevisualization.ts#L13)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[elemClass](../visualizations_basevisualization#elemclass)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/basevisualization.ts#L7)

___

• `Private` **visualizations**: { [name:string]: [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization);  }

{:.url-source-ref}
[lib/visualizations/d3/svgmultiple.ts:5](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/d3/svgmultiple.ts#L5)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[], `elemClass`: string): void

#### Parameters:

Name | Type |
------ | ------ |
`data` | TwoDPointScatter[] \| TwoDPointLine[] |
`elemClass` | string |

**Returns:** void

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[dataUpdate](../visualizations_basevisualization#dataupdate)*

{:.url-source-ref}
[lib/visualizations/d3/svgmultiple.ts:51](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/d3/svgmultiple.ts#L51)

___

{:.method-highlight}
▸ **destroy**(): void

**Returns:** void

*Overrides [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization).[destroy](../visualizations_d3_svgbasevisualization#destroy)*

{:.url-source-ref}
[lib/visualizations/d3/svgmultiple.ts:58](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/d3/svgmultiple.ts#L58)

___

{:.method-highlight}
▸ **getDataUpdateFn**(`elemClass`: string): function

#### Parameters:

Name | Type |
------ | ------ |
`elemClass` | string |

**Returns:** function

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[getDataUpdateFn](../visualizations_basevisualization#getdataupdatefn)*

{:.url-source-ref}
[lib/visualizations/d3/svgmultiple.ts:44](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/d3/svgmultiple.ts#L44)

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
[lib/visualizations/basevisualization.ts:34](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/basevisualization.ts#L34)

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
[lib/visualizations/d3/svgmultiple.ts:30](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/d3/svgmultiple.ts#L30)

___

{:.method-highlight}
▸ **setup**(`initialData?`: { data: any ; elemClass: string  }[]): void

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`initialData` | { data: any ; elemClass: string  }[] | [] |

**Returns:** void

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[setup](../visualizations_basevisualization#setup)*

{:.url-source-ref}
[lib/visualizations/d3/svgmultiple.ts:38](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/d3/svgmultiple.ts#L38)

___

{:.method-highlight}
▸ `Private`**updateFn**(): void

**Returns:** void

{:.url-source-ref}
[lib/visualizations/d3/svgmultiple.ts:28](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/d3/svgmultiple.ts#L28)
