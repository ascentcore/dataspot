---
layout: default
title: HTMLBaseVisualization
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / HTMLBaseVisualization

# HTMLBaseVisualization

## Hierarchy

* [BaseVisualization](basevisualization.md)

  ↳ **HTMLBaseVisualization**

  ↳↳ [HTMLVisualizationWrapper](htmlvisualizationwrapper.md)

  ↳↳ [Table](table.md)

## Index

### Constructors

* [constructor](htmlbasevisualization.md#constructor)

### Properties

* [config](htmlbasevisualization.md#config)
* [dependencies](htmlbasevisualization.md#dependencies)
* [elemClass](htmlbasevisualization.md#elemclass)

### Methods

* [dataUpdate](htmlbasevisualization.md#dataupdate)
* [getDependency](htmlbasevisualization.md#getdependency)
* [injectDOM](htmlbasevisualization.md#injectdom)
* [setContainer](htmlbasevisualization.md#setcontainer)
* [setup](htmlbasevisualization.md#setup)

## Constructors

### constructor

\+ **new HTMLBaseVisualization**(`config`: any, `elemClass`: string): [HTMLBaseVisualization](htmlbasevisualization.md)

*Overrides [BaseVisualization](basevisualization.md).[constructor](basevisualization.md#constructor)*

*Defined in [lib/visualizations/html/htmlbase.ts:9](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/html/htmlbase.ts#L9)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | any |
`elemClass` | string |

**Returns:** [HTMLBaseVisualization](htmlbasevisualization.md)

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

▸ `Abstract`**dataUpdate**(`data`: [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[] \| [FunctioDefinitionMesh](../globals.md#functiodefinitionmesh) \| any, `elemClass?`: string): (data: [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[], elemClass: string) => void \| null

*Inherited from [BaseVisualization](basevisualization.md).[dataUpdate](basevisualization.md#dataupdate)*

*Defined in [lib/visualizations/basevisualization.ts:26](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L26)*

Isomorphic method used on every data update

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[] \| [FunctioDefinitionMesh](../globals.md#functiodefinitionmesh) \| any | array of data values  |
`elemClass?` | string | - |

**Returns:** (data: [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[], elemClass: string) => void \| null

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

*Defined in [lib/visualizations/html/htmlbase.ts:20](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/html/htmlbase.ts#L20)*

#### Parameters:

Name | Type |
------ | ------ |
`document` | any |

**Returns:** void

___

### setContainer

▸ **setContainer**(`containerRef`: HTMLElement \| [HTMLBaseVisualization](htmlbasevisualization.md)): void

*Defined in [lib/visualizations/html/htmlbase.ts:24](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/html/htmlbase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement \| [HTMLBaseVisualization](htmlbasevisualization.md) |

**Returns:** void

___

### setup

▸ `Abstract`**setup**(`initialData?`: any): void

*Inherited from [BaseVisualization](basevisualization.md).[setup](basevisualization.md#setup)*

*Defined in [lib/visualizations/basevisualization.ts:20](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/basevisualization.ts#L20)*

Isomorphic method executed once for setting up the visualization and dependencies
that are going to be used by the data update function

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | any |

**Returns:** void
