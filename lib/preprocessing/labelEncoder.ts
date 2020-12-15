function* integerNextKeyGenerator(): Generator<number> {
    let index = 0
    while (true) {
        yield index++
    }
}

export interface ValueEncoder {
    encode(value: any): string
}

export class ToStringValueEncoder implements ValueEncoder {
    encode(value: any): string {
        return JSON.stringify(value)
    }
}

export class LabelEncoder {
    private nextKeyIterator: Generator<any>

    private valueEncoder: ValueEncoder

    private internalMap: Record<string, any> = {}

    private inversedInternalMap: Record<number, any> = {}

    constructor(encoder?: ValueEncoder, nextKey?: Generator<number>) {
        this.nextKeyIterator = nextKey || integerNextKeyGenerator()
        this.valueEncoder = encoder || new ToStringValueEncoder()
    }

    checkIndexed(key: any) {
        return this.internalMap[key] !== undefined
    }

    fitTransform(input: any[]): number[] {
        const output: number[] = []
        for (let i = 0; i < input.length; i++) {
            const inputValue = input[i]
            const indexKey = this.valueEncoder.encode(inputValue)
            let index = this.internalMap[indexKey]
            if (index === undefined) {
                index = this.nextKeyIterator.next().value
                this.internalMap[indexKey] = index
                this.inversedInternalMap[index] = inputValue
            }
            output.push(index)
        }
        return output
    }

    transform(input: any[]): number[] {
        const output: number[] = []
        for (let i = 0; i < input.length; i++) {
            const inputValue = input[i]
            const indexKey = this.valueEncoder.encode(inputValue)
            const index = this.internalMap[indexKey]
            if (index === undefined) {
                throw new Error(`Index not found for ${indexKey}`)
            }
            output.push(index)
        }
        return output
    }

    inverse(input: number[]): any[] {
        const output: any[] = []
        for (let i = 0; i < input.length; i++) {
            output.push(this.inversedInternalMap[input[i]])
        }

        return output
    }
}
