---
layout: default
title: BaseVisualization
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / BaseVisualization

# BaseVisualization

Base visualization abstract class.
The same logic will be used isomorphically on node and web platforms

## Hierarchy

* **BaseVisualization**

  ↳ [HTMLBaseVisualization](htmlbasevisualization.md)

  ↳ [SVGBaseVisualization](svgbasevisualization.md)

  ↳ [ThreeBaseVisualization](threebasevisualization.md)

## Index

### Constructors

* [constructor](basevisualization.md#constructor)

### Properties

* [config](basevisualization.md#config)
* [dependencies](basevisualization.md#dependencies)
* [elemClass](basevisualization.md#elemclass)

### Methods

* [dataUpdate](basevisualization.md#dataupdate)
* [getDependency](basevisualization.md#getdependency)
* [setup](basevisualization.md#setup)

## Constructors

### constructor

\+ **new BaseVisualization**(`config`: any, `elemClass`: string): [BaseVisualization](basevisualization.md)

*Defined in [lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | any |
`elemClass` | string |

**Returns:** [BaseVisualization](basevisualization.md)

## Properties

### config

•  **config**: any

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L8)*

___

### dependencies

• `Protected` **dependencies**: any

*Defined in [lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L14)*

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

### elemClass

•  **elemClass**: string

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L8)*

## Methods

### dataUpdate

▸ `Abstract`**dataUpdate**(`data`: [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[] \| [FunctioDefinitionMesh](../globals.md#functiodefinitionmesh) \| any, `elemClass?`: string): (data: [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[], elemClass: string) => void \| null

*Defined in [lib/visualizations/basevisualization.ts:26](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L26)*

Isomorphic method used on every data update

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[] \| [FunctioDefinitionMesh](../globals.md#functiodefinitionmesh) \| any | array of data values  |
`elemClass?` | string | - |

**Returns:** (data: [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[], elemClass: string) => void \| null

___

### getDependency

▸ **getDependency**(`key`: string): any

*Defined in [lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** any

___

### setup

▸ `Abstract`**setup**(`initialData?`: any): void

*Defined in [lib/visualizations/basevisualization.ts:20](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L20)*

Isomorphic method executed once for setting up the visualization and dependencies
that are going to be used by the data update function

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | any |

**Returns:** void
