---
layout: default
title: clustering
parent: datasets
grand_parent: Dataspot
has_children: false
---

# clustering

The clustering datasets are a set of synthetic 2D data to be used
for benchmarking clustering algorithms. The dataset is intended to grow
but the current set should allow one to evaluate performance for all types
of clustering algorithms

Running sample for the current set of clustering datasets:

**`sample_only`** documentation/clusteringDataset

<div class="running-sample">
    <span class="running-sample-container" data-ref="documentation/clusteringDataset"></span>
    <script src='/dataspot/samples/clusteringDataset.js' title="documentation/clusteringDataset"></script>
</div>

## Index

| Methods |
|-----------|
| [arc](#arc) |
| [blob](#blob) |
| [concentricRings](#concentricrings) |
| [fillSpace](#fillspace) |
| [noisyWithBlob](#noisywithblob) |
| [potato](#potato) |

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
[lib/datasets/clustering.ts:19](https://github.com/ascentcore/dataspot/blob/12500c0/lib/datasets/clustering.ts#L19)

___

{:.method-highlight}
▸ `Static`**blob**(`pointsPerCluster?`: number): number[][]

Generates 3 globular shape blob clusters with a minimum .2 distance between blobs.
See "blob" representation from the running page sample

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`pointsPerCluster` | number | 200 | number of points to be generated / cluster  |

**Returns:** number[][]

{:.url-source-ref}
[lib/datasets/clustering.ts:43](https://github.com/ascentcore/dataspot/blob/12500c0/lib/datasets/clustering.ts#L43)

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
[lib/datasets/clustering.ts:69](https://github.com/ascentcore/dataspot/blob/12500c0/lib/datasets/clustering.ts#L69)

___

{:.method-highlight}
▸ `Static`**fillSpace**(`count?`: number): number[][]

Generates equaly distant (0.01) points on the 2D domain
See "Concentric Rings" representation from the running page sample

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`count` | number | 30 | number of points / row and number of rows to generate  |

**Returns:** number[][]

{:.url-source-ref}
[lib/datasets/clustering.ts:89](https://github.com/ascentcore/dataspot/blob/12500c0/lib/datasets/clustering.ts#L89)

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
[lib/datasets/clustering.ts:105](https://github.com/ascentcore/dataspot/blob/12500c0/lib/datasets/clustering.ts#L105)

___

{:.method-highlight}
▸ `Static`**potato**(): number[][]

Generates a potato shaped like with another blob in the center of potato radius
See "Potato" representation from the running page sample

**Returns:** number[][]

{:.url-source-ref}
[lib/datasets/clustering.ts:127](https://github.com/ascentcore/dataspot/blob/12500c0/lib/datasets/clustering.ts#L127)
