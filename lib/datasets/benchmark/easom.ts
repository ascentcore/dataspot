export default class Easom {
    static DOMAIN = [-5, 5]

    static GLOBAL_M = [Math.PI]

    static calculate(x1: number, x2: number): number {
        let value = 0
        value = -Math.cos(x1) * Math.cos(x2) * Math.exp(-((x1 - Math.PI) ** 2) - (x2 - Math.PI) ** 2)

        return value * 5
    }
}
