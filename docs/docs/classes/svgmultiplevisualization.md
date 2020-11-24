---
layout: default
title: SVGMultipleVisualization
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / SVGMultipleVisualization

# SVGMultipleVisualization

## Hierarchy

* [SVGBaseVisualization](svgbasevisualization.md)

  ↳ **SVGMultipleVisualization**

## Index

### Constructors

* [constructor](svgmultiplevisualization.md#constructor)

### Properties

* [config](svgmultiplevisualization.md#config)
* [dependencies](svgmultiplevisualization.md#dependencies)
* [elemClass](svgmultiplevisualization.md#elemclass)
* [visualizations](svgmultiplevisualization.md#visualizations)

### Methods

* [dataUpdate](svgmultiplevisualization.md#dataupdate)
* [getDependency](svgmultiplevisualization.md#getdependency)
* [setContainer](svgmultiplevisualization.md#setcontainer)
* [setup](svgmultiplevisualization.md#setup)

## Constructors

### constructor

\+ **new SVGMultipleVisualization**(`config`: any, `elemClass`: string, `visualizations`: [SVGBaseVisualization](svgbasevisualization.md)[]): [SVGMultipleVisualization](svgmultiplevisualization.md)

*Overrides [SVGBaseVisualization](svgbasevisualization.md).[constructor](svgbasevisualization.md#constructor)*

*Defined in [lib/visualizations/d3/svgmultiple.ts:5](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/svgmultiple.ts#L5)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | any |
`elemClass` | string |
`visualizations` | [SVGBaseVisualization](svgbasevisualization.md)[] |

**Returns:** [SVGMultipleVisualization](svgmultiplevisualization.md)

## Properties

### config

•  **config**: any

*Inherited from [BaseVisualization](basevisualization.md).[config](basevisualization.md#config)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L8)*

___

### dependencies

• `Protected` **dependencies**: any

*Inherited from [BaseVisualization](basevisualization.md).[dependencies](basevisualization.md#dependencies)*

*Defined in [lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L14)*

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

### elemClass

•  **elemClass**: string

*Inherited from [BaseVisualization](basevisualization.md).[elemClass](basevisualization.md#elemclass)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L8)*

___

### visualizations

• `Private` **visualizations**: { [name:string]: [SVGBaseVisualization](svgbasevisualization.md);  }

*Defined in [lib/visualizations/d3/svgmultiple.ts:5](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/svgmultiple.ts#L5)*

## Methods

### dataUpdate

▸ **dataUpdate**(`data`: [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[], `elemClass`: string): any

*Overrides [BaseVisualization](basevisualization.md).[dataUpdate](basevisualization.md#dataupdate)*

*Defined in [lib/visualizations/d3/svgmultiple.ts:39](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/svgmultiple.ts#L39)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[] |
`elemClass` | string |

**Returns:** any

___

### getDependency

▸ **getDependency**(`key`: string): any

*Inherited from [BaseVisualization](basevisualization.md).[getDependency](basevisualization.md#getdependency)*

*Defined in [lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** any

___

### setContainer

▸ **setContainer**(`containerRef`: HTMLElement): void

*Overrides [SVGBaseVisualization](svgbasevisualization.md).[setContainer](svgbasevisualization.md#setcontainer)*

*Defined in [lib/visualizations/d3/svgmultiple.ts:32](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/svgmultiple.ts#L32)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement |

**Returns:** void

___

### setup

▸ **setup**(): void

*Overrides [BaseVisualization](basevisualization.md).[setup](basevisualization.md#setup)*

*Defined in [lib/visualizations/d3/svgmultiple.ts:28](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/svgmultiple.ts#L28)*

**Returns:** void
