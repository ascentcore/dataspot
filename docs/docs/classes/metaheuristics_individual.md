---
layout: default
title: Individual
parent: metaheuristics
grand_parent: Dataspot
has_children: false
---

# Individual

## Index

| Properties |
|-----------|
| [bestPosition](#bestposition) |
| [fitness](#fitness) |
| [id](#id) |
| [position](#position) |
| [velocity](#velocity) |

| Methods |
|-----------|
| [computeFitness](#computefitness) |

## Properties

•  **bestPosition**: number[] = []

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:19](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/metaheuristics/populationMetaheuristic.ts#L19)

___

•  **fitness**: number = Infinity

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:17](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/metaheuristics/populationMetaheuristic.ts#L17)

___

•  **id**: number = 0

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:13](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/metaheuristics/populationMetaheuristic.ts#L13)

___

•  **position**: number[] = []

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:15](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/metaheuristics/populationMetaheuristic.ts#L15)

___

•  **velocity**: number[] \| null = null

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:21](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/metaheuristics/populationMetaheuristic.ts#L21)

## Methods

{:.method-highlight}
▸ **computeFitness**(`fitnessFunction`: [metaheuristics.FitnessFunction](../metaheuristics_fitnessfunction)): void

#### Parameters:

Name | Type |
------ | ------ |
`fitnessFunction` | [metaheuristics.FitnessFunction](../metaheuristics_fitnessfunction) |

**Returns:** void

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:23](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/metaheuristics/populationMetaheuristic.ts#L23)
