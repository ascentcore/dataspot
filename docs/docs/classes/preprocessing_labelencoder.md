---
layout: default
title: LabelEncoder
parent: preprocessing
grand_parent: Dataspot
has_children: false
---

# LabelEncoder

LabelEncoder is a utility class to help normalize labels such that they contain only values between 0 and n_classes-1.

**`sample`** documentation/labelEncoder

Example:

<div class="running-sample">
    <span class="running-sample-container" data-ref="documentation/labelEncoder"></span>
    <script src='/dataspot/samples/labelEncoder.js' title="documentation/labelEncoder"></script>
</div>

**`code`** samples/documentation/preprocessing/labelEncoder.ts

```ts
import LabelEncoder from '@ascentcore/dataspot/preprocessing/labelEncoder'

export default (async () => {
    const animals = ['🐕', '🐈', '🐕', '🐹', '🐕', '🐈', '🐈', '🐹']

    const labelEncoder = new LabelEncoder()
    const encoded = labelEncoder.fitTransform(animals)

    console.log(encoded) // displays [0, 1, 0, 2, 0, 1, 1, 2]
    console.log(labelEncoder.inverse([0, 1, 2])) // displays ["🐕", "🐈", "🐹"]

    const newAnimals = ['🐕', '🐈', '🐕', '🐤', '🦉', '🐸', '🦉', '🦉', '🐸', '🐤', '🐤']
    const newEncoding = labelEncoder.fitTransform(newAnimals)

    console.log(newEncoding) // displays [0, 1, 0, 3, 4, 5, 4, 4, 5, 3, 3]
    console.log(labelEncoder.inverse([0, 1, 2, 3, 4, 5])) // displays ["🐕", "🐈", "🐹", "🐤", "🦉", "🐸"]
})()

```

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [internalMap](#internalmap) |
| [inversedInternalMap](#inversedinternalmap) |
| [nextKeyIterator](#nextkeyiterator) |
| [valueEncoder](#valueencoder) |

| Methods |
|-----------|
| [checkIndexed](#checkindexed) |
| [fitTransform](#fittransform) |
| [inverse](#inverse) |
| [transform](#transform) |

## Constructors

{:.method-highlight}
\+ **new LabelEncoder**(`encoder?`: ValueEncoder, `nextKey?`: Generator\<number>): [preprocessing.LabelEncoder](../preprocessing_labelencoder)

#### Parameters:

Name | Type |
------ | ------ |
`encoder?` | ValueEncoder |
`nextKey?` | Generator\<number> |

**Returns:** [preprocessing.LabelEncoder](../preprocessing_labelencoder)

{:.url-source-ref}
[lib/preprocessing/labelEncoder.ts:18](https://github.com/ascentcore/dataspot/blob/236fcea/lib/preprocessing/labelEncoder.ts#L18)

## Properties

• `Private` **internalMap**: Record\<string, any>

{:.url-source-ref}
[lib/preprocessing/labelEncoder.ts:16](https://github.com/ascentcore/dataspot/blob/236fcea/lib/preprocessing/labelEncoder.ts#L16)

___

• `Private` **inversedInternalMap**: Record\<number, any>

{:.url-source-ref}
[lib/preprocessing/labelEncoder.ts:18](https://github.com/ascentcore/dataspot/blob/236fcea/lib/preprocessing/labelEncoder.ts#L18)

___

• `Private` **nextKeyIterator**: Generator\<any>

{:.url-source-ref}
[lib/preprocessing/labelEncoder.ts:12](https://github.com/ascentcore/dataspot/blob/236fcea/lib/preprocessing/labelEncoder.ts#L12)

___

• `Private` **valueEncoder**: [preprocessing.ValueEncoder](../../interfaces/preprocessing_valueencoder)

{:.url-source-ref}
[lib/preprocessing/labelEncoder.ts:14](https://github.com/ascentcore/dataspot/blob/236fcea/lib/preprocessing/labelEncoder.ts#L14)

## Methods

{:.method-highlight}
▸ **checkIndexed**(`key`: any): boolean

Check if an entry is transformed.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | any | entry to be checked against current index |

**Returns:** boolean

entry presence as boolean

{:.url-source-ref}
[lib/preprocessing/labelEncoder.ts:30](https://github.com/ascentcore/dataspot/blob/236fcea/lib/preprocessing/labelEncoder.ts#L30)

___

{:.method-highlight}
▸ **fitTransform**(`input`: any[]): number[]

Indexes input entries. The fitTransform function can be used multiple times in order to reindex if new entries are present

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | any[] | array of entries |

**Returns:** number[]

transformed indices

{:.url-source-ref}
[lib/preprocessing/labelEncoder.ts:39](https://github.com/ascentcore/dataspot/blob/236fcea/lib/preprocessing/labelEncoder.ts#L39)

___

{:.method-highlight}
▸ **inverse**(`input`: number[]): any[]

Returns entries based on indices

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | number[] | list of indices |

**Returns:** any[]

list of inversed entries

{:.url-source-ref}
[lib/preprocessing/labelEncoder.ts:80](https://github.com/ascentcore/dataspot/blob/236fcea/lib/preprocessing/labelEncoder.ts#L80)

___

{:.method-highlight}
▸ **transform**(`input`: any[]): number[]

Transformed input entries into indices. An `Index not found for [entry]` error will be thrown
if entry was never fitted against the current index

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | any[] | list of entries |

**Returns:** number[]

list of indices

{:.url-source-ref}
[lib/preprocessing/labelEncoder.ts:61](https://github.com/ascentcore/dataspot/blob/236fcea/lib/preprocessing/labelEncoder.ts#L61)
