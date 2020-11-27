export type TwoDPointLine = { x: number; y: number }

export type TwoDPointScatter = { id?: number; x: number; y: number; r?: number; color?: number }

export type FunctioDefinitionMesh = {
    zFunc: (x: number, y: number) => number
    xMin: number
    xMax: number
    yMin: number
    yMax: number
}

export type ThreeDPointScatter = { id?: number; x: number; y: number; z: number; r?: number }
