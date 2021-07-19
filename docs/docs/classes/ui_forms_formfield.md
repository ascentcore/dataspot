---
layout: default
title: FormField
parent: forms
grand_parent: ui
has_children: false
---

# FormField

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [container](#container) |
| [inputField](#inputfield) |
| [key](#key) |
| [root](#root) |

| Methods |
|-----------|
| [destroy](#destroy) |
| [getElement](#getelement) |
| [getValue](#getvalue) |
| [parser](#parser) |
| [setValue](#setvalue) |

## Constructors

{:.method-highlight}
\+ **new FormField**(`container`: HTMLElement, `key`: string, `label`: string): [ui.forms.FormField](../ui_forms_formfield)

#### Parameters:

Name | Type |
------ | ------ |
`container` | HTMLElement |
`key` | string |
`label` | string |

**Returns:** [ui.forms.FormField](../ui_forms_formfield)

*Overrides [ui.common.BaseComponent](../ui_common_basecomponent).[constructor](../ui_common_basecomponent#constructor)*

{:.url-source-ref}
[lib/ui/forms/formField.ts:6](https://github.com/ascentcore/dataspot/blob/aac35bc/lib/ui/forms/formField.ts#L6)

## Properties

• `Readonly` **container**: HTMLElement

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[container](../ui_common_basecomponent#container)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:4](https://github.com/ascentcore/dataspot/blob/aac35bc/lib/ui/common/baseComponent.ts#L4)

___

• `Protected` **inputField**: HTMLElement \| undefined

{:.url-source-ref}
[lib/ui/forms/formField.ts:4](https://github.com/ascentcore/dataspot/blob/aac35bc/lib/ui/forms/formField.ts#L4)

___

•  **key**: string

{:.url-source-ref}
[lib/ui/forms/formField.ts:8](https://github.com/ascentcore/dataspot/blob/aac35bc/lib/ui/forms/formField.ts#L8)

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

___

{:.method-highlight}
▸ **getValue**(): string \| undefined

**Returns:** string \| undefined

{:.url-source-ref}
[lib/ui/forms/formField.ts:21](https://github.com/ascentcore/dataspot/blob/aac35bc/lib/ui/forms/formField.ts#L21)

___

{:.method-highlight}
▸ `Protected`**parser**(`val`: any): any

#### Parameters:

Name | Type |
------ | ------ |
`val` | any |

**Returns:** any

{:.url-source-ref}
[lib/ui/forms/formField.ts:6](https://github.com/ascentcore/dataspot/blob/aac35bc/lib/ui/forms/formField.ts#L6)

___

{:.method-highlight}
▸ **setValue**(`value`: any \| null): void

#### Parameters:

Name | Type |
------ | ------ |
`value` | any \| null |

**Returns:** void

{:.url-source-ref}
[lib/ui/forms/formField.ts:15](https://github.com/ascentcore/dataspot/blob/aac35bc/lib/ui/forms/formField.ts#L15)
