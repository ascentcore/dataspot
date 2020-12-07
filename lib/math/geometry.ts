/* eslint-disable no-param-reassign */
import { euclideanDistance } from './distances'

export type Point = {
    x: number
    y: number
}
export type Circle = Point & {
    r: number
}

export function circlesIntersection(c1: Circle, c2: Circle): number {
    const x0 = c1.x
    const y0 = c1.y
    const r0 = c1.r
    const x1 = c2.x
    const y1 = c2.y
    const r1 = c2.r

    const rr0 = r0 * r0
    const rr1 = r1 * r1
    const d = euclideanDistance([x1, y1], [x0, y0])

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

/*
 * checks if circle intersects with segment
 * @param circle - coordinates and radius for circle
 * @param p1 - coorinates for one end of the segment
 * @param p2 - coordinates fot the other end of the segment
 * returns incidence:
 *      < 0 means no intersection
 *      = 0 means tangent
 *      > 0 means intersection
 */
export function segmentCircleIncidence(circle: Circle, p1: Point, p2: Point): number {
    const dx = p2.x - p1.x
    const dy = p2.y - p1.y
    const dr = Math.sqrt(dx ** 2 + dy ** 2)
    const d = p1.x * p2.y - p2.x * p1.y
    return circle.r ** 2 * dr ** 2 - d ** 2
}

function shiftCoordinatesToPositive(
    circle: Circle,
    p1: Point,
    p2: Point
): { positiveCoordCircle: Circle; positiveCoordLeftBottom: Point; positiveCoordRightTop: Point } {
    const positiveCoordLeftBottom = { ...p1 }
    const positiveCoordRightTop = { ...p2 }
    const positiveCoordCircle = { ...circle }

    // check if any minimum ox point is negative
    const minimumX = p1.x - circle.r
    // shift all input coordinates on ox
    if (minimumX < 0) {
        positiveCoordLeftBottom.x -= minimumX
        positiveCoordRightTop.x -= minimumX
        positiveCoordCircle.x -= minimumX
    }
    // check if any minimum oy point is negative
    const minimumY = p1.y - circle.r
    // shift all input coordinates on oy
    if (minimumY < 0) {
        positiveCoordLeftBottom.y -= minimumY
        positiveCoordRightTop.y -= minimumY
        positiveCoordCircle.y -= minimumY
    }
    return { positiveCoordCircle, positiveCoordLeftBottom, positiveCoordRightTop }
}

/*
 * calculates the area of a cicle segment given the height of that segment
 * @param circleSegmentHeight - the height of the segment inside the circle
 * @param radius - the radiuns of the circle
 * returns the area of the circle segment
 */
function calculateSegmentArea(circleSegmentHeight: number, radius: number): number {
    const angleRadians = 2 * Math.acos((radius - circleSegmentHeight) / radius)
    const segmentArea = (1 / 2) * (angleRadians - Math.sin(angleRadians)) * radius ** 2
    return segmentArea
}

/*
 * calculates the area of the cicle segments which are outside the boundaries of the rectangle
 * @param circle - coordinates and radius for circle
 * @param leftBottom - coorinates for one left bottom corner of the rectangle
 * @param rightTop - coordinates for the right top corner of the rectangle
 * returns the area of the circle segments
 */
export function circleRectangleOutsideBoundaries(circle: Circle, leftBottom: Point, rightTop: Point): number {
    if (circle.x < leftBottom.x || circle.x > rightTop.x || circle.y < leftBottom.y || circle.y > rightTop.y) {
        throw new Error('Center of circle must be inside the rectangle')
    }
    if (circle.r > rightTop.x - leftBottom.x || circle.r > rightTop.y - leftBottom.y) {
        throw new Error('Circle must be smaller than rectangle')
    }
    const { positiveCoordCircle, positiveCoordLeftBottom, positiveCoordRightTop } = shiftCoordinatesToPositive(
        circle,
        leftBottom,
        rightTop
    )
    let area = 0
    // right side of rectangle
    let circleSegmentHeight = positiveCoordCircle.x + positiveCoordCircle.r - positiveCoordRightTop.x
    if (circleSegmentHeight > 0) {
        area += calculateSegmentArea(circleSegmentHeight, positiveCoordCircle.r)
    }
    // top side of rectangle
    circleSegmentHeight = positiveCoordCircle.y + positiveCoordCircle.r - positiveCoordRightTop.y
    if (circleSegmentHeight > 0) {
        area += calculateSegmentArea(circleSegmentHeight, positiveCoordCircle.r)
    }

    // left side of rectangle
    circleSegmentHeight = positiveCoordLeftBottom.x - (positiveCoordCircle.x - positiveCoordCircle.r)
    if (circleSegmentHeight > 0) {
        area += calculateSegmentArea(circleSegmentHeight, positiveCoordCircle.r)
    }

    // bottom side of rectangle
    circleSegmentHeight = positiveCoordLeftBottom.y - (positiveCoordCircle.y - positiveCoordCircle.r)
    if (circleSegmentHeight > 0) {
        area += calculateSegmentArea(circleSegmentHeight, positiveCoordCircle.r)
    }

    return area
}
