---
layout: default
title: Rastrigin
parent: benchmark
grand_parent: datasets
has_children: false
---

# Rastrigin

In mathematical optimization, the Rastrigin function is a non-convex function used as a performance test problem for optimization algorithms. It is a typical example of non-linear multimodal function. It was first proposed in 1974 by Rastrigin[1] as a 2-dimensional function and has been generalized by Rudolph[2]. The generalized version was popularized by Hoffmeister & Bäck[3] and Mühlenbein et al.[4] Finding the minimum of this function is a fairly difficult problem due to its large search space and its large number of local minima.
[Wikipedia](https://en.wikipedia.org/wiki/Rastrigin_function)

## Index

| Properties |
|-----------|
| [DOMAIN](#domain) |
| [GLOBAL\_M](#global_m) |

| Methods |
|-----------|
| [calculate](#calculate) |

## Properties

▪ `Static` **DOMAIN**: number[] = [-5.12, 5.12]

{:.url-source-ref}
[lib/datasets/benchmark/rastrigin.ts:6](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/datasets/benchmark/rastrigin.ts#L6)

___

▪ `Static` **GLOBAL\_M**: number[] = [0]

{:.url-source-ref}
[lib/datasets/benchmark/rastrigin.ts:8](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/datasets/benchmark/rastrigin.ts#L8)

## Methods

{:.method-highlight}
▸ `Static`**calculate**(...`input`: number[]): number

#### Parameters:

Name | Type |
------ | ------ |
`...input` | number[] |

**Returns:** number

{:.url-source-ref}
[lib/datasets/benchmark/rastrigin.ts:10](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/datasets/benchmark/rastrigin.ts#L10)
