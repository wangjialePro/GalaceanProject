/**
 * @private
 */
export declare class GLRenderStates {
    private _gl;
    private _parameters;
    /**
     * @param {WebGLRenderingContext} gl
     */
    constructor(gl: WebGLRenderingContext);
    /**
     * Get a parameter.
     */
    getParameter(pname: any): any;
}
