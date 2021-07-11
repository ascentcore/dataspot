import { ValueEncoder, ToStringValueEncoder, integerNextKeyGenerator } from './encoderUtils'

/**
 * LabelEncoder is a utility class to help normalize labels such that they contain only values between 0 and n_classes-1.
 *
 * @sample documentation/labelEncoder
 *
 * Example:
 * @code samples/documentation/preprocessing/labelEncoder.ts
 */
export default class LabelEncoder {
    private nextKeyIterator: Generator<any>

    private valueEncoder: ValueEncoder

    private internalMap: Record<string, any> = {}

    private inversedInternalMap: Record<number, any> = {}

    constructor(encoder?: ValueEncoder, nextKey?: Generator<number>) {
        this.nextKeyIterator = nextKey || integerNextKeyGenerator()
        this.valueEncoder = encoder || new ToStringValueEncoder()
    }

    /**
     * Check if an entry is transformed.
     * @param key entry to be checked against current index
     * @returns entry presence as boolean
     */
    checkIndexed(key: any) {
        return this.internalMap[key] !== undefined
    }

    /**
     * Indexes input entries. The fitTransform function can be used multiple times in order to reindex if new entries are present
     * @param input array of entries
     * @returns transformed indices
     */
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

    /**
     * Transformed input entries into indices. An `Index not found for [entry]` error will be thrown
     * if entry was never fitted against the current index
     * @param input list of entries
     * @returns list of indices
     */
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

    /**
     * Returns entries based on indices
     * @param input list of indices
     * @returns list of inversed entries
     */
    inverse(input: number[]): any[] {
        const output: any[] = []
        for (let i = 0; i < input.length; i++) {
            output.push(this.inversedInternalMap[input[i]])
        }

        return output
    }
}
