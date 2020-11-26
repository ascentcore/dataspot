export default class Convergence {
    public history: Array<string> = []

    constructor(private historySize: number = 2) {}

    public addValue(newRow: any): void {
        const { history, historySize } = this
        history.push(JSON.stringify(newRow))
        if (history.length > historySize) {
            this.history.shift()
        }
    }

    public hadConverged(): boolean {
        const { history, historySize } = this
        if (history.length === historySize) {
            const ref = history[0]
            for (let i = 1; i < historySize; i++) {
                if (history[i] !== ref) return false
            }
        } else {
            return false
        }

        return true
    }
}
