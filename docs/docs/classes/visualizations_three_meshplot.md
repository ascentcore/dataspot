---
layout: default
title: MeshPlot
parent: three
grand_parent: visualizations
has_children: false
---

# MeshPlot

## Hierarchy

* [visualizations.three.ThreeBaseVisualization](visualizations_three_threebasevisualization)

  ↳ **visualizations.three.MeshPlot**

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
\+ **new MeshPlot**(`config`: any, `elemClass?`: string): [visualizations.three.MeshPlot](visualizations_three_meshplot)

*Inherited from [visualizations.three.ThreeBaseVisualization](visualizations_three_threebasevisualization).[constructor](visualizations_three_threebasevisualization#constructor)*

*Overrides [visualizations.BaseVisualization](visualizations_basevisualization).[constructor](visualizations_basevisualization#constructor)*

{:.url-source-ref}
[lib/visualizations/three/threebase.ts:11](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/three/threebase.ts#L11)

**Returns:** [visualizations.three.MeshPlot](visualizations_three_meshplot)

## Properties

•  **config**: any

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[config](visualizations_basevisualization#config)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/basevisualization.ts#L8)

___

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[dependencies](visualizations_basevisualization#dependencies)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/basevisualization.ts#L14)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[elemClass](visualizations_basevisualization#elemclass)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/basevisualization.ts#L8)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: { xMax: number ; xMin: number ; yMax: number ; yMin: number ; zFunc: (x: number, y: number) => number  }): any

*Overrides [visualizations.BaseVisualization](visualizations_basevisualization).[dataUpdate](visualizations_basevisualization#dataupdate)*

{:.url-source-ref}
[lib/visualizations/three/mesh.ts:10](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/three/mesh.ts#L10)

**Returns:** any

___

{:.method-highlight}
▸ **destroy**(): void

{:.url-source-ref}
[lib/visualizations/three/mesh.ts:128](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/three/mesh.ts#L128)

**Returns:** void

___

{:.method-highlight}
▸ **getDependency**(`key`: string): any

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[getDependency](visualizations_basevisualization#getdependency)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/basevisualization.ts#L31)

**Returns:** any

___

{:.method-highlight}
▸ **setContainer**(`containerRef`: HTMLElement): void

*Inherited from [visualizations.three.ThreeBaseVisualization](visualizations_three_threebasevisualization).[setContainer](visualizations_three_threebasevisualization#setcontainer)*

{:.url-source-ref}
[lib/visualizations/three/threebase.ts:24](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/three/threebase.ts#L24)

**Returns:** void

___

{:.method-highlight}
▸ **setup**(): void

*Overrides [visualizations.BaseVisualization](visualizations_basevisualization).[setup](visualizations_basevisualization#setup)*

{:.url-source-ref}
[lib/visualizations/three/mesh.ts:7](https://github.com/ascentcore/dataspot/blob/40beee3/lib/visualizations/three/mesh.ts#L7)

**Returns:** void
