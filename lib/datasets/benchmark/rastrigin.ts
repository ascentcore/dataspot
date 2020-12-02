/**
 * In mathematical optimization, the Rastrigin function is a non-convex function used as a performance test problem for optimization algorithms. It is a typical example of non-linear multimodal function. It was first proposed in 1974 by Rastrigin[1] as a 2-dimensional function and has been generalized by Rudolph[2]. The generalized version was popularized by Hoffmeister & Bäck[3] and Mühlenbein et al.[4] Finding the minimum of this function is a fairly difficult problem due to its large search space and its large number of local minima.
 * [Wikipedia](https://en.wikipedia.org/wiki/Rastrigin_function)
 */
export default class Rastrigin {
    static DOMAIN = [-5.12, 5.12]

    static GLOBAL_M = [0]

    static calculate(...input: number[]): number {
        const { length } = input
        let sum = 0

        for (let i = 0; i < input.length; i++) {
            sum += input[i] ** 2 - 10 * Math.cos(2 * Math.PI * input[i])
        }

        return (10 * length + sum) / 10
    }
}
