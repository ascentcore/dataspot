export default function calculate(...input: number[]): number {
    const { length } = input
    let part1 = 0
    let part2 = 1
    for (let i = 0; i < length; i++) {
        part1 += input[i] ** 2
        part2 *= Math.cos(input[i] / Math.sqrt(i + 1))
    }
    return 1 + part1 / 4000.0 - part2
}

export const DOMAIN = [-512, 512]
export const GLOBAL_M = [0]
export const GLOBAL_M_COORD = [0]
