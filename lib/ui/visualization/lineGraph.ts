import Axis from '@ascentcore/dataspot/visualizations/d3/axis'
import LinePlot from '@ascentcore/dataspot/visualizations/d3/lineplot'
import SVGMultipleVisualization from '@ascentcore/dataspot/visualizations/d3/svgmultiple'

export default class LineGraph {
    private functionPlot: SVGMultipleVisualization

    constructor(root: HTMLElement, width = 400, height = 200) {
        const axis = new Axis({ autoscaleX: true, autoscaleY: true }, 'axis-elem')
        const line = new LinePlot({ autoscaleX: true, autoscaleY: true }, 'line-elem')
        this.functionPlot = new SVGMultipleVisualization({ width, height }, 'function-elem', [axis, line])

        this.functionPlot.setContainer(root)
    }

    dataUpdate(data: any[]): void {
        this.functionPlot.dataUpdate(data, 'axis-elem')
        this.functionPlot.dataUpdate(data, 'line-elem')
    }
}
