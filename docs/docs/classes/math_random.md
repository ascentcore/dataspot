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
| [shuffleArray](#shufflearray) |
| [xmur3](#xmur3) |

## Properties

▪ `Static` `Private` **rand**: (Anonymous function) = Random.mulberry32(Random.xmur3('apples')())

{:.url-source-ref}
[lib/math/random.ts:4](https://github.com/ascentcore/dataspot/blob/236fcea/lib/math/random.ts#L4)

## Methods

{:.method-highlight}
▸ `Static` `Private`**mulberry32**(`a`: number): (Anonymous function)

#### Parameters:

Name | Type |
------ | ------ |
`a` | number |

**Returns:** (Anonymous function)

{:.url-source-ref}
[lib/math/random.ts:25](https://github.com/ascentcore/dataspot/blob/236fcea/lib/math/random.ts#L25)

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
[lib/math/random.ts:40](https://github.com/ascentcore/dataspot/blob/236fcea/lib/math/random.ts#L40)

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
[lib/math/random.ts:60](https://github.com/ascentcore/dataspot/blob/236fcea/lib/math/random.ts#L60)

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
[lib/math/random.ts:44](https://github.com/ascentcore/dataspot/blob/236fcea/lib/math/random.ts#L44)

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
[lib/math/random.ts:35](https://github.com/ascentcore/dataspot/blob/236fcea/lib/math/random.ts#L35)

___

{:.method-highlight}
▸ `Static`**seed**(`str`: string): void

#### Parameters:

Name | Type |
------ | ------ |
`str` | string |

**Returns:** void

{:.url-source-ref}
[lib/math/random.ts:6](https://github.com/ascentcore/dataspot/blob/236fcea/lib/math/random.ts#L6)

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
[lib/math/random.ts:50](https://github.com/ascentcore/dataspot/blob/236fcea/lib/math/random.ts#L50)

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
[lib/math/random.ts:54](https://github.com/ascentcore/dataspot/blob/236fcea/lib/math/random.ts#L54)

___

{:.method-highlight}
▸ `Static`**shuffleArray**(`array`: any[]): any[]

#### Parameters:

Name | Type |
------ | ------ |
`array` | any[] |

**Returns:** any[]

{:.url-source-ref}
[lib/math/random.ts:64](https://github.com/ascentcore/dataspot/blob/236fcea/lib/math/random.ts#L64)

___

{:.method-highlight}
▸ `Static` `Private`**xmur3**(`str`: string): function

#### Parameters:

Name | Type |
------ | ------ |
`str` | string |

**Returns:** function

{:.url-source-ref}
[lib/math/random.ts:11](https://github.com/ascentcore/dataspot/blob/236fcea/lib/math/random.ts#L11)
