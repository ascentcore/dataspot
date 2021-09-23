---
layout: default
title: VectorUtils
parent: utils
grand_parent: Dataspot
has_children: false
---

# VectorUtils

Vector Utils

## Index

| Methods |
|-----------|
| [addition](#addition) |
| [average](#average) |
| [averageElements](#averageelements) |
| [division](#division) |
| [euclideanDistance](#euclideandistance) |
| [indexOfSmallest](#indexofsmallest) |
| [manhattanDistance](#manhattandistance) |
| [max](#max) |
| [min](#min) |
| [multiplication](#multiplication) |
| [normalize](#normalize) |
| [scalarAddition](#scalaraddition) |
| [scalarDivision](#scalardivision) |
| [scalarMultiplication](#scalarmultiplication) |
| [scalarSubtraction](#scalarsubtraction) |
| [standardDeviation](#standarddeviation) |
| [subtraction](#subtraction) |
| [sumElements](#sumelements) |

## Methods

{:.method-highlight}
▸ `Static`**addition**(`v1`: number[], `v2`: number[]): number[]

Returns the sum of elements in two vectors at each index

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`v1` | number[] | input vector 1 |
`v2` | number[] | input vector 2  |

**Returns:** number[]

{:.url-source-ref}
[lib/utils/vectorUtils.ts:53](https://github.com/ascentcore/dataspot/blob/236fcea/lib/utils/vectorUtils.ts#L53)

___

{:.method-highlight}
▸ `Static`**average**(`arr`: number[][]): number[]

Returns the average (per dimension) of elements in a multidimensional space

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arr` | number[][] | input vector  |

**Returns:** number[]

{:.url-source-ref}
[lib/utils/vectorUtils.ts:162](https://github.com/ascentcore/dataspot/blob/236fcea/lib/utils/vectorUtils.ts#L162)

___

{:.method-highlight}
▸ `Static`**averageElements**(`arr`: number[]): number

Returns the average of elements in an array

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arr` | number[] | input array  |

**Returns:** number

{:.url-source-ref}
[lib/utils/vectorUtils.ts:154](https://github.com/ascentcore/dataspot/blob/236fcea/lib/utils/vectorUtils.ts#L154)

___

{:.method-highlight}
▸ `Static`**division**(`v1`: number[], `v2`: number[]): number[]

Returns the division of elements in two vectors at each index

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`v1` | number[] | input vector 1 |
`v2` | number[] | input vector 2  |

**Returns:** number[]

{:.url-source-ref}
[lib/utils/vectorUtils.ts:97](https://github.com/ascentcore/dataspot/blob/236fcea/lib/utils/vectorUtils.ts#L97)

___

{:.method-highlight}
▸ `Static`**euclideanDistance**(`v1`: number[], `v2`: number[]): number

Euclidean distance between two points in Euclidean space is the length of a line segment between the two points.
It can be calculated from the Cartesian coordinates of the points using the Pythagorean theorem,therefore occasionally being called the Pythagorean distance.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`v1` | number[] | input vector 1 |
`v2` | number[] | input vector 2  |

**Returns:** number

{:.url-source-ref}
[lib/utils/vectorUtils.ts:12](https://github.com/ascentcore/dataspot/blob/236fcea/lib/utils/vectorUtils.ts#L12)

___

{:.method-highlight}
▸ `Static`**indexOfSmallest**(`v`: number[]): number

Returns the index of the smallest value in an array

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`v` | number[] | input array  |

**Returns:** number

{:.url-source-ref}
[lib/utils/vectorUtils.ts:180](https://github.com/ascentcore/dataspot/blob/236fcea/lib/utils/vectorUtils.ts#L180)

___

{:.method-highlight}
▸ `Static`**manhattanDistance**(`v1`: number[], `v2`: number[]): number

The Manhattan distance between two vectors (city blocks) is equal to the one-norm of the distance between the vectors. The distance function (also called a “metric”) involved is also called the “taxi cab” metric.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`v1` | number[] | input vector 1 |
`v2` | number[] | input vector 2  |

**Returns:** number

{:.url-source-ref}
[lib/utils/vectorUtils.ts:29](https://github.com/ascentcore/dataspot/blob/236fcea/lib/utils/vectorUtils.ts#L29)

___

{:.method-highlight}
▸ `Static`**max**(`v`: number[]): number

#### Parameters:

Name | Type |
------ | ------ |
`v` | number[] |

**Returns:** number

{:.url-source-ref}
[lib/utils/vectorUtils.ts:189](https://github.com/ascentcore/dataspot/blob/236fcea/lib/utils/vectorUtils.ts#L189)

___

{:.method-highlight}
▸ `Static`**min**(`v`: number[]): number

#### Parameters:

Name | Type |
------ | ------ |
`v` | number[] |

**Returns:** number

{:.url-source-ref}
[lib/utils/vectorUtils.ts:193](https://github.com/ascentcore/dataspot/blob/236fcea/lib/utils/vectorUtils.ts#L193)

___

{:.method-highlight}
▸ `Static`**multiplication**(`v1`: number[], `v2`: number[]): number[]

Returns the multiplication of elements in two vectors at each index

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`v1` | number[] | input vector 1 |
`v2` | number[] | input vector 2  |

**Returns:** number[]

{:.url-source-ref}
[lib/utils/vectorUtils.ts:82](https://github.com/ascentcore/dataspot/blob/236fcea/lib/utils/vectorUtils.ts#L82)

___

{:.method-highlight}
▸ `Static`**normalize**(`arr`: number[]): number[]

Normalize elements in an array

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arr` | number[] | input array  |

**Returns:** number[]

{:.url-source-ref}
[lib/utils/vectorUtils.ts:222](https://github.com/ascentcore/dataspot/blob/236fcea/lib/utils/vectorUtils.ts#L222)

___

{:.method-highlight}
▸ `Static`**scalarAddition**(`vec`: number[], `scalar`: number): number[]

Returns the adition of each element in an array with a scalar

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`vec` | number[] | input array |
`scalar` | number | value to be added to each element  |

**Returns:** number[]

{:.url-source-ref}
[lib/utils/vectorUtils.ts:111](https://github.com/ascentcore/dataspot/blob/236fcea/lib/utils/vectorUtils.ts#L111)

___

{:.method-highlight}
▸ `Static`**scalarDivision**(`v1`: number[], `scalar`: number): number[]

Returns the division of each element in an array with a scalar

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`v1` | number[] | - |
`scalar` | number | value to be added to each element  |

**Returns:** number[]

{:.url-source-ref}
[lib/utils/vectorUtils.ts:144](https://github.com/ascentcore/dataspot/blob/236fcea/lib/utils/vectorUtils.ts#L144)

___

{:.method-highlight}
▸ `Static`**scalarMultiplication**(`v1`: number[], `scalar`: number): number[]

Returns the multiplication of each element in an array with a scalar

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`v1` | number[] | - |
`scalar` | number | value to be added to each element  |

**Returns:** number[]

{:.url-source-ref}
[lib/utils/vectorUtils.ts:133](https://github.com/ascentcore/dataspot/blob/236fcea/lib/utils/vectorUtils.ts#L133)

___

{:.method-highlight}
▸ `Static`**scalarSubtraction**(`v1`: number[], `scalar`: number): number[]

Returns the subtraction of each element in an array with a scalar

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`v1` | number[] | - |
`scalar` | number | value to be added to each element  |

**Returns:** number[]

{:.url-source-ref}
[lib/utils/vectorUtils.ts:122](https://github.com/ascentcore/dataspot/blob/236fcea/lib/utils/vectorUtils.ts#L122)

___

{:.method-highlight}
▸ `Static`**standardDeviation**(`arr`: number[]): number

Computes the standard deviation of elements in an array

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arr` | number[] | input arr  |

**Returns:** number

{:.url-source-ref}
[lib/utils/vectorUtils.ts:201](https://github.com/ascentcore/dataspot/blob/236fcea/lib/utils/vectorUtils.ts#L201)

___

{:.method-highlight}
▸ `Static`**subtraction**(`v1`: number[], `v2`: number[]): number[]

Returns the subtraction of elements in two vectors at each index

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`v1` | number[] | input vector 1 |
`v2` | number[] | input vector 2  |

**Returns:** number[]

{:.url-source-ref}
[lib/utils/vectorUtils.ts:67](https://github.com/ascentcore/dataspot/blob/236fcea/lib/utils/vectorUtils.ts#L67)

___

{:.method-highlight}
▸ `Static`**sumElements**(`arr`: number[]): number

Returns sum of elements in an array

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`arr` | number[] | input array  |

**Returns:** number

{:.url-source-ref}
[lib/utils/vectorUtils.ts:44](https://github.com/ascentcore/dataspot/blob/236fcea/lib/utils/vectorUtils.ts#L44)
