/**
 * In mathematical optimization, the Rosenbrock function is a non-convex function, introduced by Howard H. Rosenbrock in 1960, which is used as a performance test problem for optimization algorithms.[1] It is also known as Rosenbrock's valley or Rosenbrock's banana function. 
 * The global minimum is inside a long, narrow, parabolic shaped flat valley. To find the valley is trivial. To converge to the global minimum, however, is difficult.
 * [Wikipedia](https://en.wikipedia.org/wiki/Rosenbrock_function)
 */
export default class Rosenbrock {
    static DOMAIN = [-2.048, 2.048]

    static GLOBAL_M = [1]

    static calculate(...input: number[]): number {
        const { length } = input
        let value = 0
        for (let i = 0; i < length - 1; i++) {
            value += 100 * (input[i] ** 2 - input[i + 1]) ** 2 + (1 - input[i]) ** 2
        }
        return value / 500
    }
}
