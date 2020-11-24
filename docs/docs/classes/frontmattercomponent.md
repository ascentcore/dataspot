---
layout: default
title: FrontMatterComponent
parent: Dataspot
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [FrontMatterComponent](frontmattercomponent)

# FrontMatterComponent

## Hierarchy

* ContextAwareRendererComponent

  ↳ **FrontMatterComponent**

## Implements

* ComponentHost

## Index

### Constructors

* [constructor](frontmattercomponent#constructor)

### Properties

* [componentName](frontmattercomponent#componentname)
* [project](frontmattercomponent#project)
* [reflection](frontmattercomponent#reflection)
* [urlPrefix](frontmattercomponent#urlprefix)

### Accessors

* [application](frontmattercomponent#application)
* [owner](frontmattercomponent#owner)

### Methods

* [bubble](frontmattercomponent#bubble)
* [escapeYAMLString](frontmattercomponent#escapeyamlstring)
* [getDefaultValues](frontmattercomponent#getdefaultvalues)
* [getId](frontmattercomponent#getid)
* [getOptionDeclarations](frontmattercomponent#getoptiondeclarations)
* [getRelativeUrl](frontmattercomponent#getrelativeurl)
* [getTitle](frontmattercomponent#gettitle)
* [getYamlItems](frontmattercomponent#getyamlitems)
* [getYamlString](frontmattercomponent#getyamlstring)
* [initialize](frontmattercomponent#initialize)
* [listenTo](frontmattercomponent#listento)
* [listenToOnce](frontmattercomponent#listentoonce)
* [off](frontmattercomponent#off)
* [on](frontmattercomponent#on)
* [onBeginPage](frontmattercomponent#onbeginpage)
* [onBeginRenderer](frontmattercomponent#onbeginrenderer)
* [onPageEnd](frontmattercomponent#onpageend)
* [once](frontmattercomponent#once)
* [stopListening](frontmattercomponent#stoplistening)
* [trigger](frontmattercomponent#trigger)

## Constructors

### constructor

\+ **new FrontMatterComponent**(`owner`: Renderer \| *typeof* DUMMY\_APPLICATION\_OWNER): [FrontMatterComponent](frontmattercomponent)

*Inherited from [CommentsComponent](commentscomponent).[constructor](commentscomponent#constructor)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:29*

#### Parameters:

Name | Type |
------ | ------ |
`owner` | Renderer \| *typeof* DUMMY\_APPLICATION\_OWNER |

**Returns:** [FrontMatterComponent](frontmattercomponent)

## Properties

### componentName

•  **componentName**: string

*Inherited from [CommentsComponent](commentscomponent).[componentName](commentscomponent#componentname)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:28*

___

### project

• `Protected` `Optional` **project**: ProjectReflection

*Inherited from [CommentsComponent](commentscomponent).[project](commentscomponent#project)*

*Defined in node_modules/typedoc/dist/lib/output/components.d.ts:9*

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

### escapeYAMLString

▸ **escapeYAMLString**(`str`: string): string

*Defined in [plugins/typedoc-plugin-markdown/src/components/front-matter.component.ts:62](https://github.com/ascentcore/dataspot/blob/7114653/plugins/typedoc-plugin-markdown/src/components/front-matter.component.ts#L62)*

#### Parameters:

Name | Type |
------ | ------ |
`str` | string |

**Returns:** string

___

### getDefaultValues

▸ **getDefaultValues**(`page`: PageEvent): object

*Defined in [plugins/typedoc-plugin-markdown/src/components/front-matter.component.ts:46](https://github.com/ascentcore/dataspot/blob/7114653/plugins/typedoc-plugin-markdown/src/components/front-matter.component.ts#L46)*

#### Parameters:

Name | Type |
------ | ------ |
`page` | PageEvent |

**Returns:** object

Name | Type |
------ | ------ |
`id` | string |
`title` | any |

___

### getId

▸ **getId**(`page`: PageEvent): string

*Defined in [plugins/typedoc-plugin-markdown/src/components/front-matter.component.ts:53](https://github.com/ascentcore/dataspot/blob/7114653/plugins/typedoc-plugin-markdown/src/components/front-matter.component.ts#L53)*

#### Parameters:

Name | Type |
------ | ------ |
`page` | PageEvent |

**Returns:** string

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

### getTitle

▸ **getTitle**(`page`: PageEvent): any

*Defined in [plugins/typedoc-plugin-markdown/src/components/front-matter.component.ts:57](https://github.com/ascentcore/dataspot/blob/7114653/plugins/typedoc-plugin-markdown/src/components/front-matter.component.ts#L57)*

#### Parameters:

Name | Type |
------ | ------ |
`page` | PageEvent |

**Returns:** any

___

### getYamlItems

▸ **getYamlItems**(`page`: PageEvent): object

*Defined in [plugins/typedoc-plugin-markdown/src/components/front-matter.component.ts:42](https://github.com/ascentcore/dataspot/blob/7114653/plugins/typedoc-plugin-markdown/src/components/front-matter.component.ts#L42)*

#### Parameters:

Name | Type |
------ | ------ |
`page` | PageEvent |

**Returns:** object

Name | Type |
------ | ------ |
`id` | string |
`title` | any |

___

### getYamlString

▸ **getYamlString**(`yamlItems`: { [key:string]: string \| number \| boolean;  }): string

*Defined in [plugins/typedoc-plugin-markdown/src/components/front-matter.component.ts:28](https://github.com/ascentcore/dataspot/blob/7114653/plugins/typedoc-plugin-markdown/src/components/front-matter.component.ts#L28)*

#### Parameters:

Name | Type |
------ | ------ |
`yamlItems` | { [key:string]: string \| number \| boolean;  } |

**Returns:** string

___

### initialize

▸ **initialize**(): void

*Overrides void*

*Defined in [plugins/typedoc-plugin-markdown/src/components/front-matter.component.ts:13](https://github.com/ascentcore/dataspot/blob/7114653/plugins/typedoc-plugin-markdown/src/components/front-matter.component.ts#L13)*

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

### onPageEnd

▸ **onPageEnd**(`page`: PageEvent): void

*Defined in [plugins/typedoc-plugin-markdown/src/components/front-matter.component.ts:20](https://github.com/ascentcore/dataspot/blob/7114653/plugins/typedoc-plugin-markdown/src/components/front-matter.component.ts#L20)*

#### Parameters:

Name | Type |
------ | ------ |
`page` | PageEvent |

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
