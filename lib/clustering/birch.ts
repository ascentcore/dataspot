import distances, { DistanceMeasurement } from '../math/distances'
import CentroidClustering, { CentroidConfig } from './centroidClustering'
import ClusteringAlgorithm from './clustering'

export class BirchConfig extends CentroidConfig {
    public clusters: number = 3

    public threshold: number = 0.5

    public branchingFactor: number = 50

}

export default class Birch extends CentroidClustering<BirchConfig> {
    constructor(config?: BirchConfig | undefined, distanceFunction?: DistanceMeasurement | undefined) {
        super(Object.assign(new BirchConfig(), config))
        this.initializeDependencies(distanceFunction)
    }

    step(): void {
        const { fitData, config } = this
        const { centroids, clusters } = config
    }

    canStop(): boolean {
        // return this.convergence && this.convergence.hadConverged()
        return false
    }
}
