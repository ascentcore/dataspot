---
layout: default
title: hierarchy
parent: d3
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / visualizations.d3.hierarchy

# hierarchy

## Hierarchy

* [visualizations.d3.svgbase](visualizations_d3_svgbase.md)

  ↳ **visualizations.d3.hierarchy**

## Index

### Constructors

* [constructor](visualizations_d3_hierarchy.md#constructor)

### Properties

* [config](visualizations_d3_hierarchy.md#config)
* [dependencies](visualizations_d3_hierarchy.md#dependencies)
* [elemClass](visualizations_d3_hierarchy.md#elemclass)

### Methods

* [dataUpdate](visualizations_d3_hierarchy.md#dataupdate)
* [getDependency](visualizations_d3_hierarchy.md#getdependency)
* [setContainer](visualizations_d3_hierarchy.md#setcontainer)
* [setup](visualizations_d3_hierarchy.md#setup)
* [updateFn](visualizations_d3_hierarchy.md#updatefn)

## Constructors

### constructor

\+ **new HierarchyPlot**(`config`: any, `elemClass?`: string): [visualizations.d3.hierarchy](visualizations_d3_hierarchy.md)

*Overrides [visualizations.d3.svgbase](visualizations_d3_svgbase.md).[constructor](visualizations_d3_svgbase.md#constructor)*

*Defined in [lib/visualizations/d3/hierarchy.ts:3](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/d3/hierarchy.ts#L3)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "hierarchy-elem" |

**Returns:** [visualizations.d3.hierarchy](visualizations_d3_hierarchy.md)

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

▸ **dataUpdate**(`data`: any, `elemClass?`: string): [updateFn](visualizations_d3_hierarchy.md#updatefn)

*Overrides [visualizations.basevisualization](visualizations_basevisualization.md).[dataUpdate](visualizations_basevisualization.md#dataupdate)*

*Defined in [lib/visualizations/d3/hierarchy.ts:86](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/d3/hierarchy.ts#L86)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | any | - |
`elemClass` | string | this.elemClass |

**Returns:** [updateFn](visualizations_d3_hierarchy.md#updatefn)

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

*Inherited from [visualizations.d3.svgbase](visualizations_d3_svgbase.md).[setContainer](visualizations_d3_svgbase.md#setcontainer)*

*Defined in [lib/visualizations/d3/svgbase.ts:24](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/d3/svgbase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement \| [visualizations.d3.svgbase](visualizations_d3_svgbase.md) |

**Returns:** void

___

### setup

▸ **setup**(): void

*Overrides [visualizations.basevisualization](visualizations_basevisualization.md).[setup](visualizations_basevisualization.md#setup)*

*Defined in [lib/visualizations/d3/hierarchy.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/d3/hierarchy.ts#L8)*

**Returns:** void

___

### updateFn

▸ **updateFn**(`data`: any, `elemClass`: string): void

*Defined in [lib/visualizations/d3/hierarchy.ts:10](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/d3/hierarchy.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | any |
`elemClass` | string |

**Returns:** void
