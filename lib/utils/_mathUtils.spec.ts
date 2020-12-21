import MathUtils from './mathUtils'

describe('MathUtils', () => {
    it('rounds to precision', () => {
        const number = 1.23456787654
        expect(MathUtils.roundToPrecision(number, 3)).toEqual(1.235)
    })

    it('random in interval', () => {
        const random = MathUtils.random(0, 3)
        expect(random).toBeLessThan(3)
        expect(random).toBeGreaterThanOrEqual(0)
    })

    it('random integer in interval', () => {
        const random = MathUtils.randomInt(0, 3)
        expect(random).toBeLessThan(3)
        expect(random).toBeGreaterThanOrEqual(0)
        expect(`${random}`).toMatch(/\d{1,}/)
    })

    it('seeded random in interval', () => {
        const random = MathUtils.seededRandom(0, 3)
        expect(random).toEqual(0.3084481351543218)
    })

    it('seeded random integer in interval', () => {
        const random = MathUtils.seededRandomInt(0, 100)
        expect(random).toEqual(31)
    })
})
