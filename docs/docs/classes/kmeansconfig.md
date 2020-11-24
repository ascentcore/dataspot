---
layout: default
title: KMeansConfig
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / KMeansConfig

# KMeansConfig

## Hierarchy

* [CentroidConfig](centroidconfig.md)

  ↳ **KMeansConfig**

## Indexable

▪ [key: string]: [SerializableType](../globals.md#serializabletype)

## Index

### Properties

* [centroids](kmeansconfig.md#centroids)
* [clusters](kmeansconfig.md#clusters)
* [convergenceIterations](kmeansconfig.md#convergenceiterations)
* [distanceFn](kmeansconfig.md#distancefn)
* [iterations](kmeansconfig.md#iterations)

## Properties

### centroids

•  **centroids**: number[][] = []

*Inherited from [CentroidConfig](centroidconfig.md).[centroids](centroidconfig.md#centroids)*

*Defined in [lib/clustering/centroidClustering.ts:6](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/centroidClustering.ts#L6)*

___

### clusters

•  **clusters**: number = 8

*Defined in [lib/clustering/kMeans.ts:9](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/kMeans.ts#L9)*

___

### convergenceIterations

•  **convergenceIterations**: number = -1

*Defined in [lib/clustering/kMeans.ts:13](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/kMeans.ts#L13)*

___

### distanceFn

•  **distanceFn**: string = "euclideanDistance"

*Inherited from [CentroidConfig](centroidconfig.md).[distanceFn](centroidconfig.md#distancefn)*

*Defined in [lib/clustering/centroidClustering.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/centroidClustering.ts#L8)*

___

### iterations

•  **iterations**: number = 300

*Overrides [EvolutionaryConfig](evolutionaryconfig.md).[iterations](evolutionaryconfig.md#iterations)*

*Defined in [lib/clustering/kMeans.ts:11](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/kMeans.ts#L11)*
