export declare const Logger: {
    debug: (message?: any, ...optionalParams: any[]) => void;
    info: (message?: any, ...optionalParams: any[]) => void;
    warn: (message?: any, ...optionalParams: any[]) => void;
    error: (message?: any, ...optionalParams: any[]) => void;
    isEnabled: boolean;
    /** Turn on log */
    enable(): void;
    /** Turn off log */
    disable(): void;
};
