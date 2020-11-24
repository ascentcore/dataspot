---
layout: default
title: MarkdownPlugin
parent: Dataspot
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / MarkdownPlugin

# MarkdownPlugin

## Hierarchy

* ConverterComponent

  ↳ **MarkdownPlugin**

## Implements

* ComponentHost

## Index

### Constructors

* [constructor](markdownplugin.md#constructor)

### Properties

* [componentName](markdownplugin.md#componentname)
* [moduleRenames](markdownplugin.md#modulerenames)
* [theme](markdownplugin.md#theme)

### Accessors

* [application](markdownplugin.md#application)
* [owner](markdownplugin.md#owner)

### Methods

* [bubble](markdownplugin.md#bubble)
* [getOptionDeclarations](markdownplugin.md#getoptiondeclarations)
* [initialize](markdownplugin.md#initialize)
* [isMarkdownTheme](markdownplugin.md#ismarkdowntheme)
* [listenTo](markdownplugin.md#listento)
* [listenToOnce](markdownplugin.md#listentoonce)
* [off](markdownplugin.md#off)
* [on](markdownplugin.md#on)
* [onBegin](markdownplugin.md#onbegin)
* [onDeclarationBegin](markdownplugin.md#ondeclarationbegin)
* [onResolveBegin](markdownplugin.md#onresolvebegin)
* [once](markdownplugin.md#once)
* [stopListening](markdownplugin.md#stoplistening)
* [trigger](markdownplugin.md#trigger)
* [upgradeMessages](markdownplugin.md#upgrademessages)

## Constructors

### constructor

\+ **new MarkdownPlugin**(`owner`: Converter \| *typeof* DUMMY\_APPLICATION\_OWNER): [MarkdownPlugin](markdownplugin.md)

*Inherited from [CommentsComponent](commentscomponent.md).[constructor](commentscomponent.md#constructor)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:29*

#### Parameters:

Name | Type |
------ | ------ |
`owner` | Converter \| *typeof* DUMMY\_APPLICATION\_OWNER |

**Returns:** [MarkdownPlugin](markdownplugin.md)

## Properties

### componentName

•  **componentName**: string

*Inherited from [CommentsComponent](commentscomponent.md).[componentName](commentscomponent.md#componentname)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:28*

___

### moduleRenames

•  **moduleRenames**: any[] = []

*Defined in [plugins/typedoc-plugin-markdown/src/plugin.ts:12](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/plugin.ts#L12)*

___

### theme

•  **theme**: string

*Defined in [plugins/typedoc-plugin-markdown/src/plugin.ts:15](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/plugin.ts#L15)*

## Accessors

### application

• get **application**(): Application

*Inherited from [CommentsComponent](commentscomponent.md).[application](commentscomponent.md#application)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:34*

**Returns:** Application

___

### owner

• get **owner**(): Converter

*Inherited from [CommentsComponent](commentscomponent.md).[owner](commentscomponent.md#owner)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:35*

**Returns:** Converter

## Methods

### bubble

▸ `Protected`**bubble**(`name`: Event \| EventMap \| string, ...`args`: any[]): this

*Inherited from [CommentsComponent](commentscomponent.md).[bubble](commentscomponent.md#bubble)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:32*

#### Parameters:

Name | Type |
------ | ------ |
`name` | Event \| EventMap \| string |
`...args` | any[] |

**Returns:** this

___

### getOptionDeclarations

▸ **getOptionDeclarations**(): DeclarationOption[]

*Inherited from [CommentsComponent](commentscomponent.md).[getOptionDeclarations](commentscomponent.md#getoptiondeclarations)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:33*

**Returns:** DeclarationOption[]

___

### initialize

▸ **initialize**(): void

*Overrides [MarkdownTheme](markdowntheme.md).[initialize](markdowntheme.md#initialize)*

*Defined in [plugins/typedoc-plugin-markdown/src/plugin.ts:17](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/plugin.ts#L17)*

**Returns:** void

___

### isMarkdownTheme

▸ **isMarkdownTheme**(`themeFileName`: string): boolean

*Defined in [plugins/typedoc-plugin-markdown/src/plugin.ts:123](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/plugin.ts#L123)*

Checks if the custom theme class is initiated from markdown theme

#### Parameters:

Name | Type |
------ | ------ |
`themeFileName` | string |

**Returns:** boolean

___

### listenTo

▸ **listenTo**(`obj`: EventDispatcher, `name`: EventMap \| string, `callback?`: EventCallback, `priority?`: number): this

*Inherited from [CommentsComponent](commentscomponent.md).[listenTo](commentscomponent.md#listento)*

*Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:33*

#### Parameters:

Name | Type |
------ | ------ |
`obj` | EventDispatcher |
`name` | EventMap \| string |
`callback?` | EventCallback |
`priority?` | number |

**Returns:** this

___

### listenToOnce

▸ **listenToOnce**(`obj`: EventDispatcher, `eventMap`: EventMap): any

*Inherited from [CommentsComponent](commentscomponent.md).[listenToOnce](commentscomponent.md#listentoonce)*

*Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:34*

#### Parameters:

Name | Type |
------ | ------ |
`obj` | EventDispatcher |
`eventMap` | EventMap |

**Returns:** any

▸ **listenToOnce**(`obj`: EventDispatcher, `name`: string, `callback`: EventCallback, `priority?`: number): any

*Inherited from [CommentsComponent](commentscomponent.md).[listenToOnce](commentscomponent.md#listentoonce)*

*Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:35*

#### Parameters:

Name | Type |
------ | ------ |
`obj` | EventDispatcher |
`name` | string |
`callback` | EventCallback |
`priority?` | number |

**Returns:** any

___

### off

▸ **off**(): any

*Inherited from [CommentsComponent](commentscomponent.md).[off](commentscomponent.md#off)*

*Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:30*

**Returns:** any

▸ **off**(`eventMap`: EventMap \| undefined, `context?`: any): any

*Inherited from [CommentsComponent](commentscomponent.md).[off](commentscomponent.md#off)*

*Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:31*

#### Parameters:

Name | Type |
------ | ------ |
`eventMap` | EventMap \| undefined |
`context?` | any |

**Returns:** any

▸ **off**(`name`: string \| undefined, `callback?`: EventCallback, `context?`: any): any

*Inherited from [CommentsComponent](commentscomponent.md).[off](commentscomponent.md#off)*

*Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:32*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string \| undefined |
`callback?` | EventCallback |
`context?` | any |

**Returns:** any

___

### on

▸ **on**(`eventMap`: EventMap, `context?`: any): any

*Inherited from [CommentsComponent](commentscomponent.md).[on](commentscomponent.md#on)*

*Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:24*

#### Parameters:

Name | Type |
------ | ------ |
`eventMap` | EventMap |
`context?` | any |

**Returns:** any

▸ **on**(`eventMap`: EventMap, `callback?`: EventCallback, `context?`: any, `priority?`: number): any

*Inherited from [CommentsComponent](commentscomponent.md).[on](commentscomponent.md#on)*

*Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:25*

#### Parameters:

Name | Type |
------ | ------ |
`eventMap` | EventMap |
`callback?` | EventCallback |
`context?` | any |
`priority?` | number |

**Returns:** any

▸ **on**(`name`: string, `callback`: EventCallback, `context?`: any, `priority?`: number): any

*Inherited from [CommentsComponent](commentscomponent.md).[on](commentscomponent.md#on)*

*Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:26*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |
`callback` | EventCallback |
`context?` | any |
`priority?` | number |

**Returns:** any

___

### onBegin

▸ **onBegin**(): void

*Defined in [plugins/typedoc-plugin-markdown/src/plugin.ts:28](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/plugin.ts#L28)*

Overide default assets

**Returns:** void

___

### onDeclarationBegin

▸ `Private`**onDeclarationBegin**(`context`: Context, `reflection`: Reflection, `node?`: any): void

*Defined in [plugins/typedoc-plugin-markdown/src/plugin.ts:32](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/plugin.ts#L32)*

#### Parameters:

Name | Type |
------ | ------ |
`context` | Context |
`reflection` | Reflection |
`node?` | any |

**Returns:** void

___

### onResolveBegin

▸ **onResolveBegin**(`context`: Context): void

*Defined in [plugins/typedoc-plugin-markdown/src/plugin.ts:51](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/plugin.ts#L51)*

Load markdown theme and perform additional checks

#### Parameters:

Name | Type |
------ | ------ |
`context` | Context |

**Returns:** void

___

### once

▸ **once**(`eventMap`: EventMap, `context?`: any): any

*Inherited from [CommentsComponent](commentscomponent.md).[once](commentscomponent.md#once)*

*Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:28*

#### Parameters:

Name | Type |
------ | ------ |
`eventMap` | EventMap |
`context?` | any |

**Returns:** any

▸ **once**(`name`: string, `callback`: EventCallback, `context?`: any, `priority?`: any): any

*Inherited from [CommentsComponent](commentscomponent.md).[once](commentscomponent.md#once)*

*Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:29*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |
`callback` | EventCallback |
`context?` | any |
`priority?` | any |

**Returns:** any

___

### stopListening

▸ **stopListening**(`obj?`: EventDispatcher, `name?`: EventMap \| string, `callback?`: EventCallback): this

*Inherited from [CommentsComponent](commentscomponent.md).[stopListening](commentscomponent.md#stoplistening)*

*Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:36*

#### Parameters:

Name | Type |
------ | ------ |
`obj?` | EventDispatcher |
`name?` | EventMap \| string |
`callback?` | EventCallback |

**Returns:** this

___

### trigger

▸ **trigger**(`name`: Event \| EventMap \| string, ...`args`: any[]): this

*Inherited from [CommentsComponent](commentscomponent.md).[trigger](commentscomponent.md#trigger)*

*Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:37*

#### Parameters:

Name | Type |
------ | ------ |
`name` | Event \| EventMap \| string |
`...args` | any[] |

**Returns:** this

___

### upgradeMessages

▸ **upgradeMessages**(`theme`: string): void

*Defined in [plugins/typedoc-plugin-markdown/src/plugin.ts:132](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/plugin.ts#L132)*

#### Parameters:

Name | Type |
------ | ------ |
`theme` | string |

**Returns:** void
