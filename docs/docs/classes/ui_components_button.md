---
layout: default
title: Button
parent: components
grand_parent: ui
has_children: false
---

# Button

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
\+ **new Button**(`container`: HTMLElement, `title`: string, `callback`: Function): [ui.components.Button](../ui_components_button)

#### Parameters:

Name | Type |
------ | ------ |
`container` | HTMLElement |
`title` | string |
`callback` | Function |

**Returns:** [ui.components.Button](../ui_components_button)

*Overrides [ui.common.BaseComponent](../ui_common_basecomponent).[constructor](../ui_common_basecomponent#constructor)*

{:.source-ref}
lib/ui/components/button.ts:3

## Properties

• `Readonly` **container**: HTMLElement

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[container](../ui_common_basecomponent#container)*

{:.source-ref}
lib/ui/common/baseComponent.ts:4

___

•  **root**: HTMLElement \| undefined

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[root](../ui_common_basecomponent#root)*

{:.source-ref}
lib/ui/common/baseComponent.ts:2

## Methods

{:.method-highlight}
▸ **destroy**(): void

**Returns:** void

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[destroy](../ui_common_basecomponent#destroy)*

{:.source-ref}
lib/ui/common/baseComponent.ts:31

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

{:.source-ref}
lib/ui/common/baseComponent.ts:6
