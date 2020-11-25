---
layout: default
title: CentroidConfig
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [clustering.CentroidConfig](clustering_centroidconfig)

# CentroidConfig

## Hierarchy

* [common.EvolutionaryConfig](common_evolutionaryconfig)

  ↳ **clustering.CentroidConfig**

  ↳↳ [clustering.KMeansConfig](clustering_kmeansconfig)

  ↳↳ [clustering.MeanShiftConfig](clustering_meanshiftconfig)

  ↳↳ [clustering.BirchConfig](clustering_birchconfig)

## Indexable

▪ [key: string]: SerializableType

## Index

### Properties

* [centroids](clustering_centroidconfig#centroids)
* [distanceFn](clustering_centroidconfig#distancefn)
* [iterations](clustering_centroidconfig#iterations)

## Properties

### centroids

•  **centroids**: number[][] = []

*Defined in [lib/clustering/centroidClustering.ts:6](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/centroidClustering.ts#L6)*

___

### distanceFn

•  **distanceFn**: string = "euclideanDistance"

*Defined in [lib/clustering/centroidClustering.ts:8](https://github.com/ascentcore/dataspot/blob/aa42404/lib/clustering/centroidClustering.ts#L8)*

___

### iterations

•  **iterations**: number = 100

*Inherited from [common.EvolutionaryConfig](common_evolutionaryconfig).[iterations](common_evolutionaryconfig#iterations)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/aa42404/lib/common/evolutionaryAlgorithm.ts#L4)*
