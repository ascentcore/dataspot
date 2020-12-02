import calculate, { DOMAIN } from '../dataset/benchmark/ackley'
import GA, { GAConfig } from './ga'
import FitnessFunction from './fitnessFunction'

let ga = new GA(<GAConfig>{ populationSize: 10, selectionSize: 4, iterations: 20 })
let serializedConfig: any

describe('GA', () => {
    it('performs fitting on ackley', (done) => {
        const generator = ga.fitAsync(
            Object.assign(new FitnessFunction(), {
                calculate,
                dimensions: [{ min: DOMAIN[0], max: DOMAIN[1] }, { min: DOMAIN[0], max: DOMAIN[1] }]
            })
        )
        let gaResult = generator.next()
        let doneGA = gaResult.done
        const initialBest = Math.min(...gaResult.value.map((position: number[]) => calculate(...position)))

        while (!doneGA) {
            gaResult = generator.next()
            doneGA = gaResult.done
        }
        const finalBest = Math.min(...gaResult.value.map((position: number[]) => calculate(...position)))
        serializedConfig = ga.serialize()
        expect(initialBest).toBeGreaterThanOrEqual(finalBest)
        done()
    })

    it('loads state from serialized config', (done) => {
        ga = new GA()
        ga.loadState(serializedConfig)
        const latestBest = calculate(...JSON.parse(serializedConfig).bestPosition)
        const generator = ga.fitAsync(
            Object.assign(new FitnessFunction(), {
                calculate,
                dimensions: [{ min: DOMAIN[0], max: DOMAIN[1] }, { min: DOMAIN[0], max: DOMAIN[1] }]
            })
        )
        let doneGA = false
        let gaResult: any

        while (!doneGA) {
            gaResult = generator.next()
            doneGA = gaResult.done
        }
        const nextBest = Math.min(...gaResult.value.map((position: number[]) => calculate(...position)))
        expect(latestBest).toBeGreaterThanOrEqual(nextBest)
        done()
    })
})
