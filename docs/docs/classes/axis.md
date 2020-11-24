---
layout: default
title: Axis
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / Axis

# Axis

## Hierarchy

* [SVGBaseVisualization](svgbasevisualization.md)

  ↳ **Axis**

## Index

### Constructors

* [constructor](axis.md#constructor)

### Properties

* [config](axis.md#config)
* [dependencies](axis.md#dependencies)
* [elemClass](axis.md#elemclass)

### Methods

* [dataUpdate](axis.md#dataupdate)
* [getDependency](axis.md#getdependency)
* [setContainer](axis.md#setcontainer)
* [setup](axis.md#setup)
* [updateFn](axis.md#updatefn)

## Constructors

### constructor

\+ **new Axis**(`config`: any, `elemClass?`: string): [Axis](axis.md)

*Overrides [SVGBaseVisualization](svgbasevisualization.md).[constructor](svgbasevisualization.md#constructor)*

*Defined in [lib/visualizations/d3/axis.ts:4](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/axis.ts#L4)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "axis-elem" |

**Returns:** [Axis](axis.md)

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

▸ **dataUpdate**(`data`: [TwoDPointLine](../globals.md#twodpointline)[], `elemClass?`: string): [updateFn](axis.md#updatefn)

*Overrides [BaseVisualization](basevisualization.md).[dataUpdate](basevisualization.md#dataupdate)*

*Defined in [lib/visualizations/d3/axis.ts:99](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/axis.ts#L99)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | [TwoDPointLine](../globals.md#twodpointline)[] | - |
`elemClass` | string | this.elemClass |

**Returns:** [updateFn](axis.md#updatefn)

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

*Defined in [lib/visualizations/d3/axis.ts:9](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/axis.ts#L9)*

**Returns:** void

___

### updateFn

▸ `Private`**updateFn**(`data`: [TwoDPointLine](../globals.md#twodpointline)[] \| [TwoDPointScatter](../globals.md#twodpointscatter)[], `elemClass`: string): void

*Defined in [lib/visualizations/d3/axis.ts:49](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/axis.ts#L49)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | [TwoDPointLine](../globals.md#twodpointline)[] \| [TwoDPointScatter](../globals.md#twodpointscatter)[] |
`elemClass` | string |

**Returns:** void
