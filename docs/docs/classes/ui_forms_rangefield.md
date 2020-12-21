---
layout: default
title: RangeField
parent: forms
grand_parent: ui
has_children: false
---

# RangeField

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
\+ **new RangeField**(`container`: HTMLElement, `key`: string, `label`: string, `attributes?`: Record\<string, string>): [ui.forms.RangeField](../ui_forms_rangefield)

#### Parameters:

Name | Type |
------ | ------ |
`container` | HTMLElement |
`key` | string |
`label` | string |
`attributes?` | Record\<string, string> |

**Returns:** [ui.forms.RangeField](../ui_forms_rangefield)

*Overrides [ui.forms.FormField](../ui_forms_formfield).[constructor](../ui_forms_formfield#constructor)*

{:.url-source-ref}
[lib/ui/forms/rangeField.ts:3](https://github.com/ascentcore/dataspot/blob/3098228/lib/ui/forms/rangeField.ts#L3)

## Properties

• `Readonly` **container**: HTMLElement

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[container](../ui_common_basecomponent#container)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:4](https://github.com/ascentcore/dataspot/blob/3098228/lib/ui/common/baseComponent.ts#L4)

___

• `Protected` **inputField**: HTMLElement \| undefined

*Inherited from [ui.forms.FormField](../ui_forms_formfield).[inputField](../ui_forms_formfield#inputfield)*

{:.url-source-ref}
[lib/ui/forms/formField.ts:4](https://github.com/ascentcore/dataspot/blob/3098228/lib/ui/forms/formField.ts#L4)

___

•  **key**: string

*Inherited from [ui.forms.FormField](../ui_forms_formfield).[key](../ui_forms_formfield#key)*

{:.url-source-ref}
[lib/ui/forms/formField.ts:6](https://github.com/ascentcore/dataspot/blob/3098228/lib/ui/forms/formField.ts#L6)

___

•  **root**: HTMLElement \| undefined

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[root](../ui_common_basecomponent#root)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:2](https://github.com/ascentcore/dataspot/blob/3098228/lib/ui/common/baseComponent.ts#L2)

## Methods

{:.method-highlight}
▸ **destroy**(): void

**Returns:** void

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[destroy](../ui_common_basecomponent#destroy)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:31](https://github.com/ascentcore/dataspot/blob/3098228/lib/ui/common/baseComponent.ts#L31)

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
[lib/ui/common/baseComponent.ts:6](https://github.com/ascentcore/dataspot/blob/3098228/lib/ui/common/baseComponent.ts#L6)

___

{:.method-highlight}
▸ **getValue**(): string \| undefined

**Returns:** string \| undefined

*Inherited from [ui.forms.FormField](../ui_forms_formfield).[getValue](../ui_forms_formfield#getvalue)*

{:.url-source-ref}
[lib/ui/forms/formField.ts:19](https://github.com/ascentcore/dataspot/blob/3098228/lib/ui/forms/formField.ts#L19)

___

{:.method-highlight}
▸ **setValue**(`value`: any \| null): void

#### Parameters:

Name | Type |
------ | ------ |
`value` | any \| null |

**Returns:** void

*Inherited from [ui.forms.FormField](../ui_forms_formfield).[setValue](../ui_forms_formfield#setvalue)*

{:.url-source-ref}
[lib/ui/forms/formField.ts:13](https://github.com/ascentcore/dataspot/blob/3098228/lib/ui/forms/formField.ts#L13)
