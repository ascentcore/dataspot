import FormField from './formField'

export default class TextField extends FormField {
    constructor(container: HTMLElement, key: string, label: string, attributes?: Record<string, any>) {
        super(container, key, label)
        if (attributes && attributes.type === 'number') {
            this.parser = parseFloat
        }
        this.inputField = this.getElement('input', ['form-input'], this.root, attributes)
        this.inputField.addEventListener('change', (evt) => {
            const { value } = evt.target as HTMLTextAreaElement
            try {
                this.setValue(parseFloat(value))
            } catch (err) {
                this.setValue(value)
            }
            this.setValue(value)
        })
    }
}
