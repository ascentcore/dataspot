export type FieldDefinition = {
    label: string
    min?: number
    max?: number
    step?: number
    options?: string[]
    default?: any
}

export type FieldsDefinition = {
    [key: string]: FieldDefinition
}
