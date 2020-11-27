import { Individual } from '../populationMetaheuristic'
import Random from '../../math/random'

export default class Tournament {
    constructor(private numSelected: number) {}

    execute(individuals: Individual[]) {
        const selection: Individual[] = []
        const numParticipants = Math.round(individuals.length / 2)

        for (let i = 0; i < this.numSelected; i++) {
            // tournament round
            let best: Individual | undefined
            for (let j = 0; j < numParticipants; j++) {
                const index = Random.seededRandomInt(0, individuals.length - 1)
                const ind = individuals[index]
                if (best === undefined || ind.fitness < best.fitness) {
                    best = ind
                }
            }
            if (best) {
                selection.push(best)
            }
        }

        return selection
    }
}
