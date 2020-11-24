---
layout: default
title: CentroidConfig
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / CentroidConfig

# CentroidConfig

## Hierarchy

* [EvolutionaryConfig](evolutionaryconfig.md)

  ↳ **CentroidConfig**

  ↳↳ [KMeansConfig](kmeansconfig.md)

  ↳↳ [MeanShiftConfig](meanshiftconfig.md)

  ↳↳ [BirchConfig](birchconfig.md)

## Indexable

▪ [key: string]: [SerializableType](../globals.md#serializabletype)

## Index

### Properties

* [centroids](centroidconfig.md#centroids)
* [distanceFn](centroidconfig.md#distancefn)
* [iterations](centroidconfig.md#iterations)

## Properties

### centroids

•  **centroids**: number[][] = []

*Defined in [lib/clustering/centroidClustering.ts:6](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/centroidClustering.ts#L6)*

___

### distanceFn

•  **distanceFn**: string = "euclideanDistance"

*Defined in [lib/clustering/centroidClustering.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/centroidClustering.ts#L8)*

___

### iterations

•  **iterations**: number = 100

*Inherited from [EvolutionaryConfig](evolutionaryconfig.md).[iterations](evolutionaryconfig.md#iterations)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/evolutionaryAlgorithm.ts#L4)*
