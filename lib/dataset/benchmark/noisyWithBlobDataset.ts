export default function generate(): number[][] {
    const dataset = []
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            dataset.push([0.05 + j * 0.11, 0.05 + i * 0.11])
        }
    }

    for (let i = 0; i < 200; i++) {
        dataset.push([
            0.5 + Math.random() * 0.1 * Math.sin(((Math.PI * 2) / 30) * i),
            0.5 + Math.random() * 0.1 * Math.cos(((Math.PI * 2) / 30) * i)
        ])
    }

    return dataset
}
