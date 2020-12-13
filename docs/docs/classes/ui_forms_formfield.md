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

{:.source-ref}
lib/ui/forms/formField.ts:4

## Properties

• `Readonly` **container**: HTMLElement

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[container](../ui_common_basecomponent#container)*

{:.source-ref}
lib/ui/common/baseComponent.ts:4

___

• `Protected` **inputField**: HTMLElement \| undefined

{:.source-ref}
lib/ui/forms/formField.ts:4

___

•  **key**: string

{:.source-ref}
lib/ui/forms/formField.ts:6

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

___

{:.method-highlight}
▸ **getValue**(): string \| undefined

**Returns:** string \| undefined

{:.source-ref}
lib/ui/forms/formField.ts:19

___

{:.method-highlight}
▸ **setValue**(`value`: any \| null): void

#### Parameters:

Name | Type |
------ | ------ |
`value` | any \| null |

**Returns:** void

{:.source-ref}
lib/ui/forms/formField.ts:13
