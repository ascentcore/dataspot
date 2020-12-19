---
layout: default
title: Tournament
parent: selection
grand_parent: metaheuristics
has_children: false
---

# Tournament

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [numSelected](#numselected) |

| Methods |
|-----------|
| [execute](#execute) |

## Constructors

{:.method-highlight}
\+ **new Tournament**(`numSelected`: number): [metaheuristics.selection.Tournament](../metaheuristics_selection_tournament)

#### Parameters:

Name | Type |
------ | ------ |
`numSelected` | number |

**Returns:** [metaheuristics.selection.Tournament](../metaheuristics_selection_tournament)

{:.url-source-ref}
[lib/metaheuristics/selection/tournament.ts:4](https://github.com/ascentcore/dataspot/blob/3098228/lib/metaheuristics/selection/tournament.ts#L4)

## Properties

• `Private` **numSelected**: number

{:.url-source-ref}
[lib/metaheuristics/selection/tournament.ts:5](https://github.com/ascentcore/dataspot/blob/3098228/lib/metaheuristics/selection/tournament.ts#L5)

## Methods

{:.method-highlight}
▸ **execute**(`individuals`: [metaheuristics.Individual](../metaheuristics_individual)[]): [metaheuristics.Individual](../metaheuristics_individual)[]

#### Parameters:

Name | Type |
------ | ------ |
`individuals` | [metaheuristics.Individual](../metaheuristics_individual)[] |

**Returns:** [metaheuristics.Individual](../metaheuristics_individual)[]

{:.url-source-ref}
[lib/metaheuristics/selection/tournament.ts:7](https://github.com/ascentcore/dataspot/blob/3098228/lib/metaheuristics/selection/tournament.ts#L7)
