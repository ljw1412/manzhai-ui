import { DirectiveBinding } from 'vue/types/options';
import { VNode } from 'vue';
export declare const Blanking: {
    bind(el: HTMLElement, binding: DirectiveBinding, vnode: VNode): void;
    inserted(el: HTMLElement, binding: DirectiveBinding): void;
    update(el: HTMLElement, binding: DirectiveBinding, vnode: VNode): void;
    unbind(el: HTMLElement): void;
};
export default Blanking;
