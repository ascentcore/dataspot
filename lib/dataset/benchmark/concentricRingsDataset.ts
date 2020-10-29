import { MathUtils } from '../../math-utils'

export default function generate(): number[][] {
    const dataset = []
    for (let i = 0; i < 500; i++) {
        dataset.push([
            0.5 + MathUtils.random(0.05, 0.45) * Math.sin(((Math.PI * 2) / 90) * i),
            0.5 + MathUtils.random(0.05, 0.45) * Math.cos(((Math.PI * 2) / 90) * i)
        ])
    }

    for (let i = 0; i < 500; i++) {
        dataset.push([
            0.5 + MathUtils.random(0.05, 0.35) * Math.sin(((Math.PI * 2) / 90) * i),
            0.5 + MathUtils.random(0.05, 0.35) * Math.cos(((Math.PI * 2) / 90) * i)
        ])
    }

    for (let i = 0; i < 500; i++) {
        dataset.push([
            0.5 + MathUtils.random(0.05, 0.25) * Math.sin(((Math.PI * 2) / 90) * i),
            0.5 + MathUtils.random(0.05, 0.25) * Math.cos(((Math.PI * 2) / 90) * i)
        ])
    }

    return dataset
}
