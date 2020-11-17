export type TwoDPointLine = { x: number; y: number }
export type TwoDPointScatter = { x: number; y: number; r?: number; color?: number }
export type FunctioDefinitionMesh = {
    zFunc: (x: number, y: number) => number
    xMin: number
    xMax: number
    yMin: number
    yMax: number
}
