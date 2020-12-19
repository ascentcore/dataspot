import Axis from '@ascentcore/dataspot/visualizations/d3/axis'
import LinePlot from '@ascentcore/dataspot/visualizations/d3/lineplot'
import SVGMultipleVisualization from '@ascentcore/dataspot/visualizations/d3/svgmultiple'
import Title from '@ascentcore/dataspot/visualizations/d3/title'

export default class LineGraph {
    private functionPlot: SVGMultipleVisualization

    constructor(root: HTMLElement, width = 400, height = 200, title?: string) {
        const axis = new Axis({ autoscaleX: true, autoscaleY: true }, 'axis-elem')
        const line = new LinePlot({ autoscaleX: true, autoscaleY: true }, 'line-elem')
        const elems: any[] = [axis, line]
        if (title) {
            const titleElem = new Title({ text: title }, 'title-class')
            elems.push(titleElem)
        }

        this.functionPlot = new SVGMultipleVisualization({ width, height }, 'function-elem', elems)
        this.functionPlot.setContainer(root)
    }

    dataUpdate(data: any[]): void {
        this.functionPlot.dataUpdate(data, 'axis-elem')
        this.functionPlot.dataUpdate(data, 'line-elem')
    }
}
