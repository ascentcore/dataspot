export default abstract class Point {
    constructor(protected location: number[], protected label?: number | null | undefined) {}

    get Label() {
        return this.label
    }

    get Location() {
        return this.location
    }
}
