---
layout: default
title: AgglomerativeClustering
parent: clustering
grand_parent: Dataspot
has_children: false
---

# AgglomerativeClustering

## Hierarchy

* [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm)\<[clustering.AglomerativeClusteringConfig](clustering_aglomerativeclusteringconfig)>

  ↳ **clustering.AgglomerativeClustering**

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [config](#config) |
| [distanceFunc](#distancefunc) |
| [fitData](#fitdata) |
| [initialized](#initialized) |
| [iteration](#iteration) |
| [labels](#labels) |
| [numLeaves](#numleaves) |

| Methods |
|-----------|
| [canStop](#canstop) |
| [fit](#fit) |
| [fitAsync](#fitasync) |
| [initializeDependencies](#initializedependencies) |
| [loadState](#loadstate) |
| [onEndFit](#onendfit) |
| [predict](#predict) |
| [prepareDataset](#preparedataset) |
| [serialize](#serialize) |
| [shouldStop](#shouldstop) |
| [step](#step) |

## Constructors

{:.method-highlight}
\+ **new AgglomerativeClustering**(`config?`: [clustering.AglomerativeClusteringConfig](clustering_aglomerativeclusteringconfig) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): [clustering.AgglomerativeClustering](clustering_agglomerativeclustering)

*Overrides [common.Serializable](common_serializable).[constructor](common_serializable#constructor)*

{:.url-source-ref}
[lib/clustering/agglomerativeClustering.ts:12](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/clustering/agglomerativeClustering.ts#L12)

**Returns:** [clustering.AgglomerativeClustering](clustering_agglomerativeclustering)

## Properties

•  **config**: [clustering.AglomerativeClusteringConfig](clustering_aglomerativeclusteringconfig)

*Inherited from [common.Serializable](common_serializable).[config](common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/common/serializable.ts#L8)

___

• `Protected` **distanceFunc**: Function

{:.url-source-ref}
[lib/clustering/agglomerativeClustering.ts:10](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/clustering/agglomerativeClustering.ts#L10)

___

• `Protected` **fitData**: number[][]

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[fitData](clustering_clusteringalgorithm#fitdata)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:4](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/clustering/clusteringBase.ts#L4)

___

• `Protected` **initialized**: boolean = false

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[initialized](clustering_clusteringalgorithm#initialized)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:8](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/clustering/clusteringBase.ts#L8)

___

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[iteration](common_evolutionaryalgorithm#iteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/common/evolutionaryAlgorithm.ts#L8)

___

• `Protected` **labels**: number[]

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[labels](clustering_clusteringalgorithm#labels)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:6](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/clustering/clusteringBase.ts#L6)

___

• `Private` **numLeaves**: number

{:.url-source-ref}
[lib/clustering/agglomerativeClustering.ts:12](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/clustering/agglomerativeClustering.ts#L12)

## Methods

{:.method-highlight}
▸ **canStop**(): boolean

*Overrides [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[canStop](clustering_clusteringalgorithm#canstop)*

{:.url-source-ref}
[lib/clustering/agglomerativeClustering.ts:23](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/clustering/agglomerativeClustering.ts#L23)

**Returns:** boolean

___

{:.method-highlight}
▸ **fit**(`data`: number[][]): number[]

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[fit](clustering_clusteringalgorithm#fit)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:30](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/clustering/clusteringBase.ts#L30)

**Returns:** number[]

___

{:.method-highlight}
▸ **fitAsync**(`data`: number[][]): Generator

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[fitAsync](clustering_clusteringalgorithm#fitasync)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:19](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/clustering/clusteringBase.ts#L19)

**Returns:** Generator

___

{:.method-highlight}
▸ **initializeDependencies**(`distanceFunction?`: DistanceMeasurement): void

{:.url-source-ref}
[lib/clustering/agglomerativeClustering.ts:38](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/clustering/agglomerativeClustering.ts#L38)

**Returns:** void

___

{:.method-highlight}
▸ **loadState**(`from`: string): void

*Inherited from [common.Serializable](common_serializable).[loadState](common_serializable#loadstate)*

{:.url-source-ref}
[lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/common/serializable.ts#L14)

**Returns:** void

___

{:.method-highlight}
▸ **onEndFit**(): void

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[onEndFit](clustering_clusteringalgorithm#onendfit)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:41](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/clustering/clusteringBase.ts#L41)

**Returns:** void

___

{:.method-highlight}
▸ **predict**(`data`: number[][]): number[]

*Overrides [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[predict](clustering_clusteringalgorithm#predict)*

{:.url-source-ref}
[lib/clustering/agglomerativeClustering.ts:47](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/clustering/agglomerativeClustering.ts#L47)

**Returns:** number[]

___

{:.method-highlight}
▸ **prepareDataset**(`data`: number[][]): void

*Overrides [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[prepareDataset](clustering_clusteringalgorithm#preparedataset)*

{:.url-source-ref}
[lib/clustering/agglomerativeClustering.ts:31](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/clustering/agglomerativeClustering.ts#L31)

**Returns:** void

___

{:.method-highlight}
▸ **serialize**(): string

*Inherited from [common.Serializable](common_serializable).[serialize](common_serializable#serialize)*

{:.url-source-ref}
[lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/common/serializable.ts#L10)

**Returns:** string

___

{:.method-highlight}
▸ **shouldStop**(): boolean

*Overrides [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[shouldStop](common_evolutionaryalgorithm#shouldstop)*

{:.url-source-ref}
[lib/clustering/agglomerativeClustering.ts:27](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/clustering/agglomerativeClustering.ts#L27)

**Returns:** boolean

___

{:.method-highlight}
▸ **step**(): void

*Overrides [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[step](common_evolutionaryalgorithm#step)*

{:.url-source-ref}
[lib/clustering/agglomerativeClustering.ts:19](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/clustering/agglomerativeClustering.ts#L19)

**Returns:** void
