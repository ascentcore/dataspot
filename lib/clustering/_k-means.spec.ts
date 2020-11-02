import fillSpace from '../dataset/fillSpaceDataset'
import KMeans, { KMeansPoint, KMeansCentroid } from '../clustering/k-means'

describe('K-means', () => {
    const data = fillSpace()
    it('performs clustering with k-means', () => {
        const kmeans = KMeans.fit(data, { nClusters: 3 })
        let done: boolean | undefined = false
        let result: { points: KMeansPoint[]; centroids: KMeansCentroid[] } = { points: [], centroids: [] }
        while (!done) {
            const kmeansValue = kmeans.next()
            done = kmeansValue.done
            if (done) {
                result = <{ points: KMeansPoint[]; centroids: KMeansCentroid[] }>kmeansValue.value
            }
        }
        expect(result.centroids).toEqual([
            {
                label: 0,
                location: [0.49505722651051376, 0.19128826191109902]
            },
            {
                label: 1,
                location: [0.22661434977578476, 0.6777258167841095]
            },
            {
                label: 2,
                location: [0.7634027555270748, 0.6778180070490195]
            }
        ])
    })
})
