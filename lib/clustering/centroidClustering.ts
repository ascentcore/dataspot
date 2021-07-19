import { EvolutionaryConfig } from '@ascentcore/dataspot/common/evolutionaryAlgorithm'
import distances, { DistanceMeasurement } from '@ascentcore/dataspot/math/distances'
import Convergence from '../common/convergence'
import ClusteringAlgorithm from './clusteringBase'

export class CentroidConfig extends EvolutionaryConfig {
    public centroids: number[][] = []

    public distanceFn: string = 'euclideanDistance'
}

export default abstract class CentroidClustering<T extends CentroidConfig> extends ClusteringAlgorithm<T> {
    protected distanceFunc!: Function

    protected convergence!: Convergence

    constructor(config?: T | undefined, distanceFunction?: DistanceMeasurement | undefined) {
        super(Object.assign(new CentroidConfig(), config))
        this.initializeDependencies(distanceFunction)
    }

    predict(data: number[][]): number[] {
        if (!this.initialized) {
            throw new Error(
                'Algorithm was not initialized. Call fitData, fitDataAsnyc or load pretrained configuration using loadState'
            )
        }
        const { config } = this
        const { centroids } = config
        const { length } = data

        const labels = []

        for (let i = 0; i < length; i++) {
            const point = data[i]
            let idx = 0
            let lastDistance = this.distanceFunc(point, centroids[idx])
            for (let j = 1; j < centroids.length; j++) {
                const compareDistance = this.distanceFunc(point, centroids[j])
                if (compareDistance < lastDistance) {
                    lastDistance = compareDistance
                    idx = j
                }
            }

            labels.push(idx)
        }

        return labels
    }

    loadState(config: string): void {
        super.loadState(config)
        this.initializeDependencies()
        this.initialized = true
    }

    initializeDependencies(distanceFunction?: DistanceMeasurement): void {
        const { distanceFn } = this.config
        this.distanceFunc = distanceFunction || distances[distanceFn]
        const { convergenceIterations } = this.config
        if (convergenceIterations > 0) {
            this.convergence = new Convergence(convergenceIterations as number)
        }
        if (!this.distanceFunc) {
            throw new Error('distance function not passed or not found')
        }
    }

    hadConverged(): boolean {
        return this.convergence ? this.convergence.hadConverged() : false
    }
}
