import { CreateElement } from 'vue';
import MzPopView from 'manzhai-ui/src/mixins/PopView';
import BaseAttribute from 'manzhai-ui/src/mixins/BaseAttribute';
declare const MzDrawer_base: import("vue-class-component/lib/declarations").VueClass<BaseAttribute & MzPopView>;
export default class MzDrawer extends MzDrawer_base {
    readonly title: string;
    readonly placement: 'top' | 'right' | 'bottom' | 'left';
    readonly elevation: number;
    readonly zIndex: number;
    readonly width: string;
    readonly height: string;
    readonly radius: string;
    readonly divider: boolean;
    readonly showClose: boolean;
    readonly headerStyle: any;
    readonly contentStyle: any;
    readonly footerStyle: any;
    isDisplayWrapper: boolean;
    get isVertical(): boolean;
    render(h: CreateElement): JSX.Element;
    renderClose(): JSX.Element | undefined;
    renderHeader(): JSX.Element | undefined;
    renderContent(): JSX.Element;
    renderFooter(): JSX.Element | undefined;
    mounted(): void;
    onVisibleChange(visible: boolean): void;
}
export {};
