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

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:2](https://github.com/ascentcore/dataspot/blob/236fcea/lib/ui/common/baseComponent.ts#L2)

## Properties

• `Readonly` **container**: HTMLElement

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:4](https://github.com/ascentcore/dataspot/blob/236fcea/lib/ui/common/baseComponent.ts#L4)

___

•  **root**: HTMLElement \| undefined

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:2](https://github.com/ascentcore/dataspot/blob/236fcea/lib/ui/common/baseComponent.ts#L2)

## Methods

{:.method-highlight}
▸ **destroy**(): void

**Returns:** void

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

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:6](https://github.com/ascentcore/dataspot/blob/236fcea/lib/ui/common/baseComponent.ts#L6)
