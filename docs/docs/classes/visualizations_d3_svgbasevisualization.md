---
layout: default
title: SVGBaseVisualization
parent: d3
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization)

# SVGBaseVisualization

## Hierarchy

* [visualizations.BaseVisualization](visualizations_basevisualization)

  ↳ **visualizations.d3.SVGBaseVisualization**

  ↳↳ [visualizations.d3.Axis](visualizations_d3_axis)

  ↳↳ [visualizations.d3.HierarchyPlot](visualizations_d3_hierarchyplot)

  ↳↳ [visualizations.d3.LinePlot](visualizations_d3_lineplot)

  ↳↳ [visualizations.d3.Scatter](visualizations_d3_scatter)

  ↳↳ [visualizations.d3.SVGMultipleVisualization](visualizations_d3_svgmultiplevisualization)

  ↳↳ [visualizations.d3.SVGVisualizationWrapper](visualizations_d3_svgvisualizationwrapper)

## Index

### Constructors

* [constructor](visualizations_d3_svgbasevisualization#constructor)

### Properties

* [config](visualizations_d3_svgbasevisualization#config)
* [dependencies](visualizations_d3_svgbasevisualization#dependencies)
* [elemClass](visualizations_d3_svgbasevisualization#elemclass)

### Methods

* [dataUpdate](visualizations_d3_svgbasevisualization#dataupdate)
* [getDependency](visualizations_d3_svgbasevisualization#getdependency)
* [setContainer](visualizations_d3_svgbasevisualization#setcontainer)
* [setup](visualizations_d3_svgbasevisualization#setup)

## Constructors

### constructor

\+ **new SVGBaseVisualization**(`config`: any, `elemClass`: string): [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization)

*Overrides [visualizations.BaseVisualization](visualizations_basevisualization).[constructor](visualizations_basevisualization#constructor)*

*Defined in [lib/visualizations/d3/svgbase.ts:10](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/d3/svgbase.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | any |
`elemClass` | string |

**Returns:** [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization)

## Properties

### config

•  **config**: any

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[config](visualizations_basevisualization#config)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/basevisualization.ts#L8)*

___

### dependencies

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[dependencies](visualizations_basevisualization#dependencies)*

*Defined in [lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/basevisualization.ts#L14)*

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

### elemClass

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[elemClass](visualizations_basevisualization#elemclass)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/basevisualization.ts#L8)*

## Methods

### dataUpdate

▸ `Abstract`**dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[] \| FunctioDefinitionMesh \| any, `elemClass?`: string): (data: TwoDPointScatter[] \| TwoDPointLine[], elemClass: string) => void \| null

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[dataUpdate](visualizations_basevisualization#dataupdate)*

*Defined in [lib/visualizations/basevisualization.ts:26](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/basevisualization.ts#L26)*

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

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[getDependency](visualizations_basevisualization#getdependency)*

*Defined in [lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/basevisualization.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** any

___

### setContainer

▸ **setContainer**(`containerRef`: HTMLElement \| [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization)): void

*Defined in [lib/visualizations/d3/svgbase.ts:24](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/d3/svgbase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement \| [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization) |

**Returns:** void

___

### setup

▸ `Abstract`**setup**(`initialData?`: any): void

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[setup](visualizations_basevisualization#setup)*

*Defined in [lib/visualizations/basevisualization.ts:20](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/basevisualization.ts#L20)*

Isomorphic method executed once for setting up the visualization and dependencies
that are going to be used by the data update function

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | any |

**Returns:** void
