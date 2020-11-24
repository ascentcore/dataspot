---
layout: default
title: agglomerativeClustering
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [clustering.agglomerativeClustering](clustering_agglomerativeclustering)

# agglomerativeClustering

## Hierarchy

* [common.evolutionaryAlgorithm](common_evolutionaryalgorithm)

  ↳ **clustering.agglomerativeClustering**

## Indexable

▪ [key: string]: SerializableType

## Index

### Constructors

* [constructor](clustering_agglomerativeclustering#constructor)

### Properties

* [config](clustering_agglomerativeclustering#config)
* [distanceFn](clustering_agglomerativeclustering#distancefn)
* [distanceFunc](clustering_agglomerativeclustering#distancefunc)
* [fitData](clustering_agglomerativeclustering#fitdata)
* [initialized](clustering_agglomerativeclustering#initialized)
* [iteration](clustering_agglomerativeclustering#iteration)
* [iterations](clustering_agglomerativeclustering#iterations)
* [labels](clustering_agglomerativeclustering#labels)
* [numLeaves](clustering_agglomerativeclustering#numleaves)

### Methods

* [canStop](clustering_agglomerativeclustering#canstop)
* [fit](clustering_agglomerativeclustering#fit)
* [fitAsync](clustering_agglomerativeclustering#fitasync)
* [initializeDependencies](clustering_agglomerativeclustering#initializedependencies)
* [loadState](clustering_agglomerativeclustering#loadstate)
* [onEndFit](clustering_agglomerativeclustering#onendfit)
* [predict](clustering_agglomerativeclustering#predict)
* [prepareDataset](clustering_agglomerativeclustering#preparedataset)
* [serialize](clustering_agglomerativeclustering#serialize)
* [shouldStop](clustering_agglomerativeclustering#shouldstop)
* [step](clustering_agglomerativeclustering#step)

## Constructors

### constructor

\+ **new AgglomerativeClustering**(`config?`: [clustering.agglomerativeClustering](clustering_agglomerativeclustering) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): AgglomerativeClustering

*Overrides [common.serializable](common_serializable).[constructor](common_serializable#constructor)*

*Defined in [lib/clustering/agglomerativeClustering.ts:12](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/agglomerativeClustering.ts#L12)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [clustering.agglomerativeClustering](clustering_agglomerativeclustering) \| undefined |
`distanceFunction?` | DistanceMeasurement \| undefined |

**Returns:** AgglomerativeClustering

## Properties

### config

•  **config**: [clustering.agglomerativeClustering](clustering_agglomerativeclustering)

*Inherited from [common.serializable](common_serializable).[config](common_serializable#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/serializable.ts#L8)*

___

### distanceFn

•  **distanceFn**: string = "euclideanDistance"

*Defined in [lib/clustering/agglomerativeClustering.ts:6](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/agglomerativeClustering.ts#L6)*

___

### distanceFunc

• `Protected` **distanceFunc**: Function

*Defined in [lib/clustering/agglomerativeClustering.ts:10](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/agglomerativeClustering.ts#L10)*

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

### numLeaves

• `Private` **numLeaves**: number

*Defined in [lib/clustering/agglomerativeClustering.ts:12](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/agglomerativeClustering.ts#L12)*

## Methods

### canStop

▸ **canStop**(): boolean

*Overrides [clustering.clusteringBase](clustering_clusteringbase).[canStop](clustering_clusteringbase#canstop)*

*Defined in [lib/clustering/agglomerativeClustering.ts:23](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/agglomerativeClustering.ts#L23)*

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

*Defined in [lib/clustering/agglomerativeClustering.ts:38](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/agglomerativeClustering.ts#L38)*

#### Parameters:

Name | Type |
------ | ------ |
`distanceFunction?` | DistanceMeasurement |

**Returns:** void

___

### loadState

▸ **loadState**(`from`: string): void

*Inherited from [common.serializable](common_serializable).[loadState](common_serializable#loadstate)*

*Defined in [lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/7114653/lib/common/serializable.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`from` | string |

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

*Overrides [clustering.clusteringBase](clustering_clusteringbase).[predict](clustering_clusteringbase#predict)*

*Defined in [lib/clustering/agglomerativeClustering.ts:47](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/agglomerativeClustering.ts#L47)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### prepareDataset

▸ **prepareDataset**(`data`: number[][]): void

*Overrides [clustering.clusteringBase](clustering_clusteringbase).[prepareDataset](clustering_clusteringbase#preparedataset)*

*Defined in [lib/clustering/agglomerativeClustering.ts:31](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/agglomerativeClustering.ts#L31)*

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

*Overrides [common.evolutionaryAlgorithm](common_evolutionaryalgorithm).[shouldStop](common_evolutionaryalgorithm#shouldstop)*

*Defined in [lib/clustering/agglomerativeClustering.ts:27](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/agglomerativeClustering.ts#L27)*

**Returns:** boolean

___

### step

▸ **step**(): void

*Overrides [common.evolutionaryAlgorithm](common_evolutionaryalgorithm).[step](common_evolutionaryalgorithm#step)*

*Defined in [lib/clustering/agglomerativeClustering.ts:19](https://github.com/ascentcore/dataspot/blob/7114653/lib/clustering/agglomerativeClustering.ts#L19)*

**Returns:** void
