/* eslint-disable operator-assignment, no-param-reassign */
import EvolutionaryAlgorithm, { EvolutionaryConfig } from '../common/evolutionaryAlgorithm'
import FitnessFunction from './fitnessFunction'
import Random from '../math/random'

export class PopulationMetaheuristicConfig extends EvolutionaryConfig {
    public populationSize: number = 100
}

export class Individual {
    public id: number = 0

    public position: number[] = []

    public fitness = Infinity

    public bestPosition: number[] = []

    public bestFitness = Infinity

    public velocity: number[] | null = null

    computeFitness(fitnessFunction: FitnessFunction) {
        this.fitness = fitnessFunction.calculate(...this.position)
        if (this.fitness < this.bestFitness) {
            this.bestPosition = [...this.position]
            this.bestFitness = this.fitness
        }
    }
}

export default abstract class PopulationMetaheuristic<
    T extends PopulationMetaheuristicConfig
> extends EvolutionaryAlgorithm<T> {
    protected individuals!: Individual[]

    protected bestPosition!: number[]

    protected fitnessFunction!: FitnessFunction

    canStop(): boolean {
        return false
    }

    protected abstract movePosition(particle: Individual): void

    protected sortPopulation() {
        this.individuals.sort((i1, i2) => i1.fitness - i2.fitness)
    }

    protected updateGlobalBest(): void {
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

    public abstract step(): void

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
