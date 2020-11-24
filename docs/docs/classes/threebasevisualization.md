---
layout: default
title: ThreeBaseVisualization
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / ThreeBaseVisualization

# ThreeBaseVisualization

## Hierarchy

* [BaseVisualization](basevisualization.md)

  ↳ **ThreeBaseVisualization**

  ↳↳ [MeshPlot](meshplot.md)

## Index

### Constructors

* [constructor](threebasevisualization.md#constructor)

### Properties

* [config](threebasevisualization.md#config)
* [dependencies](threebasevisualization.md#dependencies)
* [elemClass](threebasevisualization.md#elemclass)

### Methods

* [dataUpdate](threebasevisualization.md#dataupdate)
* [getDependency](threebasevisualization.md#getdependency)
* [setContainer](threebasevisualization.md#setcontainer)
* [setup](threebasevisualization.md#setup)

## Constructors

### constructor

\+ **new ThreeBaseVisualization**(`config`: any, `elemClass?`: string): [ThreeBaseVisualization](threebasevisualization.md)

*Overrides [BaseVisualization](basevisualization.md).[constructor](basevisualization.md#constructor)*

*Defined in [lib/visualizations/three/threebase.ts:11](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/three/threebase.ts#L11)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "mesh-elem" |

**Returns:** [ThreeBaseVisualization](threebasevisualization.md)

## Properties

### config

•  **config**: any

*Inherited from [BaseVisualization](basevisualization.md).[config](basevisualization.md#config)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L8)*

___

### dependencies

• `Protected` **dependencies**: any

*Inherited from [BaseVisualization](basevisualization.md).[dependencies](basevisualization.md#dependencies)*

*Defined in [lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L14)*

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

### elemClass

•  **elemClass**: string

*Inherited from [BaseVisualization](basevisualization.md).[elemClass](basevisualization.md#elemclass)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L8)*

## Methods

### dataUpdate

▸ `Abstract`**dataUpdate**(`data`: [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[] \| [FunctioDefinitionMesh](../globals.md#functiodefinitionmesh) \| any, `elemClass?`: string): (data: [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[], elemClass: string) => void \| null

*Inherited from [BaseVisualization](basevisualization.md).[dataUpdate](basevisualization.md#dataupdate)*

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

*Inherited from [BaseVisualization](basevisualization.md).[getDependency](basevisualization.md#getdependency)*

*Defined in [lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** any

___

### setContainer

▸ **setContainer**(`containerRef`: HTMLElement): void

*Defined in [lib/visualizations/three/threebase.ts:24](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/three/threebase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement |

**Returns:** void

___

### setup

▸ `Abstract`**setup**(`initialData?`: any): void

*Inherited from [BaseVisualization](basevisualization.md).[setup](basevisualization.md#setup)*

*Defined in [lib/visualizations/basevisualization.ts:20](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L20)*

Isomorphic method executed once for setting up the visualization and dependencies
that are going to be used by the data update function

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | any |

**Returns:** void
