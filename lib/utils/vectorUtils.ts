/**
 * Vector Utils
 */
export default class VectorUtils {
    /**
     * Euclidean distance between two points in Euclidean space is the length of a line segment between the two points.
     * It can be calculated from the Cartesian coordinates of the points using the Pythagorean theorem,therefore occasionally being called the Pythagorean distance.
     *
     * @param v1 input vector 1
     * @param v2 input vector 2
     */
    static euclideanDistance(v1: number[], v2: number[]): number {
        if (!v1 || !v2 || v1.length !== v2.length) {
            throw new Error(`Missing ponts data ${v1}, ${v2}`)
        }
        let sum = 0
        for (let i = 0; i < v1.length; i++) {
            sum += (v1[i] - v2[i]) ** 2
        }
        return Math.sqrt(sum)
    }

    /**
     * The Manhattan distance between two vectors (city blocks) is equal to the one-norm of the distance between the vectors. The distance function (also called a “metric”) involved is also called the “taxi cab” metric.
     *
     * @param v1 input vector 1
     * @param v2 input vector 2
     */
    static manhattanDistance(v1: number[], v2: number[]): number {
        if (!v1 || !v2 || v1.length !== v2.length) {
            throw new Error(`Missing ponts data ${v1}, ${v2}`)
        }
        let sum = 0
        for (let i = 0; i < v1.length; i++) {
            sum += Math.abs(v1[i] - v2[i])
        }
        return sum
    }

    /**
     * Returns sum of elements in an array
     * @param arr input array
     */
    static sumElements(arr: number[]): number {
        return arr.reduce((memo, v) => memo + v, 0)
    }

    /**
     * Returns the sum of elements in two vectors at each index
     * @param v1 input vector 1
     * @param v2 input vector 2
     */
    static addition(v1: number[], v2: number[]): number[] {
        if (!v1 || !v2 || v1.length !== v2.length) {
            throw new Error(`Missing ponts data ${v1}, ${v2}`)
        }
        return v1.map((item, index) => {
            return item + v2[index]
        })
    }

    /**
     * Returns the subtraction of elements in two vectors at each index
     * @param v1 input vector 1
     * @param v2 input vector 2
     */
    static subtraction(v1: number[], v2: number[]): number[] {
        if (!v1 || !v2 || v1.length !== v2.length) {
            throw new Error(`Missing ponts data ${v1}, ${v2}`)
        }
        return v1.map((item, index) => {
            return item - v2[index]
        })
    }

    /**
     * Returns the multiplication of elements in two vectors at each index
     *
     * @param v1 input vector 1
     * @param v2 input vector 2
     */
    static multiplication(v1: number[], v2: number[]): number[] {
        if (!v1 || !v2 || v1.length !== v2.length) {
            throw new Error(`Missing ponts data ${v1}, ${v2}`)
        }
        return v1.map((item, index) => {
            return item * v2[index]
        })
    }

    /**
     * Returns the division of elements in two vectors at each index
     *
     * @param v1 input vector 1
     * @param v2 input vector 2
     */
    static division(v1: number[], v2: number[]): number[] {
        if (!v1 || !v2 || v1.length !== v2.length) {
            throw new Error(`Missing ponts data ${v1}, ${v2}`)
        }
        return v1.map((item, index) => {
            return item / v2[index]
        })
    }

    /**
     * Returns the adition of each element in an array with a scalar
     * @param vec input array
     * @param scalar value to be added to each element
     */
    static scalarAddition(vec: number[], scalar: number): number[] {
        return vec.map((item) => {
            return item + scalar
        })
    }

    /**
     * Returns the subtraction of each element in an array with a scalar
     * @param vec input array
     * @param scalar value to be added to each element
     */
    static scalarSubtraction(v1: number[], scalar: number): number[] {
        return v1.map((item) => {
            return item - scalar
        })
    }

    /**
     * Returns the multiplication of each element in an array with a scalar
     * @param vec input array
     * @param scalar value to be added to each element
     */
    static scalarMultiplication(v1: number[], scalar: number): number[] {
        return v1.map((item) => {
            return item * scalar
        })
    }

    /**
     * Returns the division of each element in an array with a scalar
     * @param vec input array
     * @param scalar value to be added to each element
     */
    static scalarDivision(v1: number[], scalar: number): number[] {
        return v1.map((item) => {
            return item / scalar
        })
    }

    /**
     * Returns the average of elements in an array
     * @param arr input array
     */
    static averageElements(arr: number[]): number {
        return VectorUtils.sumElements(arr) / arr.length
    }

    /**
     * Returns the average (per dimension) of elements in a multidimensional space
     * @param arr input vector
     */
    static average(arr: number[][]): number[] {
        if (!arr || !arr.length) {
            throw new Error(`Missing ponts data ${arr}`)
        }
        const size = arr[0].length
        const zeroVector = Array(size).fill(0)
        const sum = arr.reduce((v1: number[], v2: number[]) => {
            return VectorUtils.addition(v1, v2)
        }, zeroVector)
        return sum.map((val) => {
            return val / arr.length
        })
    }

    /**
     * Returns the index of the smallest value in an array
     * @param v input array
     */
    static indexOfSmallest(v: number[]): number {
        if (!v || !v.length) {
            throw new Error(`Missing ponts data ${v}`)
        }
        return v.reduce((lowest, next, index) => {
            return next < v[lowest] ? index : lowest
        }, 0)
    }

    static max(v: number[]): number {
        return Math.max(...v)
    }

    static min(v: number[]): number {
        return Math.min(...v)
    }

    /**
     * Computes the standard deviation of elements in an array
     * @param arr input arr
     */
    static standardDeviation(arr: number[]): number {
        const avg = this.averageElements(arr)

        const squareDiffs = arr.map((value) => {
            const diff = value - avg
            const sqrDiff = diff * diff

            return sqrDiff
        })

        const avgSquareDiff = this.averageElements(squareDiffs)

        const stdDev = Math.sqrt(avgSquareDiff)

        return stdDev
    }

    /**
     * Normalize elements in an array
     * @param arr input array
     */
    static normalize(arr: number[]): number[] {
        let avg = 0
        let std = 0
        let resultVector = []

        avg = VectorUtils.averageElements(arr)
        std = VectorUtils.standardDeviation(arr)

        resultVector = VectorUtils.scalarSubtraction(arr, avg)
        resultVector = VectorUtils.scalarDivision(resultVector, std)

        return resultVector
    }
}
