---
layout: default
title: SVGMultipleVisualization
parent: d3
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [visualizations.d3.SVGMultipleVisualization](visualizations_d3_svgmultiplevisualization)

# SVGMultipleVisualization

## Hierarchy

* [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization)

  ↳ **visualizations.d3.SVGMultipleVisualization**

## Index

### Constructors

* [constructor](visualizations_d3_svgmultiplevisualization#constructor)

### Properties

* [config](visualizations_d3_svgmultiplevisualization#config)
* [dependencies](visualizations_d3_svgmultiplevisualization#dependencies)
* [elemClass](visualizations_d3_svgmultiplevisualization#elemclass)
* [visualizations](visualizations_d3_svgmultiplevisualization#visualizations)

### Methods

* [dataUpdate](visualizations_d3_svgmultiplevisualization#dataupdate)
* [getDependency](visualizations_d3_svgmultiplevisualization#getdependency)
* [setContainer](visualizations_d3_svgmultiplevisualization#setcontainer)
* [setup](visualizations_d3_svgmultiplevisualization#setup)

## Constructors

### constructor

\+ **new SVGMultipleVisualization**(`config`: any, `elemClass`: string, `visualizations`: [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization)[]): [visualizations.d3.SVGMultipleVisualization](visualizations_d3_svgmultiplevisualization)

*Overrides [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization).[constructor](visualizations_d3_svgbasevisualization#constructor)*

*Defined in [lib/visualizations/d3/svgmultiple.ts:5](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/visualizations/d3/svgmultiple.ts#L5)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | any |
`elemClass` | string |
`visualizations` | [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization)[] |

**Returns:** [visualizations.d3.SVGMultipleVisualization](visualizations_d3_svgmultiplevisualization)

## Properties

### config

•  **config**: any

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[config](visualizations_basevisualization#config)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/visualizations/basevisualization.ts#L8)*

___

### dependencies

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[dependencies](visualizations_basevisualization#dependencies)*

*Defined in [lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/visualizations/basevisualization.ts#L14)*

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

### elemClass

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[elemClass](visualizations_basevisualization#elemclass)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/visualizations/basevisualization.ts#L8)*

___

### visualizations

• `Private` **visualizations**: { [name:string]: [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization);  }

*Defined in [lib/visualizations/d3/svgmultiple.ts:5](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/visualizations/d3/svgmultiple.ts#L5)*

## Methods

### dataUpdate

▸ **dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[], `elemClass`: string): any

*Overrides [visualizations.BaseVisualization](visualizations_basevisualization).[dataUpdate](visualizations_basevisualization#dataupdate)*

*Defined in [lib/visualizations/d3/svgmultiple.ts:39](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/visualizations/d3/svgmultiple.ts#L39)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | TwoDPointScatter[] \| TwoDPointLine[] |
`elemClass` | string |

**Returns:** any

___

### getDependency

▸ **getDependency**(`key`: string): any

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[getDependency](visualizations_basevisualization#getdependency)*

*Defined in [lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/visualizations/basevisualization.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** any

___

### setContainer

▸ **setContainer**(`containerRef`: HTMLElement): void

*Overrides [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization).[setContainer](visualizations_d3_svgbasevisualization#setcontainer)*

*Defined in [lib/visualizations/d3/svgmultiple.ts:32](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/visualizations/d3/svgmultiple.ts#L32)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement |

**Returns:** void

___

### setup

▸ **setup**(): void

*Overrides [visualizations.BaseVisualization](visualizations_basevisualization).[setup](visualizations_basevisualization#setup)*

*Defined in [lib/visualizations/d3/svgmultiple.ts:28](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/visualizations/d3/svgmultiple.ts#L28)*

**Returns:** void
