---
layout: default
title: CommentsComponent
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / CommentsComponent

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

* [constructor](commentscomponent.md#constructor)

### Properties

* [brackets](commentscomponent.md#brackets)
* [componentName](commentscomponent.md#componentname)
* [includePattern](commentscomponent.md#includepattern)
* [includes](commentscomponent.md#includes)
* [inlineTag](commentscomponent.md#inlinetag)
* [listInvalidSymbolLinks](commentscomponent.md#listinvalidsymbollinks)
* [mediaDirectory](commentscomponent.md#mediadirectory)
* [mediaPattern](commentscomponent.md#mediapattern)
* [project](commentscomponent.md#project)
* [reflection](commentscomponent.md#reflection)
* [urlPrefix](commentscomponent.md#urlprefix)
* [warnings](commentscomponent.md#warnings)

### Accessors

* [application](commentscomponent.md#application)
* [owner](commentscomponent.md#owner)

### Methods

* [bubble](commentscomponent.md#bubble)
* [buildLink](commentscomponent.md#buildlink)
* [getOptionDeclarations](commentscomponent.md#getoptiondeclarations)
* [getRelativeUrl](commentscomponent.md#getrelativeurl)
* [initialize](commentscomponent.md#initialize)
* [listenTo](commentscomponent.md#listento)
* [listenToOnce](commentscomponent.md#listentoonce)
* [off](commentscomponent.md#off)
* [on](commentscomponent.md#on)
* [onBeginPage](commentscomponent.md#onbeginpage)
* [onBeginRenderer](commentscomponent.md#onbeginrenderer)
* [onEndRenderer](commentscomponent.md#onendrenderer)
* [once](commentscomponent.md#once)
* [parseComments](commentscomponent.md#parsecomments)
* [replaceBrackets](commentscomponent.md#replacebrackets)
* [replaceInlineTags](commentscomponent.md#replaceinlinetags)
* [stopListening](commentscomponent.md#stoplistening)
* [trigger](commentscomponent.md#trigger)

## Constructors

### constructor

\+ **new CommentsComponent**(`owner`: Renderer \| *typeof* DUMMY\_APPLICATION\_OWNER): [CommentsComponent](commentscomponent.md)

*Inherited from [CommentsComponent](commentscomponent.md).[constructor](commentscomponent.md#constructor)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:29*

#### Parameters:

Name | Type |
------ | ------ |
`owner` | Renderer \| *typeof* DUMMY\_APPLICATION\_OWNER |

**Returns:** [CommentsComponent](commentscomponent.md)

## Properties

### brackets

• `Private` **brackets**: RegExp = /\[\[([^\]]+)\]\]/g

*Defined in plugins/typedoc-plugin-markdown/src/components/comments.component.ts:42*

Regular expression for detecting bracket links.

___

### componentName

•  **componentName**: string

*Inherited from [CommentsComponent](commentscomponent.md).[componentName](commentscomponent.md#componentname)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:28*

___

### includePattern

• `Private` **includePattern**: RegExp = /\[\[include:([^\]]+?)\]\]/g

*Defined in plugins/typedoc-plugin-markdown/src/components/comments.component.ts:32*

The pattern used to find references in markdown.

___

### includes

•  **includes**: string

*Defined in plugins/typedoc-plugin-markdown/src/components/comments.component.ts:21*

___

### inlineTag

• `Private` **inlineTag**: RegExp = /(?:\[(.+?)\])?\{@(link\|linkcode\|linkplain)\s+((?:.\|\n)+?)\}/gi

*Defined in plugins/typedoc-plugin-markdown/src/components/comments.component.ts:47*

Regular expression for detecting inline tags like {@link ...}.

___

### listInvalidSymbolLinks

•  **listInvalidSymbolLinks**: boolean

*Defined in plugins/typedoc-plugin-markdown/src/components/comments.component.ts:27*

___

### mediaDirectory

•  **mediaDirectory**: string

*Defined in plugins/typedoc-plugin-markdown/src/components/comments.component.ts:24*

___

### mediaPattern

• `Private` **mediaPattern**: RegExp = /media:\/\/([^ "\)\]\}]+)/g

*Defined in plugins/typedoc-plugin-markdown/src/components/comments.component.ts:37*

The pattern used to find media links.

___

### project

• `Protected` `Optional` **project**: ProjectReflection

*Inherited from [CommentsComponent](commentscomponent.md).[project](commentscomponent.md#project)*

*Defined in node_modules/typedoc/dist/lib/output/components.d.ts:9*

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

___

### warnings

• `Private` **warnings**: string[] = []

*Defined in plugins/typedoc-plugin-markdown/src/components/comments.component.ts:49*

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

### buildLink

▸ `Private`**buildLink**(`original`: string, `target`: string, `caption`: string, `monospace?`: boolean): string

*Defined in plugins/typedoc-plugin-markdown/src/components/comments.component.ts:178*

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

*Defined in plugins/typedoc-plugin-markdown/src/components/comments.component.ts:51*

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

### onEndRenderer

▸ **onEndRenderer**(`event`: RendererEvent): void

*Defined in plugins/typedoc-plugin-markdown/src/components/comments.component.ts:215*

Triggered when [[Renderer]] is finished

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

### parseComments

▸ **parseComments**(`text`: string): string

*Defined in plugins/typedoc-plugin-markdown/src/components/comments.component.ts:77*

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

*Defined in plugins/typedoc-plugin-markdown/src/components/comments.component.ts:134*

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

*Defined in plugins/typedoc-plugin-markdown/src/components/comments.component.ts:150*

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
