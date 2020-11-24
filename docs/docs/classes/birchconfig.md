---
layout: default
title: BirchConfig
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / BirchConfig

# BirchConfig

## Hierarchy

* [CentroidConfig](centroidconfig.md)

  ↳ **BirchConfig**

## Indexable

▪ [key: string]: [SerializableType](../globals.md#serializabletype)

## Index

### Properties

* [branchingFactor](birchconfig.md#branchingfactor)
* [centroids](birchconfig.md#centroids)
* [clusters](birchconfig.md#clusters)
* [distanceFn](birchconfig.md#distancefn)
* [iterations](birchconfig.md#iterations)
* [threshold](birchconfig.md#threshold)

## Properties

### branchingFactor

•  **branchingFactor**: number = 50

*Defined in [lib/clustering/birch.ts:10](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/birch.ts#L10)*

___

### centroids

•  **centroids**: number[][] = []

*Inherited from [CentroidConfig](centroidconfig.md).[centroids](centroidconfig.md#centroids)*

*Defined in [lib/clustering/centroidClustering.ts:6](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/centroidClustering.ts#L6)*

___

### clusters

•  **clusters**: number = 3

*Defined in [lib/clustering/birch.ts:6](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/birch.ts#L6)*

___

### distanceFn

•  **distanceFn**: string = "euclideanDistance"

*Inherited from [CentroidConfig](centroidconfig.md).[distanceFn](centroidconfig.md#distancefn)*

*Defined in [lib/clustering/centroidClustering.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/centroidClustering.ts#L8)*

___

### iterations

•  **iterations**: number = 100

*Inherited from [EvolutionaryConfig](evolutionaryconfig.md).[iterations](evolutionaryconfig.md#iterations)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/evolutionaryAlgorithm.ts#L4)*

___

### threshold

•  **threshold**: number = 0.5

*Defined in [lib/clustering/birch.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/birch.ts#L8)*
