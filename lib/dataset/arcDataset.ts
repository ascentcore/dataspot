import { MathUtils } from '../utils/math-utils'

export default function generate(): number[][] {
    const dataset = []
    for (let i = 0; i < 180; i++) {
        dataset.push([
            0.1 + (i / 180) * 0.6 - 0.08 + Math.random() * 0.08,
            0.4 + MathUtils.random(0.05, 0.25) * Math.cos((((Math.PI * 2) / 90) * i) / 2)
        ])
    }

    for (let i = 0; i < 180; i++) {
        dataset.push([
            0.35 + (i / 180) * 0.6 - 0.08 + Math.random() * 0.08,
            0.7 - MathUtils.random(0.05, 0.25) * Math.cos((((Math.PI * 2) / 90) * i) / 2)
        ])
    }

    return dataset
}
