---
layout: default
title: KMeansConfig
parent: clustering
grand_parent: Dataspot
has_children: false
---

# KMeansConfig

## Indexable

▪ [key: string]: SerializableType \| Function

## Index

| Properties |
|-----------|
| [centroids](#centroids) |
| [clusters](#clusters) |
| [convergenceIterations](#convergenceiterations) |
| [distanceFn](#distancefn) |
| [iterations](#iterations) |

## Properties

•  **centroids**: number[][] = []

*Inherited from [clustering.CentroidConfig](../clustering_centroidconfig).[centroids](../clustering_centroidconfig#centroids)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:7](https://github.com/ascentcore/dataspot/blob/236fcea/lib/clustering/centroidClustering.ts#L7)

___

•  **clusters**: number = 8

{:.url-source-ref}
[lib/clustering/kMeans.ts:9](https://github.com/ascentcore/dataspot/blob/236fcea/lib/clustering/kMeans.ts#L9)

___

•  **convergenceIterations**: number = 5

{:.url-source-ref}
[lib/clustering/kMeans.ts:14](https://github.com/ascentcore/dataspot/blob/236fcea/lib/clustering/kMeans.ts#L14)

Kmeans initial convergence iterations

___

•  **distanceFn**: string = "euclideanDistance"

*Inherited from [clustering.CentroidConfig](../clustering_centroidconfig).[distanceFn](../clustering_centroidconfig#distancefn)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:9](https://github.com/ascentcore/dataspot/blob/236fcea/lib/clustering/centroidClustering.ts#L9)

___

•  **iterations**: number = 300

*Overrides [common.EvolutionaryConfig](../common_evolutionaryconfig).[iterations](../common_evolutionaryconfig#iterations)*

{:.url-source-ref}
[lib/clustering/kMeans.ts:11](https://github.com/ascentcore/dataspot/blob/236fcea/lib/clustering/kMeans.ts#L11)
