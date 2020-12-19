---
layout: default
title: RegressionConfig
parent: regressions
grand_parent: Dataspot
has_children: false
---

# RegressionConfig

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
| [lossFunction](#lossfunction) |
| [lossHistory](#losshistory) |

## Properties

•  **biasAndWeights**: number[] = []

{:.url-source-ref}
[lib/regressions/regression.ts:11](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L11)

___

•  **convergenceHistorySize**: number = 2

{:.url-source-ref}
[lib/regressions/regression.ts:7](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L7)

___

•  **convergenceRoundingPrecision**: number = 5

{:.url-source-ref}
[lib/regressions/regression.ts:9](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L9)

___

•  **costFunction**: string \| Function = "meanSquaredError"

{:.url-source-ref}
[lib/regressions/regression.ts:15](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L15)

___

•  **iterations**: number = 100

*Inherited from [common.EvolutionaryConfig](../common_evolutionaryconfig).[iterations](../common_evolutionaryconfig#iterations)*

{:.url-source-ref}
[lib/common/evolutionaryAlgorithm.ts:4](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/common/evolutionaryAlgorithm.ts#L4)

___

•  **lossFunction**: string \| Function = "meanSquaredError"

{:.url-source-ref}
[lib/regressions/regression.ts:17](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L17)

___

•  **lossHistory**: number[] = []

{:.url-source-ref}
[lib/regressions/regression.ts:13](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/regressions/regression.ts#L13)
