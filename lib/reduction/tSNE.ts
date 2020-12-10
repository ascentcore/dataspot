import EvolutionaryAlgorithm, { EvolutionaryConfig } from '../common/evolutionaryAlgorithm'
import { MathUtils, VectorUtils } from '../utils/math-utils'
import { sign } from '../functions/activations'

export class TSneConfig extends EvolutionaryConfig {
    public perplexity: number = 30

    public dim: number = 2

    public epsilon: number = 10
}

export default class TSne extends EvolutionaryAlgorithm<TSneConfig> {
    private n: number = 0

    private p: number[] = []

    private y: number[][] = []

    private gains: number[][] = []

    private ystep: number[][] = []

    constructor(config?: TSneConfig) {
        super(Object.assign(new TSneConfig(), config))
    }

    // returns 2d array of dimensions n*m filled with random numbers in gauss distribution
    // or with value val, if provided
    private getRandn2d(n: number, m: number, val?: number): number[][] {
        const gaussRandom = MathUtils.getGaussRandomGenerator()
        const x = []
        for (let i = 0; i < n; i++) {
            const xhere = []
            for (let j = 0; j < m; j++) {
                if (val !== undefined) {
                    xhere.push(val)
                } else {
                    xhere.push(gaussRandom(0.0, 1e-4))
                }
            }
            x.push(xhere)
        }
        return x
    }

