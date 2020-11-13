export default function calculate(...input: number[]): number {
    const alpha = 418.982887
    const { length } = input
    let sum = 0

    for (let i = 0; i < length; i++) {
        sum -= input[i] * Math.sin(Math.sqrt(Math.abs(input[i])))
    }

    return (sum + alpha * length) / 2
}

export const DOMAIN = [-512, 512]
export const GLOBAL_M = [0]
export const GLOBAL_M_COORD = [420.968746]
