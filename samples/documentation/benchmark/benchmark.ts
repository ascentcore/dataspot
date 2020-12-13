import MeshPlot from '../@ascentcore/dataspot/visualizations/three/mesh'
import Ackley from '../@ascentcore/dataspot/datasets/benchmark/ackley'
import Easom from '../@ascentcore/dataspot/datasets/benchmark/easom'

import Griewank from '../@ascentcore/dataspot/datasets/benchmark/griewank'
import Rastrigin from '../@ascentcore/dataspot/datasets/benchmark/rastrigin'
import Rosenbrock from '../@ascentcore/dataspot/datasets/benchmark/rosenbrock'
import Schwefel from '../@ascentcore/dataspot/datasets/benchmark/schwefel'
import Sphere from '../@ascentcore/dataspot/datasets/benchmark/sphere'

export default (async () => {
    const funcs: any[] = [Ackley, Easom, Griewank, Rastrigin, Rosenbrock, Schwefel, Sphere]
    const funcNames: string[] = ['Ackley', 'Easom', 'Griewank', 'Rastrigin', 'Rosenbrock', 'Schwefel', 'Sphere']
    const ref: HTMLElement = document.querySelector(`[data-ref="documentation/benchmarkFunctions"]`) || document.body

    const selector = document.createElement('select')
    selector.innerHTML = funcs
        .map((val, index) => `<option value="${index}" ${index === 0 ? 'selected' : ''}>${funcNames[index]}</option>`)
        .join('')

    const selectorContainer = document.createElement('div')
    selectorContainer.innerHTML = '<span>Select Function:&nbsp;</span>'
    selectorContainer.appendChild(selector)

    const container = document.createElement('div')

    ref.appendChild(selectorContainer)
    ref.appendChild(container)

    function render(index: number) {
        const fnRef = funcs[index]
        container.innerHTML = ''
        const plot = new MeshPlot({ width: 400, height: 400 })
        plot.setContainer(container)
        const [xMin, xMax] = fnRef.DOMAIN
        const [yMin, yMax] = fnRef.DOMAIN
        const zFunc: any = fnRef.calculate
        plot.dataUpdate({
            zFunc,
            xMin,
            xMax,
            yMin,
            yMax
        })
    }

    render(0)

    selector.addEventListener('change', (ev: any) => {
        // eslint-disable-next-line radix
        render(parseInt(ev.target.value))
    })
})()
