import DBScan, { DBScanPoint } from '../clustering/db-scan'

describe('DBScan', () => {
    const data = [[-10, -10], [0, 0], [10, 10], [-10, -11], [0, 1], [10, 11]]
    it('performs clustering with dbscan', () => {
        const dbscan = DBScan.fit(data, 1.5, 2)
        let done: boolean | undefined = false
        let result: { clusters: number; points: DBScanPoint[] } = { clusters: -1, points: [] }
        while (!done) {
            const dbscanvalue = dbscan.next()
            done = dbscanvalue.done
            if (done) {
                result = <{ clusters: number; points: DBScanPoint[] }>dbscanvalue.value
            }
        }
        expect(result.clusters).toEqual(3)
    })
})
