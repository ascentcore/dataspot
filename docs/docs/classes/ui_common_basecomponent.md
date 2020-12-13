---
layout: default
title: BaseComponent
parent: common
grand_parent: ui
has_children: false
---

# BaseComponent

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
\+ **new BaseComponent**(`container`: HTMLElement): [ui.common.BaseComponent](../ui_common_basecomponent)

#### Parameters:

Name | Type |
------ | ------ |
`container` | HTMLElement |

**Returns:** [ui.common.BaseComponent](../ui_common_basecomponent)

{:.source-ref}
lib/ui/common/baseComponent.ts:2

## Properties

• `Readonly` **container**: HTMLElement

{:.source-ref}
lib/ui/common/baseComponent.ts:4

___

•  **root**: HTMLElement \| undefined

{:.source-ref}
lib/ui/common/baseComponent.ts:2

## Methods

{:.method-highlight}
▸ **destroy**(): void

**Returns:** void

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

{:.source-ref}
lib/ui/common/baseComponent.ts:6
