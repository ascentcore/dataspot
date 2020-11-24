---
layout: default
title: MarkdownTheme
parent: Dataspot
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / MarkdownTheme

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

* [constructor](markdowntheme.md#constructor)

### Properties

* [allReflectionsHaveOwnDocument](markdowntheme.md#allreflectionshaveowndocument)
* [basePath](markdowntheme.md#basepath)
* [componentName](markdowntheme.md#componentname)
* [readme](markdowntheme.md#readme)
* [resources](markdowntheme.md#resources)
* [HANDLEBARS](markdowntheme.md#handlebars)
* [URL\_PREFIX](markdowntheme.md#url_prefix)

### Accessors

* [application](markdowntheme.md#application)
* [entryFile](markdowntheme.md#entryfile)
* [globalsFile](markdowntheme.md#globalsfile)
* [hasSidebar](markdowntheme.md#hassidebar)
* [mappings](markdowntheme.md#mappings)
* [owner](markdowntheme.md#owner)

### Methods

* [allowedDirectoryListings](markdowntheme.md#alloweddirectorylistings)
* [applyAnchorUrl](markdowntheme.md#applyanchorurl)
* [bubble](markdowntheme.md#bubble)
* [buildUrls](markdowntheme.md#buildurls)
* [getEntryPoint](markdowntheme.md#getentrypoint)
* [getNavigation](markdowntheme.md#getnavigation)
* [getOptionDeclarations](markdowntheme.md#getoptiondeclarations)
* [getUrl](markdowntheme.md#geturl)
* [getUrls](markdowntheme.md#geturls)
* [initialize](markdowntheme.md#initialize)
* [isOutputDirectory](markdowntheme.md#isoutputdirectory)
* [listenTo](markdowntheme.md#listento)
* [listenToOnce](markdowntheme.md#listentoonce)
* [off](markdowntheme.md#off)
* [on](markdowntheme.md#on)
* [onPageEnd](markdowntheme.md#onpageend)
* [once](markdowntheme.md#once)
* [stopListening](markdowntheme.md#stoplistening)
* [toAnchorRef](markdowntheme.md#toanchorref)
* [toUrl](markdowntheme.md#tourl)
* [trigger](markdowntheme.md#trigger)
* [formatContents](markdowntheme.md#formatcontents)

## Constructors

### constructor

\+ **new MarkdownTheme**(`renderer`: Renderer, `basePath`: string): [MarkdownTheme](markdowntheme.md)

*Overrides void*

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:47](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L47)*

#### Parameters:

Name | Type |
------ | ------ |
`renderer` | Renderer |
`basePath` | string |

**Returns:** [MarkdownTheme](markdowntheme.md)

## Properties

### allReflectionsHaveOwnDocument

•  **allReflectionsHaveOwnDocument**: boolean

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:32](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L32)*

___

### basePath

•  **basePath**: string

*Inherited from [MarkdownTheme](markdowntheme.md).[basePath](markdowntheme.md#basepath)*

*Defined in node_modules/typedoc/dist/lib/output/theme.d.ts:8*

___

### componentName

•  **componentName**: string

*Inherited from [CommentsComponent](commentscomponent.md).[componentName](commentscomponent.md#componentname)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:28*

___

### readme

•  **readme**: string

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:30](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L30)*

___

### resources

•  **resources**: Resources

*Inherited from [MarkdownTheme](markdowntheme.md).[resources](markdowntheme.md#resources)*

*Defined in node_modules/typedoc/dist/lib/output/theme.d.ts:9*

___

### HANDLEBARS

▪ `Static` **HANDLEBARS**: Handlebars = Handlebars.create()

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:35](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L35)*

___

### URL\_PREFIX

▪ `Static` **URL\_PREFIX**: RegExp = /^(http\|ftp)s?:\/\//

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:37](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L37)*

## Accessors

### application

• get **application**(): Application

*Inherited from [CommentsComponent](commentscomponent.md).[application](commentscomponent.md#application)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:34*

**Returns:** Application

___

### entryFile

• get **entryFile**(): string

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:395](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L395)*

**Returns:** string

___

### globalsFile

• get **globalsFile**(): string

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:400](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L400)*

**Returns:** string

___

### hasSidebar

• get **hasSidebar**(): boolean

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:405](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L405)*

**Returns:** boolean

___

### mappings

• get **mappings**(): { directory: string = "classes"; isLeaf: boolean = false; kind: ReflectionKind[] = [ReflectionKind.Class]; template: string = "reflection.hbs" }[]

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:337](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L337)*

**Returns:** { directory: string = "classes"; isLeaf: boolean = false; kind: ReflectionKind[] = [ReflectionKind.Class]; template: string = "reflection.hbs" }[]

___

### owner

• get **owner**(): Renderer

*Inherited from [CommentsComponent](commentscomponent.md).[owner](commentscomponent.md#owner)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:35*

**Returns:** Renderer

## Methods

### allowedDirectoryListings

▸ **allowedDirectoryListings**(): string[]

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:86](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L86)*

**Returns:** string[]

___

### applyAnchorUrl

▸ **applyAnchorUrl**(`reflection`: Reflection, `container`: Reflection): void

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:209](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L209)*

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

*Inherited from [CommentsComponent](commentscomponent.md).[bubble](commentscomponent.md#bubble)*

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

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:137](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L137)*

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

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:232](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L232)*

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

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:255](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L255)*

#### Parameters:

Name | Type |
------ | ------ |
`project` | ProjectReflection |

**Returns:** NavigationItem

___

### getOptionDeclarations

▸ **getOptionDeclarations**(): DeclarationOption[]

*Inherited from [CommentsComponent](commentscomponent.md).[getOptionDeclarations](commentscomponent.md#getoptiondeclarations)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:33*

**Returns:** DeclarationOption[]

___

### getUrl

▸ **getUrl**(`reflection`: Reflection, `relative?`: Reflection, `separator?`: string): string

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:183](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L183)*

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

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:104](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L104)*

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

*Inherited from [MarkdownTheme](markdowntheme.md).[initialize](markdowntheme.md#initialize)*

*Defined in node_modules/typedoc/dist/lib/utils/component.d.ts:31*

**Returns:** void

___

### isOutputDirectory

▸ **isOutputDirectory**(`outputDirectory`: string): boolean

*Overrides void*

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:71](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L71)*

Test if directory is output directory

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`outputDirectory` | string |   |

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

### onPageEnd

▸ `Private`**onPageEnd**(`page`: PageEvent): void

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:331](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L331)*

#### Parameters:

Name | Type |
------ | ------ |
`page` | PageEvent |

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

### toAnchorRef

▸ **toAnchorRef**(`reflectionId`: string): string

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:224](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L224)*

#### Parameters:

Name | Type |
------ | ------ |
`reflectionId` | string |

**Returns:** string

___

### toUrl

▸ **toUrl**(`mapping`: TemplateMapping, `reflection`: DeclarationReflection): string

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:170](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L170)*

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

*Inherited from [CommentsComponent](commentscomponent.md).[trigger](commentscomponent.md#trigger)*

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

*Defined in [plugins/typedoc-plugin-markdown/src/theme.ts:40](https://github.com/ascentcore/dataspot/blob/46219f5/plugins/typedoc-plugin-markdown/src/theme.ts#L40)*

#### Parameters:

Name | Type |
------ | ------ |
`contents` | string |

**Returns:** string
