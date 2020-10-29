const registry: any = {}

export default class RegisterInstance {
    private name: string

    constructor() {
        const { name } = this.constructor
        this.name = name
        registry[name] = this
    }

    unregister(): void {
        delete registry[this.name]
    }
}

export function getInstance<T>(ref: T): T {
    return registry[ref.name]
}
