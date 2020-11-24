import FitnessFunction from './fitnessFunction'

export default class Individual {
    public id: number = 0

    public position: number[] = []

    public fitness = Infinity

    public bestPosition: number[] = []

    public bestFitness = Infinity

    public velocity: number[] | null = null

    computeFitness(fitnessFunction: FitnessFunction) {
        this.fitness = fitnessFunction.function(...this.position)
        if (this.fitness < this.bestFitness) {
            this.bestPosition = [...this.position]
            this.bestFitness = this.fitness
        }
    }
}
