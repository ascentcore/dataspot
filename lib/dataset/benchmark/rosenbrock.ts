export default function calculate(...input: number[]): number {
    const { length } = input
    let value = 0
    for (let i = 0; i < length - 1; i++) {
        value += 100 * (input[i] ** 2 - input[i + 1]) ** 2 + (1 - input[i]) ** 2
    }
    return value / 500
}

export const DOMAIN = [-2.048, 2.048]
export const GLOBAL_M = [1]
