---
layout: default
title: TabBar
parent: components
grand_parent: ui
has_children: false
---

# TabBar

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [activeTabIndex](#activetabindex) |
| [container](#container) |
| [containers](#containers) |
| [root](#root) |
| [tabs](#tabs) |
| [titles](#titles) |

| Methods |
|-----------|
| [destroy](#destroy) |
| [getElement](#getelement) |
| [setActive](#setactive) |
| [setTitle](#settitle) |

## Constructors

{:.method-highlight}
\+ **new TabBar**(`container`: HTMLElement, `tabs`: string[], `rootClasses?`: string[]): [ui.components.TabBar](../ui_components_tabbar)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`container` | HTMLElement | - |
`tabs` | string[] | - |
`rootClasses` | string[] | [] |

**Returns:** [ui.components.TabBar](../ui_components_tabbar)

*Overrides [ui.common.BaseComponent](../ui_common_basecomponent).[constructor](../ui_common_basecomponent#constructor)*

{:.url-source-ref}
[lib/ui/components/tabBar.ts:10](https://github.com/ascentcore/dataspot/blob/85054f3/lib/ui/components/tabBar.ts#L10)

## Properties

• `Private` **activeTabIndex**: number \| undefined

{:.url-source-ref}
[lib/ui/components/tabBar.ts:10](https://github.com/ascentcore/dataspot/blob/85054f3/lib/ui/components/tabBar.ts#L10)

___

• `Readonly` **container**: HTMLElement

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[container](../ui_common_basecomponent#container)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:4](https://github.com/ascentcore/dataspot/blob/85054f3/lib/ui/common/baseComponent.ts#L4)

___

•  **containers**: HTMLElement[] = []

{:.url-source-ref}
[lib/ui/components/tabBar.ts:8](https://github.com/ascentcore/dataspot/blob/85054f3/lib/ui/components/tabBar.ts#L8)

___

•  **root**: HTMLElement \| undefined

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[root](../ui_common_basecomponent#root)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:2](https://github.com/ascentcore/dataspot/blob/85054f3/lib/ui/common/baseComponent.ts#L2)

___

•  **tabs**: HTMLElement[] = []

{:.url-source-ref}
[lib/ui/components/tabBar.ts:4](https://github.com/ascentcore/dataspot/blob/85054f3/lib/ui/components/tabBar.ts#L4)

___

•  **titles**: HTMLElement[] = []

{:.url-source-ref}
[lib/ui/components/tabBar.ts:6](https://github.com/ascentcore/dataspot/blob/85054f3/lib/ui/components/tabBar.ts#L6)

## Methods

{:.method-highlight}
▸ **destroy**(): void

**Returns:** void

*Inherited from [ui.common.BaseComponent](../ui_common_basecomponent).[destroy](../ui_common_basecomponent#destroy)*

{:.url-source-ref}
[lib/ui/common/baseComponent.ts:31](https://github.com/ascentcore/dataspot/blob/85054f3/lib/ui/common/baseComponent.ts#L31)

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
[lib/ui/common/baseComponent.ts:6](https://github.com/ascentcore/dataspot/blob/85054f3/lib/ui/common/baseComponent.ts#L6)

___

{:.method-highlight}
▸ **setActive**(`index`: number): void

#### Parameters:

Name | Type |
------ | ------ |
`index` | number |

**Returns:** void

{:.url-source-ref}
[lib/ui/components/tabBar.ts:37](https://github.com/ascentcore/dataspot/blob/85054f3/lib/ui/components/tabBar.ts#L37)

___

{:.method-highlight}
▸ **setTitle**(`index`: number, `title`: string): void

#### Parameters:

Name | Type |
------ | ------ |
`index` | number |
`title` | string |

**Returns:** void

{:.url-source-ref}
[lib/ui/components/tabBar.ts:33](https://github.com/ascentcore/dataspot/blob/85054f3/lib/ui/components/tabBar.ts#L33)
