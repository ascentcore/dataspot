export default function calculate(x1: number, x2: number): number {
    let value = 0
    value = -Math.cos(x1) * Math.cos(x2) * Math.exp(-((x1 - Math.PI) ** 2) - (x2 - Math.PI) ** 2)

    return value * 5
}

export const DOMAIN = [-5, 5]
export const GLOBAL_M = [-5]
export const GLOBAL_M_COORD = [Math.PI]
