---
layout: default
title: MarkdownTheme
parent: Dataspot
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [MarkdownTheme](markdowntheme)

# MarkdownTheme

The MarkdownTheme is based on TypeDoc's DefaultTheme @see https://github.com/TypeStrong/typedoc/blob/master/src/lib/output/themes/DefaultTheme.ts.
- html specific components are removed from the renderer
- markdown specefic components have been added

## Hierarchy

* Theme

  ↳ **MarkdownTheme**

## Implements

* ComponentHost

## Index

### Constructors

* [constructor](markdowntheme#constructor)

### Properties

* [allReflectionsHaveOwnDocument](markdowntheme#allreflectionshaveowndocument)
* [basePath](markdowntheme#basepath)
* [componentName](markdowntheme#componentname)
* [readme](markdowntheme#readme)
* [resources](markdowntheme#resources)
* [HANDLEBARS](markdowntheme#handlebars)
* [URL\_PREFIX](markdowntheme#url_prefix)

### Accessors

* [application](markdowntheme#application)
* [entryFile](markdowntheme#entryfile)
* [globalsFile](markdowntheme#globalsfile)
* [hasSidebar](markdowntheme#hassidebar)
* [mappings](markdowntheme#mappings)
* [owner](markdowntheme#owner)

### Methods

* [allowedDirectoryListings](markdowntheme#alloweddirectorylistings)
* [applyAnchorUrl](markdowntheme#applyanchorurl)
* [bubble](markdowntheme#bubble)
* [buildUrls](markdowntheme#buildurls)
* [getEntryPoint](markdowntheme#getentrypoint)
* [getNavigation](markdowntheme#getnavigation)
* [getOptionDeclarations](markdowntheme#getoptiondeclarations)
* [getUrl](markdowntheme#geturl)
* [getUrls](markdowntheme#geturls)
* [initialize](markdowntheme#initialize)
* [isOutputDirectory](markdowntheme#isoutputdirectory)
* [listenTo](markdowntheme#listento)
* [listenToOnce](markdowntheme#listentoonce)
* [off](markdowntheme#off)
* [on](markdowntheme#on)
* [onPageEnd](markdowntheme#onpageend)
* [once](markdowntheme#once)
* [stopListening](markdowntheme#stoplistening)
* [toAnchorRef](markdowntheme#toanchorref)
* [toUrl](markdowntheme#tourl)
* [trigger](markdowntheme#trigger)
* [formatContents](markdowntheme#formatcontents)

## Constructors

### constructor

\+ **new MarkdownTheme**(`renderer`: Renderer, `basePath`: string): [MarkdownTheme](markdowntheme)

*Overrides void*

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:46*

#### Parameters:

Name | Type |
------ | ------ |
`renderer` | Renderer |
`basePath` | string |

**Returns:** [MarkdownTheme](markdowntheme)

## Properties

### allReflectionsHaveOwnDocument

•  **allReflectionsHaveOwnDocument**: boolean

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:33*

___

### basePath

•  **basePath**: string

*Inherited from [MarkdownTheme](markdowntheme).[basePath](markdowntheme#basepath)*

*Defined in node_modules/typedoc/dist/lib/output/theme.d.ts:8*

___

### componentName

•  **componentName**: string

*Inherited from [CommentsComponent](commentscomponent).[componentName](commentscomponent#componentname)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:28*

___

### readme

•  **readme**: string

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:30*

___

### resources

•  **resources**: Resources

*Inherited from [MarkdownTheme](markdowntheme).[resources](markdowntheme#resources)*

*Defined in node_modules/typedoc/dist/lib/output/theme.d.ts:9*

___

### HANDLEBARS

▪ `Static` **HANDLEBARS**: Handlebars = Handlebars.create()

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:36*

___

### URL\_PREFIX

▪ `Static` **URL\_PREFIX**: RegExp = /^(http\|ftp)s?:\/\//

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:38*

## Accessors

### application

• get **application**(): Application

*Inherited from [CommentsComponent](commentscomponent).[application](commentscomponent#application)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:34*

**Returns:** Application

___

### entryFile

• get **entryFile**(): string

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:359*

**Returns:** string

___

### globalsFile

• get **globalsFile**(): string

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:364*

**Returns:** string

___

### hasSidebar

• get **hasSidebar**(): boolean

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:369*

**Returns:** boolean

___

### mappings

• get **mappings**(): { directory: string = "classes"; isLeaf: boolean = false; kind: ReflectionKind[] = [ReflectionKind.Class]; template: string = "reflection.hbs" }[]

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:301*

**Returns:** { directory: string = "classes"; isLeaf: boolean = false; kind: ReflectionKind[] = [ReflectionKind.Class]; template: string = "reflection.hbs" }[]

___

### owner

• get **owner**(): Renderer

*Inherited from [CommentsComponent](commentscomponent).[owner](commentscomponent#owner)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:35*

**Returns:** Renderer

## Methods

### allowedDirectoryListings

▸ **allowedDirectoryListings**(): string[]

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:84*

**Returns:** string[]

___

### applyAnchorUrl

▸ **applyAnchorUrl**(`reflection`: Reflection, `container`: Reflection): void

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:191*

Similar to DefaultTheme.applyAnchorUrl method with added but the anchors are computed from the reflection structure
Generate an anchor url for the given reflection and all of its children.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reflection` | Reflection | The reflection an anchor url should be created for. |
`container` | Reflection | The nearest reflection having an own document.  |

**Returns:** void

___

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

### buildUrls

▸ **buildUrls**(`reflection`: DeclarationReflection, `urls`: UrlMapping[]): UrlMapping[]

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:133*

This is mostly a copy of the TypeDoc DefaultTheme.buildUrls method with .html ext switched to .md
Builds the url for the the given reflection and all of its children.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`reflection` | DeclarationReflection | The reflection the url should be created for. |
`urls` | UrlMapping[] | The array the url should be appended to. |

**Returns:** UrlMapping[]

The altered urls array.

___

### getEntryPoint

▸ **getEntryPoint**(`project`: ProjectReflection): ContainerReflection

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:214*

Copy of default theme DefaultTheme.getEntryPoint

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`project` | ProjectReflection |   |

**Returns:** ContainerReflection

___

### getNavigation

▸ **getNavigation**(`project`: ProjectReflection): NavigationItem

*Overrides void*

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:231*

#### Parameters:

Name | Type |
------ | ------ |
`project` | ProjectReflection |

**Returns:** NavigationItem

___

### getOptionDeclarations

▸ **getOptionDeclarations**(): DeclarationOption[]

*Inherited from [CommentsComponent](commentscomponent).[getOptionDeclarations](commentscomponent#getoptiondeclarations)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:33*

**Returns:** DeclarationOption[]

___

### getUrl

▸ **getUrl**(`reflection`: Reflection, `relative?`: Reflection, `separator?`: string): string

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:174*

**`see`** DefaultTheme.getUrl
Return a url for the given reflection.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`reflection` | Reflection | - | The reflection the url should be generated for. |
`relative?` | Reflection | - | The parent reflection the url generation should stop on. |
`separator` | string | "." | The separator used to generate the url. |

**Returns:** string

The generated url.

___

### getUrls

▸ **getUrls**(`project`: ProjectReflection): UrlMapping[]

*Overrides void*

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:102*

This method is essentially a copy of the TypeDocs DefaultTheme.getUrls with extensions swapped out to .md
Map the models of the given project to the desired output files.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`project` | ProjectReflection | The project whose urls should be generated. |

**Returns:** UrlMapping[]

A list of [[UrlMapping]] instances defining which models
                should be rendered to which files.

___

### initialize

▸ `Protected`**initialize**(): void

*Inherited from [MarkdownTheme](markdowntheme).[initialize](markdowntheme#initialize)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:31*

**Returns:** void

___

### isOutputDirectory

▸ **isOutputDirectory**(`outputDirectory`: string): boolean

*Overrides void*

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:70*

Test if directory is output directory

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`outputDirectory` | string |   |

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

### onPageEnd

▸ `Private`**onPageEnd**(`page`: PageEvent): void

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:297*

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

### toAnchorRef

▸ **toAnchorRef**(`reflectionId`: string): string

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:206*

#### Parameters:

Name | Type |
------ | ------ |
`reflectionId` | string |

**Returns:** string

___

### toUrl

▸ **toUrl**(`mapping`: TemplateMapping, `reflection`: DeclarationReflection): string

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:161*

Returns the full url of a given mapping and reflection

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mapping` | TemplateMapping |  |
`reflection` | DeclarationReflection |   |

**Returns:** string

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

### formatContents

▸ `Static`**formatContents**(`contents`: string): string

*Defined in tools/typedoc-plugin-markdown/src/theme.ts:41*

#### Parameters:

Name | Type |
------ | ------ |
`contents` | string |

**Returns:** string
