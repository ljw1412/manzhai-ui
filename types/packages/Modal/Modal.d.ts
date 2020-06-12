import { CreateElement } from 'vue';
import BaseAttribute from 'manzhai-ui/src/mixins/BaseAttribute';
import MzPopView from 'manzhai-ui/src/mixins/PopView';
declare const MzModal_base: import("vue-class-component/lib/declarations").VueClass<BaseAttribute & MzPopView>;
export default class MzModal extends MzModal_base {
    readonly title: string;
    readonly content: any;
    readonly elevation: number;
    readonly width: string;
    readonly top: string;
    readonly radius: string;
    readonly transition: string;
    readonly outerScroll: boolean;
    readonly divider: boolean;
    readonly fullscreen: boolean;
    isDisplayWrapper: boolean;
    isAnimated: boolean;
    animateTimer: number;
    get headless(): boolean;
    get classes(): (string | {
        'is-divider': boolean;
        'is-headless': boolean;
        'is-inner-scroll': boolean;
        'is-fullscreen': boolean;
        'is-animated': boolean;
    })[];
    render(h: CreateElement): JSX.Element;
    renderHeader(): JSX.Element | undefined;
    renderBody(): JSX.Element;
    renderFooter(): JSX.Element | undefined;
    handleMaskDisabledClick(): void;
    onVisibleChange(visible: boolean): void;
}
export {};
