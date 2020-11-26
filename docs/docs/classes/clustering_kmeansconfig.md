---
layout: default
title: KMeansConfig
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [clustering.KMeansConfig](clustering_kmeansconfig)

# KMeansConfig

## Hierarchy

* [clustering.CentroidConfig](clustering_centroidconfig)

  ↳ **clustering.KMeansConfig**

## Indexable

▪ [key: string]: SerializableType

## Index

### Properties

* [centroids](clustering_kmeansconfig#centroids)
* [clusters](clustering_kmeansconfig#clusters)
* [convergenceIterations](clustering_kmeansconfig#convergenceiterations)
* [distanceFn](clustering_kmeansconfig#distancefn)
* [iterations](clustering_kmeansconfig#iterations)

## Properties

### centroids

•  **centroids**: number[][] = []

*Inherited from [clustering.CentroidConfig](clustering_centroidconfig).[centroids](clustering_centroidconfig#centroids)*

*Defined in [lib/clustering/centroidClustering.ts:6](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/centroidClustering.ts#L6)*

___

### clusters

•  **clusters**: number = 8

*Defined in [lib/clustering/kMeans.ts:9](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/kMeans.ts#L9)*

___

### convergenceIterations

•  **convergenceIterations**: number = -1

*Defined in [lib/clustering/kMeans.ts:14](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/kMeans.ts#L14)*

Kmeans initial convergence iterations

___

### distanceFn

•  **distanceFn**: string = "euclideanDistance"

*Inherited from [clustering.CentroidConfig](clustering_centroidconfig).[distanceFn](clustering_centroidconfig#distancefn)*

*Defined in [lib/clustering/centroidClustering.ts:8](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/centroidClustering.ts#L8)*

___

### iterations

•  **iterations**: number = 300

*Overrides [common.EvolutionaryConfig](common_evolutionaryconfig).[iterations](common_evolutionaryconfig#iterations)*

*Defined in [lib/clustering/kMeans.ts:11](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/kMeans.ts#L11)*
