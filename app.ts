import KMeans from './lib/clustering/k-means'

const results = KMeans.fit([[1, 1], [10, 10], [-10, -10], [1, 2], [10, 11], [-11, -10]], { nClusters: 3 })
console.log(results.centroids)
