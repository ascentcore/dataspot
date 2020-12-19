---
layout: default
title: MultivariableLinearRegressionConfig
parent: regressions
grand_parent: Dataspot
has_children: false
---

# MultivariableLinearRegressionConfig

## Indexable

▪ [key: string]: SerializableType \| Function

## Index

| Properties |
|-----------|
| [biasAndWeights](#biasandweights) |
| [convergenceHistorySize](#convergencehistorysize) |
| [convergenceRoundingPrecision](#convergenceroundingprecision) |
| [costFunction](#costfunction) |
| [iterations](#iterations) |
| [learningRate](#learningrate) |
| [lossFunction](#lossfunction) |
| [lossHistory](#losshistory) |

## Properties

•  **biasAndWeights**: number[] = []

*Inherited from [regressions.RegressionConfig](../regressions_regressionconfig).[biasAndWeights](../regressions_regressionconfig#biasandweights)*

{:.url-source-ref}
[lib/regressions/regression.ts:20](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L20)

Bias and weights list

___

•  **convergenceHistorySize**: number = 2

*Inherited from [regressions.RegressionConfig](../regressions_regressionconfig).[convergenceHistorySize](../regressions_regressionconfig#convergencehistorysize)*

{:.url-source-ref}
[lib/regressions/regression.ts:14](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L14)

Number of occurrences of the same value in loss history before stopping fit execution

___

•  **convergenceRoundingPrecision**: number = 5

*Inherited from [regressions.RegressionConfig](../regressions_regressionconfig).[convergenceRoundingPrecision](../regressions_regressionconfig#convergenceroundingprecision)*

{:.url-source-ref}
[lib/regressions/regression.ts:17](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L17)

Number of decimals used by the convergence evaluator

___

•  **costFunction**: string \| Function = "meanSquaredError"

*Inherited from [regressions.RegressionConfig](../regressions_regressionconfig).[costFunction](../regressions_regressionconfig#costfunction)*

{:.url-source-ref}
[lib/regressions/regression.ts:26](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L26)

Cost function

___

•  **iterations**: number = 1000

*Inherited from [regressions.RegressionConfig](../regressions_regressionconfig).[iterations](../regressions_regressionconfig#iterations)*

*Overrides [common.EvolutionaryConfig](../common_evolutionaryconfig).[iterations](../common_evolutionaryconfig#iterations)*

{:.url-source-ref}
[lib/regressions/regression.ts:11](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L11)

Maximum number of iterations to be executed for data fit

___

•  **learningRate**: number = 0.001

*Inherited from [regressions.LinearRegressionConfig](../regressions_linearregressionconfig).[learningRate](../regressions_linearregressionconfig#learningrate)*

{:.url-source-ref}
[lib/regressions/linearRegression.ts:7](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/linearRegression.ts#L7)

___

•  **lossFunction**: string \| Function = "meanSquaredError"

*Inherited from [regressions.RegressionConfig](../regressions_regressionconfig).[lossFunction](../regressions_regressionconfig#lossfunction)*

{:.url-source-ref}
[lib/regressions/regression.ts:29](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L29)

Lost function

___

•  **lossHistory**: number[] = []

*Inherited from [regressions.RegressionConfig](../regressions_regressionconfig).[lossHistory](../regressions_regressionconfig#losshistory)*

{:.url-source-ref}
[lib/regressions/regression.ts:23](https://github.com/ascentcore/dataspot/blob/3098228/lib/regressions/regression.ts#L23)

Loss history
