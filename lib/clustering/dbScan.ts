import { EvolutionaryConfig } from '../common/evolutionaryAlgorithm'
import distances, { DistanceMeasurement } from '../math/distances'
import ClusteringAlgorithm from './clusteringBase'

export class DBScanConfig extends EvolutionaryConfig {
    public epsilon: number = 0.1

    public minNeighbours: number = 5

    public distanceFn: string = 'euclideanDistance'
}

export default class DBScan extends ClusteringAlgorithm<DBScanConfig> {
    private distanceFunc!: Function

    constructor(config?: DBScanConfig | undefined, distanceFunction?: DistanceMeasurement | undefined) {
        super(Object.assign(new DBScanConfig(), config))
        this.initializeDependencies(distanceFunction)
    }

    canStop(): boolean {
        return false
    }

    predict(data: number[][]): number[] {
        return this.fit(data)
    }

    private getNeigbouringIndexes(reference: number[]): number[] {
        return this.fitData.reduce((memo: number[], point: number[], index) => {
            if (reference !== point && this.distanceFunc(point, reference) < this.config.epsilon) {
                memo.push(index)
            }
            return memo
        }, [])
    }

    step() {
        let currentCluster = -1
        for (let i = 0; i < this.fitData.length; i++) {
            if (this.labels[i] !== -1) {
                continue
            }
            const neighbours: number[] = this.getNeigbouringIndexes(this.fitData[i])

            if (neighbours.length > this.config.minNeighbours) {
                currentCluster++
                this.labels[i] = currentCluster
                while (neighbours.length) {
                    const index: number | undefined = neighbours.pop()
                    if (index) {
                        const label: number = this.labels[index]
                        if (label === -1) {
                            this.labels[index] = currentCluster
                        } else {
                            continue
                        }

                        const localClusters = this.getNeigbouringIndexes(this.fitData[index])
                        neighbours.push(...localClusters)
                    }
                }
            }
        }
    }

    initializeDependencies(distanceFunction?: DistanceMeasurement): void {
        const { distanceFn } = this.config
        this.distanceFunc = distanceFunction || distances[distanceFn]

        if (!this.distanceFunc) {
            throw new Error('distance function not passed or not found')
        }
    }
}
