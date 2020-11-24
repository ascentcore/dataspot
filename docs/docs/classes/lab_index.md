---
layout: default
title: lab
parent: Dataspot
grand_parent: 
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / lab.index

# lab

## Hierarchy

* [registry.registry](registry_registry.md)

  ↳ **lab.index**

## Index

### Constructors

* [constructor](lab_index.md#constructor)

### Properties

* [connected](lab_index.md#connected)
* [db](lab_index.md#db)
* [project](lab_index.md#project)

### Methods

* [store](lab_index.md#store)
* [unregister](lab_index.md#unregister)

## Constructors

### constructor

\+ **new Lab**(`project`: string, `url?`: string): [lab.index](lab_index.md)

*Overrides [registry.registry](registry_registry.md).[constructor](registry_registry.md#constructor)*

*Defined in [lib/lab/index.ts:7](https://github.com/ascentcore/dataspot/blob/46219f5/lib/lab/index.ts#L7)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`project` | string | - |
`url` | string | "http://localhost:3000/db" |

**Returns:** [lab.index](lab_index.md)

## Properties

### connected

•  **connected**: Promise\<boolean>

*Defined in [lib/lab/index.ts:7](https://github.com/ascentcore/dataspot/blob/46219f5/lib/lab/index.ts#L7)*

___

### db

• `Private` **db**: any

*Defined in [lib/lab/index.ts:5](https://github.com/ascentcore/dataspot/blob/46219f5/lib/lab/index.ts#L5)*

___

### project

• `Private` **project**: string

*Defined in [lib/lab/index.ts:9](https://github.com/ascentcore/dataspot/blob/46219f5/lib/lab/index.ts#L9)*

## Methods

### store

▸ **store**(`key`: string, `data`: any): Promise\<any>

*Defined in [lib/lab/index.ts:53](https://github.com/ascentcore/dataspot/blob/46219f5/lib/lab/index.ts#L53)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |
`data` | any |

**Returns:** Promise\<any>

___

### unregister

▸ **unregister**(): void

*Inherited from [registry.registry](registry_registry.md).[unregister](registry_registry.md#unregister)*

*Defined in [lib/registry/registry.ts:12](https://github.com/ascentcore/dataspot/blob/46219f5/lib/registry/registry.ts#L12)*

**Returns:** void
