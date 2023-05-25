import { Buffer } from "./Buffer";
/**
 * Vertex buffer binding.
 */
export declare class VertexBufferBinding {
    /**
     * Vertex buffer.
     */
    get buffer(): Buffer;
    /**
     * Vertex buffer stride.
     */
    get stride(): number;
    /**
     * Create vertex buffer.
     * @param buffer - Vertex buffer
     * @param stride - Vertex buffer stride
     */
    constructor(buffer: Buffer, stride: number);
}
