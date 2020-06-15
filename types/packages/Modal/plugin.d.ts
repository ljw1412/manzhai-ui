interface ModalConfig {
    title?: string;
    content?: any;
    elevation?: number;
    zIndex?: number;
    width?: string;
    top?: string;
    radius?: string;
    transition?: string;
    showClose?: boolean;
    outerScroll?: boolean;
    divider?: boolean;
    appendToBody?: boolean;
    mask?: boolean;
    maskAppendToBody?: boolean;
    closeOnClickMask?: boolean;
    closeOnPressEscape?: boolean;
    beforeClose?: (done: any) => void | Promise<any>;
}
interface FooterButton {
    text?: string;
    color?: string;
    textColor?: string;
    callback?: Function;
}
interface ModalConfigWithButton extends ModalConfig {
    cancel?: string | FooterButton;
    confirm?: string | FooterButton;
}
interface PromptRuleItem {
    test: RegExp;
    message: string;
}
declare type PromptRule = ((value: string) => string) | PromptRuleItem | PromptRuleItem[];
interface PromptModalConfig extends ModalConfigWithButton {
    defaultValue?: string;
    rules?: PromptRule;
}
declare function modal(config?: ModalConfig): any;
declare namespace modal {
    var alert: (message: string, title: string, btn?: string | FooterButton | undefined) => Promise<unknown>;
    var confirm: (config?: ModalConfigWithButton) => Promise<unknown>;
    var prompt: (config?: PromptModalConfig) => Promise<unknown>;
}
export default modal;
