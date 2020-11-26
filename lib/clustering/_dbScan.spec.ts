import blobDataset from '../dataset/blobDataset'
import DBScan from './dbScan'

const fitData = blobDataset(100)

describe('DBScan', () => {
    it('performs clustering with dbscan', () => {
        const dbScan = new DBScan()
        const labels = dbScan.predict(fitData)
        expect(Array.from(new Set(labels))).toEqual([0, 1, 2])
    })
})
