---
layout: default
title: MathUtils
parent: utils
grand_parent: Dataspot
has_children: false
---

# MathUtils

## Hierarchy

* **utils.MathUtils**

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
[lib/utils/math-utils.ts:4](https://github.com/ascentcore/dataspot/blob/b02167c/lib/utils/math-utils.ts#L4)

## Methods

{:.method-highlight}
▸ `Static` `Private`**mulberry32**(`a`: number): (Anonymous function)

{:.url-source-ref}
[lib/utils/math-utils.ts:20](https://github.com/ascentcore/dataspot/blob/b02167c/lib/utils/math-utils.ts#L20)

**Returns:** (Anonymous function)

___

{:.method-highlight}
▸ `Static`**random**(`min`: number, `max`: number): number

{:.url-source-ref}
[lib/utils/math-utils.ts:35](https://github.com/ascentcore/dataspot/blob/b02167c/lib/utils/math-utils.ts#L35)

**Returns:** number

___

{:.method-highlight}
▸ `Static`**randomInt**(`min`: number, `max`: number): number

{:.url-source-ref}
[lib/utils/math-utils.ts:39](https://github.com/ascentcore/dataspot/blob/b02167c/lib/utils/math-utils.ts#L39)

**Returns:** number

___

{:.method-highlight}
▸ `Static`**roundToPrecision**(`input`: number, `precision`: number): number

{:.url-source-ref}
[lib/utils/math-utils.ts:30](https://github.com/ascentcore/dataspot/blob/b02167c/lib/utils/math-utils.ts#L30)

**Returns:** number

___

{:.method-highlight}
▸ `Static`**seededRandom**(`min`: number, `max`: number): number

{:.url-source-ref}
[lib/utils/math-utils.ts:45](https://github.com/ascentcore/dataspot/blob/b02167c/lib/utils/math-utils.ts#L45)

**Returns:** number

___

{:.method-highlight}
▸ `Static`**seededRandomInt**(`min`: number, `max`: number): number

{:.url-source-ref}
[lib/utils/math-utils.ts:49](https://github.com/ascentcore/dataspot/blob/b02167c/lib/utils/math-utils.ts#L49)

**Returns:** number

___

{:.method-highlight}
▸ `Static` `Private`**xmur3**(`str`: string): function

{:.url-source-ref}
[lib/utils/math-utils.ts:6](https://github.com/ascentcore/dataspot/blob/b02167c/lib/utils/math-utils.ts#L6)

**Returns:** function
