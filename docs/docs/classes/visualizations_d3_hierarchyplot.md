---
layout: default
title: HierarchyPlot
parent: d3
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [visualizations.d3.HierarchyPlot](visualizations_d3_hierarchyplot)

# HierarchyPlot

## Hierarchy

* [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization)

  ↳ **visualizations.d3.HierarchyPlot**

## Index

### Constructors

* [constructor](visualizations_d3_hierarchyplot#constructor)

### Properties

* [config](visualizations_d3_hierarchyplot#config)
* [dependencies](visualizations_d3_hierarchyplot#dependencies)
* [elemClass](visualizations_d3_hierarchyplot#elemclass)

### Methods

* [dataUpdate](visualizations_d3_hierarchyplot#dataupdate)
* [getDependency](visualizations_d3_hierarchyplot#getdependency)
* [setContainer](visualizations_d3_hierarchyplot#setcontainer)
* [setup](visualizations_d3_hierarchyplot#setup)
* [updateFn](visualizations_d3_hierarchyplot#updatefn)

## Constructors

### constructor

\+ **new HierarchyPlot**(`config`: any, `elemClass?`: string): [visualizations.d3.HierarchyPlot](visualizations_d3_hierarchyplot)

*Overrides [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization).[constructor](visualizations_d3_svgbasevisualization#constructor)*

*Defined in [lib/visualizations/d3/hierarchy.ts:3](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/d3/hierarchy.ts#L3)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "hierarchy-elem" |

**Returns:** [visualizations.d3.HierarchyPlot](visualizations_d3_hierarchyplot)

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

▸ **dataUpdate**(`data`: any, `elemClass?`: string): [updateFn](visualizations_d3_hierarchyplot#updatefn)

*Overrides [visualizations.BaseVisualization](visualizations_basevisualization).[dataUpdate](visualizations_basevisualization#dataupdate)*

*Defined in [lib/visualizations/d3/hierarchy.ts:86](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/d3/hierarchy.ts#L86)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | any | - |
`elemClass` | string | this.elemClass |

**Returns:** [updateFn](visualizations_d3_hierarchyplot#updatefn)

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

*Inherited from [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization).[setContainer](visualizations_d3_svgbasevisualization#setcontainer)*

*Defined in [lib/visualizations/d3/svgbase.ts:24](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/d3/svgbase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement \| [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization) |

**Returns:** void

___

### setup

▸ **setup**(): void

*Overrides [visualizations.BaseVisualization](visualizations_basevisualization).[setup](visualizations_basevisualization#setup)*

*Defined in [lib/visualizations/d3/hierarchy.ts:8](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/d3/hierarchy.ts#L8)*

**Returns:** void

___

### updateFn

▸ **updateFn**(`data`: any, `elemClass`: string): void

*Defined in [lib/visualizations/d3/hierarchy.ts:10](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/visualizations/d3/hierarchy.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | any |
`elemClass` | string |

**Returns:** void
