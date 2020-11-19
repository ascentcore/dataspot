import DataFrame from './df'

describe('DataFrame', () => {
    it('instantiate from array', () => {
        const df: DataFrame = DataFrame.fromArray([[1, 2, 3], [4, 5, 6]])
        expect(df.length).toBe(2)
    })

    it('get by index', () => {
        const df: DataFrame = DataFrame.fromArray([[1, 2], [3, 4], [5, 6], [7, 8]])
        expect(df.length).toBe(4)
        expect(df.get(2)).toEqual([5, 6])
    })

    it('instantiate from array with column names', () => {
        const df: DataFrame = DataFrame.fromArray([[1, 2, 3], [4, 5, 6]])
        expect(df.length).toBe(2)
    })

    it('instantiate allow append', () => {
        const df: DataFrame = DataFrame.fromArray([[1, 2, 3], [4, 5, 6]])
        df.append([[7, 8, 9]])
        expect(df.length).toBe(3)
    })

    it('get data is imutable', () => {
        const originalData = [[1, 2, 3], [4, 5, 6]]
        const df: DataFrame = DataFrame.fromArray(originalData)
        expect(df.getData()).toEqual([[1, 2, 3], [4, 5, 6]])
    })

    it('instantiate from generator', () => {
        const df: DataFrame = DataFrame.fromGenerator(() => {
            return [Math.random(), Math.random()]
        }, 100)

        expect(df.length).toBe(100)
        df.generate(100)
        expect(df.length).toBe(200)
    })

    xit('expect to get column(s)', () => {
        // const df: DataFrame = DataFrame.fromArray([
        //     ['a', 6, 1],
        //     ['b', 5, 1],
        //     ['c', 4, 2],
        //     ['d', 3, 1],
        //     ['e', 2, 3],
        //     ['f', 1, 2]
        // ])
        // expect(df.getColumns(['value'])).toBe()
    })

    it('expect to allow sorting', () => {
        const df: DataFrame = DataFrame.fromArray([['a', 6], ['b', 5], ['c', 4], ['d', 3], ['e', 2], ['f', 1]])
        expect(df.sortBy(0))
    })
})
