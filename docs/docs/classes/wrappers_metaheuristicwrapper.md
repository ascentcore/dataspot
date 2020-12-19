---
layout: default
title: MetaheuristicWrapper
parent: wrappers
grand_parent: Dataspot
has_children: false
---

# MetaheuristicWrapper

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [container](#container) |
| [mainView](#mainview) |
| [root](#root) |

| Methods |
|-----------|
| [destroy](#destroy) |
| [getElement](#getelement) |

## Constructors

{:.method-highlight}
\+ **new MetaheuristicWrapper**(`container`: HTMLElement, `problem`: [datasets.problems.MetaheuristicProblem](../../interfaces/datasets_problems_metaheuristicproblem), `metaheuristing`: [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic)\<[metaheuristics.PopulationMetaheuristicConfig](../metaheuristics_populationmetaheuristicconfig)>, `updateCallback?`: Function): [wrappers.MetaheuristicWrapper](../wrappers_metaheuristicwrapper)

#### Parameters:

Name | Type |
------ | ------ |
`container` | HTMLElement |
`problem` | [datasets.problems.MetaheuristicProblem](../../interfaces/datasets_problems_metaheuristicproblem) |
`metaheuristing` | [metaheuristics.PopulationMetaheuristic](../metaheuristics_populationmetaheuristic)\<[metaheuristics.PopulationMetaheuristicConfig](../metaheuristics_populationmetaheuristicconfig)> |
`updateCallback?` | Function |

**Returns:** [wrappers.MetaheuristicWrapper](../wrappers_metaheuristicwrapper)

*Overrides [ui.common.BaseComponent](../ui_common_basecomponent).[constructor](../ui_common_basecomponent#constructor)*

{:.url-source-ref}
[lib/wrappers/metaheuristicWrapper.ts:16](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/wrappers/metaheuristicWrapper.ts#L16)

## Properties

• `Readonly` **container**: HTMLElement

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[container](../ui_common_basecomponent#container)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:4](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/ui/common/baseComponent.ts#L4)

___

•  **mainView**: HTMLElement

{:.url-source-ref}
[lib/wrappers/metaheuristicWrapper.ts:16](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/wrappers/metaheuristicWrapper.ts#L16)

___

•  **root**: HTMLElement \| undefined

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[root](../ui_common_basecomponent#root)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:2](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/ui/common/baseComponent.ts#L2)

## Methods

{:.method-highlight}
▸ **destroy**(): void

**Returns:** void

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[destroy](../ui_common_basecomponent#destroy)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:31](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/ui/common/baseComponent.ts#L31)

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
[lib/ui/common/baseComponent.ts:6](https://github.com/ascentcore/dataspot/blob/eafb62e/lib/ui/common/baseComponent.ts#L6)
