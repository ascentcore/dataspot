export default class MatrixUtils {
    static transpose(matrix: number[][]): number[][] {
        return matrix[0].map((r, i) => matrix.map((c) => c[i]))
    }
}
