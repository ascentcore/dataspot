---
layout: default
title: Random
parent: math
grand_parent: Dataspot
has_children: false
---

# Random

## Hierarchy

* **math.Random**

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
| [seededRandom](#seededrandom) |
| [seededRandomInt](#seededrandomint) |
| [xmur3](#xmur3) |

## Properties

▪ `Static` `Private` **rand**: (Anonymous function) = Random.mulberry32(Random.xmur3('apples')())

{:.url-source-ref}
[lib/math/random.ts:3](https://github.com/ascentcore/dataspot/blob/ef89391/lib/math/random.ts#L3)

## Methods

{:.method-highlight}
▸ `Static` `Private`**mulberry32**(`a`: number): (Anonymous function)

{:.url-source-ref}
[lib/math/random.ts:19](https://github.com/ascentcore/dataspot/blob/ef89391/lib/math/random.ts#L19)

**Returns:** (Anonymous function)

___

{:.method-highlight}
▸ `Static`**random**(`min`: number, `max`: number): number

{:.url-source-ref}
[lib/math/random.ts:34](https://github.com/ascentcore/dataspot/blob/ef89391/lib/math/random.ts#L34)

**Returns:** number

___

{:.method-highlight}
▸ `Static`**randomChoice**\<T>(`arr`: T[]): T

{:.url-source-ref}
[lib/math/random.ts:54](https://github.com/ascentcore/dataspot/blob/ef89391/lib/math/random.ts#L54)

#### Type parameters:

Name |
------ |
`T` |

**Returns:** T

___

{:.method-highlight}
▸ `Static`**randomInt**(`min`: number, `max`: number): number

{:.url-source-ref}
[lib/math/random.ts:38](https://github.com/ascentcore/dataspot/blob/ef89391/lib/math/random.ts#L38)

**Returns:** number

___

{:.method-highlight}
▸ `Static`**roundToPrecision**(`input`: number, `precision`: number): number

{:.url-source-ref}
[lib/math/random.ts:29](https://github.com/ascentcore/dataspot/blob/ef89391/lib/math/random.ts#L29)

**Returns:** number

___

{:.method-highlight}
▸ `Static`**seededRandom**(`min`: number, `max`: number): number

{:.url-source-ref}
[lib/math/random.ts:44](https://github.com/ascentcore/dataspot/blob/ef89391/lib/math/random.ts#L44)

**Returns:** number

___

{:.method-highlight}
▸ `Static`**seededRandomInt**(`min`: number, `max`: number): number

{:.url-source-ref}
[lib/math/random.ts:48](https://github.com/ascentcore/dataspot/blob/ef89391/lib/math/random.ts#L48)

**Returns:** number

___

{:.method-highlight}
▸ `Static` `Private`**xmur3**(`str`: string): function

{:.url-source-ref}
[lib/math/random.ts:5](https://github.com/ascentcore/dataspot/blob/ef89391/lib/math/random.ts#L5)

**Returns:** function
