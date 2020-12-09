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
| [dimensions](#dimensions) |
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
[lib/common/serializable.ts:7](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/common/serializable.ts#L7)

## Properties

•  **config**: T

*Inherited from [common.Serializable](../common_serializable).[config](../common_serializable#config)*

{:.url-source-ref}
[lib/common/serializable.ts:8](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/common/serializable.ts#L8)

___

• `Protected` **dimensions**: { max: number ; min: number  }[]

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:37](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L37)

___

• `Protected` **fitnessFunction**: Function

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:35](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L35)

___

• `Protected` **individuals**: [metaheuristics.Individual](../metaheuristics_individual)[]

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:33](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L33)

___

• `Protected` **iteration**: number = 0

*Inherited from [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[iteration](../common_evolutionaryalgorithm#iteration)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:8](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/common/evolutionaryAlgorithm.ts#L8)

## Methods

{:.method-highlight}
▸ **canStop**(): boolean

**Returns:** boolean

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:39](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L39)

___

{:.method-highlight}
▸ **fit**(`fitessFunction`: Function, `dimensions`: { max: number ; min: number  }[]): number[][]

#### Parameters:

Name | Type |
------ | ------ |
`fitessFunction` | Function |
`dimensions` | { max: number ; min: number  }[] |

**Returns:** number[][]

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

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:91](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L91)

___

{:.method-highlight}
▸ **getBest**(): number[]

**Returns:** number[]

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:119](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L119)

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
[lib/common/serializable.ts:14](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/common/serializable.ts#L14)

___

{:.method-highlight}
▸ `Protected` `Abstract`**movePosition**(...`particles`: [metaheuristics.Individual](../metaheuristics_individual)[]): void

#### Parameters:

Name | Type |
------ | ------ |
`...particles` | [metaheuristics.Individual](../metaheuristics_individual)[] |

**Returns:** void

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:43](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L43)

___

{:.method-highlight}
▸ **onEndFit**(): void

**Returns:** void

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:117](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L117)

___

{:.method-highlight}
▸ `Protected`**preparePopulation**(): void

**Returns:** void

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

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:45](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L45)

___

{:.method-highlight}
▸ `Abstract`**step**(): void

**Returns:** void

*Overrides [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm).[step](../common_evolutionaryalgorithm#step)*

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:89](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L89)

___

{:.method-highlight}
▸ `Protected`**updateGlobalBest**(): void

**Returns:** void

{:.url-source-ref}
[lib/metaheuristics/populationMetaheuristic.ts:49](https://github.com/ascentcore/dataspot/blob/f1c4a34/lib/metaheuristics/populationMetaheuristic.ts#L49)
