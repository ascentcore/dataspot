export default function generate(): number[][] {
    const dataset = []
    for (let i = 0; i < 250; i++) {
        dataset.push([
            0.2 + Math.random() * 0.15 * Math.sin(((Math.PI * 2) / 30) * i),
            0.5 + Math.random() * 0.15 * Math.cos(((Math.PI * 2) / 30) * i)
        ])
    }

    for (let i = 0; i < 250; i++) {
        dataset.push([
            0.38 + Math.random() * 0.15 * Math.sin(((Math.PI * 2) / 30) * i),
            0.65 + Math.random() * 0.15 * Math.cos(((Math.PI * 2) / 30) * i)
        ])
    }

    for (let i = 0; i < 250; i++) {
        dataset.push([
            0.62 + Math.random() * 0.15 * Math.sin(((Math.PI * 2) / 30) * i),
            0.65 + Math.random() * 0.15 * Math.cos(((Math.PI * 2) / 30) * i)
        ])
    }

    for (let i = 0; i < 250; i++) {
        dataset.push([
            0.8 + Math.random() * 0.15 * Math.sin(((Math.PI * 2) / 30) * i),
            0.5 + Math.random() * 0.15 * Math.cos(((Math.PI * 2) / 30) * i)
        ])
    }

    for (let i = 0; i < 250; i++) {
        dataset.push([
            0.5 + Math.random() * 0.15 * Math.sin(((Math.PI * 2) / 30) * i),
            0.3 + Math.random() * 0.15 * Math.cos(((Math.PI * 2) / 30) * i)
        ])
    }

    return dataset
}
