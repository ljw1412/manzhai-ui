import Mask from './Mask';
export declare type MaskConfig = {
    color?: string;
    zIndex?: number;
    transition?: string;
    onClick?: (e: MouseEvent) => void;
};
declare function show(config?: MaskConfig): void;
declare function hide(): void;
export declare function addMask(item: Mask): void;
export declare function removeMask(item: Mask): void;
declare const _default: {
    show: typeof show;
    hide: typeof hide;
};
export default _default;
