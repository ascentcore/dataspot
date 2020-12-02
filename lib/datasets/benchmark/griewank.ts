/**
 * The Griewank function has many widespread local minima, which are regularly distributed. The complexity is shown in the zoomed-in plots.
 * [Virtual Library of Simulation Experiments](https://www.sfu.ca/~ssurjano/griewank.html)
 */
export default class Griewank {
    static DOMAIN = [-512, 512]

    static GLOBAL_M = [0]

    static calculate(...input: number[]): number {
        const { length } = input
        let part1 = 0
        let part2 = 1
        for (let i = 0; i < length; i++) {
            part1 += input[i] ** 2
            part2 *= Math.cos(input[i] / Math.sqrt(i + 1))
        }
        return 1 + part1 / 4000.0 - part2
    }
}
