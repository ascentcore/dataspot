---
layout: default
title: KMeansConfig
parent: clustering
grand_parent: Dataspot
has_children: false
---

# KMeansConfig

## Hierarchy

* [clustering.CentroidConfig](/docs/classes/clustering_centroidconfig)

  ↳ **clustering.KMeansConfig**

## Indexable

▪ [key: string]: SerializableType

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

*Inherited from [clustering.CentroidConfig](/docs/classes/clustering_centroidconfig).[centroids](/docs/classes/clustering_centroidconfig#centroids)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:6](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/centroidClustering.ts#L6)

___

•  **clusters**: number = 8

{:.url-source-ref}
[lib/clustering/kMeans.ts:9](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/kMeans.ts#L9)

___

•  **convergenceIterations**: number = -1

{:.url-source-ref}
[lib/clustering/kMeans.ts:14](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/kMeans.ts#L14)

Kmeans initial convergence iterations

___

•  **distanceFn**: string = "euclideanDistance"

*Inherited from [clustering.CentroidConfig](/docs/classes/clustering_centroidconfig).[distanceFn](/docs/classes/clustering_centroidconfig#distancefn)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:8](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/centroidClustering.ts#L8)

___

•  **iterations**: number = 300

*Overrides [common.EvolutionaryConfig](/docs/classes/common_evolutionaryconfig).[iterations](/docs/classes/common_evolutionaryconfig#iterations)*

{:.url-source-ref}
[lib/clustering/kMeans.ts:11](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/kMeans.ts#L11)
