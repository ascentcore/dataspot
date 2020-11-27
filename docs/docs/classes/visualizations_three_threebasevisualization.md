---
layout: default
title: ThreeBaseVisualization
parent: three
grand_parent: visualizations
has_children: false
---

# ThreeBaseVisualization

## Hierarchy

* [visualizations.BaseVisualization](../visualizations_basevisualization)

  ↳ **visualizations.three.ThreeBaseVisualization**

  ↳↳ [visualizations.three.MeshPlot](../visualizations_three_meshplot)

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
| [getDependency](#getdependency) |
| [setContainer](#setcontainer) |
| [setup](#setup) |

## Constructors

{:.method-highlight}
\+ **new ThreeBaseVisualization**(`config`: any, `elemClass?`: string): [visualizations.three.ThreeBaseVisualization](../visualizations_three_threebasevisualization)

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[constructor](../visualizations_basevisualization#constructor)*

{:.url-source-ref}
[lib/visualizations/three/threebase.ts:11](https://github.com/ascentcore/dataspot/blob/0893946/lib/visualizations/three/threebase.ts#L11)

**Returns:** [visualizations.three.ThreeBaseVisualization](../visualizations_three_threebasevisualization)

## Properties

•  **config**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[config](../visualizations_basevisualization#config)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/0893946/lib/visualizations/basevisualization.ts#L8)

___

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[dependencies](../visualizations_basevisualization#dependencies)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/0893946/lib/visualizations/basevisualization.ts#L14)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[elemClass](../visualizations_basevisualization#elemclass)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/0893946/lib/visualizations/basevisualization.ts#L8)

## Methods

{:.method-highlight}
▸ `Abstract`**dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[] \| FunctioDefinitionMesh \| any, `elemClass?`: string): (data: TwoDPointScatter[] \| TwoDPointLine[], elemClass: string) => void \| null

Isomorphic method used on every data update

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[dataUpdate](../visualizations_basevisualization#dataupdate)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:26](https://github.com/ascentcore/dataspot/blob/0893946/lib/visualizations/basevisualization.ts#L26)

**Returns:** (data: TwoDPointScatter[] \| TwoDPointLine[], elemClass: string) => void \| null

___

{:.method-highlight}
▸ **getDependency**(`key`: string): any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[getDependency](../visualizations_basevisualization#getdependency)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/0893946/lib/visualizations/basevisualization.ts#L31)

**Returns:** any

___

{:.method-highlight}
▸ **setContainer**(`containerRef`: HTMLElement): void

{:.url-source-ref}
[lib/visualizations/three/threebase.ts:24](https://github.com/ascentcore/dataspot/blob/0893946/lib/visualizations/three/threebase.ts#L24)

**Returns:** void

___

{:.method-highlight}
▸ `Abstract`**setup**(`initialData?`: any): void

Isomorphic method executed once for setting up the visualization and dependencies
that are going to be used by the data update function

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[setup](../visualizations_basevisualization#setup)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:20](https://github.com/ascentcore/dataspot/blob/0893946/lib/visualizations/basevisualization.ts#L20)

**Returns:** void
