import fillSpace from '../dataset/benchmark/fillSpaceDataset'
import DBScan, { DBScanPoint } from '../clustering/db-scan'

describe('DBScan', () => {
    const data = fillSpace()
    it('performs clustering with dbscan', () => {
        const dbscan = DBScan.fit(data, 0.02, 5)
        let done: boolean | undefined = false
        let result: { clusters: number; points: DBScanPoint[] } = { clusters: -1, points: [] }
        while (!done) {
            const dbscanvalue = dbscan.next()
            done = dbscanvalue.done
            if (done) {
                result = <{ clusters: number; points: DBScanPoint[] }>dbscanvalue.value
            }
        }
        expect(result.clusters).toEqual(1)
    })
})
