---
layout: default
title: GA
parent: metaheuristics
grand_parent: Dataspot
has_children: false
---

# GA

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [config](#config) |
| [convergence](#convergence) |
| [dimensions](#dimensions) |
| [fitnessFunction](#fitnessfunction) |
| [individuals](#individuals) |
| [iteration](#iteration) |
| [selection](#selection) |

| Methods |
|-----------|
| [canStop](#canstop) |
| [computeFitness](#computefitness) |
| [crossover](#crossover) |
| [fit](#fit) |
| [fitAsync](#fitasync) |
| [getBest](#getbest) |
| [initializeDependencies](#initializedependencies) |
| [loadState](#loadstate) |
| [movePosition](#moveposition) |
| [mutation](#mutation) |
| [onEndFit](#onendfit) |
| [preparePopulation](#preparepopulation) |
| [serialize](#serialize) |
| [shouldStop](#shouldstop) |
| [sortPopulation](#sortpopulation) |
| [step](#step) |
| [updateGlobalBest](#updateglobalbest) |

## Constructors

{:.method-highlight}
\+ **new GA**(`config?`: [metaheuristics.GAConfig](../metaheuristics_gaconfig) \| undefined): [metaheuristics.GA](../metaheuristics_ga)

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [metaheuristics.GAConfig](../metaheuristics_gaconfig) \| undefined |

**Returns:** [metaheuristics.GA](../metaheuristics_ga)

*Overrides [common.Serializable](../common_serializable).[constructor](../common_serializable#constructor)*

{:.url-source-ref}
[lib/metaheuristics/ga.ts:22](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/ga.ts#L22)

## Properties

•  **config**: [metaheuristics.GAConfig](../metaheuristics_gaconfig)

*Inherited from [common.Serializable](../common_serializable).[config](../common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/common/serializable.ts#L8)

___

• `Private` **convergence**: [common.Convergence](../common_convergence)

{:.url-source-ref}
[lib/metaheuristics/ga.ts:20](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/ga.ts#L20)

___

• `Protected` **dimensions**: { max: number ; min: number  }[]

*Inherited from [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[dimensions](../metaheuristics_populationmetaheuristic#dimensions)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:37](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L37)

___

• `Protected` **fitnessFunction**: Function

*Inherited from [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[fitnessFunction](../metaheuristics_populationmetaheuristic#fitnessfunction)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:35](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L35)

___

• `Protected` **individuals**: [metaheuristics.Individual](../metaheuristics_individual)[]

*Inherited from [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[individuals](../metaheuristics_populationmetaheuristic#individuals)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:33](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L33)

___

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[iteration](../common_evolutionaryalgorithm#iteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/common/evolutionaryAlgorithm.ts#L8)

___

• `Private` **selection**: [metaheuristics.selection.Roulette](../metaheuristics_selection_roulette) \| [metaheuristics.selection.Tournament](../metaheuristics_selection_tournament)

{:.url-source-ref}
[lib/metaheuristics/ga.ts:22](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/ga.ts#L22)

## Methods

{:.method-highlight}
▸ **canStop**(): boolean

**Returns:** boolean

*Overrides [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[canStop](../metaheuristics_populationmetaheuristic#canstop)*

{:.url-source-ref}
[lib/metaheuristics/ga.ts:104](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/ga.ts#L104)

___

{:.method-highlight}
▸ **computeFitness**(): void

**Returns:** void

{:.url-source-ref}
[lib/metaheuristics/ga.ts:96](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/ga.ts#L96)

___

{:.method-highlight}
▸ `Private`**crossover**(`individual`: [metaheuristics.Individual](../metaheuristics_individual), `parent1`: [metaheuristics.Individual](../metaheuristics_individual), `parent2`: [metaheuristics.Individual](../metaheuristics_individual)): void

#### Parameters:

Name | Type |
------ | ------ |
`individual` | [metaheuristics.Individual](../metaheuristics_individual) |
`parent1` | [metaheuristics.Individual](../metaheuristics_individual) |
`parent2` | [metaheuristics.Individual](../metaheuristics_individual) |

**Returns:** void

{:.url-source-ref}
[lib/metaheuristics/ga.ts:35](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/ga.ts#L35)

___

{:.method-highlight}
▸ **fit**(`fitessFunction`: Function, `dimensions`: { max: number ; min: number  }[]): number[][]

#### Parameters:

Name | Type |
------ | ------ |
`fitessFunction` | Function |
`dimensions` | { max: number ; min: number  }[] |

**Returns:** number[][]

*Inherited from [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[fit](../metaheuristics_populationmetaheuristic#fit)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:104](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L104)

___

{:.method-highlight}
▸ **fitAsync**(`fitessFunction`: Function, `dimensions`: { max: number ; min: number  }[]): Generator

#### Parameters:

Name | Type |
------ | ------ |
`fitessFunction` | Function |
`dimensions` | { max: number ; min: number  }[] |

**Returns:** Generator

*Inherited from [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[fitAsync](../metaheuristics_populationmetaheuristic#fitasync)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:91](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L91)

___

{:.method-highlight}
▸ **getBest**(): number[]

**Returns:** number[]

*Inherited from [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[getBest](../metaheuristics_populationmetaheuristic#getbest)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:119](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L119)

___

{:.method-highlight}
▸ **initializeDependencies**(): void

**Returns:** void

{:.url-source-ref}
[lib/metaheuristics/ga.ts:108](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/ga.ts#L108)

___

{:.method-highlight}
▸ **loadState**(`config`: string): void

#### Parameters:

Name | Type |
------ | ------ |
`config` | string |

**Returns:** void

*Overrides [common.Serializable](../common_serializable).[loadState](../common_serializable#loadstate)*

{:.url-source-ref}
[lib/metaheuristics/ga.ts:113](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/ga.ts#L113)

___

{:.method-highlight}
▸ `Protected`**movePosition**(`individual`: [metaheuristics.Individual](../metaheuristics_individual), `parent1`: [metaheuristics.Individual](../metaheuristics_individual), `parent2`: [metaheuristics.Individual](../metaheuristics_individual)): void

#### Parameters:

Name | Type |
------ | ------ |
`individual` | [metaheuristics.Individual](../metaheuristics_individual) |
`parent1` | [metaheuristics.Individual](../metaheuristics_individual) |
`parent2` | [metaheuristics.Individual](../metaheuristics_individual) |

**Returns:** void

*Overrides [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[movePosition](../metaheuristics_populationmetaheuristic#moveposition)*

{:.url-source-ref}
[lib/metaheuristics/ga.ts:75](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/ga.ts#L75)

___

{:.method-highlight}
▸ `Private`**mutation**(`individual`: [metaheuristics.Individual](../metaheuristics_individual)): void

#### Parameters:

Name | Type |
------ | ------ |
`individual` | [metaheuristics.Individual](../metaheuristics_individual) |

**Returns:** void

{:.url-source-ref}
[lib/metaheuristics/ga.ts:51](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/ga.ts#L51)

___

{:.method-highlight}
▸ **onEndFit**(): void

**Returns:** void

*Inherited from [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[onEndFit](../metaheuristics_populationmetaheuristic#onendfit)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:117](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L117)

___

{:.method-highlight}
▸ `Protected`**preparePopulation**(): void

**Returns:** void

*Inherited from [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[preparePopulation](../metaheuristics_populationmetaheuristic#preparepopulation)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:67](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L67)

___

{:.method-highlight}
▸ **serialize**(): string

**Returns:** string

*Inherited from [common.Serializable](../common_serializable).[serialize](../common_serializable#serialize)*

{:.url-source-ref}
[lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/common/serializable.ts#L10)

___

{:.method-highlight}
▸ **shouldStop**(): boolean

**Returns:** boolean

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[shouldStop](../common_evolutionaryalgorithm#shouldstop)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/common/evolutionaryAlgorithm.ts#L10)

___

{:.method-highlight}
▸ `Protected`**sortPopulation**(): void

**Returns:** void

*Inherited from [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[sortPopulation](../metaheuristics_populationmetaheuristic#sortpopulation)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:45](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L45)

___

{:.method-highlight}
▸ **step**(): void

**Returns:** void

*Overrides [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[step](../metaheuristics_populationmetaheuristic#step)*

{:.url-source-ref}
[lib/metaheuristics/ga.ts:80](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/ga.ts#L80)

___

{:.method-highlight}
▸ `Protected`**updateGlobalBest**(): void

**Returns:** void

*Inherited from [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[updateGlobalBest](../metaheuristics_populationmetaheuristic#updateglobalbest)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:49](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L49)
