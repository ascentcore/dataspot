import predictSinglevariable, {
    addBias,
    predictMultivariable,
    transformToPolynomialInput,
    transposeAndNormalize
} from './utilities'

describe('Utilities', () => {
    it('Predict Singlevariable Function', async () => {
        expect(predictSinglevariable([1, 2], [1, 0.1])).toEqual([1.1, 1.2])
    })

    it('Predict Multivariable Function', async () => {
        expect(predictMultivariable([[1, 2, 3], [1, 5, 6]], [1, 0.1, 0.2])).toEqual([1.8, 2.7])
        expect(predictMultivariable([[1, 2, 2], [2, 3, 1]], [1, 0.55, 0.9])).toEqual([
            3.9000000000000004,
            4.550000000000001
        ])
    })

    it('Add Bias', async () => {
        expect(addBias([[2, 3], [5, 6]])).toEqual([[1, 2, 3], [1, 5, 6]])
    })

    it('Transform to Polynomial Input', async () => {
        expect(transformToPolynomialInput([1, 2], 2)).toEqual([[1, 1], [2, 4]])
    })

    it('Transpose and Normalize and add Bias', async () => {
        expect(transposeAndNormalize([[0, 0], [0.5, 0.25], [0.9, 0.81], [1.2, 1.44]])).toEqual([
            [1, -1.4444444444444444, -1.1272245181220595],
            [1, -0.33333333333333315, -0.6763347108732357],
            [1, 0.5555555555555558, 0.3336584573641297],
            [1, 1.2222222222222225, 1.4699007716311656]
        ])
    })
})
