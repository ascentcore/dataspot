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
[lib/metaheuristics/populationMetaheuristic.ts:18](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L18)

___

•  **fitness**: number = Infinity

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:16](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L16)

___

•  **id**: number = 0

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:12](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L12)

___

•  **position**: number[] = []

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:14](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L14)

___

•  **velocity**: number[] \| null = null

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:20](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L20)

## Methods

{:.method-highlight}
▸ **computeFitness**(`fitnessFunction`: Function): void

#### Parameters:

Name | Type |
------ | ------ |
`fitnessFunction` | Function |

**Returns:** void

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:22](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L22)
