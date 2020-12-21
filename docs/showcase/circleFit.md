---
layout: default
title: Circle Fit Problem (GA)
parent: Showcase
grand_parent: 
has_children: false
---

# Circle Fit Problem solved with Genetic Algorithms

The CircleFit problem was designed to be used as benchmark for optimisations algorithms (GA, PSOA).
The problem requires to fit a number of `n` circles inside a 1x1 Box such that the unoccupied area to be minimized. 
The circles are not allowed to overlap or exit outside the bounding box.

<img src='/dataspot/assets/images/problems/circleFit.svg'>

## Experiment

The interactive experiment below is using Genetic Algorithms to optimize the problem for a number of 8 circles.
You can update algorithm options in the config panel. With each update of the configuration the optimization will reset.

<div data-ref="documentation/circleFit"></div>
<script src="/dataspot/samples/circleFit.js"></script>

## Code

Experiment code

``` ts
import BoxedCircles from '@ascentcore/dataspot/datasets/problems/boxedCircles'
import Random from '@ascentcore/dataspot/math/random'
import MetaheuristicWrapper from '@ascentcore/dataspot/wrappers/metaheuristicWrapper'
import GA, { GAConfig } from '@ascentcore/dataspot/metaheuristics/ga'

export default (async () => {
    Random.seed('circlefit')

    // Define number of circles
    const circles = 15

    // DOM Reference to be used for injecting the code
    const ref = document.querySelector(`[data-ref="documentation/circleFit"]`) || document.body

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
```
