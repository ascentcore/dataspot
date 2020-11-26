---
layout: default
title: ThreeBaseVisualization
parent: three
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [visualizations.three.ThreeBaseVisualization](visualizations_three_threebasevisualization)

# ThreeBaseVisualization

## Hierarchy

* [visualizations.BaseVisualization](visualizations_basevisualization)

  ↳ **visualizations.three.ThreeBaseVisualization**

  ↳↳ [visualizations.three.MeshPlot](visualizations_three_meshplot)

## Index

### Constructors

* [constructor](visualizations_three_threebasevisualization#constructor)

### Properties

* [config](visualizations_three_threebasevisualization#config)
* [dependencies](visualizations_three_threebasevisualization#dependencies)
* [elemClass](visualizations_three_threebasevisualization#elemclass)

### Methods

* [dataUpdate](visualizations_three_threebasevisualization#dataupdate)
* [getDependency](visualizations_three_threebasevisualization#getdependency)
* [setContainer](visualizations_three_threebasevisualization#setcontainer)
* [setup](visualizations_three_threebasevisualization#setup)

## Constructors

### constructor

\+ **new ThreeBaseVisualization**(`config`: any, `elemClass?`: string): [visualizations.three.ThreeBaseVisualization](visualizations_three_threebasevisualization)

*Overrides [visualizations.BaseVisualization](visualizations_basevisualization).[constructor](visualizations_basevisualization#constructor)*

*Defined in [lib/visualizations/three/threebase.ts:11](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/three/threebase.ts#L11)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "mesh-elem" |

**Returns:** [visualizations.three.ThreeBaseVisualization](visualizations_three_threebasevisualization)

## Properties

### config

•  **config**: any

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[config](visualizations_basevisualization#config)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/basevisualization.ts#L8)*

___

### dependencies

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[dependencies](visualizations_basevisualization#dependencies)*

*Defined in [lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/basevisualization.ts#L14)*

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

### elemClass

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[elemClass](visualizations_basevisualization#elemclass)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/basevisualization.ts#L8)*

## Methods

### dataUpdate

▸ `Abstract`**dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[] \| FunctioDefinitionMesh \| any, `elemClass?`: string): (data: TwoDPointScatter[] \| TwoDPointLine[], elemClass: string) => void \| null

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[dataUpdate](visualizations_basevisualization#dataupdate)*

*Defined in [lib/visualizations/basevisualization.ts:26](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/basevisualization.ts#L26)*

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

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[getDependency](visualizations_basevisualization#getdependency)*

*Defined in [lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/basevisualization.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** any

___

### setContainer

▸ **setContainer**(`containerRef`: HTMLElement): void

*Defined in [lib/visualizations/three/threebase.ts:24](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/three/threebase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement |

**Returns:** void

___

### setup

▸ `Abstract`**setup**(`initialData?`: any): void

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[setup](visualizations_basevisualization#setup)*

*Defined in [lib/visualizations/basevisualization.ts:20](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/basevisualization.ts#L20)*

Isomorphic method executed once for setting up the visualization and dependencies
that are going to be used by the data update function

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | any |

**Returns:** void
