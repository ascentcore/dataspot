export default class Sphere {
    static DOMAIN = [-5.12, 5.12]

    static GLOBAL_M = [0]

    static calculate(...input: number[]): number {
        const { length } = input
        let value = 0
        for (let i = 0; i < length; i++) {
            value += input[i] ** 2
        }
        return value / 10
    }
}
