---
layout: default
title: MeanShiftConfig
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / MeanShiftConfig

# MeanShiftConfig

## Hierarchy

* [CentroidConfig](centroidconfig.md)

  ↳ **MeanShiftConfig**

## Indexable

▪ [key: string]: [SerializableType](../globals.md#serializabletype)

## Index

### Properties

* [bandwidth](meanshiftconfig.md#bandwidth)
* [centroids](meanshiftconfig.md#centroids)
* [clusterThreshold](meanshiftconfig.md#clusterthreshold)
* [distanceFn](meanshiftconfig.md#distancefn)
* [iterations](meanshiftconfig.md#iterations)
* [stopThreshold](meanshiftconfig.md#stopthreshold)

## Properties

### bandwidth

•  **bandwidth**: number = 0.1

*Defined in [lib/clustering/meanShift.ts:7](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/meanShift.ts#L7)*

___

### centroids

•  **centroids**: number[][] = []

*Inherited from [CentroidConfig](centroidconfig.md).[centroids](centroidconfig.md#centroids)*

*Defined in [lib/clustering/centroidClustering.ts:6](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/centroidClustering.ts#L6)*

___

### clusterThreshold

•  **clusterThreshold**: number = 0.1

*Defined in [lib/clustering/meanShift.ts:9](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/meanShift.ts#L9)*

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

### stopThreshold

•  **stopThreshold**: number = 0.0001

*Defined in [lib/clustering/meanShift.ts:11](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/meanShift.ts#L11)*
