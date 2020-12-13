export default class BaseComponent {
    public root: HTMLElement | undefined

    constructor(public readonly container: HTMLElement) {}

    public getElement(
        tagName: string,
        classList?: string[],
        parent?: HTMLElement,
        attributes?: Record<string, string>
    ): HTMLElement {
        const htmlElement = document.createElement(tagName)

        if (classList && classList.length) {
            htmlElement.classList.add(...classList)
        }

        if (attributes) {
            Object.keys(attributes).forEach((attr: string) => {
                htmlElement.setAttribute(attr, attributes[attr])
            })
        }

        if (parent) {
            parent.appendChild(htmlElement)
        }

        return htmlElement
    }

    destroy() {
        if (this.root) {
            this.root.remove()
        }
    }
}
