import ClusteringDataset from '../datasets/clustering'
import AgglomerativeClustering, { AglomerativeClusteringConfig } from './agglomerativeClustering'

const fitData = ClusteringDataset.blob(40)

describe('Agglomerative Clustering', () => {
    it('performs clustering with agglomerative clustering', () => {
        const cluster = new AgglomerativeClustering(<AglomerativeClusteringConfig>{})
        cluster.fit(fitData)
    })
})
