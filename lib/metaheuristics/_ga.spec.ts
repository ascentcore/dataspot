import calculate, { DOMAIN } from '../dataset/benchmark/ackley'
import GA, { GAConfig } from './ga'
import FitnessFunction from './fitnessFunction'

const ga = new GA(<GAConfig>{ populationSize: 10, selectionSize: 4, iterations: 20 })

describe('GA', () => {
    it('performs fitting on ackley', (done) => {
        const generator = ga.fitAsync(
            Object.assign(new FitnessFunction(), {
                calculate,
                dimensions: [{ min: DOMAIN[0], max: DOMAIN[1] }, { min: DOMAIN[0], max: DOMAIN[1] }]
            })
        )
        let psoResult = generator.next()
        let donePSO = psoResult.done
        const initialBest = Math.min(...psoResult.value.map((position: number[]) => calculate(...position)))

        while (!donePSO) {
            psoResult = generator.next()
            donePSO = psoResult.done
        }
        const finalBest = Math.min(...psoResult.value.map((position: number[]) => calculate(...position)))
        expect(initialBest).toBeGreaterThanOrEqual(finalBest)
        done()
    })
})
