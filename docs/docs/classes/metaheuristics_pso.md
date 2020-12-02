---
layout: default
title: PSO
parent: metaheuristics
grand_parent: Dataspot
has_children: false
---

# PSO

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [config](#config) |
| [convergence](#convergence) |
| [fitnessFunction](#fitnessfunction) |
| [individuals](#individuals) |
| [iteration](#iteration) |

| Methods |
|-----------|
| [canStop](#canstop) |
| [fit](#fit) |
| [fitAsync](#fitasync) |
| [getBest](#getbest) |
| [loadState](#loadstate) |
| [movePosition](#moveposition) |
| [onEndFit](#onendfit) |
| [preparePopulation](#preparepopulation) |
| [serialize](#serialize) |
| [shouldStop](#shouldstop) |
| [sortPopulation](#sortpopulation) |
| [step](#step) |
| [updateGlobalBest](#updateglobalbest) |

## Constructors

{:.method-highlight}
\+ **new PSO**(`config?`: [metaheuristics.PSOConfig](../metaheuristics_psoconfig) \| undefined): [metaheuristics.PSO](../metaheuristics_pso)

#### Parameters:

Name | Type |
------ | ------ |
`config?` | [metaheuristics.PSOConfig](../metaheuristics_psoconfig) \| undefined |

**Returns:** [metaheuristics.PSO](../metaheuristics_pso)

*Overrides [common.Serializable](../common_serializable).[constructor](../common_serializable#constructor)*

{:.url-source-ref}
[lib/metaheuristics/pso.ts:19](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/metaheuristics/pso.ts#L19)

## Properties

•  **config**: [metaheuristics.PSOConfig](../metaheuristics_psoconfig)

*Inherited from [common.Serializable](../common_serializable).[config](../common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/common/serializable.ts#L8)

___

• `Private` **convergence**: [common.Convergence](../common_convergence)

{:.url-source-ref}
[lib/metaheuristics/pso.ts:19](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/metaheuristics/pso.ts#L19)

___

• `Protected` **fitnessFunction**: [metaheuristics.FitnessFunction](../metaheuristics_fitnessfunction)

*Inherited from [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[fitnessFunction](../metaheuristics_populationmetaheuristic#fitnessfunction)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:36](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/metaheuristics/populationMetaheuristic.ts#L36)

___

• `Protected` **individuals**: [metaheuristics.Individual](../metaheuristics_individual)[]

*Inherited from [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[individuals](../metaheuristics_populationmetaheuristic#individuals)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:34](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/metaheuristics/populationMetaheuristic.ts#L34)

___

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[iteration](../common_evolutionaryalgorithm#iteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/common/evolutionaryAlgorithm.ts#L8)

## Methods

{:.method-highlight}
▸ **canStop**(): boolean

**Returns:** boolean

*Overrides [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[canStop](../metaheuristics_populationmetaheuristic#canstop)*

{:.url-source-ref}
[lib/metaheuristics/pso.ts:79](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/metaheuristics/pso.ts#L79)

___

{:.method-highlight}
▸ **fit**(`fitessFunction`: [metaheuristics.FitnessFunction](../metaheuristics_fitnessfunction)): number[][]

#### Parameters:

Name | Type |
------ | ------ |
`fitessFunction` | [metaheuristics.FitnessFunction](../metaheuristics_fitnessfunction) |

**Returns:** number[][]

*Inherited from [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[fit](../metaheuristics_populationmetaheuristic#fit)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:105](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/metaheuristics/populationMetaheuristic.ts#L105)

___

{:.method-highlight}
▸ **fitAsync**(`fitessFunction`: [metaheuristics.FitnessFunction](../metaheuristics_fitnessfunction)): Generator

#### Parameters:

Name | Type |
------ | ------ |
`fitessFunction` | [metaheuristics.FitnessFunction](../metaheuristics_fitnessfunction) |

**Returns:** Generator

*Inherited from [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[fitAsync](../metaheuristics_populationmetaheuristic#fitasync)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:93](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/metaheuristics/populationMetaheuristic.ts#L93)

___

{:.method-highlight}
▸ **getBest**(): number[]

**Returns:** number[]

*Inherited from [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[getBest](../metaheuristics_populationmetaheuristic#getbest)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:119](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/metaheuristics/populationMetaheuristic.ts#L119)

___

{:.method-highlight}
▸ **loadState**(`from`: string): void

#### Parameters:

Name | Type |
------ | ------ |
`from` | string |

**Returns:** void

*Inherited from [common.Serializable](../common_serializable).[loadState](../common_serializable#loadstate)*

{:.url-source-ref}
[lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/common/serializable.ts#L14)

___

{:.method-highlight}
▸ `Protected`**movePosition**(`particle`: [metaheuristics.Individual](../metaheuristics_individual)): void

#### Parameters:

Name | Type |
------ | ------ |
`particle` | [metaheuristics.Individual](../metaheuristics_individual) |

**Returns:** void

*Overrides [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[movePosition](../metaheuristics_populationmetaheuristic#moveposition)*

{:.url-source-ref}
[lib/metaheuristics/pso.ts:25](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/metaheuristics/pso.ts#L25)

___

{:.method-highlight}
▸ **onEndFit**(): void

**Returns:** void

*Inherited from [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[onEndFit](../metaheuristics_populationmetaheuristic#onendfit)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:117](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/metaheuristics/populationMetaheuristic.ts#L117)

___

{:.method-highlight}
▸ **preparePopulation**(): void

**Returns:** void

*Inherited from [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[preparePopulation](../metaheuristics_populationmetaheuristic#preparepopulation)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:74](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/metaheuristics/populationMetaheuristic.ts#L74)

___

{:.method-highlight}
▸ **serialize**(): string

**Returns:** string

*Inherited from [common.Serializable](../common_serializable).[serialize](../common_serializable#serialize)*

{:.url-source-ref}
[lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/common/serializable.ts#L10)

___

{:.method-highlight}
▸ **shouldStop**(): boolean

**Returns:** boolean

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[shouldStop](../common_evolutionaryalgorithm#shouldstop)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/common/evolutionaryAlgorithm.ts#L10)

___

{:.method-highlight}
▸ `Protected`**sortPopulation**(): void

**Returns:** void

*Inherited from [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[sortPopulation](../metaheuristics_populationmetaheuristic#sortpopulation)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:44](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/metaheuristics/populationMetaheuristic.ts#L44)

___

{:.method-highlight}
▸ **step**(): void

**Returns:** void

*Overrides [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[step](../metaheuristics_populationmetaheuristic#step)*

{:.url-source-ref}
[lib/metaheuristics/pso.ts:57](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/metaheuristics/pso.ts#L57)

___

{:.method-highlight}
▸ `Protected`**updateGlobalBest**(): void

**Returns:** void

*Inherited from [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic).[updateGlobalBest](../metaheuristics_populationmetaheuristic#updateglobalbest)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:48](https://github.com/ascentcore/dataspot/blob/e1f4e78/lib/metaheuristics/populationMetaheuristic.ts#L48)
