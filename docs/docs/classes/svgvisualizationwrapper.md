---
layout: default
title: SVGVisualizationWrapper
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / SVGVisualizationWrapper

# SVGVisualizationWrapper

## Hierarchy

* [SVGBaseVisualization](svgbasevisualization.md)

  ↳ **SVGVisualizationWrapper**

## Index

### Constructors

* [constructor](svgvisualizationwrapper.md#constructor)

### Properties

* [config](svgvisualizationwrapper.md#config)
* [dependencies](svgvisualizationwrapper.md#dependencies)
* [elemClass](svgvisualizationwrapper.md#elemclass)
* [name](svgvisualizationwrapper.md#name)
* [root](svgvisualizationwrapper.md#root)
* [visualization](svgvisualizationwrapper.md#visualization)

### Accessors

* [lab](svgvisualizationwrapper.md#lab)

### Methods

* [dataUpdate](svgvisualizationwrapper.md#dataupdate)
* [getDependency](svgvisualizationwrapper.md#getdependency)
* [setContainer](svgvisualizationwrapper.md#setcontainer)
* [setup](svgvisualizationwrapper.md#setup)

## Constructors

### constructor

\+ **new SVGVisualizationWrapper**(`visualization`: [SVGBaseVisualization](svgbasevisualization.md), `name`: string, `initialData?`: [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[]): [SVGVisualizationWrapper](svgvisualizationwrapper.md)

*Overrides [SVGBaseVisualization](svgbasevisualization.md).[constructor](svgbasevisualization.md#constructor)*

*Defined in [lib/visualizations/d3/svgvisualizationwrapper.ts:13](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/svgvisualizationwrapper.ts#L13)*

#### Parameters:

Name | Type |
------ | ------ |
`visualization` | [SVGBaseVisualization](svgbasevisualization.md) |
`name` | string |
`initialData?` | [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[] |

**Returns:** [SVGVisualizationWrapper](svgvisualizationwrapper.md)

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

___

### name

• `Private` **name**: string

*Defined in [lib/visualizations/d3/svgvisualizationwrapper.ts:17](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/svgvisualizationwrapper.ts#L17)*

___

### root

• `Private` **root**: Element \| null

*Defined in [lib/visualizations/d3/svgvisualizationwrapper.ts:13](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/svgvisualizationwrapper.ts#L13)*

___

### visualization

• `Private` **visualization**: [SVGBaseVisualization](svgbasevisualization.md)

*Defined in [lib/visualizations/d3/svgvisualizationwrapper.ts:16](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/svgvisualizationwrapper.ts#L16)*

## Accessors

### lab

• get **lab**(): [Lab](lab.md)

*Defined in [lib/visualizations/d3/svgvisualizationwrapper.ts:24](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/svgvisualizationwrapper.ts#L24)*

**Returns:** [Lab](lab.md)

## Methods

### dataUpdate

▸ **dataUpdate**(`data`: [TwoDPointScatter](../globals.md#twodpointscatter)[] \| [TwoDPointLine](../globals.md#twodpointline)[], `elemClass?`: string): function

*Overrides [BaseVisualization](basevisualization.md).[dataUpdate](basevisualization.md#dataupdate)*

*Defined in [lib/visualizations/d3/svgvisualizationwrapper.ts:48](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/svgvisualizationwrapper.ts#L48)*

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

### setContainer

▸ **setContainer**(`containerRef`: HTMLElement \| [SVGBaseVisualization](svgbasevisualization.md)): void

*Inherited from [SVGBaseVisualization](svgbasevisualization.md).[setContainer](svgbasevisualization.md#setcontainer)*

*Defined in [lib/visualizations/d3/svgbase.ts:24](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/svgbase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement \| [SVGBaseVisualization](svgbasevisualization.md) |

**Returns:** void

___

### setup

▸ **setup**(`initialData?`: any): void

*Overrides [BaseVisualization](basevisualization.md).[setup](basevisualization.md#setup)*

*Defined in [lib/visualizations/d3/svgvisualizationwrapper.ts:28](https://github.com/ascentcore/dataspot/blob/8a56680/lib/visualizations/d3/svgvisualizationwrapper.ts#L28)*

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | any |

**Returns:** void
