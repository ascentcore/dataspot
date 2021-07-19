---
layout: default
title: Accordion
parent: components
grand_parent: ui
has_children: false
---

# Accordion

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [container](#container) |
| [root](#root) |

| Methods |
|-----------|
| [destroy](#destroy) |
| [getElement](#getelement) |

## Constructors

{:.method-highlight}
\+ **new Accordion**(`container`: HTMLElement, `title`: string): [ui.components.Accordion](../ui_components_accordion)

#### Parameters:

Name | Type |
------ | ------ |
`container` | HTMLElement |
`title` | string |

**Returns:** [ui.components.Accordion](../ui_components_accordion)

*Overrides [ui.common.BaseComponent](../ui_common_basecomponent).[constructor](../ui_common_basecomponent#constructor)*

{:.url-source-ref}
[lib/ui/components/accordion.ts:3](https://github.com/ascentcore/dataspot/blob/aac35bc/lib/ui/components/accordion.ts#L3)

## Properties

• `Readonly` **container**: HTMLElement

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[container](../ui_common_basecomponent#container)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:4](https://github.com/ascentcore/dataspot/blob/aac35bc/lib/ui/common/baseComponent.ts#L4)

___

•  **root**: HTMLElement \| undefined

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[root](../ui_common_basecomponent#root)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:2](https://github.com/ascentcore/dataspot/blob/aac35bc/lib/ui/common/baseComponent.ts#L2)

## Methods

{:.method-highlight}
▸ **destroy**(): void

**Returns:** void

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[destroy](../ui_common_basecomponent#destroy)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:31](https://github.com/ascentcore/dataspot/blob/aac35bc/lib/ui/common/baseComponent.ts#L31)

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
[lib/ui/common/baseComponent.ts:6](https://github.com/ascentcore/dataspot/blob/aac35bc/lib/ui/common/baseComponent.ts#L6)
