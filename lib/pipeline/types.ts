/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectLike } from '../models/objectLike'

/**
 * Pipeline step interface
 */
export default abstract class Step<T, K> {
    /**
     * Internal pipeline state reference
     */
    protected state: ObjectLike = {}

    /**
     * Set state reference
     * @param value pipeline state reference
     */
    public setState(value: ObjectLike): void {
        this.state = value
    }

    /**
     * Set state property
     * @param key state property key storage name
     * @param value value to store at key
     */
    public setStateKey(key: string, value: any): void {
        return (this.state[key] = value)
    }

    /**
     * Return value at key from storage
     * @param key storage key
     */
    public getStateKey(key: string): any {
        return this.state[key]
    }

    /**
     * Execute a step in the pipeline and return a promise to the next element in pipe
     * @param data data promise for the next step in pipe
     */
    abstract execute(data: T): Promise<K>
}
