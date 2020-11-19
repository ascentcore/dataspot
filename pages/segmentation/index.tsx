import { useEffect, useRef, useState } from 'react'
import MeanShift, { MeanShiftConfig } from '../../lib/clustering/meanShift'

const width = 60
const height = Math.floor(width * 0.8)

const outputWidth = 200
const outputHeight = Math.floor(outputWidth * 0.8)

export default function Segmentation() {
    const canvasRef = useRef(null)
    const clusteredRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d')

            const img1 = new Image()
            img1.onload = () => {
                ctx.drawImage(img1, 0, 0, width, height)

                let imgData = ctx.getImageData(0, 0, width, height)
                let points = []
                const { data } = imgData
                for (let i = 0; i < data.length; i += 4) {
                    points.push([data[i], data[i + 1], data[i + 2]])
                }

                ctx.drawImage(img1, 0, 0, outputWidth, outputHeight)

                const meanShift = new MeanShift({
                    clusterThreshold: 255 / 5
                } as MeanShiftConfig)
                meanShift.fit(points)
                const { centroids } = meanShift.config

                const newImgData = ctx.getImageData(0, 0, outputWidth, outputHeight)
                const newPoints = []
                const { data: resData } = newImgData
                for (let i = 0; i < resData.length; i += 4) {
                    newPoints.push([resData[i], resData[i + 1], resData[i + 2]])
                }

                const predictions = meanShift.predict(newPoints)
                for (let i = 0; i < resData.length; i += 4) {
                    const value = centroids[predictions[i / 4]]
                    newImgData.data[i] = value[0]
                    newImgData.data[i + 1] = value[1]
                    newImgData.data[i + 2] = value[2]
                }

                clusteredRef.current.getContext('2d').putImageData(newImgData, 0, 0)
            }

            img1.src = '/mean_shift_image.jpg'
            // img1.src = 'tc.png'
        }
    }, [canvasRef])
    return (
        <div>
            <h3>Segmentation</h3>
            <canvas ref={canvasRef} width={outputWidth} height={outputHeight} />
            <canvas ref={clusteredRef} width={outputWidth} height={outputHeight} />
        </div>
    )
}
