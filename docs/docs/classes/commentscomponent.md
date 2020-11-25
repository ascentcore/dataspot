---
layout: default
title: CommentsComponent
parent: Dataspot
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [CommentsComponent](commentscomponent)

# CommentsComponent

This component is essentially a combination of TypeDoc's 'MarkedPlugin' and 'MarkedLinksPlugin'.
The options are unchanged , but strips out all of the html configs.

## Hierarchy

* ContextAwareRendererComponent

  ↳ **CommentsComponent**

## Implements

* ComponentHost

## Index

### Constructors

* [constructor](commentscomponent#constructor)

### Properties

* [brackets](commentscomponent#brackets)
* [componentName](commentscomponent#componentname)
* [includePattern](commentscomponent#includepattern)
* [includes](commentscomponent#includes)
* [inlineTag](commentscomponent#inlinetag)
* [listInvalidSymbolLinks](commentscomponent#listinvalidsymbollinks)
* [mediaDirectory](commentscomponent#mediadirectory)
* [mediaPattern](commentscomponent#mediapattern)
* [project](commentscomponent#project)
* [reflection](commentscomponent#reflection)
* [urlPrefix](commentscomponent#urlprefix)
* [warnings](commentscomponent#warnings)

### Accessors

* [application](commentscomponent#application)
* [owner](commentscomponent#owner)

### Methods

* [bubble](commentscomponent#bubble)
* [buildLink](commentscomponent#buildlink)
* [getOptionDeclarations](commentscomponent#getoptiondeclarations)
* [getRelativeUrl](commentscomponent#getrelativeurl)
* [initialize](commentscomponent#initialize)
* [listenTo](commentscomponent#listento)
* [listenToOnce](commentscomponent#listentoonce)
* [off](commentscomponent#off)
* [on](commentscomponent#on)
* [onBeginPage](commentscomponent#onbeginpage)
* [onBeginRenderer](commentscomponent#onbeginrenderer)
* [onEndRenderer](commentscomponent#onendrenderer)
* [once](commentscomponent#once)
* [parseComments](commentscomponent#parsecomments)
* [replaceBrackets](commentscomponent#replacebrackets)
* [replaceInlineTags](commentscomponent#replaceinlinetags)
* [stopListening](commentscomponent#stoplistening)
* [trigger](commentscomponent#trigger)

## Constructors

### constructor

\+ **new CommentsComponent**(`owner`: Renderer \| *typeof* DUMMY\_APPLICATION\_OWNER): [CommentsComponent](commentscomponent)

*Inherited from [CommentsComponent](commentscomponent).[constructor](commentscomponent#constructor)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:29*

#### Parameters:

Name | Type |
------ | ------ |
`owner` | Renderer \| *typeof* DUMMY\_APPLICATION\_OWNER |

**Returns:** [CommentsComponent](commentscomponent)

## Properties

### brackets

• `Private` **brackets**: RegExp = /\[\[([^\]]+)\]\]/g

*Defined in [plugins/typedoc-plugin-markdown/src/components/comments.component.ts:42](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/comments.component.ts#L42)*

Regular expression for detecting bracket links.

___

### componentName

•  **componentName**: string

*Inherited from [CommentsComponent](commentscomponent).[componentName](commentscomponent#componentname)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:28*

___

### includePattern

• `Private` **includePattern**: RegExp = /\[\[include:([^\]]+?)\]\]/g

*Defined in [plugins/typedoc-plugin-markdown/src/components/comments.component.ts:32](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/comments.component.ts#L32)*

The pattern used to find references in markdown.

___

### includes

•  **includes**: string

*Defined in [plugins/typedoc-plugin-markdown/src/components/comments.component.ts:21](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/comments.component.ts#L21)*

___

### inlineTag

• `Private` **inlineTag**: RegExp = /(?:\[(.+?)\])?\{@(link\|linkcode\|linkplain)\s+((?:.\|\n)+?)\}/gi

*Defined in [plugins/typedoc-plugin-markdown/src/components/comments.component.ts:47](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/comments.component.ts#L47)*

Regular expression for detecting inline tags like {@link ...}.

___

### listInvalidSymbolLinks

•  **listInvalidSymbolLinks**: boolean

*Defined in [plugins/typedoc-plugin-markdown/src/components/comments.component.ts:27](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/comments.component.ts#L27)*

___

### mediaDirectory

•  **mediaDirectory**: string

*Defined in [plugins/typedoc-plugin-markdown/src/components/comments.component.ts:24](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/comments.component.ts#L24)*

___

### mediaPattern

• `Private` **mediaPattern**: RegExp = /media:\/\/([^ "\)\]\}]+)/g

*Defined in [plugins/typedoc-plugin-markdown/src/components/comments.component.ts:37](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/comments.component.ts#L37)*

The pattern used to find media links.

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

___

### warnings

• `Private` **warnings**: string[] = []

*Defined in [plugins/typedoc-plugin-markdown/src/components/comments.component.ts:49](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/comments.component.ts#L49)*

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

### buildLink

▸ `Private`**buildLink**(`original`: string, `target`: string, `caption`: string, `monospace?`: boolean): string

*Defined in [plugins/typedoc-plugin-markdown/src/components/comments.component.ts:178](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/comments.component.ts#L178)*

Format a link with the given text and target.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`original` | string | The original link string, will be returned if the target cannot be resolved.. |
`target` | string | The link target. |
`caption` | string | The caption of the link. |
`monospace?` | boolean | Whether to use monospace formatting or not. |

**Returns:** string

A html link tag.

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

*Defined in [plugins/typedoc-plugin-markdown/src/components/comments.component.ts:51](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/comments.component.ts#L51)*

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

### onEndRenderer

▸ **onEndRenderer**(`event`: RendererEvent): void

*Defined in [plugins/typedoc-plugin-markdown/src/components/comments.component.ts:215](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/comments.component.ts#L215)*

Triggered when [[Renderer]] is finished

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

### parseComments

▸ **parseComments**(`text`: string): string

*Defined in [plugins/typedoc-plugin-markdown/src/components/comments.component.ts:77](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/comments.component.ts#L77)*

Parse the given comemnts string and return the resulting html.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`text` | string | The markdown string that should be parsed. |

**Returns:** string

The resulting html string.

___

### replaceBrackets

▸ `Private`**replaceBrackets**(`text`: string): string

*Defined in [plugins/typedoc-plugin-markdown/src/components/comments.component.ts:134](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/comments.component.ts#L134)*

Find all references to symbols within the given text and transform them into a link.

This function is aware of the current context and will try to find the symbol within the
current reflection. It will walk up the reflection chain till the symbol is found or the
root reflection is reached. As a last resort the function will search the entire project
for the given symbol.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`text` | string | The text that should be parsed. |

**Returns:** string

The text with symbol references replaced by links.

___

### replaceInlineTags

▸ `Private`**replaceInlineTags**(`text`: string): string

*Defined in [plugins/typedoc-plugin-markdown/src/components/comments.component.ts:150](https://github.com/ascentcore/dataspot/blob/aa42404/plugins/typedoc-plugin-markdown/src/components/comments.component.ts#L150)*

Find symbol {@link ...} strings in text and turn into html links

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`text` | string | The string in which to replace the inline tags. |

**Returns:** string

The updated string.

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
