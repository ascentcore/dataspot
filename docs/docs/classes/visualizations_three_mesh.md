---
layout: default
title: mesh
parent: three
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / visualizations.three.mesh

# mesh

## Hierarchy

* [visualizations.three.threebase](visualizations_three_threebase.md)

  ↳ **visualizations.three.mesh**

## Index

### Constructors

* [constructor](visualizations_three_mesh.md#constructor)

### Properties

* [config](visualizations_three_mesh.md#config)
* [dependencies](visualizations_three_mesh.md#dependencies)
* [elemClass](visualizations_three_mesh.md#elemclass)

### Methods

* [dataUpdate](visualizations_three_mesh.md#dataupdate)
* [destroy](visualizations_three_mesh.md#destroy)
* [getDependency](visualizations_three_mesh.md#getdependency)
* [setContainer](visualizations_three_mesh.md#setcontainer)
* [setup](visualizations_three_mesh.md#setup)

## Constructors

### constructor

\+ **new MeshPlot**(`config`: any, `elemClass?`: string): [visualizations.three.mesh](visualizations_three_mesh.md)

*Inherited from [visualizations.three.threebase](visualizations_three_threebase.md).[constructor](visualizations_three_threebase.md#constructor)*

*Overrides [visualizations.basevisualization](visualizations_basevisualization.md).[constructor](visualizations_basevisualization.md#constructor)*

*Defined in [lib/visualizations/three/threebase.ts:11](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/three/threebase.ts#L11)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "mesh-elem" |

**Returns:** [visualizations.three.mesh](visualizations_three_mesh.md)

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

▸ **dataUpdate**(`data`: { xMax: number ; xMin: number ; yMax: number ; yMin: number ; zFunc: (x: number, y: number) => number  }): any

*Overrides [visualizations.basevisualization](visualizations_basevisualization.md).[dataUpdate](visualizations_basevisualization.md#dataupdate)*

*Defined in [lib/visualizations/three/mesh.ts:10](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/three/mesh.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | { xMax: number ; xMin: number ; yMax: number ; yMin: number ; zFunc: (x: number, y: number) => number  } |

**Returns:** any

___

### destroy

▸ **destroy**(): void

*Defined in [lib/visualizations/three/mesh.ts:128](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/three/mesh.ts#L128)*

**Returns:** void

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

*Inherited from [visualizations.three.threebase](visualizations_three_threebase.md).[setContainer](visualizations_three_threebase.md#setcontainer)*

*Defined in [lib/visualizations/three/threebase.ts:24](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/three/threebase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement |

**Returns:** void

___

### setup

▸ **setup**(): void

*Overrides [visualizations.basevisualization](visualizations_basevisualization.md).[setup](visualizations_basevisualization.md#setup)*

*Defined in [lib/visualizations/three/mesh.ts:7](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/three/mesh.ts#L7)*

**Returns:** void
