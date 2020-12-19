---
layout: default
title: Optimizers
parent: functions
grand_parent: Dataspot
has_children: false
---

# Optimizers

## Index

| Methods |
|-----------|
| [crossEntropyCostFunction](#crossentropycostfunction) |
| [gradientDescent](#gradientdescent) |
| [meanSquaredError](#meansquarederror) |

## Methods

{:.method-highlight}
▸ `Static`**crossEntropyCostFunction**(`input`: number[], `target`: number, `prediction`: number): number[]

#### Parameters:

Name | Type |
------ | ------ |
`input` | number[] |
`target` | number |
`prediction` | number |

**Returns:** number[]

{:.url-source-ref}
[lib/functions/optimizers.ts:20](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/functions/optimizers.ts#L20)

___

{:.method-highlight}
▸ `Static`**gradientDescent**(`input`: number[] \| number[][], `target`: number[], `biasAndWeights`: number[], `learningRate`: number, `costFunction`: Function): number[]

#### Parameters:

Name | Type |
------ | ------ |
`input` | number[] \| number[][] |
`target` | number[] |
`biasAndWeights` | number[] |
`learningRate` | number |
`costFunction` | Function |

**Returns:** number[]

{:.url-source-ref}
[lib/functions/optimizers.ts:29](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/functions/optimizers.ts#L29)

___

{:.method-highlight}
▸ `Static`**meanSquaredError**(`input`: number \| number[], `target`: number, `prediction`: number): (number \| number[])[]

#### Parameters:

Name | Type |
------ | ------ |
`input` | number \| number[] |
`target` | number |
`prediction` | number |

**Returns:** (number \| number[])[]

{:.url-source-ref}
[lib/functions/optimizers.ts:6](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/functions/optimizers.ts#L6)
