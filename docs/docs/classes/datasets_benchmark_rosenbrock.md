---
layout: default
title: Rosenbrock
parent: benchmark
grand_parent: datasets
has_children: false
---

# Rosenbrock

In mathematical optimization, the Rosenbrock function is a non-convex function, introduced by Howard H. Rosenbrock in 1960, which is used as a performance test problem for optimization algorithms.[1] It is also known as Rosenbrock's valley or Rosenbrock's banana function.
The global minimum is inside a long, narrow, parabolic shaped flat valley. To find the valley is trivial. To converge to the global minimum, however, is difficult.
[Wikipedia](https://en.wikipedia.org/wiki/Rosenbrock_function)

## Index

| Properties |
|-----------|
| [DOMAIN](#domain) |
| [GLOBAL\_M](#global_m) |

| Methods |
|-----------|
| [calculate](#calculate) |

## Properties

▪ `Static` **DOMAIN**: number[] = [-2.048, 2.048]

{:.url-source-ref}
[lib/datasets/benchmark/rosenbrock.ts:7](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/datasets/benchmark/rosenbrock.ts#L7)

___

▪ `Static` **GLOBAL\_M**: number[] = [1]

{:.url-source-ref}
[lib/datasets/benchmark/rosenbrock.ts:9](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/datasets/benchmark/rosenbrock.ts#L9)

## Methods

{:.method-highlight}
▸ `Static`**calculate**(...`input`: number[]): number

#### Parameters:

Name | Type |
------ | ------ |
`...input` | number[] |

**Returns:** number

{:.url-source-ref}
[lib/datasets/benchmark/rosenbrock.ts:11](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/datasets/benchmark/rosenbrock.ts#L11)
