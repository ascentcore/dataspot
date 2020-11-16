import { euclideanDistance } from './distances'
import hierarchy, { HierarchyPoints, singleLinkage } from './hierarchy'
import blobDataset from '../dataset/blobDataset'
import data from '../dataset/samples/usarrests'

// const blobData = blobDataset(50)

describe('Hierarchy', () => {
    it('Process Hierarchy', () => {
        const result = hierarchy(
            data.map((row: any[]) => <HierarchyPoints>{ index: row[0], points: [row.slice(1)] }),
            singleLinkage,
            euclideanDistance
        )

        console.log(JSON.stringify(result, null, 2))
    })
})
