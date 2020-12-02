import ClusteringDataset from '../datasets/clustering'
import DBScan from './dbScan'

const fitData = ClusteringDataset.blob(100)

describe('DBScan', () => {
    it('performs clustering with dbscan', () => {
        const dbScan = new DBScan()
        const labels = dbScan.predict(fitData)
        expect(Array.from(new Set(labels))).toEqual([0, 1, 2])
    })
})
