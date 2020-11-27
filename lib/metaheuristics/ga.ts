/* eslint-disable operator-assignment, no-param-reassign */
import PopulationMetaheuristic, { Individual, PopulationMetaheuristicConfig } from './populationMetaheuristic'
import Random from '../math/random'
import Convergence from '../common/convergence'
import * as selectionFunctionMappings from './selection/selection-functions'

export class GAConfig extends PopulationMetaheuristicConfig {
    public selectionSize = 10

    public selectionFn: 'Roulette' | 'Tournament' = 'Roulette'
}

export default class GA extends PopulationMetaheuristic<GAConfig> {
    private convergence!: Convergence

    private selection!: selectionFunctionMappings.Roulette | selectionFunctionMappings.Tournament

    constructor(config?: GAConfig | undefined) {
        super(Object.assign(new GAConfig(), config))
        this.initializeDependencies()
    }

    private crossover(individual: Individual, parent1: Individual, parent2: Individual) {
        for (let j = 0; j < this.fitnessFunction.dimensions.length; j++) {
            let rand = Random.seededRandom(0, 1)
            if (rand < 0.5) {
                individual.position[j] = parent1.position[j]
                individual.bestPosition[j] = parent1.position[j]
            } else {
                individual.position[j] = parent2.position[j]
                individual.bestPosition[j] = parent2.position[j]
            }
            rand = Random.seededRandom(0, 1)
            if (rand < 0.2) {
                individual.position[j] = (parent1.position[j] + parent2.position[j]) / 2
                individual.bestPosition[j] = (parent1.position[j] + parent2.position[j]) / 2
            }
        }
    }

    private mutation(individual: Individual) {
        for (let j = 0; j < this.fitnessFunction.dimensions.length; j++) {
            let rand = Random.seededRandom(0, 1)
            if (rand < 0.1) {
                const interval = this.fitnessFunction.dimensions[j].max - this.fitnessFunction.dimensions[j].min
                rand = Random.seededRandom(0, 1)
                if (rand < 0.5) {
                    individual.position[j] += Random.seededRandom(0, interval * 0.005)
                } else {
                    individual.position[j] -= Random.seededRandom(0, interval * 0.005)
                }
                if (individual.position[j] > this.fitnessFunction.dimensions[j].max) {
                    individual.position[j] = this.fitnessFunction.dimensions[j].max
                }
                if (individual.position[j] < this.fitnessFunction.dimensions[j].min) {
                    individual.position[j] = this.fitnessFunction.dimensions[j].min
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

            // individual to replace
            const index = this.individuals.length - i / 2 - 1
            const child = this.individuals[index]
            this.movePosition(child, parent1, parent2)
        }
        for (let i = 0; i < this.individuals.length; i++) {
            this.individuals[i].computeFitness(this.fitnessFunction)
        }
        this.updateGlobalBest()
    }

    public canStop(): boolean {
        return this.convergence && this.convergence.hadConverged()
    }

    public initializeDependencies(): void {
        const { selectionFn, selectionSize } = this.config
        this.selection = new selectionFunctionMappings[selectionFn](selectionSize)
    }

    public loadState(config: string): void {
        super.loadState(config)
        this.initializeDependencies()
    }
}
