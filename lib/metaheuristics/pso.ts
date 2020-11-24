/* eslint-disable operator-assignment, no-param-reassign */
import EvolutionaryAlgorithm, { EvolutionaryConfig } from '../common/evolutionaryAlgorithm'
import Individual from './individual'
import FitnessFunction from './fitnessFunction'
import Random from '../math/random'

export class PSOConfig extends EvolutionaryConfig {
    public inertiaWeight: number = 0.75

    public cognitiveWeight: number = 0.1

    public socialWeight: number = 0.3

    public populationSize: number = 100
}

export default class PSO extends EvolutionaryAlgorithm<PSOConfig> {
    protected individuals!: Individual[]

    protected bestPosition!: number[]

    protected initialized = false

    protected fitnessFunction!: FitnessFunction

    constructor(config?: PSOConfig | undefined) {
        super(Object.assign(new PSOConfig(), config))
    }

    canStop(): boolean {
        return false
    }

    private movePosition(particle: Individual) {
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

    private sortPopulation() {
        this.individuals.sort((i1, i2) => i1.fitness - i2.fitness)
    }

    private updateGlobalBest(): void {
        if (!this.individuals.length) {
            throw new Error(
                'Algorithm was not initialized. Call preparePopulation or load pretrained configuration using loadState'
            )
        }

        this.bestPosition = [...this.individuals[0].bestPosition, this.individuals[0].bestFitness]

        for (let i = 1; i < this.individuals.length; i++) {
            if (this.individuals[i].bestFitness < this.bestPosition.slice(-1)[0]) {
                this.bestPosition = [...this.individuals[i].bestPosition, this.individuals[i].bestFitness]
            }
        }
    }

    step() {
        for (let i = 0; i < this.individuals.length; i++) {
            this.movePosition(this.individuals[i])
        }
        for (let i = 0; i < this.individuals.length; i++) {
            this.individuals[i].computeFitness(this.fitnessFunction)
        }
        this.sortPopulation()
        this.updateGlobalBest()
    }

    preparePopulation(): void {
        const { populationSize } = this.config
        this.iteration = 0
        this.individuals = []
        for (let i = 0; i < populationSize; i++) {
            const p = new Individual()
            for (let j = 0; j < this.fitnessFunction.dimensions.length; j++) {
                const randomNumber = Random.random(
                    this.fitnessFunction.dimensions[j].min,
                    this.fitnessFunction.dimensions[j].max
                )
                p.position.push(randomNumber)
                p.bestPosition.push(randomNumber)
            }
            this.individuals.push(p)
        }
        this.updateGlobalBest()
    }

    *fitAsync(fitessFunction: FitnessFunction): Generator {
        this.fitnessFunction = fitessFunction
        this.preparePopulation()
        while (!this.shouldStop() && !this.canStop()) {
            this.step()
            yield this.individuals.map((individual: Individual) => individual.position)
            this.iteration++
        }
        this.onEndFit()
        return this.individuals.map((individual: Individual) => individual.position)
    }

    fit(fitessFunction: FitnessFunction): number[][] {
        this.fitnessFunction = fitessFunction
        this.preparePopulation()
        while (!this.shouldStop() && !this.canStop()) {
            this.step()
            this.iteration++
        }
        this.onEndFit()

        return this.individuals.map((individual: Individual) => individual.position)
    }

    onEndFit(): void {}
}
