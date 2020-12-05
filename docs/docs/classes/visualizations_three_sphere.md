---
layout: default
title: Sphere
parent: three
grand_parent: visualizations
has_children: false
---

# Sphere

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [config](#config) |
| [dependencies](#dependencies) |
| [elemClass](#elemclass) |
| [DOMAIN](#domain) |
| [GLOBAL\_M](#global_m) |

| Methods |
|-----------|
| [dataUpdate](#dataupdate) |
| [destroy](#destroy) |
| [getDependency](#getdependency) |
| [setContainer](#setcontainer) |
| [setup](#setup) |
| [calculate](#calculate) |

## Constructors

{:.method-highlight}
\+ **new Sphere**(`config`: any, `elemClass?`: string): [visualizations.three.Sphere](../visualizations_three_sphere)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "mesh-elem" |

**Returns:** [visualizations.three.Sphere](../visualizations_three_sphere)

*Inherited from [visualizations.three.ThreeBaseVisualization](../visualizations_three_threebasevisualization).[constructor](../visualizations_three_threebasevisualization#constructor)*

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[constructor](../visualizations_basevisualization#constructor)*

{:.url-source-ref}
[lib/visualizations/three/threebase.ts:11](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/three/threebase.ts#L11)

## Properties

•  **config**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[config](../visualizations_basevisualization#config)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/basevisualization.ts#L8)

___

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[dependencies](../visualizations_basevisualization#dependencies)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/basevisualization.ts#L14)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[elemClass](../visualizations_basevisualization#elemclass)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/basevisualization.ts#L8)

___

▪ `Static` **DOMAIN**: number[] = [-5.12, 5.12]

{:.url-source-ref}
[lib/datasets/benchmark/sphere.ts:2](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/datasets/benchmark/sphere.ts#L2)

___

▪ `Static` **GLOBAL\_M**: number[] = [0]

{:.url-source-ref}
[lib/datasets/benchmark/sphere.ts:4](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/datasets/benchmark/sphere.ts#L4)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: ThreeDPointScatter[]): null

#### Parameters:

Name | Type |
------ | ------ |
`data` | ThreeDPointScatter[] |

**Returns:** null

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[dataUpdate](../visualizations_basevisualization#dataupdate)*

{:.url-source-ref}
[lib/visualizations/three/sphere.ts:9](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/three/sphere.ts#L9)

___

{:.method-highlight}
▸ **destroy**(): void

**Returns:** void

*Overrides [visualizations.three.ThreeBaseVisualization](../visualizations_three_threebasevisualization).[destroy](../visualizations_three_threebasevisualization#destroy)*

{:.url-source-ref}
[lib/visualizations/three/sphere.ts:33](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/three/sphere.ts#L33)

___

{:.method-highlight}
▸ **getDependency**(`key`: string): any

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[getDependency](../visualizations_basevisualization#getdependency)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:28](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/basevisualization.ts#L28)

___

{:.method-highlight}
▸ **setContainer**(`containerRef`: HTMLElement \| [visualizations.three.ThreeBaseVisualization](../visualizations_three_threebasevisualization)): void

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement \| [visualizations.three.ThreeBaseVisualization](../visualizations_three_threebasevisualization) |

**Returns:** void

*Inherited from [visualizations.three.ThreeBaseVisualization](../visualizations_three_threebasevisualization).[setContainer](../visualizations_three_threebasevisualization#setcontainer)*

{:.url-source-ref}
[lib/visualizations/three/threebase.ts:24](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/three/threebase.ts#L24)

___

{:.method-highlight}
▸ **setup**(): void

**Returns:** void

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[setup](../visualizations_basevisualization#setup)*

{:.url-source-ref}
[lib/visualizations/three/sphere.ts:7](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/visualizations/three/sphere.ts#L7)

___

{:.method-highlight}
▸ `Static`**calculate**(...`input`: number[]): number

#### Parameters:

Name | Type |
------ | ------ |
`...input` | number[] |

**Returns:** number

{:.url-source-ref}
[lib/datasets/benchmark/sphere.ts:6](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/datasets/benchmark/sphere.ts#L6)
