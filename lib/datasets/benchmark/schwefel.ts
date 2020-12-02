/**
 * The Schwefel function is complex, with many local minima. The plot shows the two-dimensional form of the function.
 * [Virtual Library of Simulation Experiments](https://www.sfu.ca/~ssurjano/schwef.html)
 */
export default class Schwefel {
    static DOMAIN = [-512, 512]

    static GLOBAL_M = [420.968746]

    static calculate(...input: number[]): number {
        const alpha = 418.982887
        const { length } = input
        let sum = 0

        for (let i = 0; i < length; i++) {
            sum -= input[i] * Math.sin(Math.sqrt(Math.abs(input[i])))
        }

        return (sum + alpha * length) / 2
    }
}
