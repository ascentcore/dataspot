---
layout: default
title: svgbase
parent: d3
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / visualizations.d3.svgbase

# svgbase

## Hierarchy

* [visualizations.basevisualization](visualizations_basevisualization.md)

  ↳ **visualizations.d3.svgbase**

  ↳↳ [visualizations.d3.axis](visualizations_d3_axis.md)

  ↳↳ [visualizations.d3.hierarchy](visualizations_d3_hierarchy.md)

  ↳↳ [visualizations.d3.lineplot](visualizations_d3_lineplot.md)

  ↳↳ [visualizations.d3.scatter](visualizations_d3_scatter.md)

  ↳↳ [visualizations.d3.svgmultiple](visualizations_d3_svgmultiple.md)

  ↳↳ [visualizations.d3.svgvisualizationwrapper](visualizations_d3_svgvisualizationwrapper.md)

## Index

### Constructors

* [constructor](visualizations_d3_svgbase.md#constructor)

### Properties

* [config](visualizations_d3_svgbase.md#config)
* [dependencies](visualizations_d3_svgbase.md#dependencies)
* [elemClass](visualizations_d3_svgbase.md#elemclass)

### Methods

* [dataUpdate](visualizations_d3_svgbase.md#dataupdate)
* [getDependency](visualizations_d3_svgbase.md#getdependency)
* [setContainer](visualizations_d3_svgbase.md#setcontainer)
* [setup](visualizations_d3_svgbase.md#setup)

## Constructors

### constructor

\+ **new SVGBaseVisualization**(`config`: any, `elemClass`: string): [visualizations.d3.svgbase](visualizations_d3_svgbase.md)

*Overrides [visualizations.basevisualization](visualizations_basevisualization.md).[constructor](visualizations_basevisualization.md#constructor)*

*Defined in [lib/visualizations/d3/svgbase.ts:10](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/d3/svgbase.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | any |
`elemClass` | string |

**Returns:** [visualizations.d3.svgbase](visualizations_d3_svgbase.md)

## Properties

### config

•  **config**: any

*Inherited from [visualizations.basevisualization](visualizations_basevisualization.md).[config](visualizations_basevisualization.md#config)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/basevisualization.ts#L8)*

___

### dependencies

• `Protected` **dependencies**: any

*Inherited from [visualizations.basevisualization](visualizations_basevisualization.md).[dependencies](visualizations_basevisualization.md#dependencies)*

*Defined in [lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/basevisualization.ts#L14)*

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

### elemClass

•  **elemClass**: string

*Inherited from [visualizations.basevisualization](visualizations_basevisualization.md).[elemClass](visualizations_basevisualization.md#elemclass)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/basevisualization.ts#L8)*

## Methods

### dataUpdate

▸ `Abstract`**dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[] \| FunctioDefinitionMesh \| any, `elemClass?`: string): (data: TwoDPointScatter[] \| TwoDPointLine[], elemClass: string) => void \| null

*Inherited from [visualizations.basevisualization](visualizations_basevisualization.md).[dataUpdate](visualizations_basevisualization.md#dataupdate)*

*Defined in [lib/visualizations/basevisualization.ts:26](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/basevisualization.ts#L26)*

Isomorphic method used on every data update

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | TwoDPointScatter[] \| TwoDPointLine[] \| FunctioDefinitionMesh \| any | array of data values  |
`elemClass?` | string | - |

**Returns:** (data: TwoDPointScatter[] \| TwoDPointLine[], elemClass: string) => void \| null

___

### getDependency

▸ **getDependency**(`key`: string): any

*Inherited from [visualizations.basevisualization](visualizations_basevisualization.md).[getDependency](visualizations_basevisualization.md#getdependency)*

*Defined in [lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/basevisualization.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** any

___

### setContainer

▸ **setContainer**(`containerRef`: HTMLElement \| [visualizations.d3.svgbase](visualizations_d3_svgbase.md)): void

*Defined in [lib/visualizations/d3/svgbase.ts:24](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/d3/svgbase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement \| [visualizations.d3.svgbase](visualizations_d3_svgbase.md) |

**Returns:** void

___

### setup

▸ `Abstract`**setup**(`initialData?`: any): void

*Inherited from [visualizations.basevisualization](visualizations_basevisualization.md).[setup](visualizations_basevisualization.md#setup)*

*Defined in [lib/visualizations/basevisualization.ts:20](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/basevisualization.ts#L20)*

Isomorphic method executed once for setting up the visualization and dependencies
that are going to be used by the data update function

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | any |

**Returns:** void
