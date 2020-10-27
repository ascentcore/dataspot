export default class MathUtils {
    static roundToPrecision(input: number, precision: number): number {
        const prec = 10 ** precision
        return Math.round(input * prec) / prec
    }
}
