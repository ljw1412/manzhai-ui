import { DirectiveBinding } from 'vue/types/options';
export declare const ClickOutside: {
    inserted(el: HTMLElement, binding: DirectiveBinding): void;
    update(el: HTMLElement, binding: DirectiveBinding): void;
    unbind(el: HTMLElement): void;
};
export default ClickOutside;
