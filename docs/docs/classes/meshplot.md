---
layout: default
title: MeshPlot
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / MeshPlot

# MeshPlot

## Hierarchy

* [ThreeBaseVisualization](threebasevisualization.md)

  ↳ **MeshPlot**

## Index

### Constructors

* [constructor](meshplot.md#constructor)

### Properties

* [config](meshplot.md#config)
* [dependencies](meshplot.md#dependencies)
* [elemClass](meshplot.md#elemclass)

### Methods

* [dataUpdate](meshplot.md#dataupdate)
* [destroy](meshplot.md#destroy)
* [getDependency](meshplot.md#getdependency)
* [setContainer](meshplot.md#setcontainer)
* [setup](meshplot.md#setup)

## Constructors

### constructor

\+ **new MeshPlot**(`config`: any, `elemClass?`: string): [MeshPlot](meshplot.md)

*Inherited from [ThreeBaseVisualization](threebasevisualization.md).[constructor](threebasevisualization.md#constructor)*

*Overrides [BaseVisualization](basevisualization.md).[constructor](basevisualization.md#constructor)*

*Defined in [lib/visualizations/three/threebase.ts:11](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/three/threebase.ts#L11)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "mesh-elem" |

**Returns:** [MeshPlot](meshplot.md)

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

▸ **dataUpdate**(`data`: { xMax: number ; xMin: number ; yMax: number ; yMin: number ; zFunc: (x: number, y: number) => number  }): any

*Overrides [BaseVisualization](basevisualization.md).[dataUpdate](basevisualization.md#dataupdate)*

*Defined in [lib/visualizations/three/mesh.ts:10](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/three/mesh.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | { xMax: number ; xMin: number ; yMax: number ; yMin: number ; zFunc: (x: number, y: number) => number  } |

**Returns:** any

___

### destroy

▸ **destroy**(): void

*Defined in [lib/visualizations/three/mesh.ts:128](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/three/mesh.ts#L128)*

**Returns:** void

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

*Inherited from [ThreeBaseVisualization](threebasevisualization.md).[setContainer](threebasevisualization.md#setcontainer)*

*Defined in [lib/visualizations/three/threebase.ts:24](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/three/threebase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement |

**Returns:** void

___

### setup

▸ **setup**(): void

*Overrides [BaseVisualization](basevisualization.md).[setup](basevisualization.md#setup)*

*Defined in [lib/visualizations/three/mesh.ts:7](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/three/mesh.ts#L7)*

**Returns:** void
