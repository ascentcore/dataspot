---
layout: default
title: AgglomerativeClustering
parent: clustering
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [clustering.AgglomerativeClustering](clustering_agglomerativeclustering)

# AgglomerativeClustering

## Hierarchy

* [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm)\<[clustering.AglomerativeClusteringConfig](clustering_aglomerativeclusteringconfig)>

  ↳ **clustering.AgglomerativeClustering**

## Index

### Constructors

* [constructor](clustering_agglomerativeclustering#constructor)

### Properties

* [config](clustering_agglomerativeclustering#config)
* [distanceFunc](clustering_agglomerativeclustering#distancefunc)
* [fitData](clustering_agglomerativeclustering#fitdata)
* [initialized](clustering_agglomerativeclustering#initialized)
* [iteration](clustering_agglomerativeclustering#iteration)
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

\+ **new AgglomerativeClustering**(`config?`: [clustering.AglomerativeClusteringConfig](clustering_aglomerativeclusteringconfig) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): [clustering.AgglomerativeClustering](clustering_agglomerativeclustering)

*Overrides [common.Serializable](common_serializable).[constructor](common_serializable#constructor)*

*Defined in [lib/clustering/agglomerativeClustering.ts:12](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/agglomerativeClustering.ts#L12)*

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [clustering.AglomerativeClusteringConfig](clustering_aglomerativeclusteringconfig) \| undefined |
`distanceFunction?` | DistanceMeasurement \| undefined |

**Returns:** [clustering.AgglomerativeClustering](clustering_agglomerativeclustering)

## Properties

### config

•  **config**: [clustering.AglomerativeClusteringConfig](clustering_aglomerativeclusteringconfig)

*Inherited from [common.Serializable](common_serializable).[config](common_serializable#config)*

*Defined in [lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/common/serializable.ts#L8)*

___

### distanceFunc

• `Protected` **distanceFunc**: Function

*Defined in [lib/clustering/agglomerativeClustering.ts:10](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/agglomerativeClustering.ts#L10)*

___

### fitData

• `Protected` **fitData**: number[][]

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[fitData](clustering_clusteringalgorithm#fitdata)*

*Defined in [lib/clustering/clusteringBase.ts:4](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/clusteringBase.ts#L4)*

___

### initialized

• `Protected` **initialized**: boolean = false

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[initialized](clustering_clusteringalgorithm#initialized)*

*Defined in [lib/clustering/clusteringBase.ts:8](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/clusteringBase.ts#L8)*

___

### iteration

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[iteration](common_evolutionaryalgorithm#iteration)*

*Defined in [lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/common/evolutionaryAlgorithm.ts#L8)*

___

### labels

• `Protected` **labels**: number[]

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[labels](clustering_clusteringalgorithm#labels)*

*Defined in [lib/clustering/clusteringBase.ts:6](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/clusteringBase.ts#L6)*

___

### numLeaves

• `Private` **numLeaves**: number

*Defined in [lib/clustering/agglomerativeClustering.ts:12](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/agglomerativeClustering.ts#L12)*

## Methods

### canStop

▸ **canStop**(): boolean

*Overrides [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[canStop](clustering_clusteringalgorithm#canstop)*

*Defined in [lib/clustering/agglomerativeClustering.ts:23](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/agglomerativeClustering.ts#L23)*

**Returns:** boolean

___

### fit

▸ **fit**(`data`: number[][]): number[]

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[fit](clustering_clusteringalgorithm#fit)*

*Defined in [lib/clustering/clusteringBase.ts:30](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/clusteringBase.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### fitAsync

▸ **fitAsync**(`data`: number[][]): Generator

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[fitAsync](clustering_clusteringalgorithm#fitasync)*

*Defined in [lib/clustering/clusteringBase.ts:19](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/clusteringBase.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** Generator

___

### initializeDependencies

▸ **initializeDependencies**(`distanceFunction?`: DistanceMeasurement): void

*Defined in [lib/clustering/agglomerativeClustering.ts:38](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/agglomerativeClustering.ts#L38)*

#### Parameters:

Name | Type |
------ | ------ |
`distanceFunction?` | DistanceMeasurement |

**Returns:** void

___

### loadState

▸ **loadState**(`from`: string): void

*Inherited from [common.Serializable](common_serializable).[loadState](common_serializable#loadstate)*

*Defined in [lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/common/serializable.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`from` | string |

**Returns:** void

___

### onEndFit

▸ **onEndFit**(): void

*Inherited from [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[onEndFit](clustering_clusteringalgorithm#onendfit)*

*Defined in [lib/clustering/clusteringBase.ts:41](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/clusteringBase.ts#L41)*

**Returns:** void

___

### predict

▸ **predict**(`data`: number[][]): number[]

*Overrides [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[predict](clustering_clusteringalgorithm#predict)*

*Defined in [lib/clustering/agglomerativeClustering.ts:47](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/agglomerativeClustering.ts#L47)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** number[]

___

### prepareDataset

▸ **prepareDataset**(`data`: number[][]): void

*Overrides [clustering.ClusteringAlgorithm](clustering_clusteringalgorithm).[prepareDataset](clustering_clusteringalgorithm#preparedataset)*

*Defined in [lib/clustering/agglomerativeClustering.ts:31](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/agglomerativeClustering.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | number[][] |

**Returns:** void

___

### serialize

▸ **serialize**(): string

*Inherited from [common.Serializable](common_serializable).[serialize](common_serializable#serialize)*

*Defined in [lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/common/serializable.ts#L10)*

**Returns:** string

___

### shouldStop

▸ **shouldStop**(): boolean

*Overrides [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[shouldStop](common_evolutionaryalgorithm#shouldstop)*

*Defined in [lib/clustering/agglomerativeClustering.ts:27](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/agglomerativeClustering.ts#L27)*

**Returns:** boolean

___

### step

▸ **step**(): void

*Overrides [common.EvolutionaryAlgorithm](common_evolutionaryalgorithm).[step](common_evolutionaryalgorithm#step)*

*Defined in [lib/clustering/agglomerativeClustering.ts:19](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/clustering/agglomerativeClustering.ts#L19)*

**Returns:** void
