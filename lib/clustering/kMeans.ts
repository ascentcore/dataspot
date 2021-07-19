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
    public convergenceIterations: number = 5
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
            this.config.centroids = Random.shuffleArray(fitData)
                .slice(0, clusters)
                .map((item) => ObjectUtils.deepClone(item))

            this.initialized = true
        }

        this.labels = this.predict(fitData)

        for (let i = 0; i < centroids.length; i++) {
            const pointsBelongingToCentroid: number[][] = this.fitData.filter((val, index) => this.labels[index] === i)
            centroids[i] = average(pointsBelongingToCentroid)
        }

        if (this.convergence) {
            this.convergence.addValue(centroids)
        }
    }

    reset(): void {
        super.reset()
        this.config.centroids.length = 0
    }

    /**
     * test kmeans stop documentation
     */
    canStop(): boolean {
        return this.convergence && this.convergence.hadConverged()
    }
}
