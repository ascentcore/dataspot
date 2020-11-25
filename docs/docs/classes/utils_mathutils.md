---
layout: default
title: MathUtils
parent: utils
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [utils.MathUtils](utils_mathutils)

# MathUtils

## Hierarchy

* **utils.MathUtils**

## Index

### Properties

* [rand](utils_mathutils#rand)

### Methods

* [mulberry32](utils_mathutils#mulberry32)
* [random](utils_mathutils#random)
* [randomInt](utils_mathutils#randomint)
* [roundToPrecision](utils_mathutils#roundtoprecision)
* [seededRandom](utils_mathutils#seededrandom)
* [seededRandomInt](utils_mathutils#seededrandomint)
* [xmur3](utils_mathutils#xmur3)

## Properties

### rand

▪ `Static` `Private` **rand**: (Anonymous function) = MathUtils.mulberry32(MathUtils.xmur3('apples')())

*Defined in [lib/utils/math-utils.ts:4](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/utils/math-utils.ts#L4)*

## Methods

### mulberry32

▸ `Static` `Private`**mulberry32**(`a`: number): (Anonymous function)

*Defined in [lib/utils/math-utils.ts:20](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/utils/math-utils.ts#L20)*

#### Parameters:

Name | Type |
------ | ------ |
`a` | number |

**Returns:** (Anonymous function)

___

### random

▸ `Static`**random**(`min`: number, `max`: number): number

*Defined in [lib/utils/math-utils.ts:35](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/utils/math-utils.ts#L35)*

#### Parameters:

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** number

___

### randomInt

▸ `Static`**randomInt**(`min`: number, `max`: number): number

*Defined in [lib/utils/math-utils.ts:39](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/utils/math-utils.ts#L39)*

#### Parameters:

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** number

___

### roundToPrecision

▸ `Static`**roundToPrecision**(`input`: number, `precision`: number): number

*Defined in [lib/utils/math-utils.ts:30](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/utils/math-utils.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`input` | number |
`precision` | number |

**Returns:** number

___

### seededRandom

▸ `Static`**seededRandom**(`min`: number, `max`: number): number

*Defined in [lib/utils/math-utils.ts:45](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/utils/math-utils.ts#L45)*

#### Parameters:

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** number

___

### seededRandomInt

▸ `Static`**seededRandomInt**(`min`: number, `max`: number): number

*Defined in [lib/utils/math-utils.ts:49](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/utils/math-utils.ts#L49)*

#### Parameters:

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** number

___

### xmur3

▸ `Static` `Private`**xmur3**(`str`: string): function

*Defined in [lib/utils/math-utils.ts:6](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/utils/math-utils.ts#L6)*

#### Parameters:

Name | Type |
------ | ------ |
`str` | string |

**Returns:** function
