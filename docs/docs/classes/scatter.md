---
layout: default
title: Scatter
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / Scatter

# Scatter

## Hierarchy

* [SVGBaseVisualization](svgbasevisualization.md)

  ↳ **Scatter**

## Index

### Constructors

* [constructor](scatter.md#constructor)

### Properties

* [config](scatter.md#config)
* [dependencies](scatter.md#dependencies)
* [elemClass](scatter.md#elemclass)

### Methods

* [dataUpdate](scatter.md#dataupdate)
* [getDependency](scatter.md#getdependency)
* [setContainer](scatter.md#setcontainer)
* [setup](scatter.md#setup)
* [updateFn](scatter.md#updatefn)

## Constructors

### constructor

\+ **new Scatter**(`config`: any, `elemClass?`: string): [Scatter](scatter.md)

*Overrides [SVGBaseVisualization](svgbasevisualization.md).[constructor](svgbasevisualization.md#constructor)*

*Defined in [lib/visualizations/d3/scatter.ts:4](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/scatter.ts#L4)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "scatter-elem" |

**Returns:** [Scatter](scatter.md)

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

## Methods

### dataUpdate

▸ **dataUpdate**(`data`: [TwoDPointScatter](../globals.md#twodpointscatter)[], `elemClass?`: string): [updateFn](scatter.md#updatefn)

*Overrides [BaseVisualization](basevisualization.md).[dataUpdate](basevisualization.md#dataupdate)*

*Defined in [lib/visualizations/d3/scatter.ts:63](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/scatter.ts#L63)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | [TwoDPointScatter](../globals.md#twodpointscatter)[] | - |
`elemClass` | string | this.elemClass |

**Returns:** [updateFn](scatter.md#updatefn)

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

▸ **setContainer**(`containerRef`: HTMLElement \| [SVGBaseVisualization](svgbasevisualization.md)): void

*Inherited from [SVGBaseVisualization](svgbasevisualization.md).[setContainer](svgbasevisualization.md#setcontainer)*

*Defined in [lib/visualizations/d3/svgbase.ts:24](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/svgbase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement \| [SVGBaseVisualization](svgbasevisualization.md) |

**Returns:** void

___

### setup

▸ **setup**(): void

*Overrides [BaseVisualization](basevisualization.md).[setup](basevisualization.md#setup)*

*Defined in [lib/visualizations/d3/scatter.ts:9](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/scatter.ts#L9)*

**Returns:** void

___

### updateFn

▸ `Private`**updateFn**(`data`: [TwoDPointScatter](../globals.md#twodpointscatter)[], `elemClass`: string): void

*Defined in [lib/visualizations/d3/scatter.ts:11](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/scatter.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | [TwoDPointScatter](../globals.md#twodpointscatter)[] |
`elemClass` | string |

**Returns:** void
