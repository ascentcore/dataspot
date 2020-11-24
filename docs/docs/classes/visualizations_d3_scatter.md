---
layout: default
title: scatter
parent: d3
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [visualizations.d3.scatter](visualizations_d3_scatter)

# scatter

## Hierarchy

* [visualizations.d3.svgbase](visualizations_d3_svgbase)

  ↳ **visualizations.d3.scatter**

## Index

### Constructors

* [constructor](visualizations_d3_scatter#constructor)

### Properties

* [config](visualizations_d3_scatter#config)
* [dependencies](visualizations_d3_scatter#dependencies)
* [elemClass](visualizations_d3_scatter#elemclass)

### Methods

* [dataUpdate](visualizations_d3_scatter#dataupdate)
* [getDependency](visualizations_d3_scatter#getdependency)
* [setContainer](visualizations_d3_scatter#setcontainer)
* [setup](visualizations_d3_scatter#setup)
* [updateFn](visualizations_d3_scatter#updatefn)

## Constructors

### constructor

\+ **new Scatter**(`config`: any, `elemClass?`: string): [visualizations.d3.scatter](visualizations_d3_scatter)

*Overrides [visualizations.d3.svgbase](visualizations_d3_svgbase).[constructor](visualizations_d3_svgbase#constructor)*

*Defined in [lib/visualizations/d3/scatter.ts:4](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/d3/scatter.ts#L4)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "scatter-elem" |

**Returns:** [visualizations.d3.scatter](visualizations_d3_scatter)

## Properties

### config

•  **config**: any

*Inherited from [visualizations.basevisualization](visualizations_basevisualization).[config](visualizations_basevisualization#config)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/basevisualization.ts#L8)*

___

### dependencies

• `Protected` **dependencies**: any

*Inherited from [visualizations.basevisualization](visualizations_basevisualization).[dependencies](visualizations_basevisualization#dependencies)*

*Defined in [lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/basevisualization.ts#L14)*

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

### elemClass

•  **elemClass**: string

*Inherited from [visualizations.basevisualization](visualizations_basevisualization).[elemClass](visualizations_basevisualization#elemclass)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/basevisualization.ts#L8)*

## Methods

### dataUpdate

▸ **dataUpdate**(`data`: TwoDPointScatter[], `elemClass?`: string): [updateFn](visualizations_d3_scatter#updatefn)

*Overrides [visualizations.basevisualization](visualizations_basevisualization).[dataUpdate](visualizations_basevisualization#dataupdate)*

*Defined in [lib/visualizations/d3/scatter.ts:63](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/d3/scatter.ts#L63)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | TwoDPointScatter[] | - |
`elemClass` | string | this.elemClass |

**Returns:** [updateFn](visualizations_d3_scatter#updatefn)

___

### getDependency

▸ **getDependency**(`key`: string): any

*Inherited from [visualizations.basevisualization](visualizations_basevisualization).[getDependency](visualizations_basevisualization#getdependency)*

*Defined in [lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/basevisualization.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** any

___

### setContainer

▸ **setContainer**(`containerRef`: HTMLElement \| [visualizations.d3.svgbase](visualizations_d3_svgbase)): void

*Inherited from [visualizations.d3.svgbase](visualizations_d3_svgbase).[setContainer](visualizations_d3_svgbase#setcontainer)*

*Defined in [lib/visualizations/d3/svgbase.ts:24](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/d3/svgbase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement \| [visualizations.d3.svgbase](visualizations_d3_svgbase) |

**Returns:** void

___

### setup

▸ **setup**(): void

*Overrides [visualizations.basevisualization](visualizations_basevisualization).[setup](visualizations_basevisualization#setup)*

*Defined in [lib/visualizations/d3/scatter.ts:9](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/d3/scatter.ts#L9)*

**Returns:** void

___

### updateFn

▸ `Private`**updateFn**(`data`: TwoDPointScatter[], `elemClass`: string): void

*Defined in [lib/visualizations/d3/scatter.ts:11](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/d3/scatter.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | TwoDPointScatter[] |
`elemClass` | string |

**Returns:** void
