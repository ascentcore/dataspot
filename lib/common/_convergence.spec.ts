import Convergence from './convergence'

describe('Convergence', () => {
    it('test basic convergence', () => {
        const conv = new Convergence(3)

        expect(conv.addValue(1))
        expect(conv.hadConverged()).toBe(false)
        expect(conv.addValue(1))
        expect(conv.hadConverged()).toBe(false)
        expect(conv.addValue(1))
        expect(conv.hadConverged()).toBe(true)
    })

    it('test complex obj convergence', () => {
        const conv = new Convergence(2)

        expect(conv.addValue({ a: [1, 2, 3] }))
        expect(conv.hadConverged()).toBe(false)
        expect(conv.addValue({ a: [1, 2, 3] }))
        expect(conv.hadConverged()).toBe(true)
        expect(conv.addValue({ a: [1, 3, 2] }))
        expect(conv.hadConverged()).toBe(false)
        expect(conv.addValue({ a: [1, 3, 2] }))
        expect(conv.hadConverged()).toBe(true)
    })
})
