import { VNodeDirective, VNode } from 'vue';
export declare const Tooltip: {
    bind: (el: HTMLElement, binding: VNodeDirective, node: VNode) => void;
    update: (el: HTMLElement, binding: VNodeDirective) => void;
    unbind: (el: HTMLElement) => void;
};
export default Tooltip;
