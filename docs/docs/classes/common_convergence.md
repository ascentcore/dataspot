---
layout: default
title: convergence
parent: common
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / common.convergence

# convergence

## Hierarchy

* **common.convergence**

## Index

### Constructors

* [constructor](common_convergence.md#constructor)

### Properties

* [history](common_convergence.md#history)
* [historySize](common_convergence.md#historysize)

### Methods

* [addValue](common_convergence.md#addvalue)
* [hadConverged](common_convergence.md#hadconverged)

## Constructors

### constructor

\+ **new Convergence**(`historySize?`: number): [common.convergence](common_convergence.md)

*Defined in [lib/common/convergence.ts:2](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/convergence.ts#L2)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`historySize` | number | 2 |

**Returns:** [common.convergence](common_convergence.md)

## Properties

### history

•  **history**: Array\<string> = []

*Defined in [lib/common/convergence.ts:2](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/convergence.ts#L2)*

___

### historySize

• `Private` **historySize**: number

*Defined in [lib/common/convergence.ts:4](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/convergence.ts#L4)*

## Methods

### addValue

▸ **addValue**(`newRow`: any): void

*Defined in [lib/common/convergence.ts:6](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/convergence.ts#L6)*

#### Parameters:

Name | Type |
------ | ------ |
`newRow` | any |

**Returns:** void

___

### hadConverged

▸ **hadConverged**(): boolean

*Defined in [lib/common/convergence.ts:14](https://github.com/ascentcore/dataspot/blob/46219f5/lib/common/convergence.ts#L14)*

**Returns:** boolean
