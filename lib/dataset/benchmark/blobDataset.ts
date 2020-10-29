export default function generate(): number[][] {
    const dataset = []
    for (let i = 0; i < 500; i++) {
        dataset.push([
            0.2 + Math.random() * 0.2 * Math.sin(((Math.PI * 2) / 90) * i),
            0.25 + Math.random() * 0.2 * Math.cos(((Math.PI * 2) / 90) * i)
        ])
    }

    for (let i = 0; i < 500; i++) {
        dataset.push([
            0.45 + Math.random() * 0.2 * Math.sin(((Math.PI * 2) / 90) * i),
            0.8 + Math.random() * 0.2 * Math.cos(((Math.PI * 2) / 90) * i)
        ])
    }

    for (let i = 0; i < 500; i++) {
        dataset.push([
            0.8 + Math.random() * 0.2 * Math.sin(((Math.PI * 2) / 90) * i),
            0.25 + Math.random() * 0.2 * Math.cos(((Math.PI * 2) / 90) * i)
        ])
    }

    return dataset
}
