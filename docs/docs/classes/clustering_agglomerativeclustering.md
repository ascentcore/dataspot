---
layout: default
title: agglomerativeClustering
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / clustering.agglomerativeClustering

# agglomerativeClustering

## Hierarchy

* [common.evolutionaryAlgorithm](common_evolutionaryalgorithm.md)

  ↳ **clustering.agglomerativeClustering**

## Indexable

▪ [key: string]: SerializableType

## Index

### Constructors

* [constructor](clustering_agglomerativeclustering.md#constructor)

### Properties

* [config](clustering_agglomerativeclustering.md#config)
* [distanceFn](clustering_agglomerativeclustering.md#distancefn)
* [distanceFunc](clustering_agglomerativeclustering.md#distancefunc)
* [fitData](clustering_agglomerativeclustering.md#fitdata)
* [initialized](clustering_agglomerativeclustering.md#initialized)
* [iteration](clustering_agglomerativeclustering.md#iteration)
* [iterations](clustering_agglomerativeclustering.md#iterations)
* [labels](clustering_agglomerativeclustering.md#labels)
* [numLeaves](clustering_agglomerativeclustering.md#numleaves)

### Methods

* [canStop](clustering_agglomerativeclustering.md#canstop)
* [fit](clustering_agglomerativeclustering.md#fit)
* [fitAsync](clustering_agglomerativeclustering.md#fitasync)
* [initializeDependencies](clustering_agglomerativeclustering.md#initializedependencies)
* [loadState](clustering_agglomerativeclustering.md#loadstate)
* [onEndFit](clustering_agglomerativeclustering.md#onendfit)
* [predict](clustering_agglomerativeclustering.md#predict)
* [prepareDataset](clustering_agglomerativeclustering.md#preparedataset)
* [serialize](clustering_agglomerativeclustering.md#serialize)
* [shouldStop](clustering_agglomerativeclustering.md#shouldstop)
* [step](clustering_agglomerativeclustering.md#step)

## Constructors

### constructor

\+ **new AgglomerativeClustering**(`config?`: [clustering.agglomerativeClustering](clustering_agglomerativeclustering.md) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): AgglomerativeClustering

*Overrides [common.serializable](common_serializable.md).[constructor](common_serializable.md#constructor)*

*Defined in [lib/clustering/agglomerativeClustering.ts:12](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/agglomerativeClustering.ts#L12)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [clustering.agglomerativeClustering](clustering_agglomerativeclustering.md) \| undefined |
`distanceFunction?` | DistanceMeasurement \| undefined |

**Returns:** AgglomerativeClustering

## Properties

### config

•  **config**: [clustering.agglomerativeClustering](clustering_agglomerativeclustering.md)

*Inherited from [common.serializable](common_serializable.md).[config](common_serializable.md#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/serializable.ts#L8)*

___

### distanceFn

•  **distanceFn**: string = "euclideanDistance"

*Defined in [lib/clustering/agglomerativeClustering.ts:6](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/agglomerativeClustering.ts#L6)*

___

### distanceFunc

• `Protected` **distanceFunc**: Function

*Defined in [lib/clustering/agglomerativeClustering.ts:10](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/agglomerativeClustering.ts#L10)*

___

### fitData

• `Protected` **fitData**: number[][]

*Inherited from [clustering.clustering](clustering_clustering.md).[fitData](clustering_clustering.md#fitdata)*

*Defined in [lib/clustering/clustering.ts:4](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L4)*

___

### initialized

• `Protected` **initialized**: boolean = false

*Inherited from [clustering.clustering](clustering_clustering.md).[initialized](clustering_clustering.md#initialized)*

*Defined in [lib/clustering/clustering.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L8)*

___

### iteration

• `Protected` **iteration**: number = 0

*Inherited from [common.evolutionaryAlgorithm](common_evolutionaryalgorithm.md).[iteration](common_evolutionaryalgorithm.md#iteration)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/evolutionaryAlgorithm.ts#L8)*

___

### iterations

•  **iterations**: number = 100

*Inherited from [common.evolutionaryAlgorithm](common_evolutionaryalgorithm.md).[iterations](common_evolutionaryalgorithm.md#iterations)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/evolutionaryAlgorithm.ts#L4)*

___

### labels

• `Protected` **labels**: number[]

*Inherited from [clustering.clustering](clustering_clustering.md).[labels](clustering_clustering.md#labels)*

*Defined in [lib/clustering/clustering.ts:6](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L6)*

___

### numLeaves

• `Private` **numLeaves**: number

*Defined in [lib/clustering/agglomerativeClustering.ts:12](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/agglomerativeClustering.ts#L12)*

## Methods

### canStop

▸ **canStop**(): boolean

*Overrides [clustering.clustering](clustering_clustering.md).[canStop](clustering_clustering.md#canstop)*

*Defined in [lib/clustering/agglomerativeClustering.ts:23](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/agglomerativeClustering.ts#L23)*

**Returns:** boolean

___

### fit

▸ **fit**(`data`: number[][]): number[]

*Inherited from [clustering.clustering](clustering_clustering.md).[fit](clustering_clustering.md#fit)*

*Defined in [lib/clustering/clustering.ts:30](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### fitAsync

▸ **fitAsync**(`data`: number[][]): Generator

*Inherited from [clustering.clustering](clustering_clustering.md).[fitAsync](clustering_clustering.md#fitasync)*

*Defined in [lib/clustering/clustering.ts:19](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** Generator

___

### initializeDependencies

▸ **initializeDependencies**(`distanceFunction?`: DistanceMeasurement): void

*Defined in [lib/clustering/agglomerativeClustering.ts:38](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/agglomerativeClustering.ts#L38)*

#### Parameters:

Name | Type |
------ | ------ |
`distanceFunction?` | DistanceMeasurement |

**Returns:** void

___

### loadState

▸ **loadState**(`from`: string): void

*Inherited from [common.serializable](common_serializable.md).[loadState](common_serializable.md#loadstate)*

*Defined in [lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/serializable.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`from` | string |

**Returns:** void

___

### onEndFit

▸ **onEndFit**(): void

*Inherited from [clustering.clustering](clustering_clustering.md).[onEndFit](clustering_clustering.md#onendfit)*

*Defined in [lib/clustering/clustering.ts:41](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/clustering.ts#L41)*

**Returns:** void

___

### predict

▸ **predict**(`data`: number[][]): number[]

*Overrides [clustering.clustering](clustering_clustering.md).[predict](clustering_clustering.md#predict)*

*Defined in [lib/clustering/agglomerativeClustering.ts:47](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/agglomerativeClustering.ts#L47)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### prepareDataset

▸ **prepareDataset**(`data`: number[][]): void

*Overrides [clustering.clustering](clustering_clustering.md).[prepareDataset](clustering_clustering.md#preparedataset)*

*Defined in [lib/clustering/agglomerativeClustering.ts:31](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/agglomerativeClustering.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** void

___

### serialize

▸ **serialize**(): string

*Inherited from [common.serializable](common_serializable.md).[serialize](common_serializable.md#serialize)*

*Defined in [lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/serializable.ts#L10)*

**Returns:** string

___

### shouldStop

▸ **shouldStop**(): boolean

*Overrides [common.evolutionaryAlgorithm](common_evolutionaryalgorithm.md).[shouldStop](common_evolutionaryalgorithm.md#shouldstop)*

*Defined in [lib/clustering/agglomerativeClustering.ts:27](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/agglomerativeClustering.ts#L27)*

**Returns:** boolean

___

### step

▸ **step**(): void

*Overrides [common.evolutionaryAlgorithm](common_evolutionaryalgorithm.md).[step](common_evolutionaryalgorithm.md#step)*

*Defined in [lib/clustering/agglomerativeClustering.ts:19](https://github.com/ascentcore/dataspot/blob/46219f5/lib/clustering/agglomerativeClustering.ts#L19)*

**Returns:** void
