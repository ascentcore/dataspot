---
layout: default
title: Convergence
parent: common
grand_parent: Dataspot
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [common.Convergence](common_convergence)

# Convergence

## Hierarchy

* **common.Convergence**

## Index

### Constructors

* [constructor](common_convergence#constructor)

### Properties

* [history](common_convergence#history)
* [historySize](common_convergence#historysize)

### Methods

* [addValue](common_convergence#addvalue)
* [hadConverged](common_convergence#hadconverged)

## Constructors

### constructor

\+ **new Convergence**(`historySize?`: number): [common.Convergence](common_convergence)

*Defined in [lib/common/convergence.ts:2](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/common/convergence.ts#L2)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`historySize` | number | 2 |

**Returns:** [common.Convergence](common_convergence)

## Properties

### history

•  **history**: Array\<string> = []

*Defined in [lib/common/convergence.ts:2](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/common/convergence.ts#L2)*

___

### historySize

• `Private` **historySize**: number

*Defined in [lib/common/convergence.ts:4](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/common/convergence.ts#L4)*

## Methods

### addValue

▸ **addValue**(`newRow`: any): void

*Defined in [lib/common/convergence.ts:6](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/common/convergence.ts#L6)*

#### Parameters:

Name | Type |
------ | ------ |
`newRow` | any |

**Returns:** void

___

### hadConverged

▸ **hadConverged**(): boolean

*Defined in [lib/common/convergence.ts:14](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/common/convergence.ts#L14)*

**Returns:** boolean
