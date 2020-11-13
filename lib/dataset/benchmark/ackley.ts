export default function calculate(...input: number[]): number {
    const { length } = input
    let firstSum = 0
    let secondSum = 0
    for (let i = 0; i < input.length; i++) {
        const c = input[i]
        firstSum += c ** 2.0
        secondSum += Math.cos(2.0 * Math.PI * c)
    }
    return -20.0 * Math.exp(-0.2 * Math.sqrt(firstSum / length)) - Math.exp(secondSum / length) + 20 + Math.E
}

export const DOMAIN = [-32, 32]
export const GLOBAL_M = [0]
export const GLOBAL_M_COORD = [0]
