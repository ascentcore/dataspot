import { Circle } from '../math/geometry'

export type TwoDPointLine = { x: number; y: number }
export type TwoDPointScatter = Circle & { id?: number; color?: number | string }
export type FunctioDefinitionMesh = {
    zFunc: (x: number, y: number) => number
    xMin: number
    xMax: number
    yMin: number
    yMax: number
}

export type ThreeDPointScatter = { id?: number; x: number; y: number; z: number; r?: number }
