---
layout: default
title: MathUtils
parent: utils
grand_parent: Dataspot
has_children: false
---

# MathUtils

## Index

| Properties |
|-----------|
| [rand](#rand) |

| Methods |
|-----------|
| [mulberry32](#mulberry32) |
| [random](#random) |
| [randomInt](#randomint) |
| [roundToPrecision](#roundtoprecision) |
| [seededRandom](#seededrandom) |
| [seededRandomInt](#seededrandomint) |
| [xmur3](#xmur3) |

## Properties

▪ `Static` `Private` **rand**: (Anonymous function) = MathUtils.mulberry32(MathUtils.xmur3('apples')())

{:.url-source-ref}
[lib/utils/mathUtils.ts:4](https://github.com/ascentcore/dataspot/blob/3098228/lib/utils/mathUtils.ts#L4)

## Methods

{:.method-highlight}
▸ `Static` `Private`**mulberry32**(`a`: number): (Anonymous function)

#### Parameters:

Name | Type |
------ | ------ |
`a` | number |

**Returns:** (Anonymous function)

{:.url-source-ref}
[lib/utils/mathUtils.ts:20](https://github.com/ascentcore/dataspot/blob/3098228/lib/utils/mathUtils.ts#L20)

___

{:.method-highlight}
▸ `Static`**random**(`min`: number, `max`: number): number

#### Parameters:

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** number

{:.url-source-ref}
[lib/utils/mathUtils.ts:35](https://github.com/ascentcore/dataspot/blob/3098228/lib/utils/mathUtils.ts#L35)

___

{:.method-highlight}
▸ `Static`**randomInt**(`min`: number, `max`: number): number

#### Parameters:

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** number

{:.url-source-ref}
[lib/utils/mathUtils.ts:39](https://github.com/ascentcore/dataspot/blob/3098228/lib/utils/mathUtils.ts#L39)

___

{:.method-highlight}
▸ `Static`**roundToPrecision**(`input`: number, `precision`: number): number

#### Parameters:

Name | Type |
------ | ------ |
`input` | number |
`precision` | number |

**Returns:** number

{:.url-source-ref}
[lib/utils/mathUtils.ts:30](https://github.com/ascentcore/dataspot/blob/3098228/lib/utils/mathUtils.ts#L30)

___

{:.method-highlight}
▸ `Static`**seededRandom**(`min`: number, `max`: number): number

#### Parameters:

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** number

{:.url-source-ref}
[lib/utils/mathUtils.ts:45](https://github.com/ascentcore/dataspot/blob/3098228/lib/utils/mathUtils.ts#L45)

___

{:.method-highlight}
▸ `Static`**seededRandomInt**(`min`: number, `max`: number): number

#### Parameters:

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** number

{:.url-source-ref}
[lib/utils/mathUtils.ts:49](https://github.com/ascentcore/dataspot/blob/3098228/lib/utils/mathUtils.ts#L49)

___

{:.method-highlight}
▸ `Static` `Private`**xmur3**(`str`: string): function

#### Parameters:

Name | Type |
------ | ------ |
`str` | string |

**Returns:** function

{:.url-source-ref}
[lib/utils/mathUtils.ts:6](https://github.com/ascentcore/dataspot/blob/3098228/lib/utils/mathUtils.ts#L6)
