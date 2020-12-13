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

{:.source-ref}
lib/ui/definitionUI.ts:12

## Properties

• `Readonly` **container**: HTMLElement

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[container](../ui_common_basecomponent#container)*

{:.source-ref}
lib/ui/common/baseComponent.ts:4

___

• `Private` **currentConfig**: any

{:.source-ref}
lib/ui/definitionUI.ts:10

___

• `Private` **inputFields**: [ui.forms.FormField](../ui_forms_formfield)[] = []

{:.source-ref}
lib/ui/definitionUI.ts:12

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
▸ **getCurrentConfiguration**(): [common.SerializableConfig](../common_serializableconfig)

**Returns:** [common.SerializableConfig](../common_serializableconfig)

{:.source-ref}
lib/ui/definitionUI.ts:45

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
