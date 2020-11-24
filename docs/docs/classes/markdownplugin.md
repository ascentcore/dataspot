---
layout: default
title: MarkdownPlugin
parent: Dataspot
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [MarkdownPlugin](markdownplugin)

# MarkdownPlugin

## Hierarchy

* ConverterComponent

  ↳ **MarkdownPlugin**

## Implements

* ComponentHost

## Index

### Constructors

* [constructor](markdownplugin#constructor)

### Properties

* [componentName](markdownplugin#componentname)
* [moduleRenames](markdownplugin#modulerenames)
* [theme](markdownplugin#theme)

### Accessors

* [application](markdownplugin#application)
* [owner](markdownplugin#owner)

### Methods

* [bubble](markdownplugin#bubble)
* [getOptionDeclarations](markdownplugin#getoptiondeclarations)
* [initialize](markdownplugin#initialize)
* [isMarkdownTheme](markdownplugin#ismarkdowntheme)
* [listenTo](markdownplugin#listento)
* [listenToOnce](markdownplugin#listentoonce)
* [off](markdownplugin#off)
* [on](markdownplugin#on)
* [onBegin](markdownplugin#onbegin)
* [onDeclarationBegin](markdownplugin#ondeclarationbegin)
* [onResolveBegin](markdownplugin#onresolvebegin)
* [once](markdownplugin#once)
* [stopListening](markdownplugin#stoplistening)
* [trigger](markdownplugin#trigger)
* [upgradeMessages](markdownplugin#upgrademessages)

## Constructors

### constructor

\+ **new MarkdownPlugin**(`owner`: Converter \| *typeof* DUMMY\_APPLICATION\_OWNER): [MarkdownPlugin](markdownplugin)

*Inherited from [CommentsComponent](commentscomponent).[constructor](commentscomponent#constructor)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:29*

#### Parameters:

Name | Type |
------ | ------ |
`owner` | Converter \| *typeof* DUMMY\_APPLICATION\_OWNER |

**Returns:** [MarkdownPlugin](markdownplugin)

## Properties

### componentName

•  **componentName**: string

*Inherited from [CommentsComponent](commentscomponent).[componentName](commentscomponent#componentname)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:28*

___

### moduleRenames

•  **moduleRenames**: any[] = []

*Defined in [plugins/typedoc-plugin-markdown/src/plugin.ts:12](https://github.com/ascentcore/dataspot/blob/7114653/plugins/typedoc-plugin-markdown/src/plugin.ts#L12)*

___

### theme

•  **theme**: string

*Defined in [plugins/typedoc-plugin-markdown/src/plugin.ts:15](https://github.com/ascentcore/dataspot/blob/7114653/plugins/typedoc-plugin-markdown/src/plugin.ts#L15)*

## Accessors

### application

• get **application**(): Application

*Inherited from [CommentsComponent](commentscomponent).[application](commentscomponent#application)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:34*

**Returns:** Application

___

### owner

• get **owner**(): Converter

*Inherited from [CommentsComponent](commentscomponent).[owner](commentscomponent#owner)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:35*

**Returns:** Converter

## Methods

### bubble

▸ `Protected`**bubble**(`name`: Event \| EventMap \| string, ...`args`: any[]): this

*Inherited from [CommentsComponent](commentscomponent).[bubble](commentscomponent#bubble)*

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

*Inherited from [CommentsComponent](commentscomponent).[getOptionDeclarations](commentscomponent#getoptiondeclarations)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:33*

**Returns:** DeclarationOption[]

___

### initialize

▸ **initialize**(): void

*Overrides [MarkdownTheme](markdowntheme).[initialize](markdowntheme#initialize)*

*Defined in [plugins/typedoc-plugin-markdown/src/plugin.ts:17](https://github.com/ascentcore/dataspot/blob/7114653/plugins/typedoc-plugin-markdown/src/plugin.ts#L17)*

**Returns:** void

___

### isMarkdownTheme

▸ **isMarkdownTheme**(`themeFileName`: string): boolean

*Defined in [plugins/typedoc-plugin-markdown/src/plugin.ts:123](https://github.com/ascentcore/dataspot/blob/7114653/plugins/typedoc-plugin-markdown/src/plugin.ts#L123)*

Checks if the custom theme class is initiated from markdown theme

#### Parameters:

Name | Type |
------ | ------ |
`themeFileName` | string |

**Returns:** boolean

___

### listenTo

▸ **listenTo**(`obj`: EventDispatcher, `name`: EventMap \| string, `callback?`: EventCallback, `priority?`: number): this

*Inherited from [CommentsComponent](commentscomponent).[listenTo](commentscomponent#listento)*

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

*Inherited from [CommentsComponent](commentscomponent).[listenToOnce](commentscomponent#listentoonce)*

*Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:34*

#### Parameters:

Name | Type |
------ | ------ |
`obj` | EventDispatcher |
`eventMap` | EventMap |

**Returns:** any

▸ **listenToOnce**(`obj`: EventDispatcher, `name`: string, `callback`: EventCallback, `priority?`: number): any

*Inherited from [CommentsComponent](commentscomponent).[listenToOnce](commentscomponent#listentoonce)*

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

*Inherited from [CommentsComponent](commentscomponent).[off](commentscomponent#off)*

*Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:30*

**Returns:** any

▸ **off**(`eventMap`: EventMap \| undefined, `context?`: any): any

*Inherited from [CommentsComponent](commentscomponent).[off](commentscomponent#off)*

*Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:31*

#### Parameters:

Name | Type |
------ | ------ |
`eventMap` | EventMap \| undefined |
`context?` | any |

**Returns:** any

▸ **off**(`name`: string \| undefined, `callback?`: EventCallback, `context?`: any): any

*Inherited from [CommentsComponent](commentscomponent).[off](commentscomponent#off)*

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

*Inherited from [CommentsComponent](commentscomponent).[on](commentscomponent#on)*

*Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:24*

#### Parameters:

Name | Type |
------ | ------ |
`eventMap` | EventMap |
`context?` | any |

**Returns:** any

▸ **on**(`eventMap`: EventMap, `callback?`: EventCallback, `context?`: any, `priority?`: number): any

*Inherited from [CommentsComponent](commentscomponent).[on](commentscomponent#on)*

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

*Inherited from [CommentsComponent](commentscomponent).[on](commentscomponent#on)*

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

*Defined in [plugins/typedoc-plugin-markdown/src/plugin.ts:28](https://github.com/ascentcore/dataspot/blob/7114653/plugins/typedoc-plugin-markdown/src/plugin.ts#L28)*

Overide default assets

**Returns:** void

___

### onDeclarationBegin

▸ `Private`**onDeclarationBegin**(`context`: Context, `reflection`: Reflection, `node?`: any): void

*Defined in [plugins/typedoc-plugin-markdown/src/plugin.ts:32](https://github.com/ascentcore/dataspot/blob/7114653/plugins/typedoc-plugin-markdown/src/plugin.ts#L32)*

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

*Defined in [plugins/typedoc-plugin-markdown/src/plugin.ts:51](https://github.com/ascentcore/dataspot/blob/7114653/plugins/typedoc-plugin-markdown/src/plugin.ts#L51)*

Load markdown theme and perform additional checks

#### Parameters:

Name | Type |
------ | ------ |
`context` | Context |

**Returns:** void

___

### once

▸ **once**(`eventMap`: EventMap, `context?`: any): any

*Inherited from [CommentsComponent](commentscomponent).[once](commentscomponent#once)*

*Defined in node_modules/typedoc/dist/lib/utils/events.d.ts:28*

#### Parameters:

Name | Type |
------ | ------ |
`eventMap` | EventMap |
`context?` | any |

**Returns:** any

▸ **once**(`name`: string, `callback`: EventCallback, `context?`: any, `priority?`: any): any

*Inherited from [CommentsComponent](commentscomponent).[once](commentscomponent#once)*

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

*Inherited from [CommentsComponent](commentscomponent).[stopListening](commentscomponent#stoplistening)*

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

*Inherited from [CommentsComponent](commentscomponent).[trigger](commentscomponent#trigger)*

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

*Defined in [plugins/typedoc-plugin-markdown/src/plugin.ts:132](https://github.com/ascentcore/dataspot/blob/7114653/plugins/typedoc-plugin-markdown/src/plugin.ts#L132)*

#### Parameters:

Name | Type |
------ | ------ |
`theme` | string |

**Returns:** void
