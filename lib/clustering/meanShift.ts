import ObjectUtils from '@ascentcore/dataspot/common/objectUtils'
import { DistanceMeasurement } from '@ascentcore/dataspot/math/distances'
import { gaussianKernel } from '@ascentcore/dataspot/math/utils'
import CentroidClustering, { CentroidConfig } from './centroidClustering'

export class MeanShiftConfig extends CentroidConfig {
    public bandwidth: number = 0.1

    public clusterThreshold: number = 1e-1

    public stopThreshold: number = 1e-4
}

export default class MeanShift extends CentroidClustering<MeanShiftConfig> {
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

    prepareDataset(data: number[][]): void {
        super.prepareDataset(data)
        this.shifting = new Array(this.fitData.length).fill(true)
        this.shiftingPoints = ObjectUtils.deepClone(this.fitData)
        this.initialized = true
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
