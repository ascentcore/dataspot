---
layout: default
title: BaseVisualization
parent: visualizations
grand_parent: Dataspot
has_children: false
---

# BaseVisualization

Base visualization abstract class.
The same logic will be used isomorphically on node and web platforms

## Hierarchy

* **visualizations.BaseVisualization**

  ↳ [visualizations.html.HTMLBaseVisualization](visualizations_html_htmlbasevisualization)

  ↳ [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization)

  ↳ [visualizations.three.ThreeBaseVisualization](visualizations_three_threebasevisualization)

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
| [setup](#setup) |

## Constructors

{:.method-highlight}
\+ **new BaseVisualization**(`config`: any, `elemClass`: string): [visualizations.BaseVisualization](visualizations_basevisualization)

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:7](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/visualizations/basevisualization.ts#L7)

**Returns:** [visualizations.BaseVisualization](visualizations_basevisualization)

## Properties

•  **config**: any

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/visualizations/basevisualization.ts#L8)

___

• `Protected` **dependencies**: any

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/visualizations/basevisualization.ts#L14)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/visualizations/basevisualization.ts#L8)

## Methods

{:.method-highlight}
▸ `Abstract`**dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[] \| FunctioDefinitionMesh \| any, `elemClass?`: string): (data: TwoDPointScatter[] \| TwoDPointLine[], elemClass: string) => void \| null

Isomorphic method used on every data update

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:26](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/visualizations/basevisualization.ts#L26)

**Returns:** (data: TwoDPointScatter[] \| TwoDPointLine[], elemClass: string) => void \| null

___

{:.method-highlight}
▸ **getDependency**(`key`: string): any

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/visualizations/basevisualization.ts#L31)

**Returns:** any

___

{:.method-highlight}
▸ `Abstract`**setup**(`initialData?`: any): void

Isomorphic method executed once for setting up the visualization and dependencies
that are going to be used by the data update function

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:20](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/visualizations/basevisualization.ts#L20)

**Returns:** void
