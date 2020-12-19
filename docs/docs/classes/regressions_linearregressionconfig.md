---
layout: default
title: LinearRegressionConfig
parent: regressions
grand_parent: Dataspot
has_children: false
---

# LinearRegressionConfig

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
[lib/regressions/regression.ts:11](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L11)

___

•  **convergenceHistorySize**: number = 2

*Inherited from [regressions.RegressionConfig](../regressions_regressionconfig).[convergenceHistorySize](../regressions_regressionconfig#convergencehistorysize)*

{:.url-source-ref}
[lib/regressions/regression.ts:7](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L7)

___

•  **convergenceRoundingPrecision**: number = 5

*Inherited from [regressions.RegressionConfig](../regressions_regressionconfig).[convergenceRoundingPrecision](../regressions_regressionconfig#convergenceroundingprecision)*

{:.url-source-ref}
[lib/regressions/regression.ts:9](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L9)

___

•  **costFunction**: string \| Function = "meanSquaredError"

*Inherited from [regressions.RegressionConfig](../regressions_regressionconfig).[costFunction](../regressions_regressionconfig#costfunction)*

{:.url-source-ref}
[lib/regressions/regression.ts:15](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L15)

___

•  **iterations**: number = 100

*Inherited from [common.EvolutionaryConfig](../common_evolutionaryconfig).[iterations](../common_evolutionaryconfig#iterations)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/common/evolutionaryAlgorithm.ts#L4)

___

•  **learningRate**: number = 0.001

{:.url-source-ref}
[lib/regressions/linearRegression.ts:7](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/linearRegression.ts#L7)

___

•  **lossFunction**: string \| Function = "meanSquaredError"

*Inherited from [regressions.RegressionConfig](../regressions_regressionconfig).[lossFunction](../regressions_regressionconfig#lossfunction)*

{:.url-source-ref}
[lib/regressions/regression.ts:17](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L17)

___

•  **lossHistory**: number[] = []

*Inherited from [regressions.RegressionConfig](../regressions_regressionconfig).[lossHistory](../regressions_regressionconfig#losshistory)*

{:.url-source-ref}
[lib/regressions/regression.ts:13](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L13)
