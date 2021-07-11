---
layout: default
title: GAConfig
parent: metaheuristics
grand_parent: Dataspot
has_children: false
---

# GAConfig

## Indexable

▪ [key: string]: SerializableType \| Function

## Index

| Properties |
|-----------|
| [bestPosition](#bestposition) |
| [crossoverType](#crossovertype) |
| [iterations](#iterations) |
| [mutationProbability](#mutationprobability) |
| [mutationType](#mutationtype) |
| [numOffsprings](#numoffsprings) |
| [populationSize](#populationsize) |
| [selectionFn](#selectionfn) |

| Object literals |
|-----------|
| [definitions](#definitions) |

## Properties

•  **bestPosition**: number[] = []

*Inherited from [metaheuristics.PopulationMetaheuristicConfig](../metaheuristics_populationmetaheuristicconfig).[bestPosition](../metaheuristics_populationmetaheuristicconfig#bestposition)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:8](https://github.com/ascentcore/dataspot/blob/bdbcf73/lib/metaheuristics/populationMetaheuristic.ts#L8)

___

•  **crossoverType**: \"randomPick\" \| \"singleSplit\" = "singleSplit"

{:.url-source-ref}
[lib/metaheuristics/ga.ts:26](https://github.com/ascentcore/dataspot/blob/bdbcf73/lib/metaheuristics/ga.ts#L26)

___

•  **iterations**: number = 100

*Inherited from [common.EvolutionaryConfig](../common_evolutionaryconfig).[iterations](../common_evolutionaryconfig#iterations)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/bdbcf73/lib/common/evolutionaryAlgorithm.ts#L4)

___

•  **mutationProbability**: number = 0.01

{:.url-source-ref}
[lib/metaheuristics/ga.ts:24](https://github.com/ascentcore/dataspot/blob/bdbcf73/lib/metaheuristics/ga.ts#L24)

___

•  **mutationType**: \"all\" \| \"single\" = "all"

{:.url-source-ref}
[lib/metaheuristics/ga.ts:22](https://github.com/ascentcore/dataspot/blob/bdbcf73/lib/metaheuristics/ga.ts#L22)

___

•  **numOffsprings**: number = 10

{:.url-source-ref}
[lib/metaheuristics/ga.ts:20](https://github.com/ascentcore/dataspot/blob/bdbcf73/lib/metaheuristics/ga.ts#L20)

___

•  **populationSize**: number = 100

*Inherited from [metaheuristics.PopulationMetaheuristicConfig](../metaheuristics_populationmetaheuristicconfig).[populationSize](../metaheuristics_populationmetaheuristicconfig#populationsize)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:6](https://github.com/ascentcore/dataspot/blob/bdbcf73/lib/metaheuristics/populationMetaheuristic.ts#L6)

___

•  **selectionFn**: \"Roulette\" \| \"Tournament\" = "Roulette"

{:.url-source-ref}
[lib/metaheuristics/ga.ts:28](https://github.com/ascentcore/dataspot/blob/bdbcf73/lib/metaheuristics/ga.ts#L28)

## Object literals

▪ `Static` **definitions**: object

*Overrides [metaheuristics.PopulationMetaheuristicConfig](../metaheuristics_populationmetaheuristicconfig).[definitions](../metaheuristics_populationmetaheuristicconfig#definitions)*

{:.url-source-ref}
[lib/metaheuristics/ga.ts:30](https://github.com/ascentcore/dataspot/blob/bdbcf73/lib/metaheuristics/ga.ts#L30)

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`crossoverType` | object | { default: string = "singleSplit"; label: string = "Crossover type"; options: string[] = ['randomPick', 'singleSplit'] } |
`mutationProbability` | object | { default: number = 0.01; label: string = "Mutation probability"; max: number = 1; min: number = 0; step: number = 0.05 } |
`mutationType` | object | { default: string = "all"; label: string = "Mutation type"; options: string[] = ['all', 'single'] } |
`numOffsprings` | object | { default: number = 90; label: string = "Number of offsprings"; min: number = 2 } |
`selectionFn` | object | { default: string = "Roulette"; label: string = "Selection Function"; options: string[] = ['Roulette', 'Tournament'] } |
