export default function calculate(...input: number[]): number {
    const { length } = input
    let sum = 0

    for (let i = 0; i < input.length; i++) {
        sum += input[i] ** 2 - 10 * Math.cos(2 * Math.PI * input[i])
    }

    return (10 * length + sum) / 10
}

export const DOMAIN = [-5.12, 5.12]
export const GLOBAL_M = [0]
