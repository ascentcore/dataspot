import { EvolutionaryConfig } from '../common/evolutionaryAlgorithm'
import distances, { DistanceMeasurement } from '../math/distances'
import ClusteringAlgorithm from './clustering'

export class AglomerativeClusteringConfig extends EvolutionaryConfig {
    public distanceFn: string = 'euclideanDistance'
}

export default class AgglomerativeClustering extends ClusteringAlgorithm<AglomerativeClusteringConfig> {
    protected distanceFunc!: Function

    private numLeaves!: number

    constructor(config?: AglomerativeClusteringConfig | undefined, distanceFunction?: DistanceMeasurement | undefined) {
        super(Object.assign(new AglomerativeClusteringConfig(), config))
        this.initializeDependencies(distanceFunction)
    }

    step(): void {
        this.numLeaves--
    }

    canStop(): boolean {
        return false
    }

    shouldStop(): boolean {
        return this.numLeaves === 0
    }

    prepareDataset(data: number[][]): void {
        super.prepareDataset(data)
        const { length } = data
        this.numLeaves = length
        this.labels = new Array(length).fill(0).map((_, index) => index)
    }

    initializeDependencies(distanceFunction?: DistanceMeasurement): void {
        const { distanceFn } = this.config
        this.distanceFunc = distanceFunction || distances[distanceFn]

        if (!this.distanceFunc) {
            throw new Error('distance function not passed or not found')
        }
    }

    predict(data: number[][]): number[] {
        throw new Error('Method not implemented.')
    }
}
