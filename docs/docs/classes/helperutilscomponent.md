---
layout: default
title: HelperUtilsComponent
parent: Dataspot
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / HelperUtilsComponent

# HelperUtilsComponent

## Hierarchy

* ContextAwareRendererComponent

  ↳ **HelperUtilsComponent**

## Implements

* ComponentHost

## Index

### Constructors

* [constructor](helperutilscomponent.md#constructor)

### Properties

* [componentName](helperutilscomponent.md#componentname)
* [hideBreadcrumbs](helperutilscomponent.md#hidebreadcrumbs)
* [hideProjectName](helperutilscomponent.md#hideprojectname)
* [hideSources](helperutilscomponent.md#hidesources)
* [namedAnchors](helperutilscomponent.md#namedanchors)
* [project](helperutilscomponent.md#project)
* [publicPath](helperutilscomponent.md#publicpath)
* [reflection](helperutilscomponent.md#reflection)
* [urlPrefix](helperutilscomponent.md#urlprefix)

### Accessors

* [application](helperutilscomponent.md#application)
* [owner](helperutilscomponent.md#owner)

### Methods

* [bubble](helperutilscomponent.md#bubble)
* [getOptionDeclarations](helperutilscomponent.md#getoptiondeclarations)
* [getRelativeUrl](helperutilscomponent.md#getrelativeurl)
* [initialize](helperutilscomponent.md#initialize)
* [listenTo](helperutilscomponent.md#listento)
* [listenToOnce](helperutilscomponent.md#listentoonce)
* [off](helperutilscomponent.md#off)
* [on](helperutilscomponent.md#on)
* [onBeginPage](helperutilscomponent.md#onbeginpage)
* [onBeginRenderer](helperutilscomponent.md#onbeginrenderer)
* [once](helperutilscomponent.md#once)
* [stopListening](helperutilscomponent.md#stoplistening)
* [trigger](helperutilscomponent.md#trigger)

## Constructors

### constructor

\+ **new HelperUtilsComponent**(`owner`: Renderer \| *typeof* DUMMY\_APPLICATION\_OWNER): [HelperUtilsComponent](helperutilscomponent.md)

*Inherited from [CommentsComponent](commentscomponent.md).[constructor](commentscomponent.md#constructor)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:29*

#### Parameters:

Name | Type |
------ | ------ |
`owner` | Renderer \| *typeof* DUMMY\_APPLICATION\_OWNER |

**Returns:** [HelperUtilsComponent](helperutilscomponent.md)

## Properties

### componentName

•  **componentName**: string

*Inherited from [CommentsComponent](commentscomponent.md).[componentName](commentscomponent.md#componentname)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:28*

___

### hideBreadcrumbs

•  **hideBreadcrumbs**: boolean

*Defined in [plugins/typedoc-plugin-markdown/src/components/utils.component.ts:20](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/components/utils.component.ts#L20)*

___

### hideProjectName

•  **hideProjectName**: boolean

*Defined in [plugins/typedoc-plugin-markdown/src/components/utils.component.ts:17](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/components/utils.component.ts#L17)*

___

### hideSources

•  **hideSources**: boolean

*Defined in [plugins/typedoc-plugin-markdown/src/components/utils.component.ts:23](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/components/utils.component.ts#L23)*

___

### namedAnchors

•  **namedAnchors**: boolean

*Defined in [plugins/typedoc-plugin-markdown/src/components/utils.component.ts:14](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/components/utils.component.ts#L14)*

___

### project

• `Protected` `Optional` **project**: ProjectReflection

*Inherited from [CommentsComponent](commentscomponent.md).[project](commentscomponent.md#project)*

*Defined in node_modules/typedoc/dist/lib/output/components.d.ts:9*

___

### publicPath

•  **publicPath**: string

*Defined in [plugins/typedoc-plugin-markdown/src/components/utils.component.ts:11](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/components/utils.component.ts#L11)*

___

### reflection

• `Protected` `Optional` **reflection**: DeclarationReflection

*Inherited from [CommentsComponent](commentscomponent.md).[reflection](commentscomponent.md#reflection)*

*Defined in node_modules/typedoc/dist/lib/output/components.d.ts:10*

___

### urlPrefix

• `Protected` **urlPrefix**: RegExp

*Inherited from [CommentsComponent](commentscomponent.md).[urlPrefix](commentscomponent.md#urlprefix)*

*Defined in node_modules/typedoc/dist/lib/output/components.d.ts:12*

## Accessors

### application

• get **application**(): Application

*Inherited from [CommentsComponent](commentscomponent.md).[application](commentscomponent.md#application)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:34*

**Returns:** Application

___

### owner

• get **owner**(): Renderer

*Inherited from [CommentsComponent](commentscomponent.md).[owner](commentscomponent.md#owner)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:35*

**Returns:** Renderer

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

### getRelativeUrl

▸ **getRelativeUrl**(`absolute`: string): string

*Inherited from [CommentsComponent](commentscomponent.md).[getRelativeUrl](commentscomponent.md#getrelativeurl)*

*Defined in node_modules/typedoc/dist/lib/output/components.d.ts:14*

#### Parameters:

Name | Type |
------ | ------ |
`absolute` | string |

**Returns:** string

___

### initialize

▸ **initialize**(): void

*Overrides void*

*Defined in [plugins/typedoc-plugin-markdown/src/components/utils.component.ts:25](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/components/utils.component.ts#L25)*

**Returns:** void

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

### onBeginPage

▸ `Protected`**onBeginPage**(`page`: PageEvent): void

*Inherited from [CommentsComponent](commentscomponent.md).[onBeginPage](commentscomponent.md#onbeginpage)*

*Defined in node_modules/typedoc/dist/lib/output/components.d.ts:16*

#### Parameters:

Name | Type |
------ | ------ |
`page` | PageEvent |

**Returns:** void

___

### onBeginRenderer

▸ `Protected`**onBeginRenderer**(`event`: RendererEvent): void

*Inherited from [CommentsComponent](commentscomponent.md).[onBeginRenderer](commentscomponent.md#onbeginrenderer)*

*Defined in node_modules/typedoc/dist/lib/output/components.d.ts:15*

#### Parameters:

Name | Type |
------ | ------ |
`event` | RendererEvent |

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
