---
layout: default
title: svgmultiple
parent: d3
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / visualizations.d3.svgmultiple

# svgmultiple

## Hierarchy

* [visualizations.d3.svgbase](visualizations_d3_svgbase.md)

  ↳ **visualizations.d3.svgmultiple**

## Index

### Constructors

* [constructor](visualizations_d3_svgmultiple.md#constructor)

### Properties

* [config](visualizations_d3_svgmultiple.md#config)
* [dependencies](visualizations_d3_svgmultiple.md#dependencies)
* [elemClass](visualizations_d3_svgmultiple.md#elemclass)
* [visualizations](visualizations_d3_svgmultiple.md#visualizations)

### Methods

* [dataUpdate](visualizations_d3_svgmultiple.md#dataupdate)
* [getDependency](visualizations_d3_svgmultiple.md#getdependency)
* [setContainer](visualizations_d3_svgmultiple.md#setcontainer)
* [setup](visualizations_d3_svgmultiple.md#setup)

## Constructors

### constructor

\+ **new SVGMultipleVisualization**(`config`: any, `elemClass`: string, `visualizations`: [visualizations.d3.svgbase](visualizations_d3_svgbase.md)[]): [visualizations.d3.svgmultiple](visualizations_d3_svgmultiple.md)

*Overrides [visualizations.d3.svgbase](visualizations_d3_svgbase.md).[constructor](visualizations_d3_svgbase.md#constructor)*

*Defined in [lib/visualizations/d3/svgmultiple.ts:5](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/d3/svgmultiple.ts#L5)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | any |
`elemClass` | string |
`visualizations` | [visualizations.d3.svgbase](visualizations_d3_svgbase.md)[] |

**Returns:** [visualizations.d3.svgmultiple](visualizations_d3_svgmultiple.md)

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

___

### visualizations

• `Private` **visualizations**: { [name:string]: [visualizations.d3.svgbase](visualizations_d3_svgbase.md);  }

*Defined in [lib/visualizations/d3/svgmultiple.ts:5](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/d3/svgmultiple.ts#L5)*

## Methods

### dataUpdate

▸ **dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[], `elemClass`: string): any

*Overrides [visualizations.basevisualization](visualizations_basevisualization.md).[dataUpdate](visualizations_basevisualization.md#dataupdate)*

*Defined in [lib/visualizations/d3/svgmultiple.ts:39](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/d3/svgmultiple.ts#L39)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | TwoDPointScatter[] \| TwoDPointLine[] |
`elemClass` | string |

**Returns:** any

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

▸ **setContainer**(`containerRef`: HTMLElement): void

*Overrides [visualizations.d3.svgbase](visualizations_d3_svgbase.md).[setContainer](visualizations_d3_svgbase.md#setcontainer)*

*Defined in [lib/visualizations/d3/svgmultiple.ts:32](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/d3/svgmultiple.ts#L32)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement |

**Returns:** void

___

### setup

▸ **setup**(): void

*Overrides [visualizations.basevisualization](visualizations_basevisualization.md).[setup](visualizations_basevisualization.md#setup)*

*Defined in [lib/visualizations/d3/svgmultiple.ts:28](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/d3/svgmultiple.ts#L28)*

**Returns:** void
