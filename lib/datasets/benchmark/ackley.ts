/**
 * In mathematical optimization, the Ackley function is a non-convex function used as a performance test problem for optimization algorithms. It was proposed by David Ackley in his 1987 PhD Dissertation.
 * [Wikipedia](https://en.wikipedia.org/wiki/Ackley_function)
 */
export default class Ackley {
    static DOMAIN = [-32, 32]

    static GLOBAL_M = [0]

    static calculate(...input: number[]): number {
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
}
