---
layout: default
title: lineplot
parent: d3
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / visualizations.d3.lineplot

# lineplot

## Hierarchy

* [visualizations.d3.svgbase](visualizations_d3_svgbase.md)

  ↳ **visualizations.d3.lineplot**

## Index

### Constructors

* [constructor](visualizations_d3_lineplot.md#constructor)

### Properties

* [config](visualizations_d3_lineplot.md#config)
* [dependencies](visualizations_d3_lineplot.md#dependencies)
* [elemClass](visualizations_d3_lineplot.md#elemclass)

### Methods

* [dataUpdate](visualizations_d3_lineplot.md#dataupdate)
* [getDependency](visualizations_d3_lineplot.md#getdependency)
* [setContainer](visualizations_d3_lineplot.md#setcontainer)
* [setup](visualizations_d3_lineplot.md#setup)
* [updateFn](visualizations_d3_lineplot.md#updatefn)

## Constructors

### constructor

\+ **new LinePlot**(`config`: any, `elemClass?`: string): [visualizations.d3.lineplot](visualizations_d3_lineplot.md)

*Overrides [visualizations.d3.svgbase](visualizations_d3_svgbase.md).[constructor](visualizations_d3_svgbase.md#constructor)*

*Defined in [lib/visualizations/d3/lineplot.ts:4](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/d3/lineplot.ts#L4)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "line-elem" |

**Returns:** [visualizations.d3.lineplot](visualizations_d3_lineplot.md)

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

▸ **dataUpdate**(`data`: TwoDPointLine[], `elemClass?`: string): [updateFn](visualizations_d3_lineplot.md#updatefn)

*Overrides [visualizations.basevisualization](visualizations_basevisualization.md).[dataUpdate](visualizations_basevisualization.md#dataupdate)*

*Defined in [lib/visualizations/d3/lineplot.ts:64](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/d3/lineplot.ts#L64)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | TwoDPointLine[] | - |
`elemClass` | string | this.elemClass |

**Returns:** [updateFn](visualizations_d3_lineplot.md#updatefn)

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

*Defined in [lib/visualizations/d3/lineplot.ts:9](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/d3/lineplot.ts#L9)*

**Returns:** void

___

### updateFn

▸ `Private`**updateFn**(`data`: TwoDPointLine[], `elemClass`: string): void

*Defined in [lib/visualizations/d3/lineplot.ts:11](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/d3/lineplot.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | TwoDPointLine[] |
`elemClass` | string |

**Returns:** void
