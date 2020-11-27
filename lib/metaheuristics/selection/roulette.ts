import { Individual } from '../populationMetaheuristic'
import Random from '../../math/random'

export default class Roulette {
    constructor(private numSelected: number) {}

    ranking(individuals: Individual[]) {
        let sum = 0
        const weights = []
        for (let i = 0; i < individuals.length; i++) {
            const invertedFitness = 1 / individuals[i].fitness
            weights.push(invertedFitness)
            sum += invertedFitness
        }
        return weights.map((weight) => weight / sum)
    }

    execute(individuals: Individual[]): Individual[] {
        const selection: Individual[] = []
        let individual: Individual

        const weights = this.ranking(individuals)

        for (let i = 0; i < this.numSelected; i++) {
            let rand = Random.seededRandom(0, 1)
            let index = 0
            individual = individuals[index]
            while (rand > 0 && index < individuals.length) {
                individual = individuals[index]
                rand -= weights[index]

                index++
            }

            selection.push(individual)
        }

        return selection
    }
}
