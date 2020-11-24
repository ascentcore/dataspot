---
layout: default
title: svgmultiple
parent: d3
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [visualizations.d3.svgmultiple](visualizations_d3_svgmultiple)

# svgmultiple

## Hierarchy

* [visualizations.d3.svgbase](visualizations_d3_svgbase)

  ↳ **visualizations.d3.svgmultiple**

## Index

### Constructors

* [constructor](visualizations_d3_svgmultiple#constructor)

### Properties

* [config](visualizations_d3_svgmultiple#config)
* [dependencies](visualizations_d3_svgmultiple#dependencies)
* [elemClass](visualizations_d3_svgmultiple#elemclass)
* [visualizations](visualizations_d3_svgmultiple#visualizations)

### Methods

* [dataUpdate](visualizations_d3_svgmultiple#dataupdate)
* [getDependency](visualizations_d3_svgmultiple#getdependency)
* [setContainer](visualizations_d3_svgmultiple#setcontainer)
* [setup](visualizations_d3_svgmultiple#setup)

## Constructors

### constructor

\+ **new SVGMultipleVisualization**(`config`: any, `elemClass`: string, `visualizations`: [visualizations.d3.svgbase](visualizations_d3_svgbase)[]): [visualizations.d3.svgmultiple](visualizations_d3_svgmultiple)

*Overrides [visualizations.d3.svgbase](visualizations_d3_svgbase).[constructor](visualizations_d3_svgbase#constructor)*

*Defined in [lib/visualizations/d3/svgmultiple.ts:5](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/d3/svgmultiple.ts#L5)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | any |
`elemClass` | string |
`visualizations` | [visualizations.d3.svgbase](visualizations_d3_svgbase)[] |

**Returns:** [visualizations.d3.svgmultiple](visualizations_d3_svgmultiple)

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

___

### visualizations

• `Private` **visualizations**: { [name:string]: [visualizations.d3.svgbase](visualizations_d3_svgbase);  }

*Defined in [lib/visualizations/d3/svgmultiple.ts:5](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/d3/svgmultiple.ts#L5)*

## Methods

### dataUpdate

▸ **dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[], `elemClass`: string): any

*Overrides [visualizations.basevisualization](visualizations_basevisualization).[dataUpdate](visualizations_basevisualization#dataupdate)*

*Defined in [lib/visualizations/d3/svgmultiple.ts:39](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/d3/svgmultiple.ts#L39)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | TwoDPointScatter[] \| TwoDPointLine[] |
`elemClass` | string |

**Returns:** any

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

▸ **setContainer**(`containerRef`: HTMLElement): void

*Overrides [visualizations.d3.svgbase](visualizations_d3_svgbase).[setContainer](visualizations_d3_svgbase#setcontainer)*

*Defined in [lib/visualizations/d3/svgmultiple.ts:32](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/d3/svgmultiple.ts#L32)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement |

**Returns:** void

___

### setup

▸ **setup**(): void

*Overrides [visualizations.basevisualization](visualizations_basevisualization).[setup](visualizations_basevisualization#setup)*

*Defined in [lib/visualizations/d3/svgmultiple.ts:28](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/d3/svgmultiple.ts#L28)*

**Returns:** void
