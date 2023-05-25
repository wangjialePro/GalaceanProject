export declare const Util: {
    isArray: (value: any) => boolean;
    isArrayLike(x: any): boolean;
    clone<T>(obj: T): T;
    downloadBlob(blob: Blob, fileName?: string): void;
};
export declare const isArrayLike: <T>(x: any) => x is ArrayLike<T>;
/**
 * Fastly remove an element from array.
 * @param array - Array
 * @param item - Element
 */
export declare function removeFromArray(array: any[], item: any): boolean;
export declare function ObjectValues(obj: any): any[];
