import { CreateElement } from 'vue';
import MzSize from 'manzhai-ui/src/mixins/MzSize';
import BaseAttribute from 'manzhai-ui/src/mixins/BaseAttribute';
import MzListItem from './ListItem';
declare const MzList_base: import("vue-class-component/lib/declarations").VueClass<MzSize & BaseAttribute>;
export default class MzList extends MzList_base {
    readonly value: any;
    readonly disabled: boolean;
    readonly divider: boolean;
    readonly gutter: string;
    readonly clickable: boolean;
    readonly emptyText: string;
    readonly ripple: boolean | object;
    itemList: MzListItem[];
    get isEmpty(): boolean;
    get isClickable(): boolean;
    render(h: CreateElement): JSX.Element;
    renderEmpty(): import("vue").VNode[] | JSX.Element | undefined;
    setValue(value: any, item: any): void;
    handleItemClick(value: any, item: any, disabled: boolean): void;
}
export {};
