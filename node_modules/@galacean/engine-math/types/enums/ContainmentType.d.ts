/**
 * Defines how the bounding volumes intersects or contain one another.
 */
export declare enum ContainmentType {
    /** Indicates that there is no overlap between two bounding volumes. */
    Disjoint = 0,
    /** Indicates that one bounding volume completely contains another volume. */
    Contains = 1,
    /** Indicates that bounding volumes partially overlap one another. */
    Intersects = 2
}
