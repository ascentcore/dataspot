---
layout: default
title: MultivariableLinearRegression
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / MultivariableLinearRegression

# MultivariableLinearRegression

## Hierarchy

* **MultivariableLinearRegression**

## Index

### Methods

* [fit](multivariablelinearregression.md#fit)

## Methods

### fit

▸ `Static`**fit**(`input`: number[][], `target`: number[], `weight`: number[], `bias`: number, `learningRate`: number, `epochs`: number, `costFunction`: Function): Generator\<[MultivariableLinearRegressionOutputType](../globals.md#multivariablelinearregressionoutputtype)>

*Defined in [lib/regressions/multivariableLinearRegression.ts:25](https://github.com/ascentcore/dataspot/blob/8a56680/lib/regressions/multivariableLinearRegression.ts#L25)*

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

**Returns:** Generator\<[MultivariableLinearRegressionOutputType](../globals.md#multivariablelinearregressionoutputtype)>
