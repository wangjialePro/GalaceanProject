/**
 * Define update strategy when call bufferData/bufferSubData func.
 */
export declare enum SetDataOptions {
    /** Can overwrite part of used buffer data and ensure correct rendering */
    None = 0,
    /** Discard old buffer and create a new buffer, and won't affect the previous rendering */
    Discard = 1
}
