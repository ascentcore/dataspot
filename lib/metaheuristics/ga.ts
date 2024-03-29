/* eslint-disable operator-assignment, no-param-reassign */
import PopulationMetaheuristic, { Individual, PopulationMetaheuristicConfig } from './populationMetaheuristic'
import Random from '../math/random'
import Convergence from '../common/convergence'
import * as selectionFunctionMappings from './selection/selection-functions'

export class GAConfig extends PopulationMetaheuristicConfig {
    public numOffsprings = 10

    public mutationType: 'all' | 'single' = 'all'

    public mutationProbability: number = 0.01

    public crossoverType: 'randomPick' | 'singleSplit' = 'singleSplit'

    public selectionFn: 'Roulette' | 'Tournament' = 'Roulette'

    static definitions = {
        ...PopulationMetaheuristicConfig.definitions,
        numOffsprings: { label: 'Number of offsprings', min: 2, default: 90 },
        crossoverType: { label: 'Crossover type', options: ['randomPick', 'singleSplit'], default: 'singleSplit' },
        mutationType: { label: 'Mutation type', options: ['all', 'single'], default: 'all' },
        mutationProbability: { label: 'Mutation probability', min: 0, max: 1, default: 0.01, step: 0.05 },
        selectionFn: { label: 'Selection Function', options: ['Roulette', 'Tournament'], default: 'Roulette' }
    }
}

export default class GA extends PopulationMetaheuristic<GAConfig> {
    private convergence!: Convergence

    private selection!: selectionFunctionMappings.Roulette | selectionFunctionMappings.Tournament

    constructor(config?: GAConfig | undefined) {
        if (config && config.numOffsprings % 2 === 1) {
            config.numOffsprings++
        }
        if (config && config.numOffsprings > config.populationSize) {
            throw new Error('Selection size has to be smaller than population size')
        }
        super(Object.assign(new GAConfig(), config))
        this.initializeDependencies()
    }

    private crossover(individual: Individual, parent1: Individual, parent2: Individual) {
        const splitLocation = Random.randomInt(0, this.dimensions.length)
        for (let j = 0; j < this.dimensions.length; j++) {
            if (
                (this.config.crossoverType === 'singleSplit' && splitLocation < j) ||
                (this.config.crossoverType === 'randomPick' && Random.random(0, 1) < 0.5)
            ) {
                individual.position[j] = parent1.position[j]
                individual.bestPosition[j] = parent1.position[j]
            } else {
                individual.position[j] = parent2.position[j]
                individual.bestPosition[j] = parent2.position[j]
            }
        }
    }

    private mutation(individual: Individual) {
        const mutate = (pos: number) => {
            individual.position[pos] = Random.random(this.dimensions[pos].min, this.dimensions[pos].max)

            if (individual.position[pos] > this.dimensions[pos].max) {
                individual.position[pos] = this.dimensions[pos].max
            }
            if (individual.position[pos] < this.dimensions[pos].min) {
                individual.position[pos] = this.dimensions[pos].min
            }
        }

        if (this.config.mutationType === 'single') {
            mutate(Random.seededRandomInt(0, this.dimensions.length))
        } else {
            for (let j = 0; j < this.dimensions.length; j++) {
                const rand = Random.random(0, 1)
                if (rand < this.config.mutationProbability) {
                    mutate(j)
                }
            }
        }
    }

    protected movePosition(individual: Individual, parent1: Individual, parent2: Individual) {
        this.crossover(individual, parent1, parent2)
        this.mutation(individual)
    }

    public step() {
        const selected = this.selection.execute(this.individuals)
        for (let i = 0; i < selected.length; i += 2) {
            const parent1: Individual = selected[i]
            const parent2: Individual = selected[i + 1]

            const child = new Individual()
            this.individuals.push(child)
            this.movePosition(child, parent1, parent2)
        }
        this.computeFitness()
        this.sortPopulation()
        this.updateGlobalBest()
        this.individuals.splice(this.config.populationSize)
    }

    public computeFitness() {
        for (let i = 0; i < this.individuals.length; i++) {
            if (this.individuals[i].fitness === Infinity) {
                this.individuals[i].computeFitness(this.fitnessFunction)
            }
        }
    }

    public canStop(): boolean {
        return this.convergence && this.convergence.hadConverged()
    }

    public initializeDependencies(): void {
        const { selectionFn, numOffsprings } = this.config
        this.selection = new selectionFunctionMappings[selectionFn](numOffsprings)
    }

    public loadState(config: string): void {
        super.loadState(config)
        this.initializeDependencies()
    }
}
