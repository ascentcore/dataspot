/* eslint-disable @typescript-eslint/no-unused-vars */
import SVGBaseVisualization from './svgbase'

export default class Title extends SVGBaseVisualization {
    constructor(config: any, elemClass = 'title-elem') {
        super(config, elemClass)
    }

    public setup() {
        const { margin, width, height, text, yLoc } = this.config
        const { d3, rootContainer } = this.dependencies
        rootContainer
            .selectAll(`.${this.elemClass}`)
            .append('text')
            .attr('transform', `translate(${margin.left + (width - margin.right - margin.left) / 2},${yLoc || 15})`)
            .style('text-anchor', 'middle')
            .text(text || 'Text Undefined')
    }

    dataUpdate(_data: any, _elemClass?: string): ((data: any, elemClass: string) => void) | null {
        return null
    }
}
