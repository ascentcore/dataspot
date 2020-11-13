import EvolutionaryAlgorithm, { EvolutionaryConfig } from '../common/evolutionaryAlgorithm'

export default abstract class ClusteringAlgorithm<T extends EvolutionaryConfig> extends EvolutionaryAlgorithm<T> {
    protected fitData!: number[][]

    protected labels!: number[]

    protected initialized = false

    private prepareDataset(data: number[][]): void {
        if (!data || data.length === 0) {
            throw new Error('Unable to perform fitting without data')
        }
        this.iteration = 0
        this.fitData = data
        this.labels = new Array(data.length).fill(-1)
    }

    *fitAsync(data: number[][]): Generator {
        this.prepareDataset(data)
        while (!this.shouldStop() && !this.canStop()) {
            this.step()
            yield this.labels
            this.iteration++
        }

        return this.labels
    }

    fit(data: number[][]): number[] {
        this.prepareDataset(data)
        while (!this.shouldStop() && !this.canStop()) {
            this.step()
            this.iteration++
        }

        return this.labels
    }

    abstract canStop(): boolean

    abstract predict(data: number[][]): number[]
}
