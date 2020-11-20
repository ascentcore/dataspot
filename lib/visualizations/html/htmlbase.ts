import BaseVisualization from '../basevisualization'

const DEFAULT_CONFIG = {
    border: 1,
    width: '100%',
    borderCollapse: 'collapse'
}

export default abstract class HTMLBaseVisualization extends BaseVisualization {
    constructor(config: any, elemId: string) {
        super(
            {
                ...DEFAULT_CONFIG,
                ...config
            },
            elemId
        )
    }

    injectDOM(dom: any) {
        Object.assign(this.dependencies, { document: dom.window.document })
    }

    public setContainer(containerRef: HTMLElement | HTMLBaseVisualization) {
        const { document } = this.dependencies

        let parentContainer: any
        let rootContainer: any

        if (!(containerRef instanceof HTMLBaseVisualization)) {
            parentContainer = document.querySelector('#root')
            rootContainer = parentContainer
        } else {
            parentContainer = containerRef.getDependency('container')
            rootContainer = containerRef.getDependency('rootContainer')
        }

        const container = document.createElement('div')
        container.setAttribute('id', this.elemId)
        parentContainer.appendChild(container)

        Object.assign(this.dependencies, { container, rootContainer })
    }
}
