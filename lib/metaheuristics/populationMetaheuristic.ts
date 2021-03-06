/* eslint-disable operator-assignment, no-param-reassign */
import EvolutionaryAlgorithm, { EvolutionaryConfig } from '../common/evolutionaryAlgorithm'
import Random from '../math/random'

export class PopulationMetaheuristicConfig extends EvolutionaryConfig {
    public populationSize: number = 100

    public bestPosition: number[] = []

    static definitions = {
        populationSize: { label: 'Population Size', min: 10, default: 100 }
    }
}

export class Individual {
    public id: number = 0

    public position: number[] = []

    public fitness = Infinity

    public bestPosition: number[] = []

    public bestFitnessValue = Infinity

    public velocity: number[] | null = null

    computeFitness(fitnessFunction: Function) {
        this.fitness = fitnessFunction(this.position)
        if (this.fitness < this.bestFitnessValue) {
            this.bestPosition = [...this.position]
        }
    }
}

export default abstract class PopulationMetaheuristic<
    T extends PopulationMetaheuristicConfig
> extends EvolutionaryAlgorithm<T> {
    protected individuals!: Individual[]

    protected fitnessFunction!: Function

    protected dimensions!: { min: number; max: number }[]

    canStop(): boolean {
        return false
    }

    protected abstract movePosition(...particles: Individual[]): void

    protected sortPopulation() {
        this.individuals.sort((i1, i2) => i1.fitness - i2.fitness)
    }

    protected updateGlobalBest(): void {
        if (!this.individuals.length) {
            throw new Error(
                'Algorithm was not initialized. Call preparePopulation or load pretrained configuration using loadState'
            )
        }

        let newBestPosition = [...this.individuals[0].bestPosition]
        let newBestFitness = this.individuals[0].bestFitnessValue
        for (let i = 1; i < this.individuals.length; i++) {
            if (this.individuals[i].bestFitnessValue < newBestFitness) {
                newBestPosition = [...this.individuals[i].bestPosition]
                newBestFitness = this.individuals[i].bestFitnessValue
            }
        }
        this.config.bestPosition = newBestPosition
    }

    public resetPopulation(): void {
        const { populationSize } = this.config
        this.iteration = 0
        this.individuals = []
        for (let i = 0; i < populationSize; i++) {
            const p = new Individual()
            p.id = i
            for (let j = 0; j < this.dimensions.length; j++) {
                const domainValue = Random.random(this.dimensions[j].min, this.dimensions[j].max)
                p.position.push(domainValue)
                p.bestPosition.push(domainValue)
            }
            this.individuals.push(p)
        }
        // if population reinitialized but best position exists, add the best position history to one of the particles
        if (this.config.bestPosition && this.config.bestPosition.length !== 0 && populationSize) {
            this.individuals[0].position = [...this.config.bestPosition]
            this.individuals[0].bestPosition = [...this.config.bestPosition]
        }

        this.config.bestPosition = [...this.individuals[0].position]
    }

    public abstract step(): void

    public *fitAsync(fitessFunction: Function, dimensions: { min: number; max: number }[]): Generator {
        this.fitnessFunction = fitessFunction
        this.dimensions = dimensions
        this.resetPopulation()
        while (!this.shouldStop() && !this.canStop()) {
            this.step()
            yield this.individuals.map((individual: Individual) => individual.position)
            this.iteration++
        }
        this.onEndFit()
        return this.individuals.map((individual: Individual) => individual.bestPosition)
    }

    public fit(fitessFunction: Function, dimensions: { min: number; max: number }[]): number[][] {
        this.fitnessFunction = fitessFunction
        this.dimensions = dimensions
        this.resetPopulation()
        while (!this.shouldStop() && !this.canStop()) {
            this.step()
            this.iteration++
        }
        this.onEndFit()

        return this.individuals.map((individual: Individual) => individual.bestPosition)
    }

    onEndFit(): void {}

    public getBest(): number[] {
        return this.config.bestPosition
    }
}
