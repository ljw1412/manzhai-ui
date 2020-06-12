export declare const options: {
    defaultStore: string;
};
export declare function getStore(storeName?: string): Record<string, any>;
export declare function clearStore(storeName?: string): void;
export declare function getState(name: string, storeName?: string): any;
export declare function setState(name: string, value?: boolean, storeName?: string): void;
