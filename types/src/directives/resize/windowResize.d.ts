import { VNodeDirective } from 'vue';
interface ResizeVNodeDirective extends VNodeDirective {
    value?: () => void;
    options?: boolean | AddEventListenerOptions;
}
export declare const WindowResize: {
    inserted(el: HTMLElement, binding: ResizeVNodeDirective): void;
    unbind(el: HTMLElement): void;
};
export default WindowResize;
