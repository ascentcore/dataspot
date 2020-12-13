---
layout: default
title: BoxedCircles
parent: problems
grand_parent: datasets
has_children: false
---

# BoxedCircles

## Implements

* [datasets.problems.MetaheuristicProblem](../../interfaces/datasets_problems_metaheuristicproblem)

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [multipleViz](#multipleviz) |
| [numberOfCircles](#numberofcircles) |

| Methods |
|-----------|
| [calculate](#calculate) |
| [getDimensionsDomain](#getdimensionsdomain) |
| [initializeVisualization](#initializevisualization) |
| [updateVisualization](#updatevisualization) |

## Constructors

{:.method-highlight}
\+ **new BoxedCircles**(`numberOfCircles?`: number): [datasets.problems.BoxedCircles](../datasets_problems_boxedcircles)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`numberOfCircles` | number | 8 |

**Returns:** [datasets.problems.BoxedCircles](../datasets_problems_boxedcircles)

{:.source-ref}
lib/datasets/problems/boxedCircles.ts:18

## Properties

• `Private` **multipleViz**: [visualizations.d3.SVGMultipleVisualization](../visualizations_d3_svgmultiplevisualization)

{:.source-ref}
lib/datasets/problems/boxedCircles.ts:18

___

• `Private` **numberOfCircles**: number

{:.source-ref}
lib/datasets/problems/boxedCircles.ts:20

## Methods

{:.method-highlight}
▸ **calculate**(`input`: number[]): number

#### Parameters:

Name | Type |
------ | ------ |
`input` | number[] |

**Returns:** number

*Implementation of [datasets.problems.MetaheuristicProblem](../../interfaces/datasets_problems_metaheuristicproblem)*

{:.source-ref}
lib/datasets/problems/boxedCircles.ts:63

___

{:.method-highlight}
▸ **getDimensionsDomain**(): DomainDefinition[]

**Returns:** DomainDefinition[]

*Implementation of [datasets.problems.MetaheuristicProblem](../../interfaces/datasets_problems_metaheuristicproblem)*

{:.source-ref}
lib/datasets/problems/boxedCircles.ts:53

___

{:.method-highlight}
▸ **initializeVisualization**(`container`: HTMLElement): void

#### Parameters:

Name | Type |
------ | ------ |
`container` | HTMLElement |

**Returns:** void

*Implementation of [datasets.problems.MetaheuristicProblem](../../interfaces/datasets_problems_metaheuristicproblem)*

{:.source-ref}
lib/datasets/problems/boxedCircles.ts:35

___

{:.method-highlight}
▸ **updateVisualization**(`bestIndividual`: number[]): void

#### Parameters:

Name | Type |
------ | ------ |
`bestIndividual` | number[] |

**Returns:** void

{:.source-ref}
lib/datasets/problems/boxedCircles.ts:40
