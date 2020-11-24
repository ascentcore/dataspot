import calculate, { DOMAIN, GLOBAL_M } from '../dataset/benchmark/ackley'
import PSO, { PSOConfig } from './pso'
import FitnessFunction from './fitnessFunction'

const pso = new PSO(<PSOConfig>{ populationSize: 3 })

describe('PSO', () => {
    it('performs pso on ackley', async (done) => {
        const particles = await pso.fit(
            Object.assign(new FitnessFunction(), {
                function: calculate,
                dimensions: [{ min: DOMAIN[0], max: DOMAIN[1] }, { min: DOMAIN[0], max: DOMAIN[1] }]
            })
        )
        console.log(particles, GLOBAL_M)
        done()
    })
})
