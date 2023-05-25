/**
 * Defines the intersection between a plane and a bounding volume.
 */
export declare enum PlaneIntersectionType {
    /** There is no intersection, the bounding volume is in the back of the plane. */
    Back = 0,
    /** There is no intersection, the bounding volume is in the front of the plane. */
    Front = 1,
    /** The plane is intersected. */
    Intersecting = 2
}
