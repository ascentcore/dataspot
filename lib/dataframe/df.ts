export default class DataFrame {
    private columns: string[] | undefined

    private data: unknown[] = []

    private generator: Function | undefined

    public get length(): number {
        return this.data.length
    }

    public get cols(): string[] | undefined {
        return this.columns
    }

    public get(index: any): any {
        return this.data[index]
    }

    public append(data: unknown[]): void {
        this.data = this.data.concat(data)
    }

    public getData(): unknown[] {
        return this.data
    }

    public generate(count: number): void {
        if (!this.generator) {
            throw new Error('dataset was not instantiated from a generator')
        }
        const start = this.length
        for (let i = 0; i < count; i++) {
            this.data.push(this.generator(start + i))
        }
    }

    public static fromArray(data: unknown[]): DataFrame {
        if (data === undefined || !data.length) {
            throw new Error('unable to instantiate DataFrame from undefined data argument')
        }

        const df: DataFrame = new DataFrame()
        df.data = data

        return df
    }

    public static fromGenerator(generatorFn: Function, count: number): DataFrame {
        const df: DataFrame = new DataFrame()
        for (let i = 0; i < count; i++) {
            df.data.push(generatorFn(i))
        }

        return df
    }
}
