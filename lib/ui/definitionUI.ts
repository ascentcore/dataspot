import ObjectUtils from '../common/objectUtils'
import Serializable, { SerializableConfig } from '../common/serializable'
import { FieldsDefinition, FieldDefinition } from '../metaheuristics/ga'
import BaseComponent from './common/baseComponent'
import FormField from './forms/formField'
import SelectionField from './forms/selectionField'
import TextField from './forms/textField'

export default class DefinitionUI extends BaseComponent {
    private currentConfig: any

    private inputFields: FormField[] = []

    constructor(root: HTMLElement, config: any, definitions: FieldsDefinition) {
        super(root)

        const keys: string[] = Object.keys(definitions)

        this.currentConfig = ObjectUtils.deepClone(config)
        keys.forEach((key: string) => {
            const definition: FieldDefinition = definitions[key]
            // console.log(definition, config[key])
            let inputElement: FormField
            // if (definition.min !== undefined && definition.max !== undefined) {
            //     const step = definition.step || (definition.max - definition.min) / 100
            //     inputElement = new RangeField(root, key, definition.label || key)
            // }
            if (definition.options) {
                inputElement = new SelectionField(root, key, definition.label || key, definition.options)
            } else {
                inputElement = new TextField(root, key, definition.label || key, {
                    type: typeof config[key] === 'number' ? 'number' : 'text',
                    ...definition
                })
            }

            inputElement.setValue(config[key] || definitions.default)
            this.inputFields.push(inputElement)
            // const inputElement = new FormField(root, key, definition.label || key)
        })
    }

    public getCurrentConfiguration(): SerializableConfig {
        const config: SerializableConfig = {}
        this.inputFields.forEach((field: FormField) => {
            const { key } = field
            const value = field.getValue()
            if (value) {
                config[key] = value
            }
        })

        return config
    }
}
