---
layout: default
title: DBScanConfig
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [clustering.DBScanConfig](clustering_dbscanconfig)

# DBScanConfig

## Hierarchy

* [common.EvolutionaryConfig](common_evolutionaryconfig)

  ↳ **clustering.DBScanConfig**

## Indexable

▪ [key: string]: SerializableType

## Index

### Properties

* [distanceFn](clustering_dbscanconfig#distancefn)
* [epsilon](clustering_dbscanconfig#epsilon)
* [iterations](clustering_dbscanconfig#iterations)
* [minNeighbours](clustering_dbscanconfig#minneighbours)

## Properties

### distanceFn

•  **distanceFn**: string = "euclideanDistance"

*Defined in [lib/clustering/dbScan.ts:10](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/clustering/dbScan.ts#L10)*

___

### epsilon

•  **epsilon**: number = 0.1

*Defined in [lib/clustering/dbScan.ts:6](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/clustering/dbScan.ts#L6)*

___

### iterations

•  **iterations**: number = 100

*Inherited from [common.EvolutionaryConfig](common_evolutionaryconfig).[iterations](common_evolutionaryconfig#iterations)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/common/evolutionaryAlgorithm.ts#L4)*

___

### minNeighbours

•  **minNeighbours**: number = 5

*Defined in [lib/clustering/dbScan.ts:8](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/clustering/dbScan.ts#L8)*
