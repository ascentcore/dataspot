import calculate, { DOMAIN } from '../dataset/benchmark/ackley'
import PSO, { PSOConfig } from './pso'
import FitnessFunction from './fitnessFunction'

const pso = new PSO(<PSOConfig>{ populationSize: 3, iterations: 20 })

describe('PSO', () => {
    it('performs pso on ackley', (done) => {
        const generator = pso.fitAsync(
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

        console.log(initialBest, finalBest)
        expect(initialBest).toBeGreaterThanOrEqual(finalBest)
        done()
    })
})
