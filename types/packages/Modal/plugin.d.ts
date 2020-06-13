interface ModalConfig {
    title?: string;
    content?: any;
    elevation?: number;
    zIndex?: number;
    width?: string;
    top?: string;
    radius?: string;
    transition?: string;
    outerScroll?: boolean;
    divider?: boolean;
    appendToBody?: boolean;
    mask?: boolean;
    maskAppendToBody?: boolean;
    closeOnClickMask?: boolean;
    closeOnPressEscape?: boolean;
    beforeClose?: (done: any) => void | Promise<any>;
}
declare function modal(config?: ModalConfig): any;
export default modal;
