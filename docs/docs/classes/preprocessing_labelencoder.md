---
layout: default
title: LabelEncoder
parent: preprocessing
grand_parent: Dataspot
has_children: false
---

# LabelEncoder

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
[lib/preprocessing/labelEncoder.ts:25](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/preprocessing/labelEncoder.ts#L25)

## Properties

• `Private` **internalMap**: Record\<string, any>

{:.url-source-ref}
[lib/preprocessing/labelEncoder.ts:23](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/preprocessing/labelEncoder.ts#L23)

___

• `Private` **inversedInternalMap**: Record\<number, any>

{:.url-source-ref}
[lib/preprocessing/labelEncoder.ts:25](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/preprocessing/labelEncoder.ts#L25)

___

• `Private` **nextKeyIterator**: Generator\<any>

{:.url-source-ref}
[lib/preprocessing/labelEncoder.ts:19](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/preprocessing/labelEncoder.ts#L19)

___

• `Private` **valueEncoder**: [preprocessing.ValueEncoder](../../interfaces/preprocessing_valueencoder)

{:.url-source-ref}
[lib/preprocessing/labelEncoder.ts:21](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/preprocessing/labelEncoder.ts#L21)

## Methods

{:.method-highlight}
▸ **checkIndexed**(`key`: any): boolean

#### Parameters:

Name | Type |
------ | ------ |
`key` | any |

**Returns:** boolean

{:.url-source-ref}
[lib/preprocessing/labelEncoder.ts:32](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/preprocessing/labelEncoder.ts#L32)

___

{:.method-highlight}
▸ **fitTransform**(`input`: any[]): number[]

#### Parameters:

Name | Type |
------ | ------ |
`input` | any[] |

**Returns:** number[]

{:.url-source-ref}
[lib/preprocessing/labelEncoder.ts:36](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/preprocessing/labelEncoder.ts#L36)

___

{:.method-highlight}
▸ **inverse**(`input`: number[]): any[]

#### Parameters:

Name | Type |
------ | ------ |
`input` | number[] |

**Returns:** any[]

{:.url-source-ref}
[lib/preprocessing/labelEncoder.ts:66](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/preprocessing/labelEncoder.ts#L66)

___

{:.method-highlight}
▸ **transform**(`input`: any[]): number[]

#### Parameters:

Name | Type |
------ | ------ |
`input` | any[] |

**Returns:** number[]

{:.url-source-ref}
[lib/preprocessing/labelEncoder.ts:52](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/preprocessing/labelEncoder.ts#L52)
