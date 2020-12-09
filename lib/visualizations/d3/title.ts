/* eslint-disable @typescript-eslint/no-unused-vars */
import SVGBaseVisualization from './svgbase'

export default class Title extends SVGBaseVisualization {
    constructor(config: any, elemClass = 'title-elem') {
        super(config, elemClass)
    }

    private updateFn() {}

    public setup() {
        const { margin, width, text } = this.config
        const { rootContainer } = this.dependencies
        rootContainer
            .selectAll(`.${this.elemClass}`)
            .append('text')
            .attr('transform', `translate(${margin.left + (width - margin.right - margin.left) / 2}, ${margin.top})`)
            .style('text-anchor', 'middle')
            .text(text || 'Text Undefined')
    }

    public getDataUpdateFn() {
        return this.updateFn
    }

    public dataUpdate(_data: any, _elemClass?: string) {}
}
