import { euclideanDistance } from '../math/distances'
import hierarchy, { hCut, HierarchyPoints, singleLinkage } from './agglomerative'
import blobDataset from '../dataset/blobDataset'
import data from '../dataset/samples/usarrests'

const blobData = blobDataset(3)

describe('Hierarchy', () => {
    it('Process Hierarchy', () => {
        const result = hierarchy(
            data.map((row: any[]) => <HierarchyPoints>{ index: row[0], points: [row.slice(1)] }),
            singleLinkage,
            euclideanDistance
        )

        // const result = hierarchy(
        //     blobData.map((row: any[], i) => <HierarchyPoints>{ index: i, points: [row] }),
        //     singleLinkage,
        //     euclideanDistance
        // )

        console.log(hCut(result, 1))

        console.log(JSON.stringify(result, null, 2))
    })
})
