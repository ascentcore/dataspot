import Random from '../math/random'

/**
 * The clustering datasets are a set of synthetic 2D data to be used
 * for benchmarking clustering algorithms. The dataset is intended to grow
 * but the current set should allow one to evaluate performance for all types
 * of clustering algorithms
 *
 * Running sample for the current set of clustering datasets:
 * @sample documentation/clusteringComparison
 */
export default class clustering {
    /**
     * Generates two interleaving arc shape like clusters.
     * See "arc" representation from the running page sample
     * @param count number of points / cluster
     */
    public static arc(count = 200): number[][] {
        const dataset = []
        for (let i = 0; i < count; i++) {
            const angle = (Math.PI * Math.random() * 180) / 180 - Math.PI / 2
            dataset.push([
                0.3 + Math.random() * 0.1 + 0.2 * Math.sin(angle),
                0.3 + Math.random() * 0.1 + Math.cos(angle)
            ])

            dataset.push([
                0.7 + Math.random() * 0.1 + 0.2 * Math.sin(angle),
                0.3 + Math.random() * 0.1 + Math.cos(angle)
            ])

            dataset.push([
                0.5 + Math.random() * 0.1 + 0.2 * Math.sin(angle),
                0.7 + Math.random() * 0.1 - Math.cos(angle)
            ])
        }

        return dataset
    }

    /**
     * Generates 3 globular shape blob clusters with a minimum .2 distance between blobs.
     * See "blob" representation from the running page sample
     * @param pointsPerCluster number of points to be generated / cluster
     */
    public static blob(pointsPerCluster = 100): number[][] {
        const dataset: number[][] = []
        const locations = [
            [0.2, 0.25],
            [0.45, 0.8],
            [0.8, 0.25]
        ]
        for (let j = 0; j < locations.length; j++) {
            const [x, y] = locations[j]
            for (let i = 0; i < pointsPerCluster; i++) {
                const angle = (Math.random() * 360 * Math.PI) / 180
                const length = Math.random() * 0.2
                dataset.push([x + length * Math.sin(angle), y + length * Math.cos(angle)])
            }
        }

        return dataset
    }

    /**
     * Generates n concentric rings with a 0.15 distance between them
     * See "concentric rings" representation from the running page sample
     * @param count number of points / ring
     * @param rings number of rings to generate
     */
    public static concentricRings(count: number = 300, rings: number = 3): number[][] {
        const dataset = []
        for (let j = 1; j <= rings; j++) {
            for (let i = 1; i < count; i++) {
                const angle = Math.floor(Math.random() * 360)
                dataset.push([
                    0.5 + Random.random(0.2 * j, 0.2 * j + 0.05) * Math.sin((Math.PI / 180) * angle),
                    0.5 + Random.random(0.2 * j, 0.2 * j + 0.05) * Math.cos((Math.PI / 180) * angle)
                ])
            }
        }

        return dataset
    }

    /**
     * Generates equaly distant (0.01) points on the 2D domain
     * See "Concentric Rings" representation from the running page sample
     * @param count number of points / row and number of rows to generate
     */
    public static fillSpace(count = 50): number[][] {
        const dataset = []
        for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
                dataset.push([j / count, i / count])
            }
        }

        return dataset
    }

    /**
     * Generates a set of equally distant points on the 2D domain with a blob in the middle (blob radius 0.1)
     * See "Noisy With Blob" representation from the running page sample
     * @param blobPointsCount number of points to be generated for the blob
     */
    public static noisyWithBlob(blobPointsCount: number = 200): number[][] {
        const dataset = []
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                dataset.push([0.05 + j * 0.11, 0.05 + i * 0.11])
            }
        }

        for (let i = 0; i < blobPointsCount; i++) {
            dataset.push([
                0.5 + Math.random() * 0.1 * Math.sin(((Math.PI * 2) / 30) * i),
                0.5 + Math.random() * 0.1 * Math.cos(((Math.PI * 2) / 30) * i)
            ])
        }

        return dataset
    }

    /**
     * Generates a potato shaped like with another blob in the center of potato radius
     * See "Potato" representation from the running page sample
     */
    public static potato(): number[][] {
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
}
