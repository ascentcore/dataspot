---
layout: default
title: GAConfig
parent: metaheuristics
grand_parent: Dataspot
has_children: false
---

# GAConfig

## Indexable

▪ [key: string]: SerializableType

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

## Properties

•  **bestPosition**: number[] = []

*Inherited from [metaheuristics.PopulationMetaheuristicConfig](../metaheuristics_populationmetaheuristicconfig).[bestPosition](../metaheuristics_populationmetaheuristicconfig#bestposition)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:8](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L8)

___

•  **crossoverType**: \"randomPick\" \| \"singleSplit\" = "singleSplit"

{:.url-source-ref}
[lib/metaheuristics/ga.ts:14](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/ga.ts#L14)

___

•  **iterations**: number = 100

*Inherited from [common.EvolutionaryConfig](../common_evolutionaryconfig).[iterations](../common_evolutionaryconfig#iterations)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/common/evolutionaryAlgorithm.ts#L4)

___

•  **mutationProbability**: number = 0.01

{:.url-source-ref}
[lib/metaheuristics/ga.ts:12](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/ga.ts#L12)

___

•  **mutationType**: \"all\" \| \"single\" = "all"

{:.url-source-ref}
[lib/metaheuristics/ga.ts:10](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/ga.ts#L10)

___

•  **numOffsprings**: number = 10

{:.url-source-ref}
[lib/metaheuristics/ga.ts:8](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/ga.ts#L8)

___

•  **populationSize**: number = 100

*Inherited from [metaheuristics.PopulationMetaheuristicConfig](../metaheuristics_populationmetaheuristicconfig).[populationSize](../metaheuristics_populationmetaheuristicconfig#populationsize)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:6](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L6)

___

•  **selectionFn**: \"Roulette\" \| \"Tournament\" = "Roulette"

{:.url-source-ref}
[lib/metaheuristics/ga.ts:16](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/ga.ts#L16)
