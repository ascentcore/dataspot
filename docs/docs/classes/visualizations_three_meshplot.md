---
layout: default
title: MeshPlot
parent: three
grand_parent: visualizations
has_children: false
---

# MeshPlot

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [config](#config) |
| [dependencies](#dependencies) |
| [elemClass](#elemclass) |

| Methods |
|-----------|
| [dataUpdate](#dataupdate) |
| [destroy](#destroy) |
| [getDependency](#getdependency) |
| [setContainer](#setcontainer) |
| [setup](#setup) |

## Constructors

{:.method-highlight}
\+ **new MeshPlot**(`config`: any, `elemClass?`: string): [visualizations.three.MeshPlot](../visualizations_three_meshplot)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "mesh-elem" |

**Returns:** [visualizations.three.MeshPlot](../visualizations_three_meshplot)

*Inherited from [visualizations.three.ThreeBaseVisualization](../visualizations_three_threebasevisualization).[constructor](../visualizations_three_threebasevisualization#constructor)*

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[constructor](../visualizations_basevisualization#constructor)*

{:.url-source-ref}
[lib/visualizations/three/threebase.ts:11](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/visualizations/three/threebase.ts#L11)

## Properties

•  **config**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[config](../visualizations_basevisualization#config)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/visualizations/basevisualization.ts#L7)

___

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[dependencies](../visualizations_basevisualization#dependencies)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:13](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/visualizations/basevisualization.ts#L13)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[elemClass](../visualizations_basevisualization#elemclass)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/visualizations/basevisualization.ts#L7)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: FunctioDefinitionMesh): null

#### Parameters:

Name | Type |
------ | ------ |
`data` | FunctioDefinitionMesh |

**Returns:** null

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[dataUpdate](../visualizations_basevisualization#dataupdate)*

{:.url-source-ref}
[lib/visualizations/three/mesh.ts:11](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/visualizations/three/mesh.ts#L11)

___

{:.method-highlight}
▸ **destroy**(): void

**Returns:** void

*Overrides [visualizations.three.ThreeBaseVisualization](../visualizations_three_threebasevisualization).[destroy](../visualizations_three_threebasevisualization#destroy)*

{:.url-source-ref}
[lib/visualizations/three/mesh.ts:125](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/visualizations/three/mesh.ts#L125)

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
[lib/visualizations/basevisualization.ts:27](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/visualizations/basevisualization.ts#L27)

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
[lib/visualizations/three/threebase.ts:24](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/visualizations/three/threebase.ts#L24)

___

{:.method-highlight}
▸ **setup**(): void

**Returns:** void

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[setup](../visualizations_basevisualization#setup)*

{:.url-source-ref}
[lib/visualizations/three/mesh.ts:8](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/visualizations/three/mesh.ts#L8)
