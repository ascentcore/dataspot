import { euclideanDistance } from './distances'
import { distanceMatrix } from './utils'

describe('Math Utils>', () => {
    it('calculates distance matrix', () => {
        const data = [[0, 0], [2, 2], [2, 3], [4, 5], [4, 2]]

        expect(distanceMatrix(data, euclideanDistance)).toEqual([
            [Infinity, 2.8284271247461903, 3.605551275463989, 6.4031242374328485, 4.47213595499958],
            [2.8284271247461903, Infinity, 1, 3.605551275463989, 2],
            [3.605551275463989, 1, Infinity, 2.8284271247461903, 2.23606797749979],
            [6.4031242374328485, 3.605551275463989, 2.8284271247461903, Infinity, 3],
            [4.47213595499958, 2, 2.23606797749979, 3, Infinity]
        ])
    })
})
