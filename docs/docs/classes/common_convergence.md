---
layout: default
title: Convergence
parent: common
grand_parent: Dataspot
has_children: false
---

# Convergence

## Hierarchy

* **common.Convergence**

## Index

| Constructors |
|-----------|
| [constructor](#constructor) |

| Properties |
|-----------|
| [history](#history) |
| [historySize](#historysize) |

| Methods |
|-----------|
| [addValue](#addvalue) |
| [hadConverged](#hadconverged) |

## Constructors

{:.method-highlight}
\+ **new Convergence**(`historySize?`: number): [common.Convergence](common_convergence)

{:.url-source-ref}
[lib/common/convergence.ts:2](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/common/convergence.ts#L2)

**Returns:** [common.Convergence](common_convergence)

## Properties

•  **history**: Array\<string> = []

{:.url-source-ref}
[lib/common/convergence.ts:2](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/common/convergence.ts#L2)

___

• `Private` **historySize**: number

{:.url-source-ref}
[lib/common/convergence.ts:4](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/common/convergence.ts#L4)

## Methods

{:.method-highlight}
▸ **addValue**(`newRow`: any): void

{:.url-source-ref}
[lib/common/convergence.ts:6](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/common/convergence.ts#L6)

**Returns:** void

___

{:.method-highlight}
▸ **hadConverged**(): boolean

{:.url-source-ref}
[lib/common/convergence.ts:14](https://github.com/ascentcore/dataspot/blob/ab10b2a/lib/common/convergence.ts#L14)

**Returns:** boolean
