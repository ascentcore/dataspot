import Convergence from '../common/convergence'
import ObjectUtils from '../common/objectUtils'
import { DistanceMeasurement } from '../math/distances'
import Random from '../math/random'
import { average } from '../math/utils'
import CentroidClustering, { CentroidConfig } from './centroidClustering'

export class KMeansConfig extends CentroidConfig {
    public clusters: number = 8

    public iterations: number = 300

    /** Kmeans initial convergence iterations */
    public convergenceIterations: number = -1
}

/**
 * The KMeans algorithm clusters data by trying to separate samples in n groups of equal variance, minimizing a criterion known as the inertia or
 * within-cluster sum-of-squares (see below). This algorithm requires the number of clusters to be specified.
 * It scales well to large number of samples and has been used across a large range of application areas in many different fields.
 * The k-means algorithm divides a set of  samples  into  disjoint clusters , each described by the mean of the samples in the cluster.
 * The means are commonly called the cluster “centroids”; note that they are not, in general, points from , although they live in the same space.
 * The K-means algorithm aims to choose centroids that minimise the inertia, or within-cluster sum-of-squares criterion:
 *  - Inertia can be recognized as a measure of how internally coherent clusters are. It suffers from various drawbacks:
 *  - Inertia makes the assumption that clusters are convex and isotropic, which is not always the case. It responds poorly to elongated clusters, or manifolds with irregular shapes.
 *  - Inertia is not a normalized metric: we just know that lower values are better and zero is optimal.
 * But in very high-dimensional spaces, Euclidean distances tend to become inflated (this is an instance of the so-called “curse of dimensionality”).
 * Running a dimensionality reduction algorithm such as Principal component analysis (PCA) prior to k-means clustering can alleviate this problem and speed up the computations.
 *
 */
export default class KMeans extends CentroidClustering<KMeansConfig> {
    private convergence!: Convergence

    constructor(config?: KMeansConfig | undefined, distanceFunction?: DistanceMeasurement | undefined) {
        super(Object.assign(new KMeansConfig(), config))
        this.initializeDependencies(distanceFunction)
    }

    /**
     * Test kmeans step documentation
     */
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

    /**
     * test kmeans stop documentation
     */
    canStop(): boolean {
        return this.convergence && this.convergence.hadConverged()
    }
}
