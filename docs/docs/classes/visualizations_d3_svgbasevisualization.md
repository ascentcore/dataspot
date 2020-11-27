---
layout: default
title: SVGBaseVisualization
parent: d3
grand_parent: visualizations
has_children: false
---

# SVGBaseVisualization

## Hierarchy

* [visualizations.BaseVisualization](../visualizations_basevisualization)

  ↳ **visualizations.d3.SVGBaseVisualization**

  ↳↳ [visualizations.d3.Axis](../visualizations_d3_axis)

  ↳↳ [visualizations.d3.HierarchyPlot](../visualizations_d3_hierarchyplot)

  ↳↳ [visualizations.d3.LinePlot](../visualizations_d3_lineplot)

  ↳↳ [visualizations.d3.Scatter](../visualizations_d3_scatter)

  ↳↳ [visualizations.d3.SVGMultipleVisualization](../visualizations_d3_svgmultiplevisualization)

  ↳↳ [visualizations.d3.SVGVisualizationWrapper](../visualizations_d3_svgvisualizationwrapper)

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
\+ **new SVGBaseVisualization**(`config`: any, `elemClass`: string): [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization)

*Overrides [visualizations.BaseVisualization](../visualizations_basevisualization).[constructor](../visualizations_basevisualization#constructor)*

{:.url-source-ref}
[lib/visualizations/d3/svgbase.ts:10](https://github.com/ascentcore/dataspot/blob/ef89391/lib/visualizations/d3/svgbase.ts#L10)

**Returns:** [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization)

## Properties

•  **config**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[config](../visualizations_basevisualization#config)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/ef89391/lib/visualizations/basevisualization.ts#L8)

___

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[dependencies](../visualizations_basevisualization#dependencies)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/ef89391/lib/visualizations/basevisualization.ts#L14)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[elemClass](../visualizations_basevisualization#elemclass)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/ef89391/lib/visualizations/basevisualization.ts#L8)

## Methods

{:.method-highlight}
▸ `Abstract`**dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[] \| FunctioDefinitionMesh \| any, `elemClass?`: string): (data: TwoDPointScatter[] \| TwoDPointLine[], elemClass: string) => void \| null

Isomorphic method used on every data update

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[dataUpdate](../visualizations_basevisualization#dataupdate)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:26](https://github.com/ascentcore/dataspot/blob/ef89391/lib/visualizations/basevisualization.ts#L26)

**Returns:** (data: TwoDPointScatter[] \| TwoDPointLine[], elemClass: string) => void \| null

___

{:.method-highlight}
▸ **getDependency**(`key`: string): any

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[getDependency](../visualizations_basevisualization#getdependency)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/ef89391/lib/visualizations/basevisualization.ts#L31)

**Returns:** any

___

{:.method-highlight}
▸ **setContainer**(`containerRef`: HTMLElement \| [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization)): void

{:.url-source-ref}
[lib/visualizations/d3/svgbase.ts:24](https://github.com/ascentcore/dataspot/blob/ef89391/lib/visualizations/d3/svgbase.ts#L24)

**Returns:** void

___

{:.method-highlight}
▸ `Abstract`**setup**(`initialData?`: any): void

Isomorphic method executed once for setting up the visualization and dependencies
that are going to be used by the data update function

*Inherited from [visualizations.BaseVisualization](../visualizations_basevisualization).[setup](../visualizations_basevisualization#setup)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:20](https://github.com/ascentcore/dataspot/blob/ef89391/lib/visualizations/basevisualization.ts#L20)

**Returns:** void
