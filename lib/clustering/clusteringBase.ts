import EvolutionaryAlgorithm, { EvolutionaryConfig } from '@ascentcore/dataspot/common/evolutionaryAlgorithm'

/**
 * Base class for any clustering algorithms.
 */
export default abstract class ClusteringAlgorithm<T extends EvolutionaryConfig> extends EvolutionaryAlgorithm<T> {
    /**
     * Base data for fitted algorithm
     */
    protected fitData!: number[][]

    /**
     * Stored labels after the initial fit
     */
    protected labels!: number[]

    /**
     * Initialization state
     */
    protected initialized = false

    /**
     * Prepares dataset and local state for fitting
     * @param data data to be fitted
     */
    protected prepareDataset(data: number[][]): void {
        if (!data || data.length === 0) {
            throw new Error('Unable to perform fitting without data')
        }
        this.iteration = 0
        this.fitData = data
        this.labels = new Array(data.length).fill(-1)
    }

    /**
     * Asynchronous data fitting
     *
     * @param data data to be fitted
     * @returns generator function
     */
    *fitAsync(data: number[][]): Generator {
        this.prepareDataset(data)
        while (!this.shouldStop() && !this.canStop()) {
            this.step()
            yield this.labels
            this.iteration++
        }
        this.onEndFit()
        return this.labels
    }

    /**
     * Synchronous data fitting
     *
     * @param data data to be fitted
     * @returns fitted labels
     */
    fit(data: number[][]): number[] {
        this.prepareDataset(data)
        while (!this.shouldStop() && !this.canStop()) {
            this.step()
            this.iteration++
        }
        this.onEndFit()

        return this.labels
    }

    /**
     * Function executed after clustering is completed
     */
    onEndFit(): void {}

    /**
     * Flag to check if the algorithm converged
     */
    abstract canStop(): boolean

    /**
     * Cluster new data
     * @param data new data to be clustered after fit
     */
    abstract predict(data: number[][]): number[]
}
