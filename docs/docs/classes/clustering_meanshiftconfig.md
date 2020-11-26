---
layout: default
title: MeanShiftConfig
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [clustering.MeanShiftConfig](clustering_meanshiftconfig)

# MeanShiftConfig

## Hierarchy

* [clustering.CentroidConfig](clustering_centroidconfig)

  ↳ **clustering.MeanShiftConfig**

## Indexable

▪ [key: string]: SerializableType

## Index

### Properties

* [bandwidth](clustering_meanshiftconfig#bandwidth)
* [centroids](clustering_meanshiftconfig#centroids)
* [clusterThreshold](clustering_meanshiftconfig#clusterthreshold)
* [distanceFn](clustering_meanshiftconfig#distancefn)
* [iterations](clustering_meanshiftconfig#iterations)
* [stopThreshold](clustering_meanshiftconfig#stopthreshold)

## Properties

### bandwidth

•  **bandwidth**: number = 0.1

*Defined in [lib/clustering/meanShift.ts:7](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/meanShift.ts#L7)*

___

### centroids

•  **centroids**: number[][] = []

*Inherited from [clustering.CentroidConfig](clustering_centroidconfig).[centroids](clustering_centroidconfig#centroids)*

*Defined in [lib/clustering/centroidClustering.ts:6](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/centroidClustering.ts#L6)*

___

### clusterThreshold

•  **clusterThreshold**: number = 0.1

*Defined in [lib/clustering/meanShift.ts:9](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/meanShift.ts#L9)*

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

### stopThreshold

•  **stopThreshold**: number = 0.0001

*Defined in [lib/clustering/meanShift.ts:11](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/meanShift.ts#L11)*
