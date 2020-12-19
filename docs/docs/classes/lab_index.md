---
layout: default
title: lab
parent: Dataspot
grand_parent: Dataspot
has_children: true
---

# lab

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [connected](#connected) |
| [db](#db) |
| [project](#project) |

| Methods |
|-----------|
| [store](#store) |
| [unregister](#unregister) |

## Constructors

{:.method-highlight}
\+ **new Lab**(`project`: string, `url?`: string): [lab\_index](../lab_index)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`project` | string | - |
`url` | string | "http://localhost:3000/db" |

**Returns:** [lab\_index](../lab_index)

*Overrides [registry.RegisterInstance](../registry_registerinstance).[constructor](../registry_registerinstance#constructor)*

{:.url-source-ref}
[lib/lab/index.ts:7](https://github.com/ascentcore/dataspot/blob/3098228/lib/lab/index.ts#L7)

## Properties

•  **connected**: Promise\<boolean>

{:.url-source-ref}
[lib/lab/index.ts:7](https://github.com/ascentcore/dataspot/blob/3098228/lib/lab/index.ts#L7)

___

• `Private` **db**: any

{:.url-source-ref}
[lib/lab/index.ts:5](https://github.com/ascentcore/dataspot/blob/3098228/lib/lab/index.ts#L5)

___

• `Private` **project**: string

{:.url-source-ref}
[lib/lab/index.ts:9](https://github.com/ascentcore/dataspot/blob/3098228/lib/lab/index.ts#L9)

## Methods

{:.method-highlight}
▸ **store**(`key`: string, `data`: any): Promise\<any>

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |
`data` | any |

**Returns:** Promise\<any>

{:.url-source-ref}
[lib/lab/index.ts:53](https://github.com/ascentcore/dataspot/blob/3098228/lib/lab/index.ts#L53)

___

{:.method-highlight}
▸ **unregister**(): void

**Returns:** void

*Inherited from [registry.RegisterInstance](../registry_registerinstance).[unregister](../registry_registerinstance#unregister)*

{:.url-source-ref}
[lib/registry/registry.ts:12](https://github.com/ascentcore/dataspot/blob/3098228/lib/registry/registry.ts#L12)
