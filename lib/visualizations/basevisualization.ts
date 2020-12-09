/**
 * Base visualization abstract class.
 * The same logic will be used isomorphically on node and web platforms
 *
 */
export default abstract class BaseVisualization {
    constructor(public config: any, public elemClass: string) {}

    /**
     * List of 3rd party dependencies that are are platform dependent
     * E.g. D3 implementation, HTML Element refs
     */
    protected dependencies: any = {}

    /**
     * Isomorphic method executed once for setting up the visualization and dependencies
     * that are going to be used by the data update function
     */
    abstract setup(initialData?: any): void

    /**
     * Function used to get data update function
     * @param data - array of data values
     * @param elemClass - html class for identification
     */
    abstract getDataUpdateFn(elemClass?: string): (data: any, elemClass: string) => void

    /**
     * Isomorphic method used on every data update
     * @param data - array of data values
     */
    abstract dataUpdate(data: any, elemClass?: string): void

    public getDependency(key: string): any {
        return this.dependencies[key]
    }
}
