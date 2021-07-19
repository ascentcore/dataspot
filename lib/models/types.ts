import { Circle } from '../math/geometry'

export type TwoDPointLine = { x: number; y: number }
export type TwoDPointScatter = Circle & { id?: number; fixedRadius: number; stroke?: string; color?: number | string }
export type FunctioDefinitionMesh = {
    zFunc: (x: number, y: number) => number
    xMin: number
    xMax: number
    yMin: number
    yMax: number
    stroke?: boolean
}

export type ThreeDPointScatter = { id?: number; x: number; y: number; z: number; r?: number }
