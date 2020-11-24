---
layout: default
title: threebase
parent: three
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / visualizations.three.threebase

# threebase

## Hierarchy

* [visualizations.basevisualization](visualizations_basevisualization.md)

  ↳ **visualizations.three.threebase**

  ↳↳ [visualizations.three.mesh](visualizations_three_mesh.md)

## Index

### Constructors

* [constructor](visualizations_three_threebase.md#constructor)

### Properties

* [config](visualizations_three_threebase.md#config)
* [dependencies](visualizations_three_threebase.md#dependencies)
* [elemClass](visualizations_three_threebase.md#elemclass)

### Methods

* [dataUpdate](visualizations_three_threebase.md#dataupdate)
* [getDependency](visualizations_three_threebase.md#getdependency)
* [setContainer](visualizations_three_threebase.md#setcontainer)
* [setup](visualizations_three_threebase.md#setup)

## Constructors

### constructor

\+ **new ThreeBaseVisualization**(`config`: any, `elemClass?`: string): [visualizations.three.threebase](visualizations_three_threebase.md)

*Overrides [visualizations.basevisualization](visualizations_basevisualization.md).[constructor](visualizations_basevisualization.md#constructor)*

*Defined in [lib/visualizations/three/threebase.ts:11](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/three/threebase.ts#L11)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "mesh-elem" |

**Returns:** [visualizations.three.threebase](visualizations_three_threebase.md)

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

▸ `Abstract`**dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[] \| FunctioDefinitionMesh \| any, `elemClass?`: string): (data: TwoDPointScatter[] \| TwoDPointLine[], elemClass: string) => void \| null

*Inherited from [visualizations.basevisualization](visualizations_basevisualization.md).[dataUpdate](visualizations_basevisualization.md#dataupdate)*

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

*Defined in [lib/visualizations/three/threebase.ts:24](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/three/threebase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement |

**Returns:** void

___

### setup

▸ `Abstract`**setup**(`initialData?`: any): void

*Inherited from [visualizations.basevisualization](visualizations_basevisualization.md).[setup](visualizations_basevisualization.md#setup)*

*Defined in [lib/visualizations/basevisualization.ts:20](https://github.com/ascentcore/dataspot/blob/46219f5/lib/visualizations/basevisualization.ts#L20)*

Isomorphic method executed once for setting up the visualization and dependencies
that are going to be used by the data update function

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | any |

**Returns:** void