    // returns a vector with distances between each two input vectors
    private getVectorDistances(v: number[][]): number[] {
        const n = v.length
        const dist = new Array(n * n).fill(0)
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                const d = VectorUtils.l2Distance(v[i], v[j])
                dist[i * n + j] = d
                dist[j * n + i] = d
            }
        }
        return dist
    }

    private d2p(distances: number[], perplexity: number, tol: number) {
        const nf = Math.sqrt(distances.length)
        const n = Math.floor(nf)
        if (n !== nf) {
            throw new Error('D should have square number of elements.')
        }
        const targetEntropy = Math.log(perplexity)
        const currentProbabilityMatrix = new Array(n * n).fill(0)

        const prow = new Array(n).fill(0)
        for (let i = 0; i < n; i++) {
            let betamin = -Infinity
            let betamax = Infinity
            let beta = 1
            let done = false
            const maxtries = 50

            // perform binary search to find a suitable precision beta
            // so that the entropy of the distribution is appropriate
            let num = 0
            while (!done) {
                // compute entropy and kernel row with beta precision
                let psum = 0.0
                for (let j = 0; j < n; j++) {
                    let pj = Math.exp(-distances[i * n + j] * beta)
                    if (i === j) {
                        pj = 0
                    } // we dont care about diagonals
                    prow[j] = pj
                    psum += pj
                }
                // normalize p and compute entropy
                let currentEntropy = 0.0
                for (let j = 0; j < n; j++) {
                    let pj
                    if (psum === 0) {
                        pj = 0
                    } else {
                        pj = prow[j] / psum
                    }
                    prow[j] = pj
                    if (pj > 1e-7) currentEntropy -= pj * Math.log(pj)
                }

                // adjust beta based on result
                if (currentEntropy > targetEntropy) {
                    // entropy was too high (distribution too diffuse)
                    // so we need to increase the precision for more peaky distribution
                    betamin = beta // move up the bounds
                    if (betamax === Infinity) {
                        beta *= 2
                    } else {
                        beta = (beta + betamax) / 2
                    }
                } else {
                    // converse case. make distrubtion less peaky
                    betamax = beta
                    if (betamin === -Infinity) {
                        beta /= 2
                    } else {
                        beta = (beta + betamin) / 2
                    }
                }

                // stopping conditions: too many tries or got a good precision
                num++
                if (Math.abs(currentEntropy - targetEntropy) < tol) {
                    done = true
                }
                if (num >= maxtries) {
                    done = true
                }
            }

            // console.log('data point ' + i + ' gets precision ' + beta + ' after ' + num + ' binary search steps.');
            // copy over the final prow to P at row i
            for (let j = 0; j < n; j++) {
                currentProbabilityMatrix[i * n + j] = prow[j]
            }
        } // end loop over examples i

        // symmetrize P and normalize it to sum to 1 over all ij
        const Pout = new Array(n * n).fill(0)
        const n2 = n * 2
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                Pout[i * n + j] = Math.max(
                    (currentProbabilityMatrix[i * n + j] + currentProbabilityMatrix[j * n + i]) / n2,
                    1e-100
                )
            }
        }

        return Pout
    }

    private initSolution() {
        // generate random solution to t-SNE
        this.y = this.getRandn2d(this.n, this.config.dim) // the solution
        this.gains = this.getRandn2d(this.n, this.config.dim, 1.0) // step gains to accelerate progress in unchanging directions
        this.ystep = this.getRandn2d(this.n, this.config.dim, 0.0) // momentum accumulator
        this.iteration = 0
    }

    // this function takes a set of high-dimensional points
    // and creates matrix P from them using gaussian kernel
    private initDataRaw(x: number[][]) {
        const n = x.length
        const m = x[0].length
        if (n === 0) {
            throw new Error(' x is empty? You must have some data!')
        }
        if (m === 0) {
            throw new Error(' x is empty? You must have some data!')
        }
        const dists = this.getVectorDistances(x) // convert x to distances using gaussian kernel
        this.p = this.d2p(dists, this.config.perplexity, 1e-4)
        this.n = n // back up the size of the dataset
        this.initSolution()
    }

    // this function takes a given distance matrix and creates
    // matrix P from them.
    // D is assumed to be provided as a list of lists, and should be symmetric
    public initDataDist(d: number[][]) {
        const n = d.length
        if (n === 0) {
            throw new Error(' X is empty? You must have some data!')
        }
        const dists = new Array(n * n).fill(0)
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                const dist = d[i][j]
                dists[i * n + j] = dist
                dists[j * n + i] = dist
            }
        }
        this.p = this.d2p(dists, this.config.perplexity, 1e-4)
        this.n = n
        this.initSolution()
    }

    private costGrad(y: number[][]) {
        const { dim } = this.config
        const { p, n } = this

        const pmul = this.iteration < 100 ? 4 : 1 // trick that helps with local optima

        // compute current Q distribution, unnormalized first
        const Qu = new Array(n * n).fill(0)
        let qsum = 0.0
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                let dsum = 0.0
                for (let d = 0; d < dim; d++) {
                    const dhere = y[i][d] - y[j][d]
                    dsum += dhere * dhere
                }
                const qu = 1.0 / (1.0 + dsum) // Student t-distribution
                Qu[i * n + j] = qu
                Qu[j * n + i] = qu
                qsum += 2 * qu
            }
        }
        // normalize Q distribution to sum to 1
        const nn = n * n
        const Q = new Array(nn).fill(0)
        for (let q = 0; q < nn; q++) {
            Q[q] = Math.max(Qu[q] / qsum, 1e-100)
        }

        let cost = 0.0
        const grad = []
        for (let i = 0; i < n; i++) {
            const gsum = new Array(dim) // init grad for point i
            for (let d = 0; d < dim; d++) {
                gsum[d] = 0.0
            }
            for (let j = 0; j < n; j++) {
                cost += -p[i * n + j] * Math.log(Q[i * n + j]) // accumulate cost (the non-constant portion at least...)
                const premult = 4 * (pmul * p[i * n + j] - Q[i * n + j]) * Qu[i * n + j]
                for (let d = 0; d < dim; d++) {
                    gsum[d] += premult * (y[i][d] - y[j][d])
                }
            }
            grad.push(gsum)
        }

        return { cost, grad }
    }

    public getSolution() {
        return this.y
    }

    public step() {
        this.iteration += 1
        const { n } = this

        const cg = this.costGrad(this.y) // evaluate gradient
        const { cost, grad } = cg

        // perform gradient step
        const ymean = new Array(this.config.dim).fill(0)
        for (let i = 0; i < n; i++) {
            for (let d = 0; d < this.config.dim; d++) {
                const gid = grad[i][d]
                const sid = this.ystep[i][d]
                const gainid = this.gains[i][d]

                // compute gain update
                let newgain = sign(gid) === sign(sid) ? gainid * 0.8 : gainid + 0.2
                if (newgain < 0.01) newgain = 0.01 // clamp
                this.gains[i][d] = newgain // store for next turn

                // compute momentum step direction
                const momval = this.iteration < 250 ? 0.5 : 0.8
                const newsid = momval * sid - this.config.epsilon * newgain * grad[i][d]
                this.ystep[i][d] = newsid // remember the step we took

                // step!
                this.y[i][d] += newsid

                ymean[d] += this.y[i][d] // accumulate mean so that we can center later
            }
        }

        // reproject Y to be zero mean
        for (let i = 0; i < n; i++) {
            for (let d = 0; d < this.config.dim; d++) {
                this.y[i][d] -= ymean[d] / n
            }
        }

        return cost
    }
}
