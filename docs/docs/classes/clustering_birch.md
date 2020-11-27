---
layout: default
title: Birch
parent: clustering
grand_parent: Dataspot
has_children: false
---

# Birch

## Hierarchy

* [clustering.CentroidClustering](/docs/classes/clustering_centroidclustering)\<[clustering.BirchConfig](/docs/classes/clustering_birchconfig)>

  ↳ **clustering.Birch**

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
\+ **new Birch**(`config?`: [clustering.BirchConfig](/docs/classes/clustering_birchconfig) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): [clustering.Birch](/docs/classes/clustering_birch)

*Overrides [clustering.CentroidClustering](/docs/classes/clustering_centroidclustering).[constructor](/docs/classes/clustering_centroidclustering#constructor)*

{:.url-source-ref}
[lib/clustering/birch.ts:14](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/birch.ts#L14)

**Returns:** [clustering.Birch](/docs/classes/clustering_birch)

## Properties

•  **config**: [clustering.BirchConfig](/docs/classes/clustering_birchconfig)

*Inherited from [common.Serializable](/docs/classes/common_serializable).[config](/docs/classes/common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/b02167c/lib/common/serializable.ts#L8)

___

• `Protected` **distanceFunc**: Function

*Inherited from [clustering.CentroidClustering](/docs/classes/clustering_centroidclustering).[distanceFunc](/docs/classes/clustering_centroidclustering#distancefunc)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:12](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/centroidClustering.ts#L12)

___

• `Protected` **fitData**: number[][]

*Inherited from [clustering.ClusteringAlgorithm](/docs/classes/clustering_clusteringalgorithm).[fitData](/docs/classes/clustering_clusteringalgorithm#fitdata)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:4](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/clusteringBase.ts#L4)

___

• `Protected` **initialized**: boolean = false

*Inherited from [clustering.ClusteringAlgorithm](/docs/classes/clustering_clusteringalgorithm).[initialized](/docs/classes/clustering_clusteringalgorithm#initialized)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:8](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/clusteringBase.ts#L8)

___

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](/docs/classes/common_evolutionaryalgorithm).[iteration](/docs/classes/common_evolutionaryalgorithm#iteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/b02167c/lib/common/evolutionaryAlgorithm.ts#L8)

___

• `Protected` **labels**: number[]

*Inherited from [clustering.ClusteringAlgorithm](/docs/classes/clustering_clusteringalgorithm).[labels](/docs/classes/clustering_clusteringalgorithm#labels)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:6](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/clusteringBase.ts#L6)

## Methods

{:.method-highlight}
▸ **canStop**(): boolean

*Overrides [clustering.ClusteringAlgorithm](/docs/classes/clustering_clusteringalgorithm).[canStop](/docs/classes/clustering_clusteringalgorithm#canstop)*

{:.url-source-ref}
[lib/clustering/birch.ts:25](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/birch.ts#L25)

**Returns:** boolean

___

{:.method-highlight}
▸ **fit**(`data`: number[][]): number[]

*Inherited from [clustering.ClusteringAlgorithm](/docs/classes/clustering_clusteringalgorithm).[fit](/docs/classes/clustering_clusteringalgorithm#fit)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:30](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/clusteringBase.ts#L30)

**Returns:** number[]

___

{:.method-highlight}
▸ **fitAsync**(`data`: number[][]): Generator

*Inherited from [clustering.ClusteringAlgorithm](/docs/classes/clustering_clusteringalgorithm).[fitAsync](/docs/classes/clustering_clusteringalgorithm#fitasync)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:19](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/clusteringBase.ts#L19)

**Returns:** Generator

___

{:.method-highlight}
▸ **initializeDependencies**(`distanceFunction?`: DistanceMeasurement): void

*Inherited from [clustering.CentroidClustering](/docs/classes/clustering_centroidclustering).[initializeDependencies](/docs/classes/clustering_centroidclustering#initializedependencies)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:55](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/centroidClustering.ts#L55)

**Returns:** void

___

{:.method-highlight}
▸ **loadState**(`config`: string): void

*Inherited from [clustering.CentroidClustering](/docs/classes/clustering_centroidclustering).[loadState](/docs/classes/clustering_centroidclustering#loadstate)*

*Overrides [common.Serializable](/docs/classes/common_serializable).[loadState](/docs/classes/common_serializable#loadstate)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:49](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/centroidClustering.ts#L49)

**Returns:** void

___

{:.method-highlight}
▸ **onEndFit**(): void

*Inherited from [clustering.ClusteringAlgorithm](/docs/classes/clustering_clusteringalgorithm).[onEndFit](/docs/classes/clustering_clusteringalgorithm#onendfit)*

{:.url-source-ref}
[lib/clustering/clusteringBase.ts:41](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/clusteringBase.ts#L41)

**Returns:** void

___

{:.method-highlight}
▸ **predict**(`data`: number[][]): number[]

*Inherited from [clustering.CentroidClustering](/docs/classes/clustering_centroidclustering).[predict](/docs/classes/clustering_centroidclustering#predict)*

*Overrides [clustering.ClusteringAlgorithm](/docs/classes/clustering_clusteringalgorithm).[predict](/docs/classes/clustering_clusteringalgorithm#predict)*

{:.url-source-ref}
[lib/clustering/centroidClustering.ts:19](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/centroidClustering.ts#L19)

**Returns:** number[]

___

{:.method-highlight}
▸ `Protected`**prepareDataset**(`data`: number[][]): void

*Inherited from [clustering.ClusteringAlgorithm](/docs/classes/clustering_clusteringalgorithm).[prepareDataset](/docs/classes/clustering_clusteringalgorithm#preparedataset)*

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
▸ **step**(): void

*Overrides [common.EvolutionaryAlgorithm](/docs/classes/common_evolutionaryalgorithm).[step](/docs/classes/common_evolutionaryalgorithm#step)*

{:.url-source-ref}
[lib/clustering/birch.ts:20](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/birch.ts#L20)

**Returns:** void
