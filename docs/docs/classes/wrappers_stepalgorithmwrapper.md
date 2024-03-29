---
layout: default
title: StepAlgorithmWrapper
parent: wrappers
grand_parent: Dataspot
has_children: false
---

# StepAlgorithmWrapper

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [container](#container) |
| [mainView](#mainview) |
| [root](#root) |
| [running](#running) |

| Methods |
|-----------|
| [destroy](#destroy) |
| [getElement](#getelement) |

## Constructors

{:.method-highlight}
\+ **new StepAlgorithmWrapper**(`container`: HTMLElement, `evolutionaryAlgorithm`: [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm)\<any>, `definitions?`: Record\<string, FieldDefinition>, `stepCallback?`: Function): [wrappers.StepAlgorithmWrapper](../wrappers_stepalgorithmwrapper)

#### Parameters:

Name | Type |
------ | ------ |
`container` | HTMLElement |
`evolutionaryAlgorithm` | [common.EvolutionaryAlgorithm](../common_evolutionaryalgorithm)\<any> |
`definitions?` | Record\<string, FieldDefinition> |
`stepCallback?` | Function |

**Returns:** [wrappers.StepAlgorithmWrapper](../wrappers_stepalgorithmwrapper)

*Overrides [ui.common.BaseComponent](../ui_common_basecomponent).[constructor](../ui_common_basecomponent#constructor)*

{:.url-source-ref}
[lib/wrappers/stepAlgorithmWrapper.ts:13](https://github.com/ascentcore/dataspot/blob/236fcea/lib/wrappers/stepAlgorithmWrapper.ts#L13)

## Properties

• `Readonly` **container**: HTMLElement

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[container](../ui_common_basecomponent#container)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:4](https://github.com/ascentcore/dataspot/blob/236fcea/lib/ui/common/baseComponent.ts#L4)

___

•  **mainView**: HTMLElement

{:.url-source-ref}
[lib/wrappers/stepAlgorithmWrapper.ts:11](https://github.com/ascentcore/dataspot/blob/236fcea/lib/wrappers/stepAlgorithmWrapper.ts#L11)

___

•  **root**: HTMLElement \| undefined

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[root](../ui_common_basecomponent#root)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:2](https://github.com/ascentcore/dataspot/blob/236fcea/lib/ui/common/baseComponent.ts#L2)

___

• `Private` **running**: boolean = false

{:.url-source-ref}
[lib/wrappers/stepAlgorithmWrapper.ts:13](https://github.com/ascentcore/dataspot/blob/236fcea/lib/wrappers/stepAlgorithmWrapper.ts#L13)

## Methods

{:.method-highlight}
▸ **destroy**(): void

**Returns:** void

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[destroy](../ui_common_basecomponent#destroy)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:31](https://github.com/ascentcore/dataspot/blob/236fcea/lib/ui/common/baseComponent.ts#L31)

___

{:.method-highlight}
▸ **getElement**(`tagName`: string, `classList?`: string[], `parent?`: HTMLElement, `attributes?`: Record\<string, string>): HTMLElement

#### Parameters:

Name | Type |
------ | ------ |
`tagName` | string |
`classList?` | string[] |
`parent?` | HTMLElement |
`attributes?` | Record\<string, string> |

**Returns:** HTMLElement

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[getElement](../ui_common_basecomponent#getelement)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:6](https://github.com/ascentcore/dataspot/blob/236fcea/lib/ui/common/baseComponent.ts#L6)
