---
layout: default
title: RegressionConfig
parent: regressions
grand_parent: Dataspot
has_children: false
---

# RegressionConfig

Base configuration class for regression algorithms

## Indexable

▪ [key: string]: SerializableType \| Function

Base configuration class for regression algorithms

## Index

| Properties |
|-----------|
| [biasAndWeights](#biasandweights) |
| [convergenceHistorySize](#convergencehistorysize) |
| [convergenceRoundingPrecision](#convergenceroundingprecision) |
| [costFunction](#costfunction) |
| [iterations](#iterations) |
| [lossFunction](#lossfunction) |
| [lossHistory](#losshistory) |

## Properties

•  **biasAndWeights**: number[] = []

{:.url-source-ref}
[lib/regressions/regression.ts:20](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L20)

Bias and weights list

___

•  **convergenceHistorySize**: number = 2

{:.url-source-ref}
[lib/regressions/regression.ts:14](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L14)

Number of occurrences of the same value in loss history before stopping fit execution

___

•  **convergenceRoundingPrecision**: number = 5

{:.url-source-ref}
[lib/regressions/regression.ts:17](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L17)

Number of decimals used by the convergence evaluator

___

•  **costFunction**: string \| Function = "meanSquaredError"

{:.url-source-ref}
[lib/regressions/regression.ts:26](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L26)

Cost function

___

•  **iterations**: number = 1000

*Overrides [common.EvolutionaryConfig](../common_evolutionaryconfig).[iterations](../common_evolutionaryconfig#iterations)*

{:.url-source-ref}
[lib/regressions/regression.ts:11](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L11)

Maximum number of iterations to be executed for data fit

___

•  **lossFunction**: string \| Function = "meanSquaredError"

{:.url-source-ref}
[lib/regressions/regression.ts:29](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L29)

Lost function

___

•  **lossHistory**: number[] = []

{:.url-source-ref}
[lib/regressions/regression.ts:23](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L23)

Loss history
