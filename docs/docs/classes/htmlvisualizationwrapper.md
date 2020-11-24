---
layout: default
title: HTMLVisualizationWrapper
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / HTMLVisualizationWrapper

# HTMLVisualizationWrapper

## Hierarchy

* [HTMLBaseVisualization](htmlbasevisualization.md)

  ↳ **HTMLVisualizationWrapper**

## Index

### Constructors

* [constructor](htmlvisualizationwrapper.md#constructor)

### Properties

* [asHtml](htmlvisualizationwrapper.md#ashtml)
* [config](htmlvisualizationwrapper.md#config)
* [dependencies](htmlvisualizationwrapper.md#dependencies)
* [elemClass](htmlvisualizationwrapper.md#elemclass)
* [name](htmlvisualizationwrapper.md#name)
* [root](htmlvisualizationwrapper.md#root)
* [visualization](htmlvisualizationwrapper.md#visualization)

### Accessors

* [lab](htmlvisualizationwrapper.md#lab)

### Methods

* [dataUpdate](htmlvisualizationwrapper.md#dataupdate)
* [getDependency](htmlvisualizationwrapper.md#getdependency)
* [injectDOM](htmlvisualizationwrapper.md#injectdom)
* [setContainer](htmlvisualizationwrapper.md#setcontainer)
* [setup](htmlvisualizationwrapper.md#setup)

## Constructors

### constructor

\+ **new HTMLVisualizationWrapper**(`visualization`: [HTMLBaseVisualization](htmlbasevisualization.md), `name`: string, `asHtml`: boolean, `initialData?`: [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[]): [HTMLVisualizationWrapper](htmlvisualizationwrapper.md)

*Overrides [HTMLBaseVisualization](htmlbasevisualization.md).[constructor](htmlbasevisualization.md#constructor)*

*Defined in [lib/visualizations/html/htmlvisualizationwrapper.ts:14](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/html/htmlvisualizationwrapper.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`visualization` | [HTMLBaseVisualization](htmlbasevisualization.md) |
`name` | string |
`asHtml` | boolean |
`initialData?` | [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[] |

**Returns:** [HTMLVisualizationWrapper](htmlvisualizationwrapper.md)

## Properties

### asHtml

• `Private` **asHtml**: boolean

*Defined in [lib/visualizations/html/htmlvisualizationwrapper.ts:19](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/html/htmlvisualizationwrapper.ts#L19)*

___

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

___

### name

• `Private` **name**: string

*Defined in [lib/visualizations/html/htmlvisualizationwrapper.ts:18](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/html/htmlvisualizationwrapper.ts#L18)*

___

### root

• `Private` **root**: Element \| null

*Defined in [lib/visualizations/html/htmlvisualizationwrapper.ts:14](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/html/htmlvisualizationwrapper.ts#L14)*

___

### visualization

• `Private` **visualization**: [HTMLBaseVisualization](htmlbasevisualization.md)

*Defined in [lib/visualizations/html/htmlvisualizationwrapper.ts:17](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/html/htmlvisualizationwrapper.ts#L17)*

## Accessors

### lab

• get **lab**(): [Lab](lab.md)

*Defined in [lib/visualizations/html/htmlvisualizationwrapper.ts:26](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/html/htmlvisualizationwrapper.ts#L26)*

**Returns:** [Lab](lab.md)

## Methods

### dataUpdate

▸ **dataUpdate**(`data`: [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[], `elemClass?`: string): function

*Overrides [BaseVisualization](basevisualization.md).[dataUpdate](basevisualization.md#dataupdate)*

*Defined in [lib/visualizations/html/htmlvisualizationwrapper.ts:52](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/html/htmlvisualizationwrapper.ts#L52)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[] | - |
`elemClass` | string | this.visualization.elemClass |

**Returns:** function

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

▸ **setup**(`initialData?`: any): void

*Overrides [BaseVisualization](basevisualization.md).[setup](basevisualization.md#setup)*

*Defined in [lib/visualizations/html/htmlvisualizationwrapper.ts:30](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/html/htmlvisualizationwrapper.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | any |

**Returns:** void
