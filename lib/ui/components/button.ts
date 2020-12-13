import BaseComponent from '../common/baseComponent'

export class Button extends BaseComponent {
    constructor(container: HTMLElement, title: string, callback: Function) {
        super(container)
        const button = this.getElement('button', ['btn'], container)
        button.innerText = title
        button.addEventListener('click', () => {
            callback()
        })
    }
}

export { Button as default }
