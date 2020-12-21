/* eslint-disable no-new */
import BoxedCircles from '@ascentcore/dataspot/datasets/problems/boxedCircles'
import Random from '@ascentcore/dataspot/math/random'
import MetaheuristicWrapper from '@ascentcore/dataspot/wrappers/metaheuristicWrapper'
import GA, { GAConfig } from '@ascentcore/dataspot/metaheuristics/ga'
import Container from '@ascentcore/dataspot/ui/container'

export default (async () => {
    Random.seed('circlefit')

    // Define number of circles
    const circles = 8

    // DOM Reference to be used for injecting the code
    const ref = Container.getRootContainer('[data-ref="documentation/circleFit"]')

    // Instantiate optimization function
    const boxedCircles = new BoxedCircles(circles)

    /**
     * Instantiate optimization algorithms.
     * Initially will start with the provided options but can be updated from UI
     */
    const ga = new GA({
        populationSize: 100,
        iterations: 10000,
        numOffsprings: 80,
        mutationType: 'all',
        mutationProbability: 0.05
    } as GAConfig)

    // Initialize Experiment UI
    new MetaheuristicWrapper(ref as HTMLElement, boxedCircles, ga)
})()
