---
layout: default
title: PSOConfig
parent: metaheuristics
grand_parent: Dataspot
has_children: false
---

# PSOConfig

## Indexable

▪ [key: string]: SerializableType \| Function

## Index

| Properties |
|-----------|
| [bestPosition](#bestposition) |
| [cognitiveWeight](#cognitiveweight) |
| [convergenceDecimalsAccuracy](#convergencedecimalsaccuracy) |
| [convergenceIterations](#convergenceiterations) |
| [inertiaWeight](#inertiaweight) |
| [iterations](#iterations) |
| [populationSize](#populationsize) |
| [socialWeight](#socialweight) |

| Object literals |
|-----------|
| [definitions](#definitions) |

## Properties

•  **bestPosition**: number[] = []

*Inherited from [metaheuristics.PopulationMetaheuristicConfig](../metaheuristics_populationmetaheuristicconfig).[bestPosition](../metaheuristics_populationmetaheuristicconfig#bestposition)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:8](https://github.com/ascentcore/dataspot/blob/236fcea/lib/metaheuristics/populationMetaheuristic.ts#L8)

___

•  **cognitiveWeight**: number = 0.1

{:.url-source-ref}
[lib/metaheuristics/pso.ts:9](https://github.com/ascentcore/dataspot/blob/236fcea/lib/metaheuristics/pso.ts#L9)

___

•  **convergenceDecimalsAccuracy**: number = 4

{:.url-source-ref}
[lib/metaheuristics/pso.ts:15](https://github.com/ascentcore/dataspot/blob/236fcea/lib/metaheuristics/pso.ts#L15)

___

•  **convergenceIterations**: number = -1

{:.url-source-ref}
[lib/metaheuristics/pso.ts:13](https://github.com/ascentcore/dataspot/blob/236fcea/lib/metaheuristics/pso.ts#L13)

___

•  **inertiaWeight**: number = 0.75

{:.url-source-ref}
[lib/metaheuristics/pso.ts:7](https://github.com/ascentcore/dataspot/blob/236fcea/lib/metaheuristics/pso.ts#L7)

___

•  **iterations**: number = 100

*Inherited from [common.EvolutionaryConfig](../common_evolutionaryconfig).[iterations](../common_evolutionaryconfig#iterations)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/236fcea/lib/common/evolutionaryAlgorithm.ts#L4)

___

•  **populationSize**: number = 100

*Inherited from [metaheuristics.PopulationMetaheuristicConfig](../metaheuristics_populationmetaheuristicconfig).[populationSize](../metaheuristics_populationmetaheuristicconfig#populationsize)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:6](https://github.com/ascentcore/dataspot/blob/236fcea/lib/metaheuristics/populationMetaheuristic.ts#L6)

___

•  **socialWeight**: number = 0.3

{:.url-source-ref}
[lib/metaheuristics/pso.ts:11](https://github.com/ascentcore/dataspot/blob/236fcea/lib/metaheuristics/pso.ts#L11)

## Object literals

▪ `Static` **definitions**: object

*Inherited from [metaheuristics.PopulationMetaheuristicConfig](../metaheuristics_populationmetaheuristicconfig).[definitions](../metaheuristics_populationmetaheuristicconfig#definitions)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:10](https://github.com/ascentcore/dataspot/blob/236fcea/lib/metaheuristics/populationMetaheuristic.ts#L10)

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`populationSize` | object | { default: number = 100; label: string = "Population Size"; min: number = 10 } |
