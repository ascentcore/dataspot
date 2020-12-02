---
layout: default
title: BirchConfig
parent: clustering
grand_parent: Dataspot
has_children: false
---

# BirchConfig

## Indexable

▪ [key: string]: SerializableType

## Index

| Properties |
|-----------|
| [branchingFactor](#branchingfactor) |
| [centroids](#centroids) |
| [clusters](#clusters) |
| [distanceFn](#distancefn) |
| [iterations](#iterations) |
| [threshold](#threshold) |

## Properties

•  **branchingFactor**: number = 50

{:.url-source-ref}
[lib/clustering/birch.ts:10](https://github.com/ascentcore/dataspot/blob/12500c0/lib/clustering/birch.ts#L10)

___

•  **centroids**: number[][] = []

*Inherited from [clustering.CentroidConfig](../clustering_centroidconfig).[centroids](../clustering_centroidconfig#centroids)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:6](https://github.com/ascentcore/dataspot/blob/12500c0/lib/clustering/centroidClustering.ts#L6)

___

•  **clusters**: number = 3

{:.url-source-ref}
[lib/clustering/birch.ts:6](https://github.com/ascentcore/dataspot/blob/12500c0/lib/clustering/birch.ts#L6)

___

•  **distanceFn**: string = "euclideanDistance"

*Inherited from [clustering.CentroidConfig](../clustering_centroidconfig).[distanceFn](../clustering_centroidconfig#distancefn)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:8](https://github.com/ascentcore/dataspot/blob/12500c0/lib/clustering/centroidClustering.ts#L8)

___

•  **iterations**: number = 100

*Inherited from [common.EvolutionaryConfig](../common_evolutionaryconfig).[iterations](../common_evolutionaryconfig#iterations)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/12500c0/lib/common/evolutionaryAlgorithm.ts#L4)

___

•  **threshold**: number = 0.5

{:.url-source-ref}
[lib/clustering/birch.ts:8](https://github.com/ascentcore/dataspot/blob/12500c0/lib/clustering/birch.ts#L8)
