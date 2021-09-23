---
layout: default
title: Clustering
parent: datasets
grand_parent: Dataspot
has_children: false
---

# Clustering

The clustering datasets are a set of synthetic 2D data to be used
for benchmarking clustering algorithms. The dataset is intended to grow
but the current set should allow one to evaluate performance for all types
of clustering algorithms

Running sample for the current set of clustering datasets:

**`sample`** documentation/clusteringComparison

<div class="running-sample">
    <span class="running-sample-container" data-ref="documentation/clusteringComparison"></span>
    <script src='/dataspot/samples/clusteringComparison.js' title="documentation/clusteringComparison"></script>
</div>

## Index

| Properties |
|-----------|
| [list](#list) |

| Methods |
|-----------|
| [arc](#arc) |
| [blob](#blob) |
| [concentricRings](#concentricrings) |
| [fillSpace](#fillspace) |
| [getStaticProperty](#getstaticproperty) |
| [noisyWithBlob](#noisywithblob) |
| [potato](#potato) |
| [towers](#towers) |

## Properties

▪ `Static` **list**: string[] = ['arc', 'blob', 'concentricRings', 'towers', 'fillSpace', 'noisyWithBlob', 'potato']

{:.url-source-ref}
[lib/datasets/clustering.ts:17](https://github.com/ascentcore/dataspot/blob/236fcea/lib/datasets/clustering.ts#L17)

## Methods

{:.method-highlight}
▸ `Static`**arc**(`count?`: number): number[][]

Generates two interleaving arc shape like clusters.
See "arc" representation from the running page sample

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`count` | number | 200 | number of points / cluster  |

**Returns:** number[][]

{:.url-source-ref}
[lib/datasets/clustering.ts:28](https://github.com/ascentcore/dataspot/blob/236fcea/lib/datasets/clustering.ts#L28)

___

{:.method-highlight}
▸ `Static`**blob**(`pointsPerCluster?`: number): number[][]

Generates 3 globular shape blob clusters with a minimum .2 distance between blobs.
See "blob" representation from the running page sample

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`pointsPerCluster` | number | 100 | number of points to be generated / cluster  |

**Returns:** number[][]

{:.url-source-ref}
[lib/datasets/clustering.ts:56](https://github.com/ascentcore/dataspot/blob/236fcea/lib/datasets/clustering.ts#L56)

___

{:.method-highlight}
▸ `Static`**concentricRings**(`count?`: number, `rings?`: number): number[][]

Generates n concentric rings with a 0.15 distance between them
See "concentric rings" representation from the running page sample

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`count` | number | 300 | number of points / ring |
`rings` | number | 3 | number of rings to generate  |

**Returns:** number[][]

{:.url-source-ref}
[lib/datasets/clustering.ts:81](https://github.com/ascentcore/dataspot/blob/236fcea/lib/datasets/clustering.ts#L81)

___

{:.method-highlight}
▸ `Static`**fillSpace**(`count?`: number): number[][]

Generates equaly distant (0.01) points on the 2D domain
See "Concentric Rings" representation from the running page sample

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`count` | number | 50 | number of points / row and number of rows to generate  |

**Returns:** number[][]

{:.url-source-ref}
[lib/datasets/clustering.ts:127](https://github.com/ascentcore/dataspot/blob/236fcea/lib/datasets/clustering.ts#L127)

___

{:.method-highlight}
▸ `Static`**getStaticProperty**(`propertyName`: string): Function

#### Parameters:

Name | Type |
------ | ------ |
`propertyName` | string |

**Returns:** Function

{:.url-source-ref}
[lib/datasets/clustering.ts:19](https://github.com/ascentcore/dataspot/blob/236fcea/lib/datasets/clustering.ts#L19)

___

{:.method-highlight}
▸ `Static`**noisyWithBlob**(`blobPointsCount?`: number): number[][]

Generates a set of equally distant points on the 2D domain with a blob in the middle (blob radius 0.1)
See "Noisy With Blob" representation from the running page sample

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`blobPointsCount` | number | 200 | number of points to be generated for the blob  |

**Returns:** number[][]

{:.url-source-ref}
[lib/datasets/clustering.ts:143](https://github.com/ascentcore/dataspot/blob/236fcea/lib/datasets/clustering.ts#L143)

___

{:.method-highlight}
▸ `Static`**potato**(): number[][]

Generates a potato shaped like with another blob in the center of potato radius
See "Potato" representation from the running page sample

**Returns:** number[][]

{:.url-source-ref}
[lib/datasets/clustering.ts:165](https://github.com/ascentcore/dataspot/blob/236fcea/lib/datasets/clustering.ts#L165)

___

{:.method-highlight}
▸ `Static`**towers**(`count?`: number, `towers?`: number): number[][]

Generates n concentric rings with a 0.15 distance between them
See "concentric rings" representation from the running page sample

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`count` | number | 100 | number of points / ring |
`towers` | number | 3 | - |

**Returns:** number[][]

{:.url-source-ref}
[lib/datasets/clustering.ts:102](https://github.com/ascentcore/dataspot/blob/236fcea/lib/datasets/clustering.ts#L102)
