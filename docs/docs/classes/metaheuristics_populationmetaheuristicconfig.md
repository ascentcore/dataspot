---
layout: default
title: PopulationMetaheuristicConfig
parent: metaheuristics
grand_parent: Dataspot
has_children: false
---

# PopulationMetaheuristicConfig

## Indexable

▪ [key: string]: SerializableType

## Index

| Properties |
|-----------|
| [bestPosition](#bestposition) |
| [iterations](#iterations) |
| [populationSize](#populationsize) |

| Object literals |
|-----------|
| [definitions](#definitions) |

## Properties

•  **bestPosition**: number[] = []

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:8](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/metaheuristics/populationMetaheuristic.ts#L8)

___

•  **iterations**: number = 100

*Inherited from [common.EvolutionaryConfig](../common_evolutionaryconfig).[iterations](../common_evolutionaryconfig#iterations)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/common/evolutionaryAlgorithm.ts#L4)

___

•  **populationSize**: number = 100

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:6](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/metaheuristics/populationMetaheuristic.ts#L6)

## Object literals

▪ `Static` **definitions**: object

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:10](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/metaheuristics/populationMetaheuristic.ts#L10)

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`populationSize` | object | { default: number = 100; label: string = "Population Size"; min: number = 10 } |
