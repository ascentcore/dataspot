---
layout: default
title: HelperUtilsComponent
parent: Dataspot
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [HelperUtilsComponent](helperutilscomponent)

# HelperUtilsComponent

## Hierarchy

* ContextAwareRendererComponent

  ↳ **HelperUtilsComponent**

## Implements

* ComponentHost

## Index

### Constructors

* [constructor](helperutilscomponent#constructor)

### Properties

* [componentName](helperutilscomponent#componentname)
* [hideBreadcrumbs](helperutilscomponent#hidebreadcrumbs)
* [hideProjectName](helperutilscomponent#hideprojectname)
* [hideSources](helperutilscomponent#hidesources)
* [namedAnchors](helperutilscomponent#namedanchors)
* [project](helperutilscomponent#project)
* [publicPath](helperutilscomponent#publicpath)
* [reflection](helperutilscomponent#reflection)
* [urlPrefix](helperutilscomponent#urlprefix)

### Accessors

* [application](helperutilscomponent#application)
* [owner](helperutilscomponent#owner)

### Methods

* [bubble](helperutilscomponent#bubble)
* [getOptionDeclarations](helperutilscomponent#getoptiondeclarations)
* [getRelativeUrl](helperutilscomponent#getrelativeurl)
* [initialize](helperutilscomponent#initialize)
* [listenTo](helperutilscomponent#listento)
* [listenToOnce](helperutilscomponent#listentoonce)
* [off](helperutilscomponent#off)
* [on](helperutilscomponent#on)
* [onBeginPage](helperutilscomponent#onbeginpage)
* [onBeginRenderer](helperutilscomponent#onbeginrenderer)
* [once](helperutilscomponent#once)
* [stopListening](helperutilscomponent#stoplistening)
* [trigger](helperutilscomponent#trigger)

## Constructors

### constructor

\+ **new HelperUtilsComponent**(`owner`: Renderer \| *typeof* DUMMY\_APPLICATION\_OWNER): [HelperUtilsComponent](helperutilscomponent)

*Inherited from [CommentsComponent](commentscomponent).[constructor](commentscomponent#constructor)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:29*

#### Parameters:

Name | Type |
------ | ------ |
`owner` | Renderer \| *typeof* DUMMY\_APPLICATION\_OWNER |

**Returns:** [HelperUtilsComponent](helperutilscomponent)

## Properties

### componentName

•  **componentName**: string

*Inherited from [CommentsComponent](commentscomponent).[componentName](commentscomponent#componentname)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:28*

___

### hideBreadcrumbs

•  **hideBreadcrumbs**: boolean

*Defined in [plugins/typedoc-plugin-markdown/src/components/utils.component.ts:20](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/utils.component.ts#L20)*

___

### hideProjectName

•  **hideProjectName**: boolean

*Defined in [plugins/typedoc-plugin-markdown/src/components/utils.component.ts:17](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/utils.component.ts#L17)*

___

### hideSources

•  **hideSources**: boolean

*Defined in [plugins/typedoc-plugin-markdown/src/components/utils.component.ts:23](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/utils.component.ts#L23)*

___

### namedAnchors

•  **namedAnchors**: boolean

*Defined in [plugins/typedoc-plugin-markdown/src/components/utils.component.ts:14](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/utils.component.ts#L14)*

___

### project

• `Protected` `Optional` **project**: ProjectReflection

*Inherited from [CommentsComponent](commentscomponent).[project](commentscomponent#project)*

*Defined in node_modules/typedoc/dist/lib/output/components.d.ts:9*

___

### publicPath

•  **publicPath**: string

*Defined in [plugins/typedoc-plugin-markdown/src/components/utils.component.ts:11](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/utils.component.ts#L11)*

___

### reflection

• `Protected` `Optional` **reflection**: DeclarationReflection

*Inherited from [CommentsComponent](commentscomponent).[reflection](commentscomponent#reflection)*

*Defined in node_modules/typedoc/dist/lib/output/components.d.ts:10*

___

### urlPrefix

• `Protected` **urlPrefix**: RegExp

*Inherited from [CommentsComponent](commentscomponent).[urlPrefix](commentscomponent#urlprefix)*

*Defined in node_modules/typedoc/dist/lib/output/components.d.ts:12*

## Accessors

### application

• get **application**(): Application

*Inherited from [CommentsComponent](commentscomponent).[application](commentscomponent#application)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:34*

**Returns:** Application

___

### owner

• get **owner**(): Renderer

*Inherited from [CommentsComponent](commentscomponent).[owner](commentscomponent#owner)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:35*

**Returns:** Renderer

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

### getRelativeUrl

▸ **getRelativeUrl**(`absolute`: string): string

*Inherited from [CommentsComponent](commentscomponent).[getRelativeUrl](commentscomponent#getrelativeurl)*

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

*Defined in [plugins/typedoc-plugin-markdown/src/components/utils.component.ts:25](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/utils.component.ts#L25)*

**Returns:** void

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

### onBeginPage

▸ `Protected`**onBeginPage**(`page`: PageEvent): void

*Inherited from [CommentsComponent](commentscomponent).[onBeginPage](commentscomponent#onbeginpage)*

*Defined in node_modules/typedoc/dist/lib/output/components.d.ts:16*

#### Parameters:

Name | Type |
------ | ------ |
`page` | PageEvent |

**Returns:** void

___

### onBeginRenderer

▸ `Protected`**onBeginRenderer**(`event`: RendererEvent): void

*Inherited from [CommentsComponent](commentscomponent).[onBeginRenderer](commentscomponent#onbeginrenderer)*

*Defined in node_modules/typedoc/dist/lib/output/components.d.ts:15*

#### Parameters:

Name | Type |
------ | ------ |
`event` | RendererEvent |

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
