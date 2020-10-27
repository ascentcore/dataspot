import KMeans from './lib/clustering/k-means'

const kMeans = new KMeans(3, 50)
const results = kMeans.fit([[1, 1], [10, 10], [-10, -10], [1, 2], [10, 11], [-11, -10]])
console.log(results.centroids)
