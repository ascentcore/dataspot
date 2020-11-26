---
layout: default
title: BirchConfig
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [clustering.BirchConfig](clustering_birchconfig)

# BirchConfig

## Hierarchy

* [clustering.CentroidConfig](clustering_centroidconfig)

  ↳ **clustering.BirchConfig**

## Indexable

▪ [key: string]: SerializableType

## Index

### Properties

* [branchingFactor](clustering_birchconfig#branchingfactor)
* [centroids](clustering_birchconfig#centroids)
* [clusters](clustering_birchconfig#clusters)
* [distanceFn](clustering_birchconfig#distancefn)
* [iterations](clustering_birchconfig#iterations)
* [threshold](clustering_birchconfig#threshold)

## Properties

### branchingFactor

•  **branchingFactor**: number = 50

*Defined in [lib/clustering/birch.ts:10](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/birch.ts#L10)*

___

### centroids

•  **centroids**: number[][] = []

*Inherited from [clustering.CentroidConfig](clustering_centroidconfig).[centroids](clustering_centroidconfig#centroids)*

*Defined in [lib/clustering/centroidClustering.ts:6](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/centroidClustering.ts#L6)*

___

### clusters

•  **clusters**: number = 3

*Defined in [lib/clustering/birch.ts:6](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/birch.ts#L6)*

___

### distanceFn

•  **distanceFn**: string = "euclideanDistance"

*Inherited from [clustering.CentroidConfig](clustering_centroidconfig).[distanceFn](clustering_centroidconfig#distancefn)*

*Defined in [lib/clustering/centroidClustering.ts:8](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/centroidClustering.ts#L8)*

___

### iterations

•  **iterations**: number = 100

*Inherited from [common.EvolutionaryConfig](common_evolutionaryconfig).[iterations](common_evolutionaryconfig#iterations)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/common/evolutionaryAlgorithm.ts#L4)*

___

### threshold

•  **threshold**: number = 0.5

*Defined in [lib/clustering/birch.ts:8](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/birch.ts#L8)*
