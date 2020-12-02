import { euclideanDistance } from './distances'

export type Point = {
    x: number
    y: number
}
export type Circle = Point & {
    r: number
}

export function circleIntersection(c1: Circle, c2: Circle): number {
    const x0 = c1.x
    const y0 = c1.y
    const r0 = c1.r
    const x1 = c2.x
    const y1 = c2.y
    const r1 = c2.r

    const rr0 = r0 * r0
    const rr1 = r1 * r1
    const d = Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0))

    // Circles do not overlap
    if (d > r1 + r0) {
        return 0
    }

    // Circle1 is completely inside circle0
    else if (d <= Math.abs(r0 - r1) && r0 >= r1) {
        // Return area of circle1
        return Math.PI * rr1
    }

    // Circle0 is completely inside circle1
    else if (d <= Math.abs(r0 - r1) && r0 < r1) {
        // Return area of circle0
        return Math.PI * rr0
    }

    // Circles partially overlap
    else {
        const phi = Math.acos((rr0 + d * d - rr1) / (2 * r0 * d)) * 2
        const theta = Math.acos((rr1 + d * d - rr0) / (2 * r1 * d)) * 2
        const area1 = 0.5 * theta * rr1 - 0.5 * rr1 * Math.sin(theta)
        const area2 = 0.5 * phi * rr0 - 0.5 * rr0 * Math.sin(phi)

        // Return area of intersection
        return area1 + area2
    }
}

export function circleArea(circle: Circle): number {
    return Math.PI * circle.r * circle.r
}
