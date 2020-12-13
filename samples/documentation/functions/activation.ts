/* eslint-disable no-new */
import ActivationFunctions from '@ascentcore/dataspot/functions/activations'
import Axis from '@ascentcore/dataspot/visualizations/d3/axis'
import LinePlot from '@ascentcore/dataspot/visualizations/d3/lineplot'
import SVGMultipleVisualization from '@ascentcore/dataspot/visualizations/d3/svgmultiple'
import Title from '@ascentcore/dataspot/visualizations/d3/title'

export default (async () => {
    // DOM Reference to be used for injecting the code
    const ref: HTMLElement = document.querySelector(`[data-ref="documentation/activationFunctions"]`) || document.body
    console.log(ActivationFunctions)
    console.log(Object.getOwnPropertyNames(ActivationFunctions))
    Object.getOwnPropertyNames(ActivationFunctions).forEach((functionName: string) => {
        try {
            const func: Function = (ActivationFunctions as any)[functionName]

            const data = []
            for (let i = -5; i < 5; i += 0.1) {
                data.push({ x: i, y: func(i) })
            }

            const axis = new Axis({}, 'axis-elem')
            const line = new LinePlot({}, 'line-elem')
            const label = new Title({ text: functionName })
            const functionPlot = new SVGMultipleVisualization({ width: 240, height: 200 }, 'func-elem', [
                label,
                axis,
                line
            ])
            functionPlot.setContainer(ref)
            functionPlot.setup()

            functionPlot.dataUpdate(data, 'axis-elem')
            functionPlot.dataUpdate(data, 'line-elem')
        } catch (err) {
            console.log(err)
        }
    })
})()
