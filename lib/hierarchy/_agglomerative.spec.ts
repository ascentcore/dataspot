import { euclideanDistance } from '../math/distances'
import hierarchy, { hCut, HierarchyPoints, singleLinkage } from './agglomerative'
import data from '../datasets/samples/usarrests'

describe('Hierarchy', () => {
    it('Process Hierarchy', () => {
        const result = hierarchy(
            data.map((row: any[]) => <HierarchyPoints>{ index: row[0], points: [row.slice(1)] }),
            singleLinkage,
            euclideanDistance
        )

        console.log(hCut(result, 1))
    })
})
