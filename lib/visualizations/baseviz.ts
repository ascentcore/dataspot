/**
 * Base visualization abstract class.
 * The same logic will be used isomorphically on node and web platforms
 *
 */
export default abstract class BaseVisualization {
    constructor(public config: any) {}

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
     * Isomorphic method used on every data update
     * @param data array of data values
     */
    abstract dataUpdate(
        data:
            | { x: number; y: number; r?: number; color?: number }[]
            | { x: number; y: number }[]
            | { zFunc: (x: number, y: number) => number; xMin: number; xMax: number; yMin: number; yMax: number }
    ): void

    public getDependency(key: string): any {
        return this.dependencies[key]
    }
}
