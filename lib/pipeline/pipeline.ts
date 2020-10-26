/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Step from './types'
import { ObjectLike } from '../models/objectLike'

/**
 * Synchronous pipeline implementation - the pipeline is used
 * to ensure the correct order execution and separation of responsabilities
 * for each step in the validation / reporting process.
 */
export class Pipeline extends Step<any, any> {
    constructor(protected steps: Step<any, any>[] = []) {
        super()
    }

    /**
     * Update current pipe internal state with passed object and assign to children
     * @param state state object
     */
    public setState(state: ObjectLike): void {
        super.setState(state)
        this.steps.forEach((item) => item.setState(state))
    }

    /**
     * Adds one step executor to the pipeline
     * @param step pipeline step
     */
    add(step: Step<any, any>): Pipeline {
        step.setState(this.state)
        if (step instanceof Pipeline) {
            step.steps.forEach((item) => item.setState(this.state))
        }
        this.steps.push(step)
        return this
    }

    /**
     * Executes one pipeline step
     * @param input input data from the root input or from the previous element in the pipe
     * @param step step to be executed
     */
    static async executeStep<T, K>(input: T, step: Step<T, K>): Promise<K> {
        return step.execute(input)
    }

    /**
     * Executes steps in a synchronous mode.
     * If steps can be paralelized consider using ParalelPipeline
     * @param data root data to be used as input
     */
    async execute<T, K>(data?: Promise<T>): Promise<any> {
        let lastData: Promise<any> = Promise.resolve(data)
        for (let i = 0; i < this.steps.length; i++) {
            try {
                lastData = await Pipeline.executeStep(lastData, this.steps[i])
            } catch (err) {
                if (err) {
                    console.log(err)
                }
                break
            }
        }
        return lastData
    }
}

/**
 * Paralel pipeline implementation. Used when the steps
 * can be executed at once thus reducing the execution time of the entire chain
 */
export class ParalelPipeline extends Pipeline {
    async execute<T, K>(inputData: Promise<T>): Promise<any> {
        const resolvedInputData: Promise<any> = Promise.resolve(inputData)
        const results: Promise<K>[] = this.steps.reduce((memo: Promise<K>[], step: Step<any, any>) => {
            memo.push(Pipeline.executeStep(resolvedInputData, step))
            return memo
        }, [])

        return Promise.all(results).then((outputData: any[]) => {
            return Promise.resolve(
                outputData.reduce((memo: any, stepOutputData: any) => {
                    return Object.assign(memo, stepOutputData)
                }, {})
            )
        })
    }
}

/**
 * Waterfall pipeline implementation. Used when the steps
 * has to be executed one after the other and the results collected in a single object
 */
export class WaterfallPipeline extends Pipeline {
    async execute<T, K>(inputData: Promise<T>): Promise<any> {
        const resolvedInputData: Promise<any> = Promise.resolve(inputData)
        const waterfall = this.steps.reduce((memo: Promise<{ [key: string]: any }>, step: Step<any, any>) => {
            return memo.then((outputData) => {
                return Pipeline.executeStep(resolvedInputData, step).then((stepOutputData) => {
                    Object.assign(outputData, stepOutputData)
                    return outputData
                })
            })
        }, Promise.resolve({}))

        return waterfall.then((outputData: { [key: string]: any }) => {
            return Promise.resolve(outputData)
        })
    }
}
