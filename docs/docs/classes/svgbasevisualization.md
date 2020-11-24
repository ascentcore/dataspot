---
layout: default
title: SVGBaseVisualization
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / SVGBaseVisualization

# SVGBaseVisualization

## Hierarchy

* [BaseVisualization](basevisualization.md)

  ↳ **SVGBaseVisualization**

  ↳↳ [Axis](axis.md)

  ↳↳ [HierarchyPlot](hierarchyplot.md)

  ↳↳ [LinePlot](lineplot.md)

  ↳↳ [Scatter](scatter.md)

  ↳↳ [SVGMultipleVisualization](svgmultiplevisualization.md)

  ↳↳ [SVGVisualizationWrapper](svgvisualizationwrapper.md)

## Index

### Constructors

* [constructor](svgbasevisualization.md#constructor)

### Properties

* [config](svgbasevisualization.md#config)
* [dependencies](svgbasevisualization.md#dependencies)
* [elemClass](svgbasevisualization.md#elemclass)

### Methods

* [dataUpdate](svgbasevisualization.md#dataupdate)
* [getDependency](svgbasevisualization.md#getdependency)
* [setContainer](svgbasevisualization.md#setcontainer)
* [setup](svgbasevisualization.md#setup)

## Constructors

### constructor

\+ **new SVGBaseVisualization**(`config`: any, `elemClass`: string): [SVGBaseVisualization](svgbasevisualization.md)

*Overrides [BaseVisualization](basevisualization.md).[constructor](basevisualization.md#constructor)*

*Defined in [lib/visualizations/d3/svgbase.ts:10](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/svgbase.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | any |
`elemClass` | string |

**Returns:** [SVGBaseVisualization](svgbasevisualization.md)

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

▸ `Abstract`**dataUpdate**(`data`: [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[] \| [FunctioDefinitionMesh](../globals.md#functiodefinitionmesh) \| any, `elemClass?`: string): (data: [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[], elemClass: string) => void \| null

*Inherited from [BaseVisualization](basevisualization.md).[dataUpdate](basevisualization.md#dataupdate)*

*Defined in [lib/visualizations/basevisualization.ts:26](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L26)*

Isomorphic method used on every data update

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[] \| [FunctioDefinitionMesh](../globals.md#functiodefinitionmesh) \| any | array of data values  |
`elemClass?` | string | - |

**Returns:** (data: [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[], elemClass: string) => void \| null

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

*Defined in [lib/visualizations/d3/svgbase.ts:24](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/svgbase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement \| [SVGBaseVisualization](svgbasevisualization.md) |

**Returns:** void

___

### setup

▸ `Abstract`**setup**(`initialData?`: any): void

*Inherited from [BaseVisualization](basevisualization.md).[setup](basevisualization.md#setup)*

*Defined in [lib/visualizations/basevisualization.ts:20](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L20)*

Isomorphic method executed once for setting up the visualization and dependencies
that are going to be used by the data update function

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | any |

**Returns:** void
