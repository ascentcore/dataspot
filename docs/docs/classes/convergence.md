---
layout: default
title: Convergence
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / Convergence

# Convergence

## Hierarchy

* **Convergence**

## Index

### Constructors

* [constructor](convergence.md#constructor)

### Properties

* [history](convergence.md#history)
* [historySize](convergence.md#historysize)

### Methods

* [addValue](convergence.md#addvalue)
* [hadConverged](convergence.md#hadconverged)

## Constructors

### constructor

\+ **new Convergence**(`historySize?`: number): [Convergence](convergence.md)

*Defined in [lib/common/convergence.ts:2](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/convergence.ts#L2)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`historySize` | number | 2 |

**Returns:** [Convergence](convergence.md)

## Properties

### history

•  **history**: Array\<string> = []

*Defined in [lib/common/convergence.ts:2](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/convergence.ts#L2)*

___

### historySize

• `Private` **historySize**: number

*Defined in [lib/common/convergence.ts:4](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/convergence.ts#L4)*

## Methods

### addValue

▸ **addValue**(`newRow`: any): void

*Defined in [lib/common/convergence.ts:6](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/convergence.ts#L6)*

#### Parameters:

Name | Type |
------ | ------ |
`newRow` | any |

**Returns:** void

___

### hadConverged

▸ **hadConverged**(): boolean

*Defined in [lib/common/convergence.ts:14](https://github.com/ascentcore/dataspot/blob/8a56680/lib/common/convergence.ts#L14)*

**Returns:** boolean
