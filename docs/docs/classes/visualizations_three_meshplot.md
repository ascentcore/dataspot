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
| [getDataUpdateFn](#getdataupdatefn) |
| [getDependency](#getdependency) |
| [setContainer](#setcontainer) |
| [setup](#setup) |
| [updateFn](#updatefn) |

## Constructors

{:.method-highlight}
\+ **new MeshPlot**(`config`: any, `elemClass?`: string): [visualizations.three.MeshPlot](../visualizations_three_meshplot)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "mesh-elem" |

**Returns:** [visualizations.three.MeshPlot](../visualizations_three_meshplot)

*Overrides [visualizations.three.ThreeBaseVisualization](../visualizations_three_threebasevisualization).[constructor](../visualizations_three_threebasevisualization#constructor)*

{:.url-source-ref}
[lib/visualizations/three/mesh.ts:7](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/three/mesh.ts#L7)

## Properties

•  **config**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[config](../visualizations_basevisualization#config)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/basevisualization.ts#L7)

___

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[dependencies](../visualizations_basevisualization#dependencies)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:13](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/basevisualization.ts#L13)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[elemClass](../visualizations_basevisualization#elemclass)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/basevisualization.ts#L7)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: FunctioDefinitionMesh): void

#### Parameters:

Name | Type |
------ | ------ |
`data` | FunctioDefinitionMesh |

**Returns:** void

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[dataUpdate](../visualizations_basevisualization#dataupdate)*

{:.url-source-ref}
[lib/visualizations/three/mesh.ts:135](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/three/mesh.ts#L135)

___

{:.method-highlight}
▸ **destroy**(): void

**Returns:** void

*Overrides [visualizations.three.ThreeBaseVisualization](../visualizations_three_threebasevisualization).[destroy](../visualizations_three_threebasevisualization#destroy)*

{:.url-source-ref}
[lib/visualizations/three/mesh.ts:139](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/three/mesh.ts#L139)

___

{:.method-highlight}
▸ **getDataUpdateFn**(): [updateFn](../visualizations_three_meshplot#updatefn)

**Returns:** [updateFn](../visualizations_three_meshplot#updatefn)

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[getDataUpdateFn](../visualizations_basevisualization#getdataupdatefn)*

{:.url-source-ref}
[lib/visualizations/three/mesh.ts:130](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/three/mesh.ts#L130)

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
[lib/visualizations/basevisualization.ts:34](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/basevisualization.ts#L34)

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
[lib/visualizations/three/threebase.ts:24](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/three/threebase.ts#L24)

___

{:.method-highlight}
▸ **setup**(`initialData?`: FunctioDefinitionMesh): void

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | FunctioDefinitionMesh |

**Returns:** void

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[setup](../visualizations_basevisualization#setup)*

{:.url-source-ref}
[lib/visualizations/three/mesh.ts:124](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/three/mesh.ts#L124)

___

{:.method-highlight}
▸ `Private`**updateFn**(`data`: FunctioDefinitionMesh): void

#### Parameters:

Name | Type |
------ | ------ |
`data` | FunctioDefinitionMesh |

**Returns:** void

{:.url-source-ref}
[lib/visualizations/three/mesh.ts:12](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/visualizations/three/mesh.ts#L12)
