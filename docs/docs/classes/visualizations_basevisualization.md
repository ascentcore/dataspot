---
layout: default
title: BaseVisualization
parent: visualizations
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [visualizations.BaseVisualization](visualizations_basevisualization)

# BaseVisualization

Base visualization abstract class.
The same logic will be used isomorphically on node and web platforms

## Hierarchy

* **visualizations.BaseVisualization**

  ↳ [visualizations.html.HTMLBaseVisualization](visualizations_html_htmlbasevisualization)

  ↳ [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization)

  ↳ [visualizations.three.ThreeBaseVisualization](visualizations_three_threebasevisualization)

## Index

### Constructors

* [constructor](visualizations_basevisualization#constructor)

### Properties

* [config](visualizations_basevisualization#config)
* [dependencies](visualizations_basevisualization#dependencies)
* [elemClass](visualizations_basevisualization#elemclass)

### Methods

* [dataUpdate](visualizations_basevisualization#dataupdate)
* [getDependency](visualizations_basevisualization#getdependency)
* [setup](visualizations_basevisualization#setup)

## Constructors

### constructor

\+ **new BaseVisualization**(`config`: any, `elemClass`: string): [visualizations.BaseVisualization](visualizations_basevisualization)

*Defined in [lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/aa42404/lib/visualizations/basevisualization.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | any |
`elemClass` | string |

**Returns:** [visualizations.BaseVisualization](visualizations_basevisualization)

## Properties

### config

•  **config**: any

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/aa42404/lib/visualizations/basevisualization.ts#L8)*

___

### dependencies

• `Protected` **dependencies**: any

*Defined in [lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/aa42404/lib/visualizations/basevisualization.ts#L14)*

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

### elemClass

•  **elemClass**: string

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/aa42404/lib/visualizations/basevisualization.ts#L8)*

## Methods

### dataUpdate

▸ `Abstract`**dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[] \| FunctioDefinitionMesh \| any, `elemClass?`: string): (data: TwoDPointScatter[] \| TwoDPointLine[], elemClass: string) => void \| null

*Defined in [lib/visualizations/basevisualization.ts:26](https://github.com/ascentcore/dataspot/blob/aa42404/lib/visualizations/basevisualization.ts#L26)*

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

*Defined in [lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/aa42404/lib/visualizations/basevisualization.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** any

___

### setup

▸ `Abstract`**setup**(`initialData?`: any): void

*Defined in [lib/visualizations/basevisualization.ts:20](https://github.com/ascentcore/dataspot/blob/aa42404/lib/visualizations/basevisualization.ts#L20)*

Isomorphic method executed once for setting up the visualization and dependencies
that are going to be used by the data update function

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | any |

**Returns:** void
