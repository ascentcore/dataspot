---
layout: default
title: DefinitionUI
parent: ui
grand_parent: Dataspot
has_children: false
---

# DefinitionUI

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [container](#container) |
| [currentConfig](#currentconfig) |
| [inputFields](#inputfields) |
| [root](#root) |

| Methods |
|-----------|
| [destroy](#destroy) |
| [getCurrentConfiguration](#getcurrentconfiguration) |
| [getElement](#getelement) |

## Constructors

{:.method-highlight}
\+ **new DefinitionUI**(`root`: HTMLElement, `config`: any, `definitions`: FieldsDefinition): [ui.DefinitionUI](../ui_definitionui)

#### Parameters:

Name | Type |
------ | ------ |
`root` | HTMLElement |
`config` | any |
`definitions` | FieldsDefinition |

**Returns:** [ui.DefinitionUI](../ui_definitionui)

*Overrides [ui.common.BaseComponent](../ui_common_basecomponent).[constructor](../ui_common_basecomponent#constructor)*

{:.url-source-ref}
[lib/ui/definitionUI.ts:12](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/ui/definitionUI.ts#L12)

## Properties

• `Readonly` **container**: HTMLElement

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[container](../ui_common_basecomponent#container)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:4](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/ui/common/baseComponent.ts#L4)

___

• `Private` **currentConfig**: any

{:.url-source-ref}
[lib/ui/definitionUI.ts:10](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/ui/definitionUI.ts#L10)

___

• `Private` **inputFields**: [ui.forms.FormField](../ui_forms_formfield)[] = []

{:.url-source-ref}
[lib/ui/definitionUI.ts:12](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/ui/definitionUI.ts#L12)

___

•  **root**: HTMLElement \| undefined

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[root](../ui_common_basecomponent#root)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:2](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/ui/common/baseComponent.ts#L2)

## Methods

{:.method-highlight}
▸ **destroy**(): void

**Returns:** void

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[destroy](../ui_common_basecomponent#destroy)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:31](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/ui/common/baseComponent.ts#L31)

___

{:.method-highlight}
▸ **getCurrentConfiguration**(): [common.SerializableConfig](../common_serializableconfig)

**Returns:** [common.SerializableConfig](../common_serializableconfig)

{:.url-source-ref}
[lib/ui/definitionUI.ts:45](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/ui/definitionUI.ts#L45)

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
[lib/ui/common/baseComponent.ts:6](https://github.com/ascentcore/dataspot/blob/91cc0ab/lib/ui/common/baseComponent.ts#L6)
