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
| [bestFitnessValue](#bestfitnessvalue) |
| [bestPosition](#bestposition) |
| [fitness](#fitness) |
| [id](#id) |
| [position](#position) |
| [velocity](#velocity) |

| Methods |
|-----------|
| [computeFitness](#computefitness) |

## Properties

•  **bestFitnessValue**: number = Infinity

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:24](https://github.com/ascentcore/dataspot/blob/bdbcf73/lib/metaheuristics/populationMetaheuristic.ts#L24)

___

•  **bestPosition**: number[] = []

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:22](https://github.com/ascentcore/dataspot/blob/bdbcf73/lib/metaheuristics/populationMetaheuristic.ts#L22)

___

•  **fitness**: number = Infinity

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:20](https://github.com/ascentcore/dataspot/blob/bdbcf73/lib/metaheuristics/populationMetaheuristic.ts#L20)

___

•  **id**: number = 0

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:16](https://github.com/ascentcore/dataspot/blob/bdbcf73/lib/metaheuristics/populationMetaheuristic.ts#L16)

___

•  **position**: number[] = []

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:18](https://github.com/ascentcore/dataspot/blob/bdbcf73/lib/metaheuristics/populationMetaheuristic.ts#L18)

___

•  **velocity**: number[] \| null = null

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:26](https://github.com/ascentcore/dataspot/blob/bdbcf73/lib/metaheuristics/populationMetaheuristic.ts#L26)

## Methods

{:.method-highlight}
▸ **computeFitness**(`fitnessFunction`: Function): void

#### Parameters:

Name | Type |
------ | ------ |
`fitnessFunction` | Function |

**Returns:** void

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:28](https://github.com/ascentcore/dataspot/blob/bdbcf73/lib/metaheuristics/populationMetaheuristic.ts#L28)
