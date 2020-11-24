---
layout: default
title: mesh
parent: three
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [visualizations.three.mesh](visualizations_three_mesh)

# mesh

## Hierarchy

* [visualizations.three.threebase](visualizations_three_threebase)

  ↳ **visualizations.three.mesh**

## Index

### Constructors

* [constructor](visualizations_three_mesh#constructor)

### Properties

* [config](visualizations_three_mesh#config)
* [dependencies](visualizations_three_mesh#dependencies)
* [elemClass](visualizations_three_mesh#elemclass)

### Methods

* [dataUpdate](visualizations_three_mesh#dataupdate)
* [destroy](visualizations_three_mesh#destroy)
* [getDependency](visualizations_three_mesh#getdependency)
* [setContainer](visualizations_three_mesh#setcontainer)
* [setup](visualizations_three_mesh#setup)

## Constructors

### constructor

\+ **new MeshPlot**(`config`: any, `elemClass?`: string): [visualizations.three.mesh](visualizations_three_mesh)

*Inherited from [visualizations.three.threebase](visualizations_three_threebase).[constructor](visualizations_three_threebase#constructor)*

*Overrides [visualizations.basevisualization](visualizations_basevisualization).[constructor](visualizations_basevisualization#constructor)*

*Defined in [lib/visualizations/three/threebase.ts:11](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/three/threebase.ts#L11)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "mesh-elem" |

**Returns:** [visualizations.three.mesh](visualizations_three_mesh)

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

▸ **dataUpdate**(`data`: { xMax: number ; xMin: number ; yMax: number ; yMin: number ; zFunc: (x: number, y: number) => number  }): any

*Overrides [visualizations.basevisualization](visualizations_basevisualization).[dataUpdate](visualizations_basevisualization#dataupdate)*

*Defined in [lib/visualizations/three/mesh.ts:10](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/three/mesh.ts#L10)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | { xMax: number ; xMin: number ; yMax: number ; yMin: number ; zFunc: (x: number, y: number) => number  } |

**Returns:** any

___

### destroy

▸ **destroy**(): void

*Defined in [lib/visualizations/three/mesh.ts:128](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/three/mesh.ts#L128)*

**Returns:** void

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

*Inherited from [visualizations.three.threebase](visualizations_three_threebase).[setContainer](visualizations_three_threebase#setcontainer)*

*Defined in [lib/visualizations/three/threebase.ts:24](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/three/threebase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement |

**Returns:** void

___

### setup

▸ **setup**(): void

*Overrides [visualizations.basevisualization](visualizations_basevisualization).[setup](visualizations_basevisualization#setup)*

*Defined in [lib/visualizations/three/mesh.ts:7](https://github.com/ascentcore/dataspot/blob/7114653/lib/visualizations/three/mesh.ts#L7)*

**Returns:** void
