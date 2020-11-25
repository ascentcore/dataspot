---
layout: default
title: LinearRegression
parent: regressions
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [regressions.LinearRegression](regressions_linearregression)

# LinearRegression

## Hierarchy

* **regressions.LinearRegression**

## Index

### Methods

* [fit](regressions_linearregression#fit)

## Methods

### fit

▸ `Static`**fit**(`input`: number[], `target`: number[], `weight`: number, `bias`: number, `learningRate`: number, `epochs`: number, `costFunction`: Function): Generator\<LinearRegressionOutputType>

*Defined in [lib/regressions/linearRegression.ts:20](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/regressions/linearRegression.ts#L20)*

#### Parameters:

Name | Type |
------ | ------ |
`input` | number[] |
`target` | number[] |
`weight` | number |
`bias` | number |
`learningRate` | number |
`epochs` | number |
`costFunction` | Function |

**Returns:** Generator\<LinearRegressionOutputType>
