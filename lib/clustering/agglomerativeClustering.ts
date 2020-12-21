import hierarchy, { HierarchyPoints, singleLinkage, hCut } from '@ascentcore/dataspot/hierarchy/agglomerative'
import { EvolutionaryConfig } from '@ascentcore/dataspot/common/evolutionaryAlgorithm'
import distances, { DistanceMeasurement, euclideanDistance } from '@ascentcore/dataspot/math/distances'
import ClusteringAlgorithm from './clusteringBase'

export class AglomerativeClusteringConfig extends EvolutionaryConfig {
    public distanceFn: string = 'euclideanDistance'
}

export default class AgglomerativeClustering extends ClusteringAlgorithm<AglomerativeClusteringConfig> {
    protected distanceFunc!: Function

    private hierarchyFitData: HierarchyPoints[] = []

    constructor(config?: AglomerativeClusteringConfig | undefined, distanceFunction?: DistanceMeasurement | undefined) {
        super(Object.assign(new AglomerativeClusteringConfig(), config))
        this.initializeDependencies(distanceFunction)
    }

    step(): void {
        const result = hierarchy(this.hierarchyFitData, singleLinkage, euclideanDistance)
        // console.log(result)
        console.log(hCut(result, 1))
    }

    canStop(): boolean {
        return false
    }

    shouldStop(): boolean {
        return this.iteration > 0
    }

    prepareDataset(data: number[][]): void {
        super.prepareDataset(data)
        this.hierarchyFitData = data.map((row: any[], i) => ({ index: `${i}`, points: [row] }))
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
