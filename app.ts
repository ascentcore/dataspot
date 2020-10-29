import KMeans, { KMeansCentroid, KMeansPoint } from './lib/clustering/k-means'

const kmeans = KMeans.fit([[1, 1], [10, 10], [-10, -10], [1, 2], [10, 11], [-11, -10]])

let done: boolean | undefined = false
let result: { points: KMeansPoint[]; centroids: KMeansCentroid[] } = { points: [], centroids: [] }
while (!done) {
    const kmeansValue = kmeans.next()
    done = kmeansValue.done
    if (!done) {
        console.log('STEP')
        console.log(kmeansValue.value)
    } else {
        result = <{ points: KMeansPoint[]; centroids: KMeansCentroid[] }>kmeansValue.value
    }
}

console.log('\n-------------\n')

console.log(result.centroids)
console.log(result.points)
