---
layout: default
title: birch
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [clustering.birch](clustering_birch)

# birch

## Hierarchy

* [clustering.centroidClustering](clustering_centroidclustering)

  ↳ **clustering.birch**

## Indexable

▪ [key: string]: SerializableType

## Index

### Constructors

* [constructor](clustering_birch#constructor)

### Properties

* [branchingFactor](clustering_birch#branchingfactor)
* [centroids](clustering_birch#centroids)
* [clusters](clustering_birch#clusters)
* [config](clustering_birch#config)
* [distanceFn](clustering_birch#distancefn)
* [distanceFunc](clustering_birch#distancefunc)
* [fitData](clustering_birch#fitdata)
* [initialized](clustering_birch#initialized)
* [iteration](clustering_birch#iteration)
* [iterations](clustering_birch#iterations)
* [labels](clustering_birch#labels)
* [threshold](clustering_birch#threshold)

### Methods

* [canStop](clustering_birch#canstop)
* [fit](clustering_birch#fit)
* [fitAsync](clustering_birch#fitasync)
* [initializeDependencies](clustering_birch#initializedependencies)
* [loadState](clustering_birch#loadstate)
* [onEndFit](clustering_birch#onendfit)
* [predict](clustering_birch#predict)
* [prepareDataset](clustering_birch#preparedataset)
* [serialize](clustering_birch#serialize)
* [shouldStop](clustering_birch#shouldstop)
* [step](clustering_birch#step)

## Constructors

### constructor

\+ **new Birch**(`config?`: [clustering.birch](clustering_birch) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): Birch

*Overrides [clustering.centroidClustering](clustering_centroidclustering).[constructor](clustering_centroidclustering#constructor)*

*Defined in [lib/clustering/birch.ts:14](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/birch.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [clustering.birch](clustering_birch) \| undefined |
`distanceFunction?` | DistanceMeasurement \| undefined |

**Returns:** Birch

## Properties

### branchingFactor

•  **branchingFactor**: number = 50

*Defined in [lib/clustering/birch.ts:10](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/birch.ts#L10)*

___

### centroids

•  **centroids**: number[][] = []

*Inherited from [clustering.centroidClustering](clustering_centroidclustering).[centroids](clustering_centroidclustering#centroids)*

*Defined in [lib/clustering/centroidClustering.ts:6](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/centroidClustering.ts#L6)*

___

### clusters

•  **clusters**: number = 3

*Defined in [lib/clustering/birch.ts:6](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/birch.ts#L6)*

___

### config

•  **config**: [clustering.birch](clustering_birch)

*Inherited from [common.serializable](common_serializable).[config](common_serializable#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/serializable.ts#L8)*

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

•  **iterations**: number = 100

*Inherited from [common.evolutionaryAlgorithm](common_evolutionaryalgorithm).[iterations](common_evolutionaryalgorithm#iterations)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/evolutionaryAlgorithm.ts#L4)*

___

### labels

• `Protected` **labels**: number[]

*Inherited from [clustering.clusteringBase](clustering_clusteringbase).[labels](clustering_clusteringbase#labels)*

*Defined in lib/clustering/clusteringBase.ts:6*

___

### threshold

•  **threshold**: number = 0.5

*Defined in [lib/clustering/birch.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/birch.ts#L8)*

## Methods

### canStop

▸ **canStop**(): boolean

*Overrides [clustering.clusteringBase](clustering_clusteringbase).[canStop](clustering_clusteringbase#canstop)*

*Defined in [lib/clustering/birch.ts:25](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/birch.ts#L25)*

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

*Defined in [lib/clustering/birch.ts:20](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/birch.ts#L20)*

**Returns:** void
