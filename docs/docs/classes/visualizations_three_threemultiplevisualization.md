---
layout: default
title: ThreeMultipleVisualization
parent: three
grand_parent: visualizations
has_children: false
---

# ThreeMultipleVisualization

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [config](#config) |
| [dependencies](#dependencies) |
| [elemClass](#elemclass) |
| [visualizations](#visualizations) |

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
\+ **new ThreeMultipleVisualization**(`config`: any, `elemClass`: string, `visualizations`: [visualizations.three.ThreeBaseVisualization](../visualizations_three_threebasevisualization)[]): [visualizations.three.ThreeMultipleVisualization](../visualizations_three_threemultiplevisualization)

#### Parameters:

Name | Type |
------ | ------ |
`config` | any |
`elemClass` | string |
`visualizations` | [visualizations.three.ThreeBaseVisualization](../visualizations_three_threebasevisualization)[] |

**Returns:** [visualizations.three.ThreeMultipleVisualization](../visualizations_three_threemultiplevisualization)

*Overrides [visualizations.three.ThreeBaseVisualization](../visualizations_three_threebasevisualization).[constructor](../visualizations_three_threebasevisualization#constructor)*

{:.url-source-ref}
[lib/visualizations/three/threemultiple.ts:5](https://github.com/ascentcore/dataspot/blob/74b97e8/lib/visualizations/three/threemultiple.ts#L5)

## Properties

•  **config**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[config](../visualizations_basevisualization#config)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/74b97e8/lib/visualizations/basevisualization.ts#L7)

___

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[dependencies](../visualizations_basevisualization#dependencies)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:13](https://github.com/ascentcore/dataspot/blob/74b97e8/lib/visualizations/basevisualization.ts#L13)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[elemClass](../visualizations_basevisualization#elemclass)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/74b97e8/lib/visualizations/basevisualization.ts#L7)

___

• `Private` **visualizations**: { [name:string]: [visualizations.three.ThreeBaseVisualization](../visualizations_three_threebasevisualization);  }

{:.url-source-ref}
[lib/visualizations/three/threemultiple.ts:5](https://github.com/ascentcore/dataspot/blob/74b97e8/lib/visualizations/three/threemultiple.ts#L5)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: ThreeDPointScatter[] \| FunctioDefinitionMesh, `elemClass`: string): void

#### Parameters:

Name | Type |
------ | ------ |
`data` | ThreeDPointScatter[] \| FunctioDefinitionMesh |
`elemClass` | string |

**Returns:** void

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[dataUpdate](../visualizations_basevisualization#dataupdate)*

{:.url-source-ref}
[lib/visualizations/three/threemultiple.ts:38](https://github.com/ascentcore/dataspot/blob/74b97e8/lib/visualizations/three/threemultiple.ts#L38)

___

{:.method-highlight}
▸ **destroy**(): void

**Returns:** void

*Overrides [visualizations.three.ThreeBaseVisualization](../visualizations_three_threebasevisualization).[destroy](../visualizations_three_threebasevisualization#destroy)*

{:.url-source-ref}
[lib/visualizations/three/threemultiple.ts:45](https://github.com/ascentcore/dataspot/blob/74b97e8/lib/visualizations/three/threemultiple.ts#L45)

___

{:.method-highlight}
▸ **getDataUpdateFn**(`elemClass`: string): function

#### Parameters:

Name | Type |
------ | ------ |
`elemClass` | string |

**Returns:** function

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[getDataUpdateFn](../visualizations_basevisualization#getdataupdatefn)*

{:.url-source-ref}
[lib/visualizations/three/threemultiple.ts:31](https://github.com/ascentcore/dataspot/blob/74b97e8/lib/visualizations/three/threemultiple.ts#L31)

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
[lib/visualizations/basevisualization.ts:34](https://github.com/ascentcore/dataspot/blob/74b97e8/lib/visualizations/basevisualization.ts#L34)

___

{:.method-highlight}
▸ **setContainer**(`containerRef`: HTMLElement): void

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement |

**Returns:** void

*Overrides [visualizations.three.ThreeBaseVisualization](../visualizations_three_threebasevisualization).[setContainer](../visualizations_three_threebasevisualization#setcontainer)*

{:.url-source-ref}
[lib/visualizations/three/threemultiple.ts:18](https://github.com/ascentcore/dataspot/blob/74b97e8/lib/visualizations/three/threemultiple.ts#L18)

___

{:.method-highlight}
▸ **setup**(`initialData?`: { data: any ; elemClass: string  }[]): void

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`initialData` | { data: any ; elemClass: string  }[] | [] |

**Returns:** void

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[setup](../visualizations_basevisualization#setup)*

{:.url-source-ref}
[lib/visualizations/three/threemultiple.ts:25](https://github.com/ascentcore/dataspot/blob/74b97e8/lib/visualizations/three/threemultiple.ts#L25)

___

{:.method-highlight}
▸ `Private`**updateFn**(): void

**Returns:** void

{:.url-source-ref}
[lib/visualizations/three/threemultiple.ts:16](https://github.com/ascentcore/dataspot/blob/74b97e8/lib/visualizations/three/threemultiple.ts#L16)
