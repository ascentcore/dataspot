import Convergence from '../common/convergence'
import ObjectUtils from '../common/objectUtils'
import { DistanceMeasurement } from '../math/distances'
import Random from '../math/random'
import { average } from '../math/utils'
import CentroidClustering, { CentroidConfig } from './centroidClustering'

export class KMeansConfig extends CentroidConfig {
    public clusters: number = 8

    public iterations: number = 300

    public convergenceIterations: number = -1
}

export default class KMeans extends CentroidClustering<KMeansConfig> {
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
}
