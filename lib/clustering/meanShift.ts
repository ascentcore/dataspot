import Convergence from '../common/convergence'
import { EvolutionaryConfig } from '../common/evolutionaryAlgorithm'
import ObjectUtils from '../common/objectUtils'
import distances, { DistanceMeasurement } from '../math/distances'
import { gaussianKernel } from '../math/utils'
import ClusteringAlgorithm from './clustering'

export class MeanShiftConfig extends EvolutionaryConfig {
    public bandwidth: number = 0.1

    public clusterThreshold: number = 1e-1

    public stopThreshold: number = 1e-4

    public centroids: number[][] = []

    public distanceFn: string = 'euclideanDistance'
}

export default class MeanShitft extends ClusteringAlgorithm<MeanShiftConfig> {
    private distanceFunc!: Function

    private convergence!: Convergence

    private shiftingPoints!: number[][]

    private shifting!: boolean[]

    constructor(config?: MeanShiftConfig | undefined, distanceFunction?: DistanceMeasurement | undefined) {
        super(Object.assign(new MeanShiftConfig(), config))
        this.initializeDependencies(distanceFunction)
    }

    step(): void {
        const { shifting } = this
        this.shiftingPoints = ObjectUtils.deepClone(this.shiftingPoints)
        const { shiftingPoints } = this
        for (let i = 0; i < shiftingPoints.length; i++) {
            if (!shifting[i]) {
                continue
            }
            const currentPoint = shiftingPoints[i]
            const newPosition = this.shiftPoint(currentPoint, this.fitData, this.config.bandwidth)
            const dist = this.distanceFunc(currentPoint, newPosition)
            shiftingPoints[i] = newPosition
            shifting[i] = dist > this.config.stopThreshold
        }
    }

    onEndFit(): void {
        console.log(this.iteration)
        const { labels } = this
        labels.length = 0
        let clusterIdx = 0
        const clusterCenters = []
        for (let i = 0; i < this.shiftingPoints.length; i++) {
            const point = this.shiftingPoints[i]
            if (labels.length === 0) {
                labels.push(clusterIdx)
                clusterCenters.push(point)
                clusterIdx++
            } else {
                for (let j = 0; j < clusterCenters.length; j++) {
                    const center = clusterCenters[j]
                    const dist = this.distanceFunc(point, center)
                    if (dist < this.config.clusterThreshold) {
                        labels.push(j)
                    }
                }

                if (labels.length < i + 1) {
                    labels.push(clusterIdx)
                    clusterCenters.push(point)
                    clusterIdx++
                }
            }
        }
        this.config.centroids = clusterCenters
    }

    canStop(): boolean {
        return this.shifting && this.shifting.find((a) => a) === undefined
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

    prepareDataset(data: number[][]): void {
        super.prepareDataset(data)
        this.shifting = new Array(this.fitData.length).fill(true)
        this.shiftingPoints = ObjectUtils.deepClone(this.fitData)
        this.initialized = true
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

    private shiftPoint(point: number[], points: number[][], kernelBandwidth: number): number[] {
        const shiftPoints = new Array(point.length).fill(0)
        let scale = 0.0
        for (let i = 0; i < points.length; i++) {
            const originalPoint = points[i]
            const dist = this.distanceFunc(point, originalPoint)
            const weight = gaussianKernel(dist, kernelBandwidth)
            for (let j = 0; j < shiftPoints.length; j++) {
                shiftPoints[j] += originalPoint[j] * weight
            }
            scale += weight
        }
        for (let j = 0; j < shiftPoints.length; j++) {
            shiftPoints[j] /= scale
        }
        return shiftPoints
    }
}
