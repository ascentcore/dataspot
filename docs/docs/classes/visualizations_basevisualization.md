---
layout: default
title: basevisualization
parent: visualizations
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / visualizations.basevisualization

# basevisualization

Base visualization abstract class.
The same logic will be used isomorphically on node and web platforms

## Hierarchy

* **visualizations.basevisualization**

  ↳ [visualizations.html.htmlbase](visualizations_html_htmlbase.md)

  ↳ [visualizations.d3.svgbase](visualizations_d3_svgbase.md)

  ↳ [visualizations.three.threebase](visualizations_three_threebase.md)

## Index

### Constructors

* [constructor](visualizations_basevisualization.md#constructor)

### Properties

* [config](visualizations_basevisualization.md#config)
* [dependencies](visualizations_basevisualization.md#dependencies)
* [elemClass](visualizations_basevisualization.md#elemclass)

### Methods

* [dataUpdate](visualizations_basevisualization.md#dataupdate)
* [getDependency](visualizations_basevisualization.md#getdependency)
* [setup](visualizations_basevisualization.md#setup)

## Constructors

### constructor

\+ **new BaseVisualization**(`config`: any, `elemClass`: string): [visualizations.basevisualization](visualizations_basevisualization.md)

*Defined in [lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/basevisualization.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | any |
`elemClass` | string |

**Returns:** [visualizations.basevisualization](visualizations_basevisualization.md)

## Properties

### config

•  **config**: any

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/basevisualization.ts#L8)*

___

### dependencies

• `Protected` **dependencies**: any

*Defined in [lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/basevisualization.ts#L14)*

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

### elemClass

•  **elemClass**: string

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/basevisualization.ts#L8)*

## Methods

### dataUpdate

▸ `Abstract`**dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[] \| FunctioDefinitionMesh \| any, `elemClass?`: string): (data: TwoDPointScatter[] \| TwoDPointLine[], elemClass: string) => void \| null

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

*Defined in [lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/basevisualization.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** any

___

### setup

▸ `Abstract`**setup**(`initialData?`: any): void

*Defined in [lib/visualizations/basevisualization.ts:20](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/basevisualization.ts#L20)*

Isomorphic method executed once for setting up the visualization and dependencies
that are going to be used by the data update function

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | any |

**Returns:** void
