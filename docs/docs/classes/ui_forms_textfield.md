---
layout: default
title: TextField
parent: forms
grand_parent: ui
has_children: false
---

# TextField

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
\+ **new TextField**(`container`: HTMLElement, `key`: string, `label`: string, `options`: string[], `attributes?`: Record\<string, string>): [ui.forms.TextField](../ui_forms_textfield)

#### Parameters:

Name | Type |
------ | ------ |
`container` | HTMLElement |
`key` | string |
`label` | string |
`options` | string[] |
`attributes?` | Record\<string, string> |

**Returns:** [ui.forms.TextField](../ui_forms_textfield)

*Overrides [ui.forms.FormField](../ui_forms_formfield).[constructor](../ui_forms_formfield#constructor)*

{:.url-source-ref}
[lib/ui/forms/selectionField.ts:3](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/ui/forms/selectionField.ts#L3)

## Properties

• `Readonly` **container**: HTMLElement

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[container](../ui_common_basecomponent#container)*

*Overrides [ui.common.BaseComponent](../ui_common_basecomponent).[container](../ui_common_basecomponent#container)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:4](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/ui/common/baseComponent.ts#L4)

___

• `Protected` **inputField**: HTMLElement \| undefined

*Inherited from [ui.forms.FormField](../ui_forms_formfield).[inputField](../ui_forms_formfield#inputfield)*

*Overrides [ui.forms.FormField](../ui_forms_formfield).[inputField](../ui_forms_formfield#inputfield)*

{:.url-source-ref}
[lib/ui/forms/formField.ts:4](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/ui/forms/formField.ts#L4)

___

•  **key**: string

*Inherited from [ui.forms.FormField](../ui_forms_formfield).[key](../ui_forms_formfield#key)*

*Overrides [ui.forms.FormField](../ui_forms_formfield).[key](../ui_forms_formfield#key)*

{:.url-source-ref}
[lib/ui/forms/formField.ts:8](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/ui/forms/formField.ts#L8)

___

•  **root**: HTMLElement \| undefined

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[root](../ui_common_basecomponent#root)*

*Overrides [ui.common.BaseComponent](../ui_common_basecomponent).[root](../ui_common_basecomponent#root)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:2](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/ui/common/baseComponent.ts#L2)

## Methods

{:.method-highlight}
▸ **destroy**(): void

**Returns:** void

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[destroy](../ui_common_basecomponent#destroy)*

*Overrides [ui.common.BaseComponent](../ui_common_basecomponent).[destroy](../ui_common_basecomponent#destroy)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:31](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/ui/common/baseComponent.ts#L31)

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

*Overrides [ui.common.BaseComponent](../ui_common_basecomponent).[getElement](../ui_common_basecomponent#getelement)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:6](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/ui/common/baseComponent.ts#L6)

___

{:.method-highlight}
▸ **getValue**(): string \| undefined

**Returns:** string \| undefined

*Inherited from [ui.forms.FormField](../ui_forms_formfield).[getValue](../ui_forms_formfield#getvalue)*

*Overrides [ui.forms.FormField](../ui_forms_formfield).[getValue](../ui_forms_formfield#getvalue)*

{:.url-source-ref}
[lib/ui/forms/formField.ts:21](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/ui/forms/formField.ts#L21)

___

{:.method-highlight}
▸ `Protected`**parser**(`val`: any): any

#### Parameters:

Name | Type |
------ | ------ |
`val` | any |

**Returns:** any

*Inherited from [ui.forms.FormField](../ui_forms_formfield).[parser](../ui_forms_formfield#parser)*

*Overrides [ui.forms.FormField](../ui_forms_formfield).[parser](../ui_forms_formfield#parser)*

{:.url-source-ref}
[lib/ui/forms/formField.ts:6](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/ui/forms/formField.ts#L6)

___

{:.method-highlight}
▸ **setValue**(`value`: any \| null): void

#### Parameters:

Name | Type |
------ | ------ |
`value` | any \| null |

**Returns:** void

*Inherited from [ui.forms.FormField](../ui_forms_formfield).[setValue](../ui_forms_formfield#setvalue)*

*Overrides [ui.forms.FormField](../ui_forms_formfield).[setValue](../ui_forms_formfield#setvalue)*

{:.url-source-ref}
[lib/ui/forms/formField.ts:15](https://github.com/ascentcore/dataspot/blob/e77cac2/lib/ui/forms/formField.ts#L15)
