---
layout: default
title: Roulette
parent: selection
grand_parent: metaheuristics
has_children: false
---

# Roulette

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [numSelected](#numselected) |

| Methods |
|-----------|
| [execute](#execute) |
| [ranking](#ranking) |

## Constructors

{:.method-highlight}
\+ **new Roulette**(`numSelected`: number): [metaheuristics.selection.Roulette](../metaheuristics_selection_roulette)

#### Parameters:

Name | Type |
------ | ------ |
`numSelected` | number |

**Returns:** [metaheuristics.selection.Roulette](../metaheuristics_selection_roulette)

{:.url-source-ref}
[lib/metaheuristics/selection/roulette.ts:4](https://github.com/ascentcore/dataspot/blob/85054f3/lib/metaheuristics/selection/roulette.ts#L4)

## Properties

• `Private` **numSelected**: number

{:.url-source-ref}
[lib/metaheuristics/selection/roulette.ts:5](https://github.com/ascentcore/dataspot/blob/85054f3/lib/metaheuristics/selection/roulette.ts#L5)

## Methods

{:.method-highlight}
▸ **execute**(`individuals`: [metaheuristics.Individual](../metaheuristics_individual)[]): [metaheuristics.Individual](../metaheuristics_individual)[]

#### Parameters:

Name | Type |
------ | ------ |
`individuals` | [metaheuristics.Individual](../metaheuristics_individual)[] |

**Returns:** [metaheuristics.Individual](../metaheuristics_individual)[]

{:.url-source-ref}
[lib/metaheuristics/selection/roulette.ts:18](https://github.com/ascentcore/dataspot/blob/85054f3/lib/metaheuristics/selection/roulette.ts#L18)

___

{:.method-highlight}
▸ **ranking**(`individuals`: [metaheuristics.Individual](../metaheuristics_individual)[]): number[]

#### Parameters:

Name | Type |
------ | ------ |
`individuals` | [metaheuristics.Individual](../metaheuristics_individual)[] |

**Returns:** number[]

{:.url-source-ref}
[lib/metaheuristics/selection/roulette.ts:7](https://github.com/ascentcore/dataspot/blob/85054f3/lib/metaheuristics/selection/roulette.ts#L7)
