export type SerializableType = string | number | boolean | string[] | number[] | boolean[] | number[][]

export class SerializableConfig {
    [key: string]: SerializableType
}

export default class Serializable<T extends SerializableConfig> {
    constructor(public config: T) {}

    serialize(): string {
        return JSON.stringify(this.config)
    }

    loadState(from: string | T): void {
        if (typeof from === 'string') {
            this.config = JSON.parse(from)
        } else {
            this.config = from
        }
    }
}
