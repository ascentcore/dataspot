---
layout: default
title: ScatterPlot
parent: visualization
grand_parent: ui
has_children: false
---

# ScatterPlot

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [composition](#composition) |
| [functionPlot](#functionplot) |

| Methods |
|-----------|
| [dataUpdate](#dataupdate) |

## Constructors

{:.method-highlight}
\+ **new ScatterPlot**(`root`: HTMLElement, `config`: any, `composition`: [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization)[]): [ui.visualization.ScatterPlot](../ui_visualization_scatterplot)

#### Parameters:

Name | Type |
------ | ------ |
`root` | HTMLElement |
`config` | any |
`composition` | [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization)[] |

**Returns:** [ui.visualization.ScatterPlot](../ui_visualization_scatterplot)

{:.url-source-ref}
[lib/ui/visualization/scatterPlot.ts:8](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/ui/visualization/scatterPlot.ts#L8)

## Properties

• `Private` **composition**: [visualizations.d3.SVGBaseVisualization](../visualizations_d3_svgbasevisualization)[]

{:.url-source-ref}
[lib/ui/visualization/scatterPlot.ts:10](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/ui/visualization/scatterPlot.ts#L10)

___

• `Private` **functionPlot**: [visualizations.d3.SVGMultipleVisualization](../visualizations_d3_svgmultiplevisualization)

{:.url-source-ref}
[lib/ui/visualization/scatterPlot.ts:8](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/ui/visualization/scatterPlot.ts#L8)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: any[]): void

#### Parameters:

Name | Type |
------ | ------ |
`data` | any[] |

**Returns:** void

{:.url-source-ref}
[lib/ui/visualization/scatterPlot.ts:18](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/ui/visualization/scatterPlot.ts#L18)
