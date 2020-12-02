---
layout: default
title: MeanShiftConfig
parent: clustering
grand_parent: Dataspot
has_children: false
---

# MeanShiftConfig

## Indexable

▪ [key: string]: SerializableType

## Index

| Properties |
|-----------|
| [bandwidth](#bandwidth) |
| [centroids](#centroids) |
| [clusterThreshold](#clusterthreshold) |
| [distanceFn](#distancefn) |
| [iterations](#iterations) |
| [stopThreshold](#stopthreshold) |

## Properties

•  **bandwidth**: number = 0.1

{:.url-source-ref}
[lib/clustering/meanShift.ts:7](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/clustering/meanShift.ts#L7)

___

•  **centroids**: number[][] = []

*Inherited from [clustering.CentroidConfig](../clustering_centroidconfig).[centroids](../clustering_centroidconfig#centroids)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:6](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/clustering/centroidClustering.ts#L6)

___

•  **clusterThreshold**: number = 0.1

{:.url-source-ref}
[lib/clustering/meanShift.ts:9](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/clustering/meanShift.ts#L9)

___

•  **distanceFn**: string = "euclideanDistance"

*Inherited from [clustering.CentroidConfig](../clustering_centroidconfig).[distanceFn](../clustering_centroidconfig#distancefn)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:8](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/clustering/centroidClustering.ts#L8)

___

•  **iterations**: number = 100

*Inherited from [common.EvolutionaryConfig](../common_evolutionaryconfig).[iterations](../common_evolutionaryconfig#iterations)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/common/evolutionaryAlgorithm.ts#L4)

___

•  **stopThreshold**: number = 0.0001

{:.url-source-ref}
[lib/clustering/meanShift.ts:11](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/clustering/meanShift.ts#L11)
