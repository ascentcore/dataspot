---
layout: default
title: lineplot
parent: d3
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [visualizations.d3.lineplot](visualizations_d3_lineplot)

# lineplot

## Hierarchy

* [visualizations.d3.svgbase](visualizations_d3_svgbase)

  ↳ **visualizations.d3.lineplot**

## Index

### Constructors

* [constructor](visualizations_d3_lineplot#constructor)

### Properties

* [config](visualizations_d3_lineplot#config)
* [dependencies](visualizations_d3_lineplot#dependencies)
* [elemClass](visualizations_d3_lineplot#elemclass)

### Methods

* [dataUpdate](visualizations_d3_lineplot#dataupdate)
* [getDependency](visualizations_d3_lineplot#getdependency)
* [setContainer](visualizations_d3_lineplot#setcontainer)
* [setup](visualizations_d3_lineplot#setup)
* [updateFn](visualizations_d3_lineplot#updatefn)

## Constructors

### constructor

\+ **new LinePlot**(`config`: any, `elemClass?`: string): [visualizations.d3.lineplot](visualizations_d3_lineplot)

*Overrides [visualizations.d3.svgbase](visualizations_d3_svgbase).[constructor](visualizations_d3_svgbase#constructor)*

*Defined in [lib/visualizations/d3/lineplot.ts:4](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/d3/lineplot.ts#L4)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "line-elem" |

**Returns:** [visualizations.d3.lineplot](visualizations_d3_lineplot)

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

▸ **dataUpdate**(`data`: TwoDPointLine[], `elemClass?`: string): [updateFn](visualizations_d3_lineplot#updatefn)

*Overrides [visualizations.basevisualization](visualizations_basevisualization).[dataUpdate](visualizations_basevisualization#dataupdate)*

*Defined in [lib/visualizations/d3/lineplot.ts:64](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/d3/lineplot.ts#L64)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | TwoDPointLine[] | - |
`elemClass` | string | this.elemClass |

**Returns:** [updateFn](visualizations_d3_lineplot#updatefn)

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

*Defined in [lib/visualizations/d3/lineplot.ts:9](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/d3/lineplot.ts#L9)*

**Returns:** void

___

### updateFn

▸ `Private`**updateFn**(`data`: TwoDPointLine[], `elemClass`: string): void

*Defined in [lib/visualizations/d3/lineplot.ts:11](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/d3/lineplot.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | TwoDPointLine[] |
`elemClass` | string |

**Returns:** void
