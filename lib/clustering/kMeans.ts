import Convergence from '../common/convergence'
import { EvolutionaryConfig } from '../common/evolutionaryAlgorithm'
import ObjectUtils from '../common/objectUtils'
import distances, { DistanceMeasurement } from '../math/distances'
import Random from '../math/random'
import { average } from '../math/utils'
import ClusteringAlgorithm from './clustering'

export class KMeansConfig extends EvolutionaryConfig {
    public clusters: number = 8

    public iterations: number = 300

    public convergenceIterations: number = -1

    public centroids: number[][] = []

    public distanceFn: string = 'euclideanDistance'
}

export default class KMeans extends ClusteringAlgorithm<KMeansConfig> {
    private distanceFunc!: Function

    private convergence!: Convergence

    constructor(config?: KMeansConfig | undefined, distanceFunction?: DistanceMeasurement | undefined) {
        super(Object.assign(new KMeansConfig(), config))
        this.initializeDependencies(distanceFunction)
    }

    step(): void {
        const { fitData, config } = this
        const { centroids, clusters } = config

        if (centroids.length === 0 && fitData) {
            if (this.config.convergenceIterations > 0) {
                this.convergence = new Convergence(this.config.convergenceIterations)
            }
            while (centroids.length < clusters) {
                const selected: number[] = Random.randomChoice(fitData)
                if (centroids.indexOf(selected) === -1) {
                    centroids.push(ObjectUtils.deepClone(selected))
                }
                this.initialized = true
            }
        }

        this.labels = this.predict(fitData)

        for (let i = 0; i < centroids.length; i++) {
            const pointsBelongingToCentroid: number[][] = this.labels.reduce((memo: number[][], item, index) => {
                if (item === i) {
                    memo.push(this.fitData[index])
                }
                return memo
            }, [])

            centroids[i] = pointsBelongingToCentroid.length > 0 ? average(pointsBelongingToCentroid) : centroids[i]
        }

        if (this.convergence) {
            this.convergence.addValue(centroids)
        }
    }

    canStop(): boolean {
        return this.convergence && this.convergence.hadConverged()
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

        if (!this.distanceFunc) {
            throw new Error('distance function not passed or not found')
        }
    }
}
