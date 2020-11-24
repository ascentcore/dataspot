---
layout: default
title: math-utils
parent: utils
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / utils.math-utils

# math-utils

## Hierarchy

* **utils.math-utils**

## Index

### Properties

* [rand](utils_math_utils.md#rand)

### Methods

* [addition](utils_math_utils.md#addition)
* [average](utils_math_utils.md#average)
* [averageElements](utils_math_utils.md#averageelements)
* [division](utils_math_utils.md#division)
* [euclideanDistance](utils_math_utils.md#euclideandistance)
* [indexOfSmallest](utils_math_utils.md#indexofsmallest)
* [manhattanDistance](utils_math_utils.md#manhattandistance)
* [max](utils_math_utils.md#max)
* [min](utils_math_utils.md#min)
* [mulberry32](utils_math_utils.md#mulberry32)
* [multiplication](utils_math_utils.md#multiplication)
* [normalize](utils_math_utils.md#normalize)
* [random](utils_math_utils.md#random)
* [randomInt](utils_math_utils.md#randomint)
* [roundToPrecision](utils_math_utils.md#roundtoprecision)
* [scalarAddition](utils_math_utils.md#scalaraddition)
* [scalarDivision](utils_math_utils.md#scalardivision)
* [scalarMultiplication](utils_math_utils.md#scalarmultiplication)
* [scalarSubtraction](utils_math_utils.md#scalarsubtraction)
* [seededRandom](utils_math_utils.md#seededrandom)
* [seededRandomInt](utils_math_utils.md#seededrandomint)
* [subtraction](utils_math_utils.md#subtraction)
* [sumElements](utils_math_utils.md#sumelements)
* [transpose](utils_math_utils.md#transpose)
* [xmur3](utils_math_utils.md#xmur3)

## Properties

### rand

▪ `Static` `Private` **rand**: (Anonymous function) = MathUtils.mulberry32(MathUtils.xmur3('apples')())

*Defined in [lib/utils/math-utils.ts:4](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L4)*

## Methods

### addition

▸ `Static`**addition**(`v1`: number[], `v2`: number[]): number[]

*Defined in [lib/utils/math-utils.ts:88](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L88)*

#### Parameters:

Name | Type |
------ | ------ |
`v1` | number[] |
`v2` | number[] |

**Returns:** number[]

___

### average

▸ `Static`**average**(`arr`: number[][]): number[]

*Defined in [lib/utils/math-utils.ts:157](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L157)*

#### Parameters:

Name | Type |
------ | ------ |
`arr` | number[][] |

**Returns:** number[]

___

### averageElements

▸ `Static`**averageElements**(`arr`: number[]): number

*Defined in [lib/utils/math-utils.ts:148](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L148)*

#### Parameters:

Name | Type |
------ | ------ |
`arr` | number[] |

**Returns:** number

___

### division

▸ `Static`**division**(`v1`: number[], `v2`: number[]): number[]

*Defined in [lib/utils/math-utils.ts:115](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L115)*

#### Parameters:

Name | Type |
------ | ------ |
`v1` | number[] |
`v2` | number[] |

**Returns:** number[]

___

### euclideanDistance

▸ `Static`**euclideanDistance**(`v1`: number[], `v2`: number[]): number

*Defined in [lib/utils/math-utils.ts:57](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L57)*

#### Parameters:

Name | Type |
------ | ------ |
`v1` | number[] |
`v2` | number[] |

**Returns:** number

___

### indexOfSmallest

▸ `Static`**indexOfSmallest**(`v`: number[]): number

*Defined in [lib/utils/math-utils.ts:171](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L171)*

#### Parameters:

Name | Type |
------ | ------ |
`v` | number[] |

**Returns:** number

___

### manhattanDistance

▸ `Static`**manhattanDistance**(`v1`: number[], `v2`: number[]): number

*Defined in [lib/utils/math-utils.ts:68](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L68)*

#### Parameters:

Name | Type |
------ | ------ |
`v1` | number[] |
`v2` | number[] |

**Returns:** number

___

### max

▸ `Static`**max**(`v`: number[]): number

*Defined in [lib/utils/math-utils.ts:180](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L180)*

#### Parameters:

Name | Type |
------ | ------ |
`v` | number[] |

**Returns:** number

___

### min

▸ `Static`**min**(`v`: number[]): number

*Defined in [lib/utils/math-utils.ts:184](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L184)*

#### Parameters:

Name | Type |
------ | ------ |
`v` | number[] |

**Returns:** number

___

### mulberry32

▸ `Static` `Private`**mulberry32**(`a`: number): (Anonymous function)

*Defined in [lib/utils/math-utils.ts:20](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L20)*

#### Parameters:

Name | Type |
------ | ------ |
`a` | number |

**Returns:** (Anonymous function)

___

### multiplication

▸ `Static`**multiplication**(`v1`: number[], `v2`: number[]): number[]

*Defined in [lib/utils/math-utils.ts:106](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L106)*

#### Parameters:

Name | Type |
------ | ------ |
`v1` | number[] |
`v2` | number[] |

**Returns:** number[]

___

### normalize

▸ `Static`**normalize**(`v`: number[]): number[]

*Defined in [lib/utils/math-utils.ts:188](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L188)*

#### Parameters:

Name | Type |
------ | ------ |
`v` | number[] |

**Returns:** number[]

___

### random

▸ `Static`**random**(`min`: number, `max`: number): number

*Defined in [lib/utils/math-utils.ts:35](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L35)*

#### Parameters:

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** number

___

### randomInt

▸ `Static`**randomInt**(`min`: number, `max`: number): number

*Defined in [lib/utils/math-utils.ts:39](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L39)*

#### Parameters:

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** number

___

### roundToPrecision

▸ `Static`**roundToPrecision**(`input`: number, `precision`: number): number

*Defined in [lib/utils/math-utils.ts:30](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`input` | number |
`precision` | number |

**Returns:** number

___

### scalarAddition

▸ `Static`**scalarAddition**(`v1`: number[], `scalar`: number): number[]

*Defined in [lib/utils/math-utils.ts:124](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L124)*

#### Parameters:

Name | Type |
------ | ------ |
`v1` | number[] |
`scalar` | number |

**Returns:** number[]

___

### scalarDivision

▸ `Static`**scalarDivision**(`v1`: number[], `scalar`: number): number[]

*Defined in [lib/utils/math-utils.ts:142](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L142)*

#### Parameters:

Name | Type |
------ | ------ |
`v1` | number[] |
`scalar` | number |

**Returns:** number[]

___

### scalarMultiplication

▸ `Static`**scalarMultiplication**(`v1`: number[], `scalar`: number): number[]

*Defined in [lib/utils/math-utils.ts:136](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L136)*

#### Parameters:

Name | Type |
------ | ------ |
`v1` | number[] |
`scalar` | number |

**Returns:** number[]

___

### scalarSubtraction

▸ `Static`**scalarSubtraction**(`v1`: number[], `scalar`: number): number[]

*Defined in [lib/utils/math-utils.ts:130](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L130)*

#### Parameters:

Name | Type |
------ | ------ |
`v1` | number[] |
`scalar` | number |

**Returns:** number[]

___

### seededRandom

▸ `Static`**seededRandom**(`min`: number, `max`: number): number

*Defined in [lib/utils/math-utils.ts:45](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L45)*

#### Parameters:

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** number

___

### seededRandomInt

▸ `Static`**seededRandomInt**(`min`: number, `max`: number): number

*Defined in [lib/utils/math-utils.ts:49](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L49)*

#### Parameters:

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** number

___

### subtraction

▸ `Static`**subtraction**(`v1`: number[], `v2`: number[]): number[]

*Defined in [lib/utils/math-utils.ts:97](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L97)*

#### Parameters:

Name | Type |
------ | ------ |
`v1` | number[] |
`v2` | number[] |

**Returns:** number[]

___

### sumElements

▸ `Static`**sumElements**(`arr`: number[]): number

*Defined in [lib/utils/math-utils.ts:79](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L79)*

#### Parameters:

Name | Type |
------ | ------ |
`arr` | number[] |

**Returns:** number

___

### transpose

▸ `Static`**transpose**(`matrix`: number[][]): number[][]

*Defined in [lib/utils/math-utils.ts:204](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L204)*

#### Parameters:

Name | Type |
------ | ------ |
`matrix` | number[][] |

**Returns:** number[][]

___

### xmur3

▸ `Static` `Private`**xmur3**(`str`: string): function

*Defined in [lib/utils/math-utils.ts:6](https://github.com/ascentcore/dataspot/blob/46219f5/lib/utils/math-utils.ts#L6)*

#### Parameters:

Name | Type |
------ | ------ |
`str` | string |

**Returns:** function
