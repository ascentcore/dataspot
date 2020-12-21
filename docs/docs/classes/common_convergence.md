---
layout: default
title: Convergence
parent: common
grand_parent: Dataspot
has_children: false
---

# Convergence

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
\+ **new Convergence**(`historySize?`: number): [common.Convergence](../common_convergence)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`historySize` | number | 2 |

**Returns:** [common.Convergence](../common_convergence)

{:.url-source-ref}
[lib/common/convergence.ts:2](https://github.com/ascentcore/dataspot/blob/3098228/lib/common/convergence.ts#L2)

## Properties

•  **history**: Array\<string> = []

{:.url-source-ref}
[lib/common/convergence.ts:2](https://github.com/ascentcore/dataspot/blob/3098228/lib/common/convergence.ts#L2)

___

• `Private` **historySize**: number

{:.url-source-ref}
[lib/common/convergence.ts:4](https://github.com/ascentcore/dataspot/blob/3098228/lib/common/convergence.ts#L4)

## Methods

{:.method-highlight}
▸ **addValue**(`newRow`: any): void

#### Parameters:

Name | Type |
------ | ------ |
`newRow` | any |

**Returns:** void

{:.url-source-ref}
[lib/common/convergence.ts:6](https://github.com/ascentcore/dataspot/blob/3098228/lib/common/convergence.ts#L6)

___

{:.method-highlight}
▸ **hadConverged**(): boolean

**Returns:** boolean

{:.url-source-ref}
[lib/common/convergence.ts:14](https://github.com/ascentcore/dataspot/blob/3098228/lib/common/convergence.ts#L14)
