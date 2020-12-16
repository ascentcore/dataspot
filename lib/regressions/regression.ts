import Convergence from '@ascentcore/dataspot/common/convergence'
import EvolutionaryAlgorithm, { EvolutionaryConfig } from '@ascentcore/dataspot/common/evolutionaryAlgorithm'
import Losses from '@ascentcore/dataspot/functions/losses'
import Optimizers from '@ascentcore/dataspot/functions/optimizers'

export class RegressionConfig extends EvolutionaryConfig {
    convergenceHistorySize = 2

    convergenceRoundingPrecision = 5

    biasAndWeights: number[] = []

    lossHistory: number[] = []

    costFunction: string | Function = 'meanSquaredError'

    lossFunction: string | Function = 'meanSquaredError'
}

export default abstract class Regression<T extends RegressionConfig> extends EvolutionaryAlgorithm<T> {
    protected convergence: Convergence

    protected input: number[] | number[][] | undefined

    protected target: number[] | undefined

    protected costFunction: Function

    protected lossFunction: Function

    constructor(config: T) {
        super(config)
        if (typeof config.costFunction === 'string') {
            this.costFunction = (Optimizers as any)[config.costFunction]
        } else {
            this.costFunction = config.costFunction
        }

        if (typeof config.lossFunction === 'string') {
            this.lossFunction = (Losses as any)[config.lossFunction]
        } else {
            this.lossFunction = config.lossFunction
        }

        if (!this.costFunction) {
            throw new Error(`Unkown cost function ${this.costFunction}`)
        }

        if (!this.lossFunction) {
            throw new Error(`Unkown loss function ${this.lossFunction}`)
        }
        this.convergence = new Convergence(config.convergenceHistorySize)
    }

    fit(input: number[] | number[][], target: number[]): number[] {
        this.input = input
        this.target = target
        this.prepareDataset(input, target)
        while (!this.shouldStop()) {
            this.step()
        }

        return this.config.biasAndWeights
    }

    *fitAsync(input: number[] | number[][], target: number[]): Generator<number[]> {
        this.input = input
        this.target = target
        this.prepareDataset(input, target)
        while (!this.shouldStop()) {
            this.step()
            yield this.config.biasAndWeights
        }

        return this.config.biasAndWeights
    }

    shouldStop() {
        return this.iteration === this.config.iterations || this.convergence.hadConverged()
    }

    abstract prepareDataset(input: number[] | number[][], output: number[]): void

    /**
     * Predict new data based on the fitted data
     * @param data never seen data
     */
    abstract predict(data: number[] | number[][]): number[]
}
