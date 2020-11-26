/* eslint-disable operator-assignment, no-param-reassign */
import PopulationMetaheuristic, { Individual, PopulationMetaheuristicConfig } from './populationMetaheuristic'
import Random from '../math/random'
import Convergence from '../common/convergence'

export class PSOConfig extends PopulationMetaheuristicConfig {
    public inertiaWeight: number = 0.75

    public cognitiveWeight: number = 0.1

    public socialWeight: number = 0.3

    public convergenceIterations: number = -1

    public convergenceDecimalsAccuracy: number = 4
}

export default class PSO extends PopulationMetaheuristic<PSOConfig> {
    private convergence!: Convergence

    constructor(config?: PSOConfig | undefined) {
        super(Object.assign(new PSOConfig(), config))
    }

    protected movePosition(particle: Individual) {
        const { dimensions } = this.fitnessFunction
        const { inertiaWeight, cognitiveWeight, socialWeight } = this.config

        if (!particle.velocity) {
            particle.velocity = []
            for (let i = 0; i < dimensions.length; i++) {
                const d = dimensions[i].max - dimensions[i].min
                particle.velocity.push(Random.random(-d, d))
            }
        }
        for (let i = 0; i < dimensions.length; i++) {
            const vMomentum = inertiaWeight * particle.velocity[i]

            const d1 = particle.bestPosition[i] - particle.position[i]
            const vCognitive = cognitiveWeight * Random.random(0, 1) * d1

            const d2 = this.bestPosition[i] - particle.position[i]
            const vSocial = socialWeight * Random.random(0, 1) * d2

            particle.velocity[i] = vMomentum + vCognitive + vSocial
            particle.position[i] = particle.position[i] + particle.velocity[i]

            if (particle.position[i] > dimensions[i].max) {
                particle.position[i] = dimensions[i].max
            }
            if (particle.position[i] < dimensions[i].min) {
                particle.position[i] = dimensions[i].min
            }
        }
    }

    public step() {
        if (!this.convergence && this.config.convergenceIterations > 0) {
            this.convergence = new Convergence(this.config.convergenceIterations)
        }
        for (let i = 0; i < this.individuals.length; i++) {
            this.movePosition(this.individuals[i])
        }
        for (let i = 0; i < this.individuals.length; i++) {
            this.individuals[i].computeFitness(this.fitnessFunction)
        }
        this.sortPopulation()
        this.updateGlobalBest()

        if (this.convergence) {
            const { convergenceDecimalsAccuracy } = this.config
            this.convergence.addValue(
                this.fitnessFunction.calculate(this.bestPosition).toFixed(convergenceDecimalsAccuracy)
            )
        }
    }

    canStop(): boolean {
        return this.convergence && this.convergence.hadConverged()
    }
}
