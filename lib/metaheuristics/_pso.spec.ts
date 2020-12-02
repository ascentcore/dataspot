import Ackley from '../datasets/benchmark/ackley'
import PSO, { PSOConfig } from './pso'
import FitnessFunction from './fitnessFunction'

const pso = new PSO(<PSOConfig>{ populationSize: 3, iterations: 20 })
let serializedConfig: any

describe('PSO', () => {
    it('performs pso on ackley', (done) => {
        const generator = pso.fitAsync(
            Object.assign(new FitnessFunction(), {
                calculate: Ackley.calculate,
                dimensions: [
                    { min: Ackley.DOMAIN[0], max: Ackley.DOMAIN[1] },
                    { min: Ackley.DOMAIN[0], max: Ackley.DOMAIN[1] }
                ]
            })
        )
        let psoResult = generator.next()
        let donePSO = psoResult.done
        const initialBest = Math.min(...psoResult.value.map((position: number[]) => Ackley.calculate(...position)))

        while (!donePSO) {
            psoResult = generator.next()
            donePSO = psoResult.done
        }
        const finalBest = Math.min(...psoResult.value.map((position: number[]) => Ackley.calculate(...position)))
        serializedConfig = pso.serialize()
        expect(initialBest).toBeGreaterThanOrEqual(finalBest)
        done()
    })

    it('loads state from serialized config for pso', (done) => {
        const pso = new PSO()
        pso.loadState(serializedConfig)
        const latestBest = Ackley.calculate(...JSON.parse(serializedConfig).bestPosition)
        const generator = pso.fitAsync(
            Object.assign(new FitnessFunction(), {
                calculate: Ackley.calculate,
                dimensions: [
                    { min: Ackley.DOMAIN[0], max: Ackley.DOMAIN[1] },
                    { min: Ackley.DOMAIN[0], max: Ackley.DOMAIN[1] }
                ]
            })
        )
        let donePSO = false
        let psoResult: any

        while (!donePSO) {
            psoResult = generator.next()
            donePSO = psoResult.done
        }
        const nextBest = Math.min(...psoResult.value.map((position: number[]) => Ackley.calculate(...position)))
        expect(latestBest).toBeGreaterThanOrEqual(nextBest)
        done()
    })
})
