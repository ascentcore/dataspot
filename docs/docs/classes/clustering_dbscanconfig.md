---
layout: default
title: DBScanConfig
parent: clustering
grand_parent: Dataspot
has_children: false
---

# DBScanConfig

## Hierarchy

* [common.EvolutionaryConfig](common_evolutionaryconfig)

  ↳ **clustering.DBScanConfig**

## Indexable

▪ [key: string]: SerializableType

## Index

| Properties |
|-----------|
| [distanceFn](#distancefn) |
| [epsilon](#epsilon) |
| [iterations](#iterations) |
| [minNeighbours](#minneighbours) |

## Properties

•  **distanceFn**: string = "euclideanDistance"

{:.url-source-ref}
[lib/clustering/dbScan.ts:10](https://github.com/ascentcore/dataspot/blob/40beee3/lib/clustering/dbScan.ts#L10)

___

•  **epsilon**: number = 0.1

{:.url-source-ref}
[lib/clustering/dbScan.ts:6](https://github.com/ascentcore/dataspot/blob/40beee3/lib/clustering/dbScan.ts#L6)

___

•  **iterations**: number = 100

*Inherited from [common.EvolutionaryConfig](common_evolutionaryconfig).[iterations](common_evolutionaryconfig#iterations)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/40beee3/lib/common/evolutionaryAlgorithm.ts#L4)

___

•  **minNeighbours**: number = 5

{:.url-source-ref}
[lib/clustering/dbScan.ts:8](https://github.com/ascentcore/dataspot/blob/40beee3/lib/clustering/dbScan.ts#L8)
