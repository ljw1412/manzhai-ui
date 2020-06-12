import { CreateElement } from 'vue';
import MzSize from 'manzhai-ui/src/mixins/MzSize';
import MzTsxVue from 'manzhai-ui/src/mixins/MzTsxVue';
import MzList from './List';
declare const MzListItem_base: import("vue-class-component/lib/declarations").VueClass<MzSize & MzTsxVue>;
export default class MzListItem extends MzListItem_base {
    readonly mzList: MzList;
    readonly value: any;
    readonly item: any;
    readonly title: string;
    readonly text: string;
    readonly disabled: boolean;
    readonly clickable: boolean;
    readonly round: boolean | 'left' | 'right' | 'mini';
    readonly ripple: boolean | object;
    get state(): {
        active: boolean;
        disabled: boolean;
        clickable: boolean;
        ripple: boolean | object;
    };
    get roundClass(): string | {
        'is-round': boolean | "left" | "right" | "mini";
    };
    render(h: CreateElement): JSX.Element;
    renderContent(): JSX.Element;
    created(): void;
    beforeDestroy(): void;
}
export {};
