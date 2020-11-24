---
layout: default
title: LinePlot
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / LinePlot

# LinePlot

## Hierarchy

* [SVGBaseVisualization](svgbasevisualization.md)

  ↳ **LinePlot**

## Index

### Constructors

* [constructor](lineplot.md#constructor)

### Properties

* [config](lineplot.md#config)
* [dependencies](lineplot.md#dependencies)
* [elemClass](lineplot.md#elemclass)

### Methods

* [dataUpdate](lineplot.md#dataupdate)
* [getDependency](lineplot.md#getdependency)
* [setContainer](lineplot.md#setcontainer)
* [setup](lineplot.md#setup)
* [updateFn](lineplot.md#updatefn)

## Constructors

### constructor

\+ **new LinePlot**(`config`: any, `elemClass?`: string): [LinePlot](lineplot.md)

*Overrides [SVGBaseVisualization](svgbasevisualization.md).[constructor](svgbasevisualization.md#constructor)*

*Defined in [lib/visualizations/d3/lineplot.ts:4](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/lineplot.ts#L4)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "line-elem" |

**Returns:** [LinePlot](lineplot.md)

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

▸ **dataUpdate**(`data`: [TwoDPointLine](../globals.md#twodpointline)[], `elemClass?`: string): [updateFn](lineplot.md#updatefn)

*Overrides [BaseVisualization](basevisualization.md).[dataUpdate](basevisualization.md#dataupdate)*

*Defined in [lib/visualizations/d3/lineplot.ts:64](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/lineplot.ts#L64)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | [TwoDPointLine](../globals.md#twodpointline)[] | - |
`elemClass` | string | this.elemClass |

**Returns:** [updateFn](lineplot.md#updatefn)

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

*Defined in [lib/visualizations/d3/lineplot.ts:9](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/lineplot.ts#L9)*

**Returns:** void

___

### updateFn

▸ `Private`**updateFn**(`data`: [TwoDPointLine](../globals.md#twodpointline)[], `elemClass`: string): void

*Defined in [lib/visualizations/d3/lineplot.ts:11](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/lineplot.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | [TwoDPointLine](../globals.md#twodpointline)[] |
`elemClass` | string |

**Returns:** void
