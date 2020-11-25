---
layout: default
title: lab
parent: Dataspot
grand_parent: Dataspot
has_children: true
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [lab\_index](lab_index)

# lab

## Hierarchy

* [registry.RegisterInstance](registry_registerinstance)

  ↳ **lab_index**

## Index

### Constructors

* [constructor](lab_index#constructor)

### Properties

* [connected](lab_index#connected)
* [db](lab_index#db)
* [project](lab_index#project)

### Methods

* [store](lab_index#store)
* [unregister](lab_index#unregister)

## Constructors

### constructor

\+ **new Lab**(`project`: string, `url?`: string): [lab\_index](lab_index)

*Overrides [registry.RegisterInstance](registry_registerinstance).[constructor](registry_registerinstance#constructor)*

*Defined in [lib/lab/index.ts:7](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/lab/index.ts#L7)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`project` | string | - |
`url` | string | "http://localhost:3000/db" |

**Returns:** [lab\_index](lab_index)

## Properties

### connected

•  **connected**: Promise\<boolean>

*Defined in [lib/lab/index.ts:7](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/lab/index.ts#L7)*

___

### db

• `Private` **db**: any

*Defined in [lib/lab/index.ts:5](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/lab/index.ts#L5)*

___

### project

• `Private` **project**: string

*Defined in [lib/lab/index.ts:9](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/lab/index.ts#L9)*

## Methods

### store

▸ **store**(`key`: string, `data`: any): Promise\<any>

*Defined in [lib/lab/index.ts:53](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/lab/index.ts#L53)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |
`data` | any |

**Returns:** Promise\<any>

___

### unregister

▸ **unregister**(): void

*Inherited from [registry.RegisterInstance](registry_registerinstance).[unregister](registry_registerinstance#unregister)*

*Defined in [lib/registry/registry.ts:12](https://github.com/ascentcore/dataspot/blob/0dd3d5b/lib/registry/registry.ts#L12)*

**Returns:** void
