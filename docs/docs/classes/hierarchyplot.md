---
layout: default
title: HierarchyPlot
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / HierarchyPlot

# HierarchyPlot

## Hierarchy

* [SVGBaseVisualization](svgbasevisualization.md)

  ↳ **HierarchyPlot**

## Index

### Constructors

* [constructor](hierarchyplot.md#constructor)

### Properties

* [config](hierarchyplot.md#config)
* [dependencies](hierarchyplot.md#dependencies)
* [elemClass](hierarchyplot.md#elemclass)

### Methods

* [dataUpdate](hierarchyplot.md#dataupdate)
* [getDependency](hierarchyplot.md#getdependency)
* [setContainer](hierarchyplot.md#setcontainer)
* [setup](hierarchyplot.md#setup)
* [updateFn](hierarchyplot.md#updatefn)

## Constructors

### constructor

\+ **new HierarchyPlot**(`config`: any, `elemClass?`: string): [HierarchyPlot](hierarchyplot.md)

*Overrides [SVGBaseVisualization](svgbasevisualization.md).[constructor](svgbasevisualization.md#constructor)*

*Defined in [lib/visualizations/d3/hierarchy.ts:3](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/hierarchy.ts#L3)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "hierarchy-elem" |

**Returns:** [HierarchyPlot](hierarchyplot.md)

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

▸ **dataUpdate**(`data`: any, `elemClass?`: string): [updateFn](hierarchyplot.md#updatefn)

*Overrides [BaseVisualization](basevisualization.md).[dataUpdate](basevisualization.md#dataupdate)*

*Defined in [lib/visualizations/d3/hierarchy.ts:86](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/hierarchy.ts#L86)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | any | - |
`elemClass` | string | this.elemClass |

**Returns:** [updateFn](hierarchyplot.md#updatefn)

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

*Defined in [lib/visualizations/d3/hierarchy.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/hierarchy.ts#L8)*

**Returns:** void

___

### updateFn

▸ **updateFn**(`data`: any, `elemClass`: string): void

*Defined in [lib/visualizations/d3/hierarchy.ts:10](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/hierarchy.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | any |
`elemClass` | string |

**Returns:** void
