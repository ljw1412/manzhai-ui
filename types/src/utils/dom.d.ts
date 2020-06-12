declare type DomEventListener = (element: HTMLElement | Window, event: string, handler: (e: any) => any) => void;
export declare const on: DomEventListener;
export declare const off: DomEventListener;
export declare const once: (el: HTMLElement | Window, event: string, fn: (e: any) => any) => void;
export declare function scrollIntoView(target: HTMLElement | string, byJs?: boolean): void;
export declare function safeElementPosition(el: HTMLElement): void;
export {};
