---
layout: default
title: kMeans
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [clustering.kMeans](clustering_kmeans)

# kMeans

## Hierarchy

* [clustering.centroidClustering](clustering_centroidclustering)

  ↳ **clustering.kMeans**

## Indexable

▪ [key: string]: SerializableType

## Index

### Constructors

* [constructor](clustering_kmeans#constructor)

### Properties

* [centroids](clustering_kmeans#centroids)
* [clusters](clustering_kmeans#clusters)
* [config](clustering_kmeans#config)
* [convergence](clustering_kmeans#convergence)
* [convergenceIterations](clustering_kmeans#convergenceiterations)
* [distanceFn](clustering_kmeans#distancefn)
* [distanceFunc](clustering_kmeans#distancefunc)
* [fitData](clustering_kmeans#fitdata)
* [initialized](clustering_kmeans#initialized)
* [iteration](clustering_kmeans#iteration)
* [iterations](clustering_kmeans#iterations)
* [labels](clustering_kmeans#labels)

### Methods

* [canStop](clustering_kmeans#canstop)
* [fit](clustering_kmeans#fit)
* [fitAsync](clustering_kmeans#fitasync)
* [initializeDependencies](clustering_kmeans#initializedependencies)
* [loadState](clustering_kmeans#loadstate)
* [onEndFit](clustering_kmeans#onendfit)
* [predict](clustering_kmeans#predict)
* [prepareDataset](clustering_kmeans#preparedataset)
* [serialize](clustering_kmeans#serialize)
* [shouldStop](clustering_kmeans#shouldstop)
* [step](clustering_kmeans#step)

## Constructors

### constructor

\+ **new KMeans**(`config?`: [clustering.kMeans](clustering_kmeans) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): KMeans

*Overrides [clustering.centroidClustering](clustering_centroidclustering).[constructor](clustering_centroidclustering#constructor)*

*Defined in [lib/clustering/kMeans.ts:17](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/kMeans.ts#L17)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [clustering.kMeans](clustering_kmeans) \| undefined |
`distanceFunction?` | DistanceMeasurement \| undefined |

**Returns:** KMeans

## Properties

### centroids

•  **centroids**: number[][] = []

*Inherited from [clustering.centroidClustering](clustering_centroidclustering).[centroids](clustering_centroidclustering#centroids)*

*Defined in [lib/clustering/centroidClustering.ts:6](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/centroidClustering.ts#L6)*

___

### clusters

•  **clusters**: number = 8

*Defined in [lib/clustering/kMeans.ts:9](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/kMeans.ts#L9)*

___

### config

•  **config**: [clustering.kMeans](clustering_kmeans)

*Inherited from [common.serializable](common_serializable).[config](common_serializable#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/serializable.ts#L8)*

___

### convergence

• `Private` **convergence**: [common.convergence](common_convergence)

*Defined in [lib/clustering/kMeans.ts:17](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/kMeans.ts#L17)*

___

### convergenceIterations

•  **convergenceIterations**: number = -1

*Defined in [lib/clustering/kMeans.ts:13](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/kMeans.ts#L13)*

___

### distanceFn

•  **distanceFn**: string = "euclideanDistance"

*Inherited from [clustering.centroidClustering](clustering_centroidclustering).[distanceFn](clustering_centroidclustering#distancefn)*

*Defined in [lib/clustering/centroidClustering.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/centroidClustering.ts#L8)*

___

### distanceFunc

• `Protected` **distanceFunc**: Function

*Inherited from [clustering.centroidClustering](clustering_centroidclustering).[distanceFunc](clustering_centroidclustering#distancefunc)*

*Defined in [lib/clustering/centroidClustering.ts:12](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/centroidClustering.ts#L12)*

___

### fitData

• `Protected` **fitData**: number[][]

*Inherited from [clustering.clusteringBase](clustering_clusteringbase).[fitData](clustering_clusteringbase#fitdata)*

*Defined in lib/clustering/clusteringBase.ts:4*

___

### initialized

• `Protected` **initialized**: boolean = false

*Inherited from [clustering.clusteringBase](clustering_clusteringbase).[initialized](clustering_clusteringbase#initialized)*

*Defined in lib/clustering/clusteringBase.ts:8*

___

### iteration

• `Protected` **iteration**: number = 0

*Inherited from [common.evolutionaryAlgorithm](common_evolutionaryalgorithm).[iteration](common_evolutionaryalgorithm#iteration)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/evolutionaryAlgorithm.ts#L8)*

___

### iterations

•  **iterations**: number = 300

*Overrides [common.evolutionaryAlgorithm](common_evolutionaryalgorithm).[iterations](common_evolutionaryalgorithm#iterations)*

*Defined in [lib/clustering/kMeans.ts:11](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/kMeans.ts#L11)*

___

### labels

• `Protected` **labels**: number[]

*Inherited from [clustering.clusteringBase](clustering_clusteringbase).[labels](clustering_clusteringbase#labels)*

*Defined in lib/clustering/clusteringBase.ts:6*

## Methods

### canStop

▸ **canStop**(): boolean

*Overrides [clustering.clusteringBase](clustering_clusteringbase).[canStop](clustering_clusteringbase#canstop)*

*Defined in [lib/clustering/kMeans.ts:59](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/kMeans.ts#L59)*

**Returns:** boolean

___

### fit

▸ **fit**(`data`: number[][]): number[]

*Inherited from [clustering.clusteringBase](clustering_clusteringbase).[fit](clustering_clusteringbase#fit)*

*Defined in lib/clustering/clusteringBase.ts:30*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### fitAsync

▸ **fitAsync**(`data`: number[][]): Generator

*Inherited from [clustering.clusteringBase](clustering_clusteringbase).[fitAsync](clustering_clusteringbase#fitasync)*

*Defined in lib/clustering/clusteringBase.ts:19*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** Generator

___

### initializeDependencies

▸ **initializeDependencies**(`distanceFunction?`: DistanceMeasurement): void

*Inherited from [clustering.centroidClustering](clustering_centroidclustering).[initializeDependencies](clustering_centroidclustering#initializedependencies)*

*Defined in [lib/clustering/centroidClustering.ts:55](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/centroidClustering.ts#L55)*

#### Parameters:

Name | Type |
------ | ------ |
`distanceFunction?` | DistanceMeasurement |

**Returns:** void

___

### loadState

▸ **loadState**(`config`: string): void

*Inherited from [clustering.centroidClustering](clustering_centroidclustering).[loadState](clustering_centroidclustering#loadstate)*

*Overrides [common.serializable](common_serializable).[loadState](common_serializable#loadstate)*

*Defined in [lib/clustering/centroidClustering.ts:49](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/centroidClustering.ts#L49)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | string |

**Returns:** void

___

### onEndFit

▸ **onEndFit**(): void

*Inherited from [clustering.clusteringBase](clustering_clusteringbase).[onEndFit](clustering_clusteringbase#onendfit)*

*Defined in lib/clustering/clusteringBase.ts:41*

**Returns:** void

___

### predict

▸ **predict**(`data`: number[][]): number[]

*Inherited from [clustering.centroidClustering](clustering_centroidclustering).[predict](clustering_centroidclustering#predict)*

*Overrides [clustering.clusteringBase](clustering_clusteringbase).[predict](clustering_clusteringbase#predict)*

*Defined in [lib/clustering/centroidClustering.ts:19](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/centroidClustering.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### prepareDataset

▸ `Protected`**prepareDataset**(`data`: number[][]): void

*Inherited from [clustering.clusteringBase](clustering_clusteringbase).[prepareDataset](clustering_clusteringbase#preparedataset)*

*Defined in lib/clustering/clusteringBase.ts:10*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** void

___

### serialize

▸ **serialize**(): string

*Inherited from [common.serializable](common_serializable).[serialize](common_serializable#serialize)*

*Defined in [lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/serializable.ts#L10)*

**Returns:** string

___

### shouldStop

▸ **shouldStop**(): boolean

*Inherited from [common.evolutionaryAlgorithm](common_evolutionaryalgorithm).[shouldStop](common_evolutionaryalgorithm#shouldstop)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/evolutionaryAlgorithm.ts#L10)*

**Returns:** boolean

___

### step

▸ **step**(): void

*Overrides [common.evolutionaryAlgorithm](common_evolutionaryalgorithm).[step](common_evolutionaryalgorithm#step)*

*Defined in [lib/clustering/kMeans.ts:24](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/kMeans.ts#L24)*

**Returns:** void
