import Random from '../math/random'

export default function generate(count: number = 100): number[][] {
    const dataset = []
    for (let i = 0; i < count; i++) {
        dataset.push([
            0.5 + Random.random(0.4, 0.45) * Math.sin(((Math.PI * 2) / 90) * i),
            0.5 + Random.random(0.4, 0.45) * Math.cos(((Math.PI * 2) / 90) * i)
        ])
    }

    for (let i = 0; i < count; i++) {
        dataset.push([
            0.5 + Random.random(0.3, 0.35) * Math.sin(((Math.PI * 2) / 90) * i),
            0.5 + Random.random(0.3, 0.35) * Math.cos(((Math.PI * 2) / 90) * i)
        ])
    }

    for (let i = 0; i < count; i++) {
        dataset.push([
            0.5 + Random.random(0.2, 0.25) * Math.sin(((Math.PI * 2) / 90) * i),
            0.5 + Random.random(0.2, 0.25) * Math.cos(((Math.PI * 2) / 90) * i)
        ])
    }

    return dataset
}
