---
layout: default
title: lab
parent: Dataspot
grand_parent: Dataspot
has_children: true
---

# lab

## Hierarchy

* [registry.RegisterInstance](/docs/classes/registry_registerinstance)

  ↳ **lab_index**

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
\+ **new Lab**(`project`: string, `url?`: string): [lab\_index](/docs/classes/lab_index)

*Overrides [registry.RegisterInstance](/docs/classes/registry_registerinstance).[constructor](/docs/classes/registry_registerinstance#constructor)*

{:.url-source-ref}
[lib/lab/index.ts:7](https://github.com/ascentcore/dataspot/blob/b02167c/lib/lab/index.ts#L7)

**Returns:** [lab\_index](/docs/classes/lab_index)

## Properties

•  **connected**: Promise\<boolean>

{:.url-source-ref}
[lib/lab/index.ts:7](https://github.com/ascentcore/dataspot/blob/b02167c/lib/lab/index.ts#L7)

___

• `Private` **db**: any

{:.url-source-ref}
[lib/lab/index.ts:5](https://github.com/ascentcore/dataspot/blob/b02167c/lib/lab/index.ts#L5)

___

• `Private` **project**: string

{:.url-source-ref}
[lib/lab/index.ts:9](https://github.com/ascentcore/dataspot/blob/b02167c/lib/lab/index.ts#L9)

## Methods

{:.method-highlight}
▸ **store**(`key`: string, `data`: any): Promise\<any>

{:.url-source-ref}
[lib/lab/index.ts:53](https://github.com/ascentcore/dataspot/blob/b02167c/lib/lab/index.ts#L53)

**Returns:** Promise\<any>

___

{:.method-highlight}
▸ **unregister**(): void

*Inherited from [registry.RegisterInstance](/docs/classes/registry_registerinstance).[unregister](/docs/classes/registry_registerinstance#unregister)*

{:.url-source-ref}
[lib/registry/registry.ts:12](https://github.com/ascentcore/dataspot/blob/b02167c/lib/registry/registry.ts#L12)

**Returns:** void
