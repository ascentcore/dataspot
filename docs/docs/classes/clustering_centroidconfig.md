---
layout: default
title: CentroidConfig
parent: clustering
grand_parent: Dataspot
has_children: false
---

# CentroidConfig

## Hierarchy

* [common.EvolutionaryConfig](/docs/classes/common_evolutionaryconfig)

  ↳ **clustering.CentroidConfig**

  ↳↳ [clustering.KMeansConfig](/docs/classes/clustering_kmeansconfig)

  ↳↳ [clustering.MeanShiftConfig](/docs/classes/clustering_meanshiftconfig)

  ↳↳ [clustering.BirchConfig](/docs/classes/clustering_birchconfig)

## Indexable

▪ [key: string]: SerializableType

## Index

| Properties |
|-----------|
| [centroids](#centroids) |
| [distanceFn](#distancefn) |
| [iterations](#iterations) |

## Properties

•  **centroids**: number[][] = []

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:6](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/centroidClustering.ts#L6)

___

•  **distanceFn**: string = "euclideanDistance"

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:8](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/centroidClustering.ts#L8)

___

•  **iterations**: number = 100

*Inherited from [common.EvolutionaryConfig](/docs/classes/common_evolutionaryconfig).[iterations](/docs/classes/common_evolutionaryconfig#iterations)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/b02167c/lib/common/evolutionaryAlgorithm.ts#L4)
