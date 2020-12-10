import TSne from './lib/reduction/tSNE'
;(async () => {
    const tsne = new TSne({ epsilon: 10, perplexity: 30, dim: 2, iterations: 500 })

    const dists = [[1.0, 0.1, 0.2], [0.1, 1.0, 0.3], [0.2, 0.1, 1.0]]
    tsne.initDataDist(dists)

    for (let k = 0; k < 500; k++) {
        tsne.step()
    }

    console.log(tsne.getSolution())
})()
