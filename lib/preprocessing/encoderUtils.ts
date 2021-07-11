export function* integerNextKeyGenerator(): Generator<number> {
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