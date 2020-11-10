import { DataFrame } from './df'

describe('DataFrame', () => {
    it('instantiate from array', () => {
        const df: DataFrame = DataFrame.fromArray([[1, 2, 3], [4, 5, 6]])
        expect(df.length).toBe(2)
        expect(df.cols.length).toBe(3)
        expect(df.cols).toBe(['0', '1', '2'])
    })

    it('get by index', () => {
        const df: DataFrame = DataFrame.fromArray([[1, 2], [3, 4], [5, 6], [7, 8]])
        expect(df.length).toBe(4)
        expect(df.get(2)).toEqual([5, 6])
    })

    it('instantiate from array with column names', () => {
        const df: DataFrame = DataFrame.fromArray([[1, 2, 3], [4, 5, 6]], {
            columns: ['x', 'y', 'z']
        })
        expect(df.length).toBe(2)
        expect(df.cols.length).toBe(3)
        expect(df.cols).toBe(['x', 'y', 'z'])
    })

    it('expect to index by column value', () => {
        const df1: DataFrame = DataFrame.fromArray([['a', 1], ['b', 1], ['c', 1], ['d', 2], ['e', 1], ['f', 1]], {
            columns: ['letter', 'value'],
            indexBy: 'letter'
        })

        expect(df1.get('d')).toEqual(2)

        const df2: DataFrame = DataFrame.fromArray([['a', 1], ['b', 1], ['c', 1], ['d', 2], ['e', 1], ['f', 1]], {
            columns: ['letter', 'value']
        })

        df2.indexBy('letter')
        expect(df2.get('d')).toEqual(2)
    })

    it('expect to throw error on collision index', () => {
        const df: DataFrame = DataFrame.fromArray([['a', 1], ['b', 1], ['c', 1], ['d', 2], ['e', 1], ['f', 1]], {
            columns: ['letter', 'value']
        })

        expect(df.indexBy('value')).toThrowError()
    })

    it('instantiate allow append', () => {
        const df: DataFrame = DataFrame.fromArray([[1, 2, 3], [4, 5, 6]])
        df.append([7, 8, 9])
        expect(df.length).toBe(3)
        expect(df.cols.length).toBe(3)
    })

    it('get data is imutable', () => {
        const originalData = [[1, 2, 3], [4, 5, 6]]
        const df: DataFrame = DataFrame.fromArray(originalData)
        expect(df.data()).toBe([[1, 2, 3], [4, 5, 6]])
        expect(df.data()).not.toBe(originalData)
    })

    it('instantiate from generator', () => {
        const df: DataFrame = DataFrame.fromGenerator(() => {
            return [Math.random(), Math.random()]
        }, 100)

        expect(df.length).toBe(100)
        expect(df.cols.length).toBe(3)

        df.generate(100)

        expect(df.length).toBe(200)
    })

    it('expect to get column(s)', () => {
        const df: DataFrame = DataFrame.fromArray(
            [['a', 6, 1], ['b', 5, 1], ['c', 4, 2], ['d', 3, 1], ['e', 2, 3], ['f', 1, 2]],
            {
                columns: ['letter', 'value', 'group']
            }
        )

        expect(df.getColumns(['value'])).toBe()
    })

    it('expect to allow indexing', () => {
        const df: DataFrame = DataFrame.fromArray([['a', 6], ['b', 5], ['c', 4], ['d', 3], ['e', 2], ['f', 1]], {
            columns: ['letter', 'value']
        })

        expect(df.indexBy('value'))
        expect(df.indexBy('letter'))
    })

    it('expect to allow sorting', () => {
        const df: DataFrame = DataFrame.fromArray([['a', 6], ['b', 5], ['c', 4], ['d', 3], ['e', 2], ['f', 1]], {
            columns: ['letter', 'value']
        })

        expect(df.sortBy('value'))
    })
})
