import FormField from './formField'

export default class TextField extends FormField {
    constructor(
        container: HTMLElement,
        key: string,
        label: string,
        options: string[],
        attributes?: Record<string, string>
    ) {
        super(container, key, label)
        this.inputField = this.getElement('select', ['form-select'], this.root, attributes)
        this.inputField.addEventListener('change', (evt) => {
            const { value } = evt.target as HTMLTextAreaElement
            try {
                this.setValue(parseFloat(value))
            } catch (err) {
                this.setValue(value)
            }
            this.setValue(value)
        })

        for (let i = 0; i < options.length; i++) {
            const opt = this.getElement('option', [], this.inputField, {
                value: options[i]
            })

            opt.innerText = options[i]
        }
    }
}
