import { euclideanDistance } from './distances'
import hierarchy, { HierarchyPoints, singleLinkage } from './hierarchy'
import blobDataset from '../dataset/blobDataset'

const ids = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Fake 1', 'Fake 2']
const data = [
    [1.2426, 0.783, -0.521, -0.00342],
    [0.5079, 1.107, -1.212, 2.4842],
    [0.0716, 1.479, 0.999, 1.04288],
    [0.2323, 0.231, -1.074, -0.18492],
    [0.2783, 1.263, 1.759, 2.06782],
    [0.0257, 0.399, 0.861, 1.86497],
    [0.0457, 0.299, 0.561, 1.26497]
    // [0.0457, 0.299, 0.561, 1.26497]
]

const blobData = blobDataset(50)

describe('Hierarchy', () => {
    it('Process Hierarchy', () => {
        const result = hierarchy(
            blobData.map((i, index) => <HierarchyPoints>{ index, points: [i] }),
            singleLinkage,
            euclideanDistance
        )
        // const result = hierarchy(
        //     data.map((i, index) => <HierarchyPoints>{ index: ids[index], points: [i] }),
        //     singleLinkage,
        //     euclideanDistance
        // )

        console.log(JSON.stringify(result[0].distances, null, 2))
    })
})
