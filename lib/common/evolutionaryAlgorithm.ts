import Serializable, { SerializableConfig } from './serializable'

export class EvolutionaryConfig extends SerializableConfig {
    iterations: number = 100
}

export default abstract class EvolutionaryAlgorithm<T extends EvolutionaryConfig> extends Serializable<T> {
    protected iteration = 0

    shouldStop(): boolean {
        return this.iteration === this.config.iterations
    }

    getIteration(): number {
        return this.iteration
    }

    abstract step(): any
}
