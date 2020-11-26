export default function generate(): number[][] {
    const dataset = []
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            dataset.push([j / 100, 0.01 * i])
        }
    }

    return dataset
}
