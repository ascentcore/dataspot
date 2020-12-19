---
layout: default
title: Losses
parent: functions
grand_parent: Dataspot
has_children: false
---

# Losses

Losses documentation

Usage example
```ts
import Losses from '@ascentcore/dataspot/functions/losses'

const loss = Losses.meanSquaredError([0.6, 0.3, 0.1], [1, 0, 0])
```

## Index

| Methods |
|-----------|
| [crossEntropy](#crossentropy) |
| [hinge](#hinge) |
| [l2](#l2) |
| [meanAbsoluteError](#meanabsoluteerror) |
| [meanSquaredError](#meansquarederror) |
| [supportVectorMachine](#supportvectormachine) |

## Methods

{:.method-highlight}
▸ `Static`**crossEntropy**(`prediction`: number[], `target`: number[]): number

Cross-entropy loss, or log loss, measures the performance of a classification model whose output is a probability
value between 0 and 1. Cross-entropy loss increases as the predicted probability diverges from the actual label.
So predicting a probability of .012 when the actual observation label is 1 would be bad and result in a high loss value.
A perfect model would have a log loss of 0. [reference](https://ml-cheatsheet.readthedocs.io/en/latest/loss_functions.html)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`prediction` | number[] | predicted values |
`target` | number[] | real values  |

**Returns:** number

{:.url-source-ref}
[lib/functions/losses.ts:41](https://github.com/ascentcore/dataspot/blob/3098228/lib/functions/losses.ts#L41)

___

{:.method-highlight}
▸ `Static`**hinge**(`prediction`: number[], `target`: number[]): number

In machine learning, the hinge loss is a loss function used for training classifiers.
The hinge loss is used for "maximum-margin" classification, most notably for support vector machines [Wikipedia](https://en.wikipedia.org/wiki/Hinge_loss)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`prediction` | number[] | predicted values |
`target` | number[] | real values  |

**Returns:** number

{:.url-source-ref}
[lib/functions/losses.ts:70](https://github.com/ascentcore/dataspot/blob/3098228/lib/functions/losses.ts#L70)

___

{:.method-highlight}
▸ `Static`**l2**(`prediction`: number[], `target`: number[]): number

L2 Loss Function is used to minimize the error which is the sum of the all the squared differences between the true value and the predicted value [AfterAcademy](https://afteracademy.com/blog/what-are-l1-and-l2-loss-functions#:~:text=the%20predicted%20value.-,L2%20Loss%20Function,value%20and%20the%20predicted%20value.)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`prediction` | number[] | predicted values |
`target` | number[] | real values  |

**Returns:** number

{:.url-source-ref}
[lib/functions/losses.ts:82](https://github.com/ascentcore/dataspot/blob/3098228/lib/functions/losses.ts#L82)

___

{:.method-highlight}
▸ `Static`**meanAbsoluteError**(`prediction`: number[], `target`: number[]): number

Mean Absolute Error (MAE) is another loss function used for regression models.
MAE is the sum of absolute differences between our target and predicted variables.
So it measures the average magnitude of errors in a set of predictions, without considering their directions.
(If we consider directions also, that would be called Mean Bias Error (MBE), which is a sum of residuals/errors).
The range is also 0 to ∞ [Hearbeat.fritz.ai](https://heartbeat.fritz.ai/5-regression-loss-functions-all-machine-learners-should-know-4fb140e9d4b0)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`prediction` | number[] | predicted values |
`target` | number[] | real values  |

**Returns:** number

{:.url-source-ref}
[lib/functions/losses.ts:101](https://github.com/ascentcore/dataspot/blob/3098228/lib/functions/losses.ts#L101)

___

{:.method-highlight}
▸ `Static`**meanSquaredError**(`prediction`: number[], `target`: number[]): number

In statistics, the mean squared error (MSE) of an estimator (of a procedure for estimating an unobserved quantity)
measures the average of the squares of the errors — that is, the average squared difference between the estimated
values and what is estimated. MSE is a risk function, corresponding to the expected value of the squared error loss.
The fact that MSE is almost always strictly positive (and not zero) is because of randomness or because the estimator
does not account for information that could produce a more accurate estimate.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`prediction` | number[] | predicted values |
`target` | number[] | real values  |

**Returns:** number

{:.url-source-ref}
[lib/functions/losses.ts:23](https://github.com/ascentcore/dataspot/blob/3098228/lib/functions/losses.ts#L23)

___

{:.method-highlight}
▸ `Static`**supportVectorMachine**(`prediction`: number[], `target`: number[]): number

#### Parameters:

Name | Type |
------ | ------ |
`prediction` | number[] |
`target` | number[] |

**Returns:** number

{:.url-source-ref}
[lib/functions/losses.ts:110](https://github.com/ascentcore/dataspot/blob/3098228/lib/functions/losses.ts#L110)
