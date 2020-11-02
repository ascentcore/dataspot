export function identity(x: number): number {
    return x
}

export function binary(x: number): number {
    return x > 0 ? 1 : 0
}

export function relu(x: number): number {
    return Math.max(0, x)
}

export function tanh(x: number): number {
    return (Math.E ** x - Math.E ** -x) / (Math.E ** x + Math.E ** -x)
}

export function sigmoid(x: number): number {
    return 1 / (1 + Math.E ** -x)
}
