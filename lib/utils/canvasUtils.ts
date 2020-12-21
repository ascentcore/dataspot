/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
export default class CanvasUtils {
    static convertCanvasToSpatialData(ctx: any, sx: number, sy: number, width: number, height: number) {
        const imgData = ctx.getImageData(sx, sy, width, height)
        const points = []
        const { data } = imgData
        for (let i = 0; i < data.length; i += 4) {
            points.push([data[i], data[i + 1], data[i + 2]])
        }

        return points
    }

    static getImageDataFromCentroidPrediction(imageData: any, predictedLabels: number[], centroids: number[][]) {
        console.log(predictedLabels)
        for (let i = 0; i < imageData.data.length; i += 4) {
            const value = centroids[predictedLabels[i / 4]]
            imageData.data[i] = value[0]
            imageData.data[i + 1] = value[1]
            imageData.data[i + 2] = value[2]
        }
    }

    static getMaxSizedValues(width: number, height: number, maxWidth: number, maxHeight: number): number[] {
        const ratioX = maxWidth / width
        const ratioY = maxHeight / height
        const ratio = Math.min(ratioX, ratioY)

        const newWidth = Math.floor(width * ratio)
        const newHeight = Math.floor(height * ratio)

        return [newWidth, newHeight]
    }
}
