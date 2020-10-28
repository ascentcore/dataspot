/* eslint-disable @typescript-eslint/ban-types */
import Step from './types'
import { Pipeline, ParalelPipeline, WaterfallPipeline } from './pipeline'

class TestStep extends Step<any, any> {
    constructor(private exec: Function) {
        super()
    }

    async execute(data: any): Promise<any> {
        const input = await data
        return Promise.resolve(this.exec(input))
    }
}

describe('Pipeline Unit Tests', () => {
    it('should be able to create pipeline', async (done) => {
        const pipe: Pipeline = new Pipeline()
        let index = 0
        const pipeEl = new TestStep(() => index++)
        pipe.add(pipeEl)
        await pipe.execute()

        expect(index).toBe(1)
        done()
    })

    it('should be able to execute multiple steps', async (done) => {
        const pipe: Pipeline = new Pipeline()
        let index = 0
        const pipeEl = new TestStep((input: number) => {
            index++
            return input * 2
        })
        pipe.add(pipeEl)
        pipe.add(pipeEl)
        pipe.add(pipeEl)
        const result = await pipe.execute(Promise.resolve(1))

        expect(index).toBe(3)
        expect(result).toBe(8)
        done()
    })

    it('should be able to execute in sync', async (done) => {
        const pipe: Pipeline = new Pipeline()
        const seq: number[] = []
        const first = new TestStep(() => {
            return new Promise((res) =>
                setTimeout(() => {
                    seq.push(1)
                    res()
                }, 10)
            )
        })
        const second = new TestStep(() => {
            return new Promise((res) =>
                setTimeout(() => {
                    seq.push(2)
                    res()
                }, 5)
            )
        })
        pipe.add(first)
        pipe.add(second)

        await pipe.execute()

        expect(seq).toEqual([1, 2])
        done()
    })

    it('should be able to execute in parallel', async (done) => {
        const pipe: Pipeline = new ParalelPipeline()
        const seq: number[] = []
        const first = new TestStep(() => {
            return new Promise((res) =>
                setTimeout(() => {
                    seq.push(1)
                    res()
                }, 10)
            )
        })
        const second = new TestStep(() => {
            return new Promise((res) =>
                setTimeout(() => {
                    seq.push(2)
                    res()
                }, 5)
            )
        })
        pipe.add(first)
        pipe.add(second)

        await pipe.execute()

        expect(seq).toEqual([2, 1])
        done()
    })

    it('should be able to execute in waterfall', async (done) => {
        const pipe: Pipeline = new WaterfallPipeline()
        const seq: number[] = []
        const first = new TestStep(() => {
            return new Promise((res) =>
                setTimeout(() => {
                    seq.push(1)
                    res()
                }, 10)
            )
        })
        const second = new TestStep(() => {
            return new Promise((res) =>
                setTimeout(() => {
                    seq.push(2)
                    res()
                }, 5)
            )
        })
        pipe.add(first)
        pipe.add(second)

        await pipe.execute()

        expect(seq).toEqual([1, 2])
        done()
    })

    it('should be able to share state between pipeline and steps', async (done) => {
        const state = {}

        const pipe: Pipeline = new Pipeline()
        const pipeEl = new TestStep(() => {})
        pipe.add(pipeEl)
        pipe.setState(state)
        pipe.setStateKey('key', 'value')

        expect(pipeEl.getStateKey('key')).toBe('value')
        done()
    })

    it('should be able to share state between pipeline and inner pipeline', async (done) => {
        const state = {}

        const pipe: Pipeline = new Pipeline()
        const innerPipe: Pipeline = new Pipeline()
        const pipeEl = new TestStep(() => {})

        innerPipe.add(pipeEl)
        pipe.add(innerPipe)

        pipe.setState(state)
        pipe.setStateKey('key', 'value')

        expect(pipeEl.getStateKey('key')).toBe('value')
        done()
    })
})
