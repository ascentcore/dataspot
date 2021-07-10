---
layout: default
title: LineGraph
parent: visualization
grand_parent: ui
has_children: false
---

# LineGraph

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [functionPlot](#functionplot) |

| Methods |
|-----------|
| [dataUpdate](#dataupdate) |

## Constructors

{:.method-highlight}
\+ **new LineGraph**(`root`: HTMLElement, `width?`: number, `height?`: number, `title?`: undefined \| string): [ui.visualization.LineGraph](../ui_visualization_linegraph)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`root` | HTMLElement | - |
`width` | number | 400 |
`height` | number | 200 |
`title?` | undefined \| string | - |

**Returns:** [ui.visualization.LineGraph](../ui_visualization_linegraph)

{:.url-source-ref}
[lib/ui/visualization/lineGraph.ts:7](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/ui/visualization/lineGraph.ts#L7)

## Properties

• `Private` **functionPlot**: [visualizations.d3.SVGMultipleVisualization](../visualizations_d3_svgmultiplevisualization)

{:.url-source-ref}
[lib/ui/visualization/lineGraph.ts:7](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/ui/visualization/lineGraph.ts#L7)

## Methods

{:.method-highlight}
▸ **dataUpdate**(`data`: any[]): void

#### Parameters:

Name | Type |
------ | ------ |
`data` | any[] |

**Returns:** void

{:.url-source-ref}
[lib/ui/visualization/lineGraph.ts:22](https://github.com/ascentcore/dataspot/blob/c80cb27/lib/ui/visualization/lineGraph.ts#L22)
