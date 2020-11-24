---
layout: default
title: DBScanConfig
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / DBScanConfig

# DBScanConfig

## Hierarchy

* [EvolutionaryConfig](evolutionaryconfig.md)

  ↳ **DBScanConfig**

## Indexable

▪ [key: string]: [SerializableType](../globals.md#serializabletype)

## Index

### Properties

* [distanceFn](dbscanconfig.md#distancefn)
* [epsilon](dbscanconfig.md#epsilon)
* [iterations](dbscanconfig.md#iterations)
* [minNeighbours](dbscanconfig.md#minneighbours)

## Properties

### distanceFn

•  **distanceFn**: string = "euclideanDistance"

*Defined in [lib/clustering/dbScan.ts:10](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/dbScan.ts#L10)*

___

### epsilon

•  **epsilon**: number = 0.1

*Defined in [lib/clustering/dbScan.ts:6](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/dbScan.ts#L6)*

___

### iterations

•  **iterations**: number = 100

*Inherited from [EvolutionaryConfig](evolutionaryconfig.md).[iterations](evolutionaryconfig.md#iterations)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/evolutionaryAlgorithm.ts#L4)*

___

### minNeighbours

•  **minNeighbours**: number = 5

*Defined in [lib/clustering/dbScan.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/clustering/dbScan.ts#L8)*
