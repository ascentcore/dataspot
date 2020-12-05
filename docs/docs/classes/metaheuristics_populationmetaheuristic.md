---
layout: default
title: PopulationMetaheuristic
parent: metaheuristics
grand_parent: Dataspot
has_children: false
---

# PopulationMetaheuristic

## Type parameters

Name | Type |
------ | ------ |
`T` | [metaheuristics.PopulationMetaheuristicConfig](../metaheuristics_populationmetaheuristicconfig) |

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [config](#config) |
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
\+ **new PopulationMetaheuristic**(`config`: T): [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic)

#### Parameters:

Name | Type |
------ | ------ |
`config` | T |

**Returns:** [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic)

*Inherited from [common.Serializable](../common_serializable).[constructor](../common_serializable#constructor)*

{:.url-source-ref}
[lib/common/serializable.ts:7](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/common/serializable.ts#L7)

## Properties

•  **config**: T

*Inherited from [common.Serializable](../common_serializable).[config](../common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/common/serializable.ts#L8)

___

• `Protected` **fitnessFunction**: [metaheuristics.FitnessFunction](../metaheuristics_fitnessfunction)

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:36](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/metaheuristics/populationMetaheuristic.ts#L36)

___

• `Protected` **individuals**: [metaheuristics.Individual](../metaheuristics_individual)[]

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:34](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/metaheuristics/populationMetaheuristic.ts#L34)

___

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[iteration](../common_evolutionaryalgorithm#iteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/common/evolutionaryAlgorithm.ts#L8)

## Methods

{:.method-highlight}
▸ **canStop**(): boolean

**Returns:** boolean

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:38](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/metaheuristics/populationMetaheuristic.ts#L38)

___

{:.method-highlight}
▸ **fit**(`fitessFunction`: [metaheuristics.FitnessFunction](../metaheuristics_fitnessfunction)): number[][]

#### Parameters:

Name | Type |
------ | ------ |
`fitessFunction` | [metaheuristics.FitnessFunction](../metaheuristics_fitnessfunction) |

**Returns:** number[][]

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:105](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/metaheuristics/populationMetaheuristic.ts#L105)

___

{:.method-highlight}
▸ **fitAsync**(`fitessFunction`: [metaheuristics.FitnessFunction](../metaheuristics_fitnessfunction)): Generator

#### Parameters:

Name | Type |
------ | ------ |
`fitessFunction` | [metaheuristics.FitnessFunction](../metaheuristics_fitnessfunction) |

**Returns:** Generator

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:93](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/metaheuristics/populationMetaheuristic.ts#L93)

___

{:.method-highlight}
▸ **getBest**(): number[]

**Returns:** number[]

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:119](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/metaheuristics/populationMetaheuristic.ts#L119)

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
[lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/common/serializable.ts#L14)

___

{:.method-highlight}
▸ `Protected` `Abstract`**movePosition**(`particle`: [metaheuristics.Individual](../metaheuristics_individual)): void

#### Parameters:

Name | Type |
------ | ------ |
`particle` | [metaheuristics.Individual](../metaheuristics_individual) |

**Returns:** void

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:42](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/metaheuristics/populationMetaheuristic.ts#L42)

___

{:.method-highlight}
▸ **onEndFit**(): void

**Returns:** void

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:117](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/metaheuristics/populationMetaheuristic.ts#L117)

___

{:.method-highlight}
▸ **preparePopulation**(): void

**Returns:** void

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:74](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/metaheuristics/populationMetaheuristic.ts#L74)

___

{:.method-highlight}
▸ **serialize**(): string

**Returns:** string

*Inherited from [common.Serializable](../common_serializable).[serialize](../common_serializable#serialize)*

{:.url-source-ref}
[lib/common/serializable.ts:10](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/common/serializable.ts#L10)

___

{:.method-highlight}
▸ **shouldStop**(): boolean

**Returns:** boolean

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[shouldStop](../common_evolutionaryalgorithm#shouldstop)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:10](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/common/evolutionaryAlgorithm.ts#L10)

___

{:.method-highlight}
▸ `Protected`**sortPopulation**(): void

**Returns:** void

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:44](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/metaheuristics/populationMetaheuristic.ts#L44)

___

{:.method-highlight}
▸ `Abstract`**step**(): void

**Returns:** void

*Overrides [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[step](../common_evolutionaryalgorithm#step)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:72](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/metaheuristics/populationMetaheuristic.ts#L72)

___

{:.method-highlight}
▸ `Protected`**updateGlobalBest**(): void

**Returns:** void

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:48](https://github.com/ascentcore/dataspot/blob/dbc9f09/lib/metaheuristics/populationMetaheuristic.ts#L48)
