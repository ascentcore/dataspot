import Axis from '@ascentcore/dataspot/visualizations/d3/axis'
import LinePlot from '@ascentcore/dataspot/visualizations/d3/lineplot'
import Scatter from '@ascentcore/dataspot/visualizations/d3/scatter'
import SVGBaseVisualization from '@ascentcore/dataspot/visualizations/d3/svgbase'
import SVGMultipleVisualization from '@ascentcore/dataspot/visualizations/d3/svgmultiple'

export default class ScatterPlot {
    private functionPlot: SVGMultipleVisualization

    constructor(root: HTMLElement, config: any, private composition: SVGBaseVisualization[]) {
        const axis = new Axis(config, 'axis-elem')
        const scatter = new Scatter(config, 'scatter-elem')
        this.functionPlot = new SVGMultipleVisualization(config, 'function-elem', [axis, scatter, ...composition])

        this.functionPlot.setContainer(root)
    }

    dataUpdate(data: any[]): void {
        this.functionPlot.dataUpdate(data, 'axis-elem')
        this.functionPlot.dataUpdate(data, 'scatter-elem')
    }
}
