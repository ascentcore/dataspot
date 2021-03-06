import SVGBaseVisualization from './svgbase'

export default class HierarchyPlot extends SVGBaseVisualization {
    constructor(config: any, elemClass = 'hierarchy-elem') {
        super(config, elemClass)
    }

    private updateFn(data: any, elemClass: string): void {
        const { margin, layout, tree, width } = this.config
        const configLayout = layout || 'horizontal'
        const { d3, rootContainer } = this.dependencies
        const dx = 12
        const hierarchy = d3.hierarchy(data, (d: any) => (Array.isArray(d) ? d : undefined))
        const treeType = tree === 'cluster' ? d3.cluster : d3.tree
        const root = treeType().nodeSize([10, 10])(hierarchy)

        let x0 = Infinity
        let x1 = -x0
        root.each((d: any) => {
            if (d.x > x1) x1 = d.x
            if (d.x < x0) x0 = d.x
        })

        const isHorizontal = configLayout === 'horizontal'
        const treeFn = isHorizontal ? d3.linkHorizontal : d3.linkVertical
        const treeLink = treeFn()
            .x((d: any) => (isHorizontal ? d.y : d.x))
            .y((d: any) => (isHorizontal ? d.x : d.y))

        const g = rootContainer
            .select(`.${elemClass}`)
            .append('g')
            .attr('font-family', 'sans-serif')
            .attr('font-size', 10)
            .attr(
                'transform',
                isHorizontal ? `translate(${margin.left},${dx - x0})` : `translate(${width / 2}, ${margin.top})`
            )

        g.append('g')
            .attr('fill', 'none')
            .attr('stroke', '#555')
            .attr('stroke-opacity', 0.4)
            .attr('stroke-width', 1.5)
            .selectAll('path')
            .data(root.links())
            .join('path')
            .attr('data-id', (d: any) => {
                return d.data
            })
            .attr('stroke', '#000')
            .attr('d', treeLink)

        const node = g
            .append('g')
            .attr('stroke-linejoin', 'round')
            .attr('stroke-width', 3)
            .selectAll('g')
            .data(root.descendants())
            .join('g')
            .attr('data-id', (d: any) => {
                return d.data
            })
            .attr('transform', (d: any) => (isHorizontal ? `translate(${d.y},${d.x})` : `translate(${d.x},${d.y})`))

        node.append('circle')
            .attr('fill', '#999')
            .attr('r', 2.5)

        node.append('text')
            .attr('fill', '#000')
            .attr('dy', '0.31em')
            .attr('x', (d: any) => (d.children || !isHorizontal ? -6 : 6))
            .attr('transform', isHorizontal ? '' : 'rotate(-90)')
            // eslint-disable-next-line no-nested-ternary
            .attr('text-anchor', (d: any) => (isHorizontal ? (d.children ? 'end' : 'start') : 'end'))
            .text((d: any) => (typeof d.data === 'string' ? d.data : ''))
    }

    public setup(initialData?: any) {
        if (initialData) {
            this.updateFn(initialData, this.elemClass)
        }
    }

    public getDataUpdateFn() {
        return this.updateFn
    }

    public dataUpdate(data: any) {
        this.updateFn(data, this.elemClass)
    }
}
