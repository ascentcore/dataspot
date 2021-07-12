---
layout: default
title: CanvasUtils
parent: utils
grand_parent: Dataspot
has_children: false
---

# CanvasUtils

## Index

| Methods |
|-----------|
| [convertCanvasToSpatialData](#convertcanvastospatialdata) |
| [getImageDataFromCentroidPrediction](#getimagedatafromcentroidprediction) |
| [getMaxSizedValues](#getmaxsizedvalues) |

## Methods

{:.method-highlight}
▸ `Static`**convertCanvasToSpatialData**(`ctx`: any, `sx`: number, `sy`: number, `width`: number, `height`: number): any[][]

#### Parameters:

Name | Type |
------ | ------ |
`ctx` | any |
`sx` | number |
`sy` | number |
`width` | number |
`height` | number |

**Returns:** any[][]

{:.url-source-ref}
[lib/utils/canvasUtils.ts:4](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/utils/canvasUtils.ts#L4)

___

{:.method-highlight}
▸ `Static`**getImageDataFromCentroidPrediction**(`imageData`: any, `predictedLabels`: number[], `centroids`: number[][]): void

#### Parameters:

Name | Type |
------ | ------ |
`imageData` | any |
`predictedLabels` | number[] |
`centroids` | number[][] |

**Returns:** void

{:.url-source-ref}
[lib/utils/canvasUtils.ts:15](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/utils/canvasUtils.ts#L15)

___

{:.method-highlight}
▸ `Static`**getMaxSizedValues**(`width`: number, `height`: number, `maxWidth`: number, `maxHeight`: number): number[]

#### Parameters:

Name | Type |
------ | ------ |
`width` | number |
`height` | number |
`maxWidth` | number |
`maxHeight` | number |

**Returns:** number[]

{:.url-source-ref}
[lib/utils/canvasUtils.ts:25](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/utils/canvasUtils.ts#L25)
