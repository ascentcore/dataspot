import blobDataset from '../dataset/clustering/blobDataset'
import AgglomerativeClustering, { AglomerativeClusteringConfig } from './agglomerativeClustering'

const fitData = blobDataset(40)
// const testData = blobDataset(2)

describe('Agglomerative Clustering', () => {
    it('performs clustering with agglomerative clustering', () => {
        const cluster = new AgglomerativeClustering(<AglomerativeClusteringConfig>{})
        cluster.fit(fitData)
    })
})
