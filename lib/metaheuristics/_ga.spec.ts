import Ackley from '../datasets/benchmark/ackley'
import GA, { GAConfig } from './ga'
import FitnessFunction from './fitnessFunction'

let ga = new GA(<GAConfig>{ populationSize: 10, selectionSize: 4, iterations: 20 })
let serializedConfig: any

describe('GA', () => {
    it('performs fitting on ackley', (done) => {
        const generator = ga.fitAsync(
            Object.assign(new FitnessFunction(), {
                calculate: Ackley.calculate,
                dimensions: [
                    { min: Ackley.DOMAIN[0], max: Ackley.DOMAIN[1] },
                    { min: Ackley.DOMAIN[0], max: Ackley.DOMAIN[1] }
                ]
            })
        )
        let gaResult = generator.next()
        let doneGA = gaResult.done
        const initialBest = Math.min(...gaResult.value.map((position: number[]) => Ackley.calculate(...position)))

        while (!doneGA) {
            gaResult = generator.next()
            doneGA = gaResult.done
        }
        const finalBest = Math.min(...gaResult.value.map((position: number[]) => Ackley.calculate(...position)))
        serializedConfig = ga.serialize()
        expect(initialBest).toBeGreaterThanOrEqual(finalBest)
        done()
    })

    it('loads state from serialized config', (done) => {
        ga = new GA()
        ga.loadState(serializedConfig)
        const latestBest = Ackley.calculate(...JSON.parse(serializedConfig).bestPosition)
        const generator = ga.fitAsync(
            Object.assign(new FitnessFunction(), {
                calculate: Ackley.calculate,
                dimensions: [
                    { min: Ackley.DOMAIN[0], max: Ackley.DOMAIN[1] },
                    { min: Ackley.DOMAIN[0], max: Ackley.DOMAIN[1] }
                ]
            })
        )
        let doneGA = false
        let gaResult: any

        while (!doneGA) {
            gaResult = generator.next()
            doneGA = gaResult.done
        }
        const nextBest = Math.min(...gaResult.value.map((position: number[]) => Ackley.calculate(...position)))
        expect(latestBest).toBeGreaterThanOrEqual(nextBest)
        done()
    })
})
