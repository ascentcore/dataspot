---
layout: default
title: KMeans
parent: clustering
grand_parent: Dataspot
has_children: false
---

# KMeans

The KMeans algorithm clusters data by trying to separate samples in n groups of equal variance, minimizing a criterion known as the inertia or
within-cluster sum-of-squares (see below). This algorithm requires the number of clusters to be specified.
It scales well to large number of samples and has been used across a large range of application areas in many different fields.
The k-means algorithm divides a set of  samples  into  disjoint clusters , each described by the mean of the samples in the cluster.
The means are commonly called the cluster “centroids”; note that they are not, in general, points from , although they live in the same space.
The K-means algorithm aims to choose centroids that minimise the inertia, or within-cluster sum-of-squares criterion:
 - Inertia can be recognized as a measure of how internally coherent clusters are. It suffers from various drawbacks:
 - Inertia makes the assumption that clusters are convex and isotropic, which is not always the case. It responds poorly to elongated clusters, or manifolds with irregular shapes.
 - Inertia is not a normalized metric: we just know that lower values are better and zero is optimal.
But in very high-dimensional spaces, Euclidean distances tend to become inflated (this is an instance of the so-called “curse of dimensionality”).
Running a dimensionality reduction algorithm such as Principal component analysis (PCA) prior to k-means clustering can alleviate this problem and speed up the computations.

**`sample`** 
```ts
import KMeans, { KMeansConfig } from '../../lib/clustering/kMeans'
import arcDataset from '../../lib/dataset/clustering/arcDataset'
import Axis from '../../lib/visualizations/d3/axis'
import Scatter from '../../lib/visualizations/d3/scatter'
import SVGMultipleVisualization from '../../lib/visualizations/d3/svgmultiple'

const initialArcDataset = arcDataset()

const mappedDataKMeans = initialArcDataset.map((data) => {
    return { x: data[0], y: data[1], r: 1.2 }
})

const plotKmeans = document.createElement('div')
const ref = document.querySelector(`[data-ref="documentation/sample"]`) || document.body
ref.appendChild(plotKmeans)

const scatter = new Scatter({})
const axis = new Axis({})
const visKMeans = new SVGMultipleVisualization({}, 'kmeans-plot-elem', [scatter, axis])
visKMeans.setContainer(plotKmeans)

visKMeans.dataUpdate(mappedDataKMeans, 'scatter-elem')
visKMeans.dataUpdate(mappedDataKMeans, 'axis-elem')

const kMeans = new KMeans(<KMeansConfig>{ clusters: 3 })
const fitPredictions = kMeans.fit(initialArcDataset)

mappedDataKMeans.forEach((point: any, index: number) => {
    point.color = fitPredictions[index]
})

visKMeans.dataUpdate(mappedDataKMeans, 'scatter-elem')

```

<div class="running-sample">
    <span class="running-sample-container" data-ref="documentation/sample"></span>
    <script src='/samples/sample.js' title="documentation/sample"></script>
</div>

## Hierarchy

* [clustering.CentroidClustering](/docs/classes/clustering_centroidclustering)\<[clustering.KMeansConfig](/docs/classes/clustering_kmeansconfig)>

  ↳ **clustering.KMeans**

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [config](#config) |
| [convergence](#convergence) |
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
\+ **new KMeans**(`config?`: [clustering.KMeansConfig](/docs/classes/clustering_kmeansconfig) \| undefined, `distanceFunction?`: DistanceMeasurement \| undefined): [clustering.KMeans](/docs/classes/clustering_kmeans)

*Overrides [clustering.CentroidClustering](/docs/classes/clustering_centroidclustering).[constructor](/docs/classes/clustering_centroidclustering#constructor)*

{:.url-source-ref}
[lib/clustering/kMeans.ts:34](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/kMeans.ts#L34)

**Returns:** [clustering.KMeans](/docs/classes/clustering_kmeans)

## Properties

•  **config**: [clustering.KMeansConfig](/docs/classes/clustering_kmeansconfig)

*Inherited from [common.Serializable](/docs/classes/common_serializable).[config](/docs/classes/common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/b02167c/lib/common/serializable.ts#L8)

___

• `Private` **convergence**: [common.Convergence](/docs/classes/common_convergence)

{:.url-source-ref}
[lib/clustering/kMeans.ts:34](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/kMeans.ts#L34)

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

test kmeans stop documentation

*Overrides [clustering.ClusteringAlgorithm](/docs/classes/clustering_clusteringalgorithm).[canStop](/docs/classes/clustering_clusteringalgorithm#canstop)*

{:.url-source-ref}
[lib/clustering/kMeans.ts:82](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/kMeans.ts#L82)

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

Test kmeans step documentation

*Overrides [common.EvolutionaryAlgorithm](/docs/classes/common_evolutionaryalgorithm).[step](/docs/classes/common_evolutionaryalgorithm#step)*

{:.url-source-ref}
[lib/clustering/kMeans.ts:44](https://github.com/ascentcore/dataspot/blob/b02167c/lib/clustering/kMeans.ts#L44)

**Returns:** void
