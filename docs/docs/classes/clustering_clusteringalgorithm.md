---
layout: default
title: ClusteringAlgorithm
parent: clustering
grand_parent: Dataspot
has_children: false
---

# ClusteringAlgorithm

## Type parameters

Name | Type |
------ | ------ |
`T` | [common.EvolutionaryConfig](/docs/classes/common_evolutionaryconfig) |

## Hierarchy

* [common.EvolutionaryAlgorithm](/docs/classes/common_evolutionaryalgorithm)\<T>

  ↳ **clustering.ClusteringAlgorithm**

  ↳↳ [clustering.CentroidClustering](/docs/classes/clustering_centroidclustering)

  ↳↳ [clustering.DBScan](/docs/classes/clustering_dbscan)

  ↳↳ [clustering.AgglomerativeClustering](/docs/classes/clustering_agglomerativeclustering)

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [config](#config) |
| [fitData](#fitdata) |
| [initialized](#initialized) |
| [iteration](#iteration) |
| [labels](#labels) |

| Methods |
|-----------|
| [canStop](#canstop) |
| [fit](#fit) |
| [fitAsync](#fitasync) |
| [loadState](#loadstate) |
| [onEndFit](#onendfit) |
| [predict](#predict) |
| [prepareDataset](#preparedataset) |
| [serialize](#serialize) |
| [shouldStop](#shouldstop) |
| [step](#step) |

## Constructors

{:.method-highlight}
\+ **new ClusteringAlgorithm**(`config`: T): [clustering.ClusteringAlgorithm](/docs/classes/clustering_clusteringalgorithm)

*Inherited from [common.Serializable](/docs/classes/common_serializable).[constructor](/docs/classes/common_serializable#constructor)*

{:.url-source-ref}
[lib/common/serializable.ts:7](https://github.com/ascentcore/dataspot/blob/b02167c/lib/common/serializable.ts#L7)

**Returns:** [clustering.ClusteringAlgorithm](/docs/classes/clustering_clusteringalgorithm)

## Properties

•  **config**: T

*Inherited from [common.Serializable](/docs/classes/common_serializable).[config](/docs/classes/common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/b02167c/lib/common/serializable.ts#L8)

___

• `Protected` **fitData**: number[][]

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:4](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/clusteringBase.ts#L4)

___

• `Protected` **initialized**: boolean = false

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:8](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/clusteringBase.ts#L8)

___

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](/docs/classes/common_evolutionaryalgorithm).[iteration](/docs/classes/common_evolutionaryalgorithm#iteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/b02167c/lib/common/evolutionaryAlgorithm.ts#L8)

___

• `Protected` **labels**: number[]

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:6](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/clusteringBase.ts#L6)

## Methods

{:.method-highlight}
▸ `Abstract`**canStop**(): boolean

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:43](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/clusteringBase.ts#L43)

**Returns:** boolean

___

{:.method-highlight}
▸ **fit**(`data`: number[][]): number[]

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:30](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/clusteringBase.ts#L30)

**Returns:** number[]

___

{:.method-highlight}
▸ **fitAsync**(`data`: number[][]): Generator

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:19](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/clusteringBase.ts#L19)

**Returns:** Generator

___

{:.method-highlight}
▸ **loadState**(`from`: string): void

*Inherited from [common.Serializable](/docs/classes/common_serializable).[loadState](/docs/classes/common_serializable#loadstate)*

{:.url-source-ref}
[lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/b02167c/lib/common/serializable.ts#L14)

**Returns:** void

___

{:.method-highlight}
▸ **onEndFit**(): void

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:41](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/clusteringBase.ts#L41)

**Returns:** void

___

{:.method-highlight}
▸ `Abstract`**predict**(`data`: number[][]): number[]

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:45](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/clusteringBase.ts#L45)

**Returns:** number[]

___

{:.method-highlight}
▸ `Protected`**prepareDataset**(`data`: number[][]): void

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:10](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/clusteringBase.ts#L10)

**Returns:** void

___

{:.method-highlight}
▸ **serialize**(): string

*Inherited from [common.Serializable](/docs/classes/common_serializable).[serialize](/docs/classes/common_serializable#serialize)*

{:.url-source-ref}
[lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/b02167c/lib/common/serializable.ts#L10)

**Returns:** string

___

{:.method-highlight}
▸ **shouldStop**(): boolean

*Inherited from [common.EvolutionaryAlgorithm](/docs/classes/common_evolutionaryalgorithm).[shouldStop](/docs/classes/common_evolutionaryalgorithm#shouldstop)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/b02167c/lib/common/evolutionaryAlgorithm.ts#L10)

**Returns:** boolean

___

{:.method-highlight}
▸ `Abstract`**step**(): any

*Inherited from [common.EvolutionaryAlgorithm](/docs/classes/common_evolutionaryalgorithm).[step](/docs/classes/common_evolutionaryalgorithm#step)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:14](https://github.com/ascentcore/dataspot/blob/b02167c/lib/common/evolutionaryAlgorithm.ts#L14)

**Returns:** any
