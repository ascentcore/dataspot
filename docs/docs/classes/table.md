---
layout: default
title: Table
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / Table

# Table

## Hierarchy

* [HTMLBaseVisualization](htmlbasevisualization.md)

  ↳ **Table**

## Index

### Constructors

* [constructor](table.md#constructor)

### Properties

* [config](table.md#config)
* [dependencies](table.md#dependencies)
* [elemClass](table.md#elemclass)

### Methods

* [dataUpdate](table.md#dataupdate)
* [getDependency](table.md#getdependency)
* [injectDOM](table.md#injectdom)
* [setContainer](table.md#setcontainer)
* [setup](table.md#setup)
* [updateFn](table.md#updatefn)

## Constructors

### constructor

\+ **new Table**(`config`: any, `elemClass?`: string): [Table](table.md)

*Overrides [HTMLBaseVisualization](htmlbasevisualization.md).[constructor](htmlbasevisualization.md#constructor)*

*Defined in [lib/visualizations/html/table.ts:4](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/html/table.ts#L4)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`config` | any | - |
`elemClass` | string | "table-elem" |

**Returns:** [Table](table.md)

## Properties

### config

•  **config**: any

*Inherited from [BaseVisualization](basevisualization.md).[config](basevisualization.md#config)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L8)*

___

### dependencies

• `Protected` **dependencies**: any

*Inherited from [BaseVisualization](basevisualization.md).[dependencies](basevisualization.md#dependencies)*

*Defined in [lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L14)*

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

### elemClass

•  **elemClass**: string

*Inherited from [BaseVisualization](basevisualization.md).[elemClass](basevisualization.md#elemclass)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L8)*

## Methods

### dataUpdate

▸ **dataUpdate**(`data`: [TwoDPointLine](../globals.md#twodpointline)[] \| [TwoDPointScatter](../globals.md#twodpointscatter)[], `elemClass?`: string): [updateFn](table.md#updatefn)

*Overrides [BaseVisualization](basevisualization.md).[dataUpdate](basevisualization.md#dataupdate)*

*Defined in [lib/visualizations/html/table.ts:49](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/html/table.ts#L49)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | [TwoDPointLine](../globals.md#twodpointline)[] \| [TwoDPointScatter](../globals.md#twodpointscatter)[] | - |
`elemClass` | string | this.elemClass |

**Returns:** [updateFn](table.md#updatefn)

___

### getDependency

▸ **getDependency**(`key`: string): any

*Inherited from [BaseVisualization](basevisualization.md).[getDependency](basevisualization.md#getdependency)*

*Defined in [lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** any

___

### injectDOM

▸ **injectDOM**(`document`: any): void

*Inherited from [HTMLBaseVisualization](htmlbasevisualization.md).[injectDOM](htmlbasevisualization.md#injectdom)*

*Defined in [lib/visualizations/html/htmlbase.ts:20](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/html/htmlbase.ts#L20)*

#### Parameters:

Name | Type |
------ | ------ |
`document` | any |

**Returns:** void

___

### setContainer

▸ **setContainer**(`containerRef`: HTMLElement \| [HTMLBaseVisualization](htmlbasevisualization.md)): void

*Inherited from [HTMLBaseVisualization](htmlbasevisualization.md).[setContainer](htmlbasevisualization.md#setcontainer)*

*Defined in [lib/visualizations/html/htmlbase.ts:24](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/html/htmlbase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement \| [HTMLBaseVisualization](htmlbasevisualization.md) |

**Returns:** void

___

### setup

▸ **setup**(): void

*Overrides [BaseVisualization](basevisualization.md).[setup](basevisualization.md#setup)*

*Defined in [lib/visualizations/html/table.ts:9](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/html/table.ts#L9)*

**Returns:** void

___

### updateFn

▸ `Private`**updateFn**(`data`: [TwoDPointLine](../globals.md#twodpointline)[] \| [TwoDPointScatter](../globals.md#twodpointscatter)[], `elemClass`: string): void

*Defined in [lib/visualizations/html/table.ts:11](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/html/table.ts#L11)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | [TwoDPointLine](../globals.md#twodpointline)[] \| [TwoDPointScatter](../globals.md#twodpointscatter)[] |
`elemClass` | string |

**Returns:** void
