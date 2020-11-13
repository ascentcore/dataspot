export default function calculate(...input: number[]): number {
    const { length } = input
    let value = 0
    for (let i = 0; i < length; i++) {
        value += input[i] ** 2
    }
    return value / 10
}

export const DOMAIN = [-5.12, 5.12]
export const GLOBAL_M = [0]
export const GLOBAL_M_COORD = [0]
