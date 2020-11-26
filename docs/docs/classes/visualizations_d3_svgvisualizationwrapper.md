---
layout: default
title: SVGVisualizationWrapper
parent: d3
grand_parent: visualizations
has_children: false
---

**[@ascentcore/dataspot](../README.md)**

> [Globals](../globals.md) / [visualizations.d3.SVGVisualizationWrapper](visualizations_d3_svgvisualizationwrapper)

# SVGVisualizationWrapper

## Hierarchy

* [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization)

  ↳ **visualizations.d3.SVGVisualizationWrapper**

## Index

### Constructors

* [constructor](visualizations_d3_svgvisualizationwrapper#constructor)

### Properties

* [config](visualizations_d3_svgvisualizationwrapper#config)
* [dependencies](visualizations_d3_svgvisualizationwrapper#dependencies)
* [elemClass](visualizations_d3_svgvisualizationwrapper#elemclass)
* [name](visualizations_d3_svgvisualizationwrapper#name)
* [root](visualizations_d3_svgvisualizationwrapper#root)
* [visualization](visualizations_d3_svgvisualizationwrapper#visualization)

### Accessors

* [lab](visualizations_d3_svgvisualizationwrapper#lab)

### Methods

* [dataUpdate](visualizations_d3_svgvisualizationwrapper#dataupdate)
* [getDependency](visualizations_d3_svgvisualizationwrapper#getdependency)
* [setContainer](visualizations_d3_svgvisualizationwrapper#setcontainer)
* [setup](visualizations_d3_svgvisualizationwrapper#setup)

## Constructors

### constructor

\+ **new SVGVisualizationWrapper**(`visualization`: [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization), `name`: string, `initialData?`: TwoDPointScatter[] \| TwoDPointLine[]): [visualizations.d3.SVGVisualizationWrapper](visualizations_d3_svgvisualizationwrapper)

*Overrides [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization).[constructor](visualizations_d3_svgbasevisualization#constructor)*

*Defined in [lib/visualizations/d3/svgvisualizationwrapper.ts:13](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/d3/svgvisualizationwrapper.ts#L13)*

#### Parameters:

Name | Type |
------ | ------ |
`visualization` | [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization) |
`name` | string |
`initialData?` | TwoDPointScatter[] \| TwoDPointLine[] |

**Returns:** [visualizations.d3.SVGVisualizationWrapper](visualizations_d3_svgvisualizationwrapper)

## Properties

### config

•  **config**: any

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[config](visualizations_basevisualization#config)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/basevisualization.ts#L8)*

___

### dependencies

• `Protected` **dependencies**: any

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[dependencies](visualizations_basevisualization#dependencies)*

*Defined in [lib/visualizations/basevisualization.ts:14](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/basevisualization.ts#L14)*

List of 3rd party dependencies that are are platform dependent
E.g. D3 implementation, HTML Element refs

___

### elemClass

•  **elemClass**: string

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[elemClass](visualizations_basevisualization#elemclass)*

*Defined in [lib/visualizations/basevisualization.ts:8](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/basevisualization.ts#L8)*

___

### name

• `Private` **name**: string

*Defined in [lib/visualizations/d3/svgvisualizationwrapper.ts:17](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/d3/svgvisualizationwrapper.ts#L17)*

___

### root

• `Private` **root**: Element \| null

*Defined in [lib/visualizations/d3/svgvisualizationwrapper.ts:13](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/d3/svgvisualizationwrapper.ts#L13)*

___

### visualization

• `Private` **visualization**: [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization)

*Defined in [lib/visualizations/d3/svgvisualizationwrapper.ts:16](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/d3/svgvisualizationwrapper.ts#L16)*

## Accessors

### lab

• get **lab**(): [lab\_index](lab_index)

*Defined in [lib/visualizations/d3/svgvisualizationwrapper.ts:24](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/d3/svgvisualizationwrapper.ts#L24)*

**Returns:** [lab\_index](lab_index)

## Methods

### dataUpdate

▸ **dataUpdate**(`data`: TwoDPointScatter[] \| TwoDPointLine[], `elemClass?`: string): function

*Overrides [visualizations.BaseVisualization](visualizations_basevisualization).[dataUpdate](visualizations_basevisualization#dataupdate)*

*Defined in [lib/visualizations/d3/svgvisualizationwrapper.ts:48](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/d3/svgvisualizationwrapper.ts#L48)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`data` | TwoDPointScatter[] \| TwoDPointLine[] | - |
`elemClass` | string | this.visualization.elemClass |

**Returns:** function

___

### getDependency

▸ **getDependency**(`key`: string): any

*Inherited from [visualizations.BaseVisualization](visualizations_basevisualization).[getDependency](visualizations_basevisualization#getdependency)*

*Defined in [lib/visualizations/basevisualization.ts:31](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/basevisualization.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`key` | string |

**Returns:** any

___

### setContainer

▸ **setContainer**(`containerRef`: HTMLElement \| [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization)): void

*Inherited from [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization).[setContainer](visualizations_d3_svgbasevisualization#setcontainer)*

*Defined in [lib/visualizations/d3/svgbase.ts:24](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/d3/svgbase.ts#L24)*

#### Parameters:

Name | Type |
------ | ------ |
`containerRef` | HTMLElement \| [visualizations.d3.SVGBaseVisualization](visualizations_d3_svgbasevisualization) |

**Returns:** void

___

### setup

▸ **setup**(`initialData?`: any): void

*Overrides [visualizations.BaseVisualization](visualizations_basevisualization).[setup](visualizations_basevisualization#setup)*

*Defined in [lib/visualizations/d3/svgvisualizationwrapper.ts:28](https://github.com/ascentcore/dataspot/blob/5151dd9/lib/visualizations/d3/svgvisualizationwrapper.ts#L28)*

#### Parameters:

Name | Type |
------ | ------ |
`initialData?` | any |

**Returns:** void
