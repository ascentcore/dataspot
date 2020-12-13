/* eslint-disable no-new */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MetaheuristicProblem } from '@ascentcore/dataspot/datasets/problems/boxedCircles'
import PopulationMetaheuristic, {
    PopulationMetaheuristicConfig
} from '@ascentcore/dataspot/metaheuristics/populationMetaheuristic'
import BaseComponent from '@ascentcore/dataspot/ui/common/baseComponent'
import { Accordion, Button, TabBar, Divider } from '@ascentcore/dataspot/ui/components'
import DefinitionUI from '@ascentcore/dataspot/ui/definitionUI'
import Axis from '../visualizations/d3/axis'
import LinePlot from '../visualizations/d3/lineplot'
import SVGMultipleVisualization from '../visualizations/d3/svgmultiple'

export default class MetaheuristicWrapper extends BaseComponent {
    public mainView: HTMLElement

    constructor(
        container: HTMLElement,
        problem: MetaheuristicProblem,
        metaheuristing: PopulationMetaheuristic<PopulationMetaheuristicConfig>,
        updateCallback?: Function
    ) {
        super(container)
        const { config } = metaheuristing
        const { constructor } = config

        let fitnesses: any[] = []
        let running = false

        this.root = this.getElement('div', ['m-2', 'metaheuristic-wrapper', 'panel'], container)
        const title = this.getElement('div', ['panel-header'], this.root)

        const tabs: TabBar = new TabBar(this.root, ['Execute', 'Config'], ['panel-nav'])

        let fitGen = metaheuristing.fitAsync(problem.calculate, problem.getDimensionsDomain())

        const configContainer = tabs.containers[1]
        configContainer.classList.add('m-2')
        configContainer.classList.add('p-2')
        if ('definitions' in constructor) {
            if (configContainer) {
                const { definitions } = constructor
                const configUI = new DefinitionUI(configContainer, config, definitions)

                new Button(configContainer, 'Update Configuration', () => {
                    const newConfig = configUI.getCurrentConfiguration()
                    metaheuristing.loadState(newConfig as PopulationMetaheuristicConfig)
                    fitGen = metaheuristing.fitAsync(problem.calculate, problem.getDimensionsDomain())
                    fitnesses.length = 0
                    tabs.setActive(0)
                })
            }
        }

        const axisElemClass = 'axis-elem'
        const lineElemClass = 'line-elem'
        const functionElemClass = 'function-elem'

        const axis = new Axis({ autoscaleX: true, autoscaleY: true }, axisElemClass)
        const line = new LinePlot({ autoscaleX: true, autoscaleY: true }, lineElemClass)
        const functionPlot = new SVGMultipleVisualization({ width: 400, height: 200 }, functionElemClass, [axis, line])

        const step = () => {
            fitGen.next()

            const bestIndividual = metaheuristing.getBest()
            const bestValue = problem.calculate(bestIndividual)

            fitnesses.push({ x: metaheuristing.getIteration(), y: bestValue })
            fitnesses = fitnesses.slice(-100)

            if (updateCallback) {
                updateCallback(bestIndividual, bestValue)
            }

            problem.updateVisualization(bestIndividual, bestValue)
            functionPlot.dataUpdate(fitnesses, axisElemClass)
            functionPlot.dataUpdate(fitnesses, lineElemClass)

            window.requestAnimationFrame(() => {
                if (running) {
                    step()
                }
            })
        }

        const mainContentContainer = tabs.containers[0]

        const buttonContainer = this.getElement('div', ['p-2'], mainContentContainer)

        new Button(buttonContainer, 'Start', () => {
            running = true
            tabs.setTitle(0, 'Execute (Running)')
            step()
        })

        new Button(buttonContainer, 'Step', () => {
            running = false
            step()
        })

        new Button(buttonContainer, 'Stop', () => {
            running = false
            tabs.setTitle(0, 'Execute (Stopped)')
        })

        const resetPopulation = new Button(buttonContainer, 'Reset Population', () => {
            fitnesses.length = 0
            metaheuristing.config.bestPosition.length = 0
            metaheuristing.resetPopulation()
        })

        new Divider(mainContentContainer, 'Custom Representation')
        const mainViewContainer = this.getElement('div', ['p-2'], mainContentContainer)
        this.mainView = this.getElement('div', ['main-view'], mainViewContainer)

        problem.initializeVisualization(this.mainView)

        new Divider(mainContentContainer, 'Fitness Function')

        functionPlot.setContainer(this.getElement('div', ['p-2'], mainContentContainer))
        functionPlot.setup()
    }
}
