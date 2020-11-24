---
layout: default
title: Lab
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / Lab

# Lab

## Hierarchy

* [RegisterInstance](registerinstance.md)

  ↳ **Lab**

## Index

### Constructors

* [constructor](lab.md#constructor)

### Properties

* [connected](lab.md#connected)
* [db](lab.md#db)
* [project](lab.md#project)

### Methods

* [store](lab.md#store)
* [unregister](lab.md#unregister)

## Constructors

### constructor

\+ **new Lab**(`project`: string, `url?`: string): [Lab](lab.md)

*Overrides [RegisterInstance](registerinstance.md).[constructor](registerinstance.md#constructor)*

*Defined in [lib/lab/index.ts:7](https://github.com/ascentcore/dataspot/blob/8a56680/lib/lab/index.ts#L7)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`project` | string | - |
`url` | string | "http://localhost:3000/db" |

**Returns:** [Lab](lab.md)

## Properties

### connected

•  **connected**: Promise\<boolean>

*Defined in [lib/lab/index.ts:7](https://github.com/ascentcore/dataspot/blob/8a56680/lib/lab/index.ts#L7)*

___

### db

• `Private` **db**: any

*Defined in [lib/lab/index.ts:5](https://github.com/ascentcore/dataspot/blob/8a56680/lib/lab/index.ts#L5)*

___

### project

• `Private` **project**: string

*Defined in [lib/lab/index.ts:9](https://github.com/ascentcore/dataspot/blob/8a56680/lib/lab/index.ts#L9)*

## Methods

### store

▸ **store**(`key`: string, `data`: any): Promise\<any>

*Defined in [lib/lab/index.ts:53](https://github.com/ascentcore/dataspot/blob/8a56680/lib/lab/index.ts#L53)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |
`data` | any |

**Returns:** Promise\<any>

___

### unregister

▸ **unregister**(): void

*Inherited from [RegisterInstance](registerinstance.md).[unregister](registerinstance.md#unregister)*

*Defined in [lib/registry/registry.ts:12](https://github.com/ascentcore/dataspot/blob/8a56680/lib/registry/registry.ts#L12)*

**Returns:** void
