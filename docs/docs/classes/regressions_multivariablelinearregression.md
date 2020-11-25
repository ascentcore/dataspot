---
layout: default
title: MultivariableLinearRegression
parent: regressions
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [regressions.MultivariableLinearRegression](regressions_multivariablelinearregression)

# MultivariableLinearRegression

## Hierarchy

* **regressions.MultivariableLinearRegression**

## Index

### Methods

* [fit](regressions_multivariablelinearregression#fit)

## Methods

### fit

▸ `Static`**fit**(`input`: number[][], `target`: number[], `weight`: number[], `bias`: number, `learningRate`: number, `epochs`: number, `costFunction`: Function): Generator\<MultivariableLinearRegressionOutputType>

*Defined in [lib/regressions/multivariableLinearRegression.ts:25](https://github.com/ascentcore/dataspot/blob/a358cc9/lib/regressions/multivariableLinearRegression.ts#L25)*

#### Parameters:

Name | Type |
------ | ------ |
`input` | number[][] |
`target` | number[] |
`weight` | number[] |
`bias` | number |
`learningRate` | number |
`epochs` | number |
`costFunction` | Function |

**Returns:** Generator\<MultivariableLinearRegressionOutputType>
