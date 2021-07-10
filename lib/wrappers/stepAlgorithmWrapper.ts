/* eslint-disable no-new */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line no-new
import BaseComponent from '@ascentcore/dataspot/ui/common/baseComponent'
import DefinitionUI from '@ascentcore/dataspot/ui/definitionUI'
import { Accordion, Button, TabBar, Divider } from '@ascentcore/dataspot/ui/components'
import EvolutionaryAlgorithm, { EvolutionaryConfig } from '../common/evolutionaryAlgorithm'
import { SerializableConfig } from '../common/serializable'

export default class StepAlgorithmWrapper extends BaseComponent {
    public mainView: HTMLElement

    private running = false

    constructor(container: HTMLElement, evolutionaryAlgorithm: EvolutionaryAlgorithm<any>, stepCallback?: Function) {
        super(container)

        const { config } = evolutionaryAlgorithm
        const { constructor } = config

        this.root = this.getElement('div', ['m-2', 'metaheuristic-wrapper', 'panel'], container)
        const title = this.getElement('div', ['panel-header'], this.root)

        const tabs: TabBar = new TabBar(this.root, ['Execute', 'Config'], ['panel-nav'])

        const [mainContainer, configContainer] = tabs.containers
        this.mainView = mainContainer

        const buttonContainer = this.getElement('div', ['p-2'], this.mainView)

        configContainer.classList.add('m-2')
        configContainer.classList.add('p-2')

        if ('definitions' in constructor) {
            if (configContainer) {
                const { definitions } = constructor
                const configUI = new DefinitionUI(configContainer, config, definitions)

                new Button(configContainer, 'Update Configuration', () => {
                    const newConfig = configUI.getCurrentConfiguration()
                    evolutionaryAlgorithm.loadState({ ...evolutionaryAlgorithm.config, ...newConfig, history: [] })
                    evolutionaryAlgorithm.reset()
                    if (stepCallback) {
                        stepCallback()
                    }
                    tabs.setActive(0)
                })
            }
        }

        const run = () => {
            if (stepCallback) {
                const result = stepCallback()
                if (this.running && !result) {
                    window.requestAnimationFrame(() => run())
                }
            }
        }

        new Button(buttonContainer, 'Start', () => {
            tabs.setTitle(0, 'Execute (Running)')
            this.running = true
            run()
        })

        new Button(buttonContainer, 'Step', () => {
            run()
        })

        new Button(buttonContainer, 'Stop', () => {
            tabs.setTitle(0, 'Execute (Stopped)')
            this.running = false
        })

        run()
    }
}
