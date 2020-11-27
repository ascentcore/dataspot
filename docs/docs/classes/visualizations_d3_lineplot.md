---
layout: default
title: LinePlot
parent: d3
grand_parent: visualizations
has_children: false
---

# LinePlot

## Hierarchy

* [visualizations.d3.SVGBaseVisualization](/docs/classes/visualizations_d3_svgbasevisualization)

  ↳ **visualizations.d3.LinePlot**

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
| [updateFn](#updatefn) |

## Constructors

{:.method-highlight}
\+ **new LinePlot**(`config`: any, `elemClass?`: string): [visualizations.d3.LinePlot](/docs/classes/visualizations_d3_lineplot)

*Overrides [visualizations.d3.SVGBaseVisualization](/docs/classes/visualizations_d3_svgbasevisualization).[constructor](/docs/classes/visualizations_d3_svgbasevisualization#constructor)*

{:.url-source-ref}
[lib/visualizations/d3/lineplot.ts:4](https://github.com/ascentcore/dataspot/blob/b02167c/lib/visualizations/d3/lineplot.ts#L4)

**Returns:** [visualizations.d3.LinePlot](/docs/classes/visualizations_d3_lineplot)

## Properties

•  **config**: any

*Inherited from [visualizations.BaseVisualization](/docs/classes/visualizations_basevisualization).[config](/docs/classes/visualizations_basevisualization#config)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/b02167c/lib/visualizations/basevisualization.ts#L8)

___

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](/docs/classes/visualizations_basevisualization).[dependencies](/docs/classes/visualizations_basevisualization#dependencies)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/b02167c/lib/visualizations/basevisualization.ts#L14)

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](/docs/classes/visualizations_basevisualization).[elemClass](/docs/classes/visualizations_basevisualization#elemclass)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/b02167c/lib/visualizations/basevisualization.ts#L8)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: TwoDPointLine[], `elemClass?`: string): [updateFn](/docs/classes/visualizations_d3_lineplot#updatefn)

*Overrides [visualizations.BaseVisualization](/docs/classes/visualizations_basevisualization).[dataUpdate](/docs/classes/visualizations_basevisualization#dataupdate)*

{:.url-source-ref}
[lib/visualizations/d3/lineplot.ts:64](https://github.com/ascentcore/dataspot/blob/b02167c/lib/visualizations/d3/lineplot.ts#L64)

**Returns:** [updateFn](/docs/classes/visualizations_d3_lineplot#updatefn)

___

{:.method-highlight}
▸ **getDependency**(`key`: string): any

*Inherited from [visualizations.BaseVisualization](/docs/classes/visualizations_basevisualization).[getDependency](/docs/classes/visualizations_basevisualization#getdependency)*

{:.url-source-ref}
[lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/b02167c/lib/visualizations/basevisualization.ts#L31)

**Returns:** any

___

{:.method-highlight}
▸ **setContainer**(`containerRef`: HTMLElement \| [visualizations.d3.SVGBaseVisualization](/docs/classes/visualizations_d3_svgbasevisualization)): void

*Inherited from [visualizations.d3.SVGBaseVisualization](/docs/classes/visualizations_d3_svgbasevisualization).[setContainer](/docs/classes/visualizations_d3_svgbasevisualization#setcontainer)*

{:.url-source-ref}
[lib/visualizations/d3/svgbase.ts:24](https://github.com/ascentcore/dataspot/blob/b02167c/lib/visualizations/d3/svgbase.ts#L24)

**Returns:** void

___

{:.method-highlight}
▸ **setup**(): void

*Overrides [visualizations.BaseVisualization](/docs/classes/visualizations_basevisualization).[setup](/docs/classes/visualizations_basevisualization#setup)*

{:.url-source-ref}
[lib/visualizations/d3/lineplot.ts:9](https://github.com/ascentcore/dataspot/blob/b02167c/lib/visualizations/d3/lineplot.ts#L9)

**Returns:** void

___

{:.method-highlight}
▸ `Private`**updateFn**(`data`: TwoDPointLine[], `elemClass`: string): void

{:.url-source-ref}
[lib/visualizations/d3/lineplot.ts:11](https://github.com/ascentcore/dataspot/blob/b02167c/lib/visualizations/d3/lineplot.ts#L11)

**Returns:** void
