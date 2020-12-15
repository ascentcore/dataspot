import BaseVisualization from '../basevisualization'

const DEFAULT_CONFIG = {
    border: 1,
    width: '100%',
    borderCollapse: 'collapse'
}

export default abstract class HTMLBaseVisualization extends BaseVisualization {
    constructor(config: any, elemClass: string) {
        super(
            {
                ...DEFAULT_CONFIG,
                ...config
            },
            elemClass
        )
    }

    injectDOM(document: any) {
        Object.assign(this.dependencies, { document })
    }

    public setContainer(containerRef: HTMLElement | HTMLBaseVisualization) {
        const { document } = this.dependencies

        let parentContainer: any
        let rootContainer: any

        if (!(containerRef instanceof HTMLBaseVisualization)) {
            parentContainer = containerRef
            rootContainer = containerRef
        } else {
            parentContainer = containerRef.getDependency('container')
            rootContainer = containerRef.getDependency('rootContainer')
        }

        const container = document.createElement('div')
        container.setAttribute('class', this.elemClass)
        parentContainer.appendChild(container)

        Object.assign(this.dependencies, { container, rootContainer })
    }
}
