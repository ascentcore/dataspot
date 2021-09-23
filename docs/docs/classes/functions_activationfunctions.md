---
layout: default
title: ActivationFunctions
parent: functions
grand_parent: Dataspot
has_children: false
---

# ActivationFunctions

Activation functions are mathematical equations that determine the output of a neural network.
The function is attached to each neuron in the network, and determines whether it should be activated (“fired”) or not,
based on whether each neuron's input is relevant for the model's prediction.

Usage:
```ts
import ActivationFunctions from '@ascentcore/dataspot/functions/activations'

const value = ActivationFunctions.sigmoid(0.5)
```

Representation for all activation functions supported by dataspot:

**`sample`** documentation/activationFunctions

<div class="running-sample">
    <span class="running-sample-container" data-ref="documentation/activationFunctions"></span>
    <script src='/dataspot/samples/activationFunctions.js' title="documentation/activationFunctions"></script>
</div>

## Index

| Methods |
|-----------|
| [binary](#binary) |
| [identity](#identity) |
| [leakyRelu](#leakyrelu) |
| [relu](#relu) |
| [siLu](#silu) |
| [sigmoid](#sigmoid) |
| [sign](#sign) |
| [softPlus](#softplus) |
| [tanh](#tanh) |

## Methods

{:.method-highlight}
▸ `Static`**binary**(`x`: number): number

#### Parameters:

Name | Type |
------ | ------ |
`x` | number |

**Returns:** number

{:.url-source-ref}
[lib/functions/activations.ts:25](https://github.com/ascentcore/dataspot/blob/236fcea/lib/functions/activations.ts#L25)

___

{:.method-highlight}
▸ `Static`**identity**(`x`: number): number

#### Parameters:

Name | Type |
------ | ------ |
`x` | number |

**Returns:** number

{:.url-source-ref}
[lib/functions/activations.ts:17](https://github.com/ascentcore/dataspot/blob/236fcea/lib/functions/activations.ts#L17)

___

{:.method-highlight}
▸ `Static`**leakyRelu**(`x`: number): number

#### Parameters:

Name | Type |
------ | ------ |
`x` | number |

**Returns:** number

{:.url-source-ref}
[lib/functions/activations.ts:33](https://github.com/ascentcore/dataspot/blob/236fcea/lib/functions/activations.ts#L33)

___

{:.method-highlight}
▸ `Static`**relu**(`x`: number): number

#### Parameters:

Name | Type |
------ | ------ |
`x` | number |

**Returns:** number

{:.url-source-ref}
[lib/functions/activations.ts:29](https://github.com/ascentcore/dataspot/blob/236fcea/lib/functions/activations.ts#L29)

___

{:.method-highlight}
▸ `Static`**siLu**(`x`: number): number

#### Parameters:

Name | Type |
------ | ------ |
`x` | number |

**Returns:** number

{:.url-source-ref}
[lib/functions/activations.ts:41](https://github.com/ascentcore/dataspot/blob/236fcea/lib/functions/activations.ts#L41)

___

{:.method-highlight}
▸ `Static`**sigmoid**(`x`: number): number

#### Parameters:

Name | Type |
------ | ------ |
`x` | number |

**Returns:** number

{:.url-source-ref}
[lib/functions/activations.ts:21](https://github.com/ascentcore/dataspot/blob/236fcea/lib/functions/activations.ts#L21)

___

{:.method-highlight}
▸ `Static`**sign**(`x`: number): number

#### Parameters:

Name | Type |
------ | ------ |
`x` | number |

**Returns:** number

{:.url-source-ref}
[lib/functions/activations.ts:49](https://github.com/ascentcore/dataspot/blob/236fcea/lib/functions/activations.ts#L49)

___

{:.method-highlight}
▸ `Static`**softPlus**(`x`: number): number

#### Parameters:

Name | Type |
------ | ------ |
`x` | number |

**Returns:** number

{:.url-source-ref}
[lib/functions/activations.ts:37](https://github.com/ascentcore/dataspot/blob/236fcea/lib/functions/activations.ts#L37)

___

{:.method-highlight}
▸ `Static`**tanh**(`x`: number): number

#### Parameters:

Name | Type |
------ | ------ |
`x` | number |

**Returns:** number

{:.url-source-ref}
[lib/functions/activations.ts:45](https://github.com/ascentcore/dataspot/blob/236fcea/lib/functions/activations.ts#L45)
