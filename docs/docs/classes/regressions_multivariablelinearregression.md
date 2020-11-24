---
layout: default
title: multivariableLinearRegression
parent: regressions
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [regressions.multivariableLinearRegression](regressions_multivariablelinearregression)

# multivariableLinearRegression

## Hierarchy

* **regressions.multivariableLinearRegression**

## Index

### Methods

* [fit](regressions_multivariablelinearregression#fit)

## Methods

### fit

▸ `Static`**fit**(`input`: number[][], `target`: number[], `weight`: number[], `bias`: number, `learningRate`: number, `epochs`: number, `costFunction`: Function): Generator\<MultivariableLinearRegressionOutputType>

*Defined in [lib/regressions/multivariableLinearRegression.ts:25](https://github.com/ascentcore/dataspot/blob/7114653/lib/regressions/multivariableLinearRegression.ts#L25)*

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
