export default abstract class Point {
    constructor(protected location: number[], protected label: number | null) {}

    get Label() {
        return this.label
    }

    get Location() {
        return this.location
    }
}
