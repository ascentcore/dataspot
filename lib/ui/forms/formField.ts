import BaseComponent from '../common/baseComponent'

export default class FormField extends BaseComponent {
    protected inputField: HTMLElement | undefined

    protected parser: Function = (val: any) => val

    constructor(container: HTMLElement, public key: string, label: string) {
        super(container)
        this.root = this.getElement('div', ['form-group'], container)
        const labelElement = this.getElement('label', ['form-label'], this.root, { for: key })
        labelElement.innerText = label
    }

    setValue(value: any | null): void {
        if (this.inputField) {
            this.inputField.setAttribute('value', value)
        }
    }

    getValue(): string | undefined {
        if (this.inputField) {
            const val = this.parser(this.inputField.getAttribute('value'))
            if (val === null) {
                return undefined
            } else {
                return val
            }
        }
        return undefined
    }
}
