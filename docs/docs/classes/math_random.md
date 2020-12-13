---
layout: default
title: Random
parent: math
grand_parent: Dataspot
has_children: false
---

# Random

## Index

| Properties |
|-----------|
| [rand](#rand) |

| Methods |
|-----------|
| [mulberry32](#mulberry32) |
| [random](#random) |
| [randomChoice](#randomchoice) |
| [randomInt](#randomint) |
| [roundToPrecision](#roundtoprecision) |
| [seed](#seed) |
| [seededRandom](#seededrandom) |
| [seededRandomInt](#seededrandomint) |
| [xmur3](#xmur3) |

## Properties

▪ `Static` `Private` **rand**: (Anonymous function) = Random.mulberry32(Random.xmur3('apples')())

{:.url-source-ref}
[lib/math/random.ts:3](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/math/random.ts#L3)

## Methods

{:.method-highlight}
▸ `Static` `Private`**mulberry32**(`a`: number): (Anonymous function)

#### Parameters:

Name | Type |
------ | ------ |
`a` | number |

**Returns:** (Anonymous function)

{:.url-source-ref}
[lib/math/random.ts:24](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/math/random.ts#L24)

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
[lib/math/random.ts:39](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/math/random.ts#L39)

___

{:.method-highlight}
▸ `Static`**randomChoice**\<T>(`arr`: T[]): T

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`arr` | T[] |

**Returns:** T

{:.url-source-ref}
[lib/math/random.ts:59](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/math/random.ts#L59)

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
[lib/math/random.ts:43](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/math/random.ts#L43)

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
[lib/math/random.ts:34](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/math/random.ts#L34)

___

{:.method-highlight}
▸ `Static`**seed**(`str`: string): void

#### Parameters:

Name | Type |
------ | ------ |
`str` | string |

**Returns:** void

{:.url-source-ref}
[lib/math/random.ts:5](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/math/random.ts#L5)

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
[lib/math/random.ts:49](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/math/random.ts#L49)

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
[lib/math/random.ts:53](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/math/random.ts#L53)

___

{:.method-highlight}
▸ `Static` `Private`**xmur3**(`str`: string): function

#### Parameters:

Name | Type |
------ | ------ |
`str` | string |

**Returns:** function

{:.url-source-ref}
[lib/math/random.ts:10](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/math/random.ts#L10)
