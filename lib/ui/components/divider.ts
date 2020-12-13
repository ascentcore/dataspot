import BaseComponent from '../common/baseComponent'

export class Divider extends BaseComponent {
    constructor(container: HTMLElement, title: string) {
        super(container)
        this.root = this.getElement('div', ['divider', 'text-center'], container, {
            'data-content': title
        })
    }
}

export { Divider as default }
