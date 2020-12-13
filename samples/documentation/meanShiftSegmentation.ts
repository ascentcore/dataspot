import MeanShift, { MeanShiftConfig } from '@ascentcore/dataspot/clustering/meanShift'
import Random from '@ascentcore/dataspot/math/random'
import CanvasUtils from '@ascentcore/dataspot/utils/canvasUtils'

export default (async () => {
    Random.seed('segmentation')

    let clusterThreshold = 127

    const root = document.createElement('div')
    const ref = document.querySelector(`[data-ref="documentation/meanShiftSegmentation"]`) || document.body
    ref.appendChild(root)

    const inputCanvas = document.createElement('canvas')
    root.appendChild(inputCanvas)

    const outputCanvas = document.createElement('canvas')
    root.appendChild(outputCanvas)

    const img = new Image()

    const doSegmentation = () => {
        const { width, height } = img
        const [fitWidth, fitHeight] = CanvasUtils.getMaxSizedValues(width, height, 80, 80)
        const [renderWidth, renderHeight] = CanvasUtils.getMaxSizedValues(width, height, 500, 500)
        inputCanvas.width = renderWidth
        inputCanvas.height = renderHeight

        outputCanvas.width = renderWidth
        outputCanvas.height = renderHeight

        const ctx = inputCanvas.getContext('2d')
        const outCtx = outputCanvas.getContext('2d')
        if (ctx !== null && outCtx !== null) {
            ctx.drawImage(img, 0, 0, fitWidth, fitHeight)
            const points = CanvasUtils.convertCanvasToSpatialData(ctx, 0, 0, fitWidth, fitHeight)
            ctx.drawImage(img, 0, 0, renderWidth, renderHeight)
            outCtx.drawImage(img, 0, 0, renderWidth, renderHeight)

            const meanShift = new MeanShift({
                clusterThreshold
            } as MeanShiftConfig)
            meanShift.fit(points)
            const { centroids } = meanShift.config
            const predictPoints = CanvasUtils.convertCanvasToSpatialData(ctx, 0, 0, renderWidth, renderHeight)
            const labels = meanShift.predict(predictPoints)

            const newImgData = outCtx.getImageData(0, 0, renderWidth, renderHeight)
            CanvasUtils.getImageDataFromCentroidPrediction(newImgData, labels, centroids)
            outCtx.putImageData(newImgData, 0, 0)
        }
    }

    // <input type='range' value={value} min={0} max={result.distances[0]} onChange={handleChange} step={0.001} />

    const clusterTreshold = document.createElement('input')
    clusterTreshold.setAttribute('type', 'range')
    clusterTreshold.setAttribute('value', '127')
    clusterTreshold.setAttribute('min', '25')
    clusterTreshold.setAttribute('max', '200')
    clusterTreshold.setAttribute('step', '1')
    clusterTreshold.addEventListener('change', (evt: any) => {
        if (evt.target !== null) {
            clusterThreshold = parseInt(evt.target.value, 10)
            doSegmentation()
        }
    })

    root.appendChild(clusterTreshold)

    img.onload = () => {
        doSegmentation()
    }
    img.src = '/dataspot/assets/images/seg1.png'
    // img.src = '/dataspot/assets/images/mean_shift_image.jpg'
    img.crossOrigin = 'Anonymous'
})()
