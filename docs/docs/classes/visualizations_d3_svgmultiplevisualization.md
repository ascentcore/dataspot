---
layout: default
title: SVGMultipleVisualization
parent: d3
grand_parent: visualizations
has_children: false
---

# SVGMultipleVisualization

## Hierarchy

* [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization)

  ↳ **visualizations.d3.SVGMultipleVisualization**

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
| [getDependency](#getdependency) |
| [setContainer](#setcontainer) |
| [setup](#setup) |

## Constructors

{:.method-highlight}
\+ **new SVGMultipleVisualization**(`config`: any, `elemClass`: string, `visualizations`: [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization)[]): [visualizations.d3.SVGMultipleVisualization](../visualizations_d3_svgmultiplevisualization)

*Overrides [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization).[constructor](../visualizations_d3_svgbasevisualization#constructor)*

{:.url-source-ref}
[lib/visualizations/d3/svgmultiple.ts:5](https://github.com/ascentcore/dataspot/blob/ef89391/lib/visualizations/d3/svgmultiple.ts#L5)

**Returns:** [visualizations.d3.SVGMultipleVisualization](../visualizations_d3_svgmultiplevisualization)

## Properties

•  **config**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[config](../visualizations_basevisualization#config)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/ef89391/lib/visualizations/basevisualization.ts#L8)

___

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[dependencies](../visualizations_basevisualization#dependencies)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/ef89391/lib/visualizations/basevisualization.ts#L14)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[elemClass](../visualizations_basevisualization#elemclass)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/ef89391/lib/visualizations/basevisualization.ts#L8)

___

• `Private` **visualizations**: { [name:string]: [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization);  }

{:.url-source-ref}
[lib/visualizations/d3/svgmultiple.ts:5](https://github.com/ascentcore/dataspot/blob/ef89391/lib/visualizations/d3/svgmultiple.ts#L5)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[], `elemClass`: string): any

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[dataUpdate](../visualizations_basevisualization#dataupdate)*

{:.url-source-ref}
[lib/visualizations/d3/svgmultiple.ts:39](https://github.com/ascentcore/dataspot/blob/ef89391/lib/visualizations/d3/svgmultiple.ts#L39)

**Returns:** any

___

{:.method-highlight}
▸ **getDependency**(`key`: string): any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[getDependency](../visualizations_basevisualization#getdependency)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/ef89391/lib/visualizations/basevisualization.ts#L31)

**Returns:** any

___

{:.method-highlight}
▸ **setContainer**(`containerRef`: HTMLElement): void

*Overrides [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization).[setContainer](../visualizations_d3_svgbasevisualization#setcontainer)*

{:.url-source-ref}
[lib/visualizations/d3/svgmultiple.ts:32](https://github.com/ascentcore/dataspot/blob/ef89391/lib/visualizations/d3/svgmultiple.ts#L32)

**Returns:** void

___

{:.method-highlight}
▸ **setup**(): void

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[setup](../visualizations_basevisualization#setup)*

{:.url-source-ref}
[lib/visualizations/d3/svgmultiple.ts:28](https://github.com/ascentcore/dataspot/blob/ef89391/lib/visualizations/d3/svgmultiple.ts#L28)

**Returns:** void
