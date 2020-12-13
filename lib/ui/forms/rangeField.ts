import FormField from './formField'

export default class RangeField extends FormField {
    constructor(container: HTMLElement, key: string, label: string, attributes?: Record<string, string>) {
        super(container, key, label)
        this.inputField = this.getElement('input', ['form-input'], this.root, { type: 'range', ...attributes })
    }
}
